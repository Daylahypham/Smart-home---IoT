firebase.initializeApp(firebaseConfig);
var database = firebase.database();

database.ref("/auto/autohiud").on("value", function(snapshot) {
  const arr = snapshot.val();
  console.log(arr);
  arr.shift(); // Bạn có chắc rằng bạn muốn loại bỏ phần tử đầu tiên ở đây?
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
        borderColor: "#FF4500",
        backgroundColor: "#FF4500",
      }],
    },
    options: {
      layout: {
        padding: 80
      }
    }
  });
});
var array = ["item1", "item2", "item3"];
app.ref("/auto").update({ autohiud:array})

database.ref("/auto").get().then((snapshot) => {
  if (snapshot.exists()) {
    var auto = snapshot.val();
    var autohiud = auto['autohiud'];

    database.ref("/data/do am").on("value", function(snapshot) {
      var nd = snapshot.val();
      var template = autohiud ? autohiud : []; 
      template.push(nd);
      console.log(template);
      
      database.ref("/auto").update({
        autohiud: template
      });

      let count = 0;
      autohiud.forEach((val) => {
        count++;
      });

      if (count > 11) {
        autohiud.shift();
        database.ref("/auto").update({
          autohiud: autohiud
        });
        console.log(autohiud);
      }
    });
  } else {
    console.log("No data available!");
  }
});

