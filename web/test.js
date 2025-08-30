const firebaseConfig = {
    apiKey: "AIzaSyB1eFoWhG7_fRxHMJ-Avjo_bhkwvb27D4Y",
    authDomain: "smarthome-f802f.firebaseapp.com",
    projectId: "smarthome-f802f",
    storageBucket: "smarthome-f802f.appspot.com",
    messagingSenderId: "290247897607",
    appId: "1:290247897607:web:e1a22bf3765eb825daf0a2",
    measurementId: "G-383MXL4K1R"
};

firebase.initializeApp(firebaseConfig);
var app = firebase.database()
app.ref("/data/autoTemp").on("value",function (val){
    const arr = val.val();
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
        datasets: [{
  
                data: arr,
                label: "NHIỆT ĐỘ",
                borderColor: "#FF0000",
                backgroundColor: "#FF0000",
            },
  
  
        ],
    },
    options: {
        layout: {
            padding: 80
        }
    }
  
  });
    
})
var app = firebase.database()
app.ref("/data").get().then((snapshot) => {
    if (snapshot.exists()) {


      var arrTemp = snapshot.val();
      var arrTempp =arrTemp['autoTemp'];
      arrTempp = arrTempp.slice(0, 8);
      app.ref("/data/temp").on("value", function (snapshot) {
        var nd = snapshot.val();
    
        let template = arrTempp;
        template.push(nd);
        snapshot.forEach((child)=>{
            template.push(child.val());
        })
        app.ref("/data").update(
        {
            autoTemp:template
        }
        );
    
      });
    } else console.log("No data available!");
  });


// độ ẩm
var app = firebase.database()
app.ref("/data/autohiud").on("value",function (val){
    const arr = val.val();
    var ctx = document.getElementById("lineChart").getContext("2d");
    var lineChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
        datasets: [{
  
                data: arr,
                label: "ĐỘ ẨM",
                borderColor: "#800200",
                backgroundColor: "#800200",
            },
  
  
        ],
    },
    options: {
        layout: {
            padding: 80
        }
    }
  
  });
    
})
var app = firebase.database()
app.ref("/data").get().then((snapshot) => {
    if (snapshot.exists()) {


      var arrhiud = snapshot.val();
      var arrhiudd =arrhiud['autohiud'];
      arrhiudd = arrhiudd.slice(0, 8);
      app.ref("/data/hiumidity").on("value", function (snapshot) {
        var nd = snapshot.val();
    
        let template = arrhiudd;
        template.push(nd);
        snapshot.forEach((child)=>{
            template.push(child.val());
        })
        app.ref("/data").update(
        {
            autohiud:template
        }
        );
    
      });
    } else console.log("No data available!");
  });


