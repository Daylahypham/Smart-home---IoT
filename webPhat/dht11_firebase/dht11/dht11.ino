#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

const char* ssid = "Phong T1 2.4GHZ";
const char* password = "03030303";
const char* FIREBASE_HOST ="smarthome-f802f-default-rtdb.firebaseio.com";
const char* FIREBASE_AUTH="SlZufiwlp9TJsbB0eN1H7GCsolr1";
const char* databaseURL="https://smarthome-f802f-default-rtdb.firebaseio.com/data.json";

#define DHT_PIN  32

DHT dht(DHT_PIN, DHT11);


void setup(){
  // mở cổng giao tiếp serial để mở thông báo bên màn hình
  Serial.begin(9600);
  // kết nối wifi
  WiFi.begin(ssid, password);

  // kiểm tra wifi
  while(WiFi.status() != WL_CONNECTED){

    Serial.println("Connecting to wifi.........");
  }

  Serial.println("Connected to wifi");
  // bat dau cho cam bien doc
  dht.begin();


}

void loop(){
  
  
  int but = digitalRead(25);

  // bien doc du lieu
  float hiumidity = dht.readHumidity();
  float temp = dht.readTemperature();
  // kiem tra du lieu xem co doc thanh cong kh( nan = error)
  // thanh cong dong goi sang goi chuoi JSON

    Serial.printf("do am: %.2f%% , nhiet do: %.2fC\n", hiumidity, temp);


  // send data to firebase = protocol HTTP
  String data= String("{\"temp\":") + String(hiumidity) + String(",\"hiumidity\":") + String(temp) + String("}");
  HTTPClient http;
  http.begin(databaseURL);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("Authorization", FIREBASE_AUTH);

  int httpResponseCode = http.PUT(data);

  if(httpResponseCode > 0){
    Serial.print("Data sent successfully, respon code: ");
    Serial.println(httpResponseCode);
  }
  else{
    Serial.print("error sending data, response code: ");
    Serial.println(httpResponseCode);
  }

  http.end();
  delay(30);
  if(httpResponseCode == 200){
   String response = http.getString();
  float tempFirebase = response.toFloat(); 
  }
  delay(30);

}