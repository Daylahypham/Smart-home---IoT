import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set,get } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB1eFoWhG7_fRxHMJ-Avjo_bhkwvb27D4Y",
    authDomain: "smarthome-f802f.firebaseapp.com",
    projectId: "smarthome-f802f",
    storageBucket: "smarthome-f802f.appspot.com",
    messagingSenderId: "290247897607",
    appId: "1:290247897607:web:e1a22bf3765eb825daf0a2",
    measurementId: "G-383MXL4K1R"
};

let menuToggle = document.querySelector('.menuToggle');
let sidebar = document.querySelector('.sidebar');
menuToggle.onclick = function() {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}

let Menulist = document.querySelectorAll('.Menulist li');

function activeLink() {
    Menulist.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active')
}
Menulist.forEach((item) =>
    item.addEventListener('click', activeLink));

document.addEventListener('DOMContentLoaded', function() {
    let home = document.querySelector('.Menulist li:nth-child(1)');
    let light = document.querySelector('.Menulist li:nth-child(2)');
    let devices = document.querySelector('.Menulist li:nth-child(3)');
    let analytics = document.querySelector('.Menulist li:nth-child(4)');
    let homeWork = document.querySelector('.work .home');
    let lightWork = document.querySelector('.work .light');
    let devicesWork = document.querySelector('.work .devices');
    let analyticsWork = document.querySelector('.work .analytics');

    function activateHome() {
        home.classList.add('active');
        light.classList.remove('active');
        devices.classList.remove('active');
        analytics.classList.remove('active');
        homeWork.style.display = 'block';
        lightWork.style.display = 'none';
        devicesWork.style.display = 'none';
        analyticsWork.style.display = 'none';
    }

    function activateLight() {
        home.classList.remove('active');
        light.classList.add('active');
        devices.classList.remove('active');
        analytics.classList.remove('active');
        homeWork.style.display = 'none';
        lightWork.style.display = 'block';
        devicesWork.style.display = 'none';
        analyticsWork.style.display = 'none';
    }

    function activateDevices() {
        home.classList.remove('active');
        light.classList.remove('active');
        devices.classList.add('active');
        analytics.classList.remove('active');
        homeWork.style.display = 'none';
        lightWork.style.display = 'none';
        devicesWork.style.display = 'block';
        analyticsWork.style.display = 'none';
    }

    function activateAnalytics() {
        home.classList.remove('active');
        light.classList.remove('active');
        devices.classList.remove('active');
        analytics.classList.add('active');
        homeWork.style.display = 'none';
        lightWork.style.display = 'none';
        devicesWork.style.display = 'none';
        analyticsWork.style.display = 'block';
    }

    home.addEventListener('click', activateHome);
    light.addEventListener('click', activateLight);
    devices.addEventListener('click', activateDevices);
    analytics.addEventListener('click', activateAnalytics);
});

document.addEventListener('DOMContentLoaded', function() {
    let menuToggle = document.querySelector('.menuToggle');
    let home = document.querySelector('.home');
    let light = document.querySelector('.light');
    let devices = document.querySelector('.devices')
    let analytics = document.querySelector('.analytics')
    let datetime = document.querySelector('.datetime')

    menuToggle.addEventListener('click', function() {
        let isActive = menuToggle.classList.contains('active');
        if (isActive) {
            home.style.left = '300px';
            light.style.left = '300px';
            devices.style.left = '300px';
            analytics.style.left = '300px';
            datetime.style.left = '300px';
        } else {
            home.style.left = '80px';
            light.style.left = '80px';
            devices.style.left = '80px';
            analytics.style.left = '80px';
            datetime.style.left = '80px';
        }
    });
});

function updateClock(element) {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

    // Xác định chuỗi "AM" hoặc "PM" và chuyển đổi giờ sang định dạng 12 giờ
    if (hou >= 12) {
        pe = "PM";
    }
    if (hou == 0) {
        hou = 12;
    } else if (hou > 12) {
        hou = hou - 12;
    }

    // Chuyển đổi số phút và giây thành chuỗi có 2 chữ số bằng cách thêm số 0 vào trước nếu cần
    hou = hou < 10 ? "0" + hou : hou;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // Dấu : giữa giờ và phút, cũng như giữa phút và giây
    var timeString = hou + " : " + min + " : " + sec;

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dateString = week[dname] + ", " + months[mo] + " " + dnum + " " + yr;
    var values = [timeString, pe, dateString];

    // Cập nhật nội dung của các phần tử
    var datetimeElements = element.querySelectorAll('.datetime');
    datetimeElements.forEach(function(datetimeElement) {
        var timeElements = datetimeElement.querySelectorAll('.time span');
        var dateElements = datetimeElement.querySelectorAll('.date span');
        for (var i = 0; i < timeElements.length; i++) {
            timeElements[i].textContent = values[i];
        }
        for (var i = 0; i < dateElements.length; i++) {
            dateElements[i].textContent = values[i + 3];
        }
    });
}

function initClock() {
    updateClock(document.body);
    setInterval(function() {
        updateClock(document.body);
    }, 1000); // Gọi hàm updateClock() mỗi giây
}

document.addEventListener("DOMContentLoaded", function() {
    initClock();

    var datetimeElement = document.querySelector('.datetime');

    // Thêm datetime vào phần tử light
    var lightElement = document.querySelector('.light');
    var lightDatetime = datetimeElement.cloneNode(true);
    lightElement.insertBefore(lightDatetime, lightElement.firstChild);

    // Thêm datetime vào phần tử devices
    var devicesElement = document.querySelector('.devices');
    var devicesDatetime = datetimeElement.cloneNode(true);
    devicesElement.insertBefore(devicesDatetime, devicesElement.firstChild);

    // Thêm datetime vào phần tử analytics
    var analyticsElement = document.querySelector('.analytics');
    var analyticsDatetime = datetimeElement.cloneNode(true);
    analyticsElement.insertBefore(analyticsDatetime, analyticsElement.firstChild);
});

// LIVINGROOM
document.addEventListener('DOMContentLoaded', function() {
    // Lấy sự kiện khi giá trị của thanh trượt thay đổi
    document.getElementById('slide').addEventListener('input', function() {
        // Lấy giá trị của thanh trượt
        var brightnessValue = this.value / 100;
        var blub = document.querySelector('.blub');
        var wallLightShadow = document.querySelector('.wall-light-shadow');
        blub.style.opacity = brightnessValue;
        wallLightShadow.style.opacity = brightnessValue;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('slide').addEventListener('input', function() {
        var brightnessValue = this.value;

        // Thay đổi nội dung của phần tử hiển thị số phần trăm độ sáng
        document.getElementById('brightnessDisplay').textContent = brightnessValue + "%";
    });
});

const app = initializeApp(firebaseConfig); // initializeApp khởi tạo một ứng dụng Firebase

const db = getDatabase(app); //getDatabase lấy đối tượng cơ sở dũ liệu từ app
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('slide').addEventListener('input', function() {
        var brightnessValue = this.value;

        // Cập nhật dữ liệu độ sáng vào Firebase Realtime Database
        set(ref(db, 'Light/Livingroom/Brightness'), brightnessValue)
            .then(() => {
                console.log("Dữ liệu độ sáng đã được cập nhật thành công.");
            })
            .catch((error) => {
                console.error("Lỗi khi cập nhật dữ liệu độ sáng:", error);
            });
    });
});

//KITCHEN
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('slide-kitchen').addEventListener('input', function() {
        var brightnessValueKitchen = this.value / 100;
        var blubKitchen = document.querySelector('.blub-kitchen');
        var wallLightShadowKitchen = document.querySelector('.wall-light-shadow-kitchen');
        blubKitchen.style.opacity = brightnessValueKitchen;
        wallLightShadowKitchen.style.opacity = brightnessValueKitchen;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('slide-kitchen').addEventListener('input', function() {
        var brightnessValueKitchen = this.value;
        var brightnessDisplayKitchen = document.getElementById('brightnessDisplay-kitchen');
        brightnessDisplayKitchen.textContent = brightnessValueKitchen + "%";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('slide-kitchen').addEventListener('input', function() {
        var brightnessValueKitchen = this.value;
        set(ref(db, 'Light/Kitchen/Brightness'), brightnessValueKitchen)
            .then(() => {
                console.log("Dữ liệu độ sáng đã được cập nhật thành công.");
            })
            .catch((error) => {
                console.error("Lỗi khi cập nhật dữ liệu độ sáng:", error);
            });
    });
});

//BEDROOM-THEBED
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('check-bed').addEventListener('change', function() {
        var isChecked = this.checked;
        var valueToSet = isChecked ? "ON" : "OFF"; // Xác định giá trị dựa trên trạng thái của checkbox
        set(ref(db, 'Light/Bedroom/Bed'), valueToSet)
            .then(() => {
                console.log("Dữ liệu tắt/bật đã được cập nhật thành công cho phòng ngủ.");
            })
            .catch((error) => {
                console.error("Lỗi khi cập nhật dữ liệu tắt/bật cho phòng ngủ:", error);
            });
    });
});

//BEDROOM-THEOFFICE
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('check-office').addEventListener('change', function() {
        var isChecked = this.checked;
        var valueToSet = isChecked ? "ON" : "OFF"; // Xác định giá trị dựa trên trạng thái của checkbox
        set(ref(db, 'Light/Bedroom/Office'), valueToSet)
            .then(() => {
                console.log("Dữ liệu tắt/bật đã được cập nhật thành công cho phòng ngủ.");
            })
            .catch((error) => {
                console.error("Lỗi khi cập nhật dữ liệu tắt/bật cho phòng ngủ:", error);
            });
    });
});


// var ctx = document.getElementById("myChart").getContext("2d");
// var myChart = new Chart(ctx, {
//     type: "line",
//     data: {
//         labels: [
//             "Sunday",
//             "Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday",
//             "Saturday",
//         ],
//         datasets: [{

//                 data: [70, 90, 44, 60, 83, 90, 100],
//                 label: "NHIỆT ĐỘ",
//                 borderColor: "#FF4500",
//                 backgroundColor: "#FF4500",
//             },


//         ],
//     },
//     options: {
//         layout: {
//             padding: 80
//         }
//     }

// });


// var ctx = document.getElementById("lineChart").getContext("2d");
// var lineChart = new Chart(ctx, {
//     type: "line",
//     data: {
//         labels: [
//             "Sunday",
//             "Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday",
//             "Saturday",
//         ],
//         datasets: [{

//                 data: [70, 90, 44, 60, 83, 90, 100],
//                 label: "Độ ẨM",
//                 borderColor: "#FF4500",
//                 backgroundColor: "#FF4500",
//             },


//         ],
//     },
//     options: {
//         layout: {
//             padding: 80
//         }
//     }

// });

// #####dự báo thời tiết#####//

var temp = document.getElementById('temp');
var cityName = document.getElementById('city')
var humidity = document.getElementById('humidity')
var windspeed = document.getElementById('windspeed')
var searchinput = document.getElementById('searchinput');
var serchbox = document.getElementById('serchbox')
var body_img = document.getElementById('body_img');

var body_data = document.getElementById('body_data')
var deatil = document.getElementById('deatil')
var error = document.getElementById('error')
var getDefault = "thu duc";


checkWeather(getDefault);


async function checkWeather(city) {
    let Upi_key = 'f27b269d54e4fa1e72993364a80fa8bd'
    let repsponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Upi_key}&units=metric`);
    let data = await repsponse.json();



    temp.innerHTML = Math.floor(data.main.temp) + '°C';
    cityName.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    windspeed.innerHTML = data.wind.speed + 'km/h';
    console.log(data)





    if (data.weather[0].main == "Clouds") {
        body_img.src = 'clouds.png'
    } else if (data.weather[0].main == 'Clear') {
        body_img.src = 'clear.png'
    } else if (data.weather[0].main == 'Rain') {
        body_img.src = 'rain.png'
    } else if (data.weather[0].main == 'Drizzle') {
        body_img.src = 'darzizzl.png'
    } else if (data.weather[0].main == 'Snow') {
        body_img.src = 'snow.png'
    } else if (data.weather[0].main == 'Storm') {
        body_img.src = 'storm.png'
    }
    body_data.style.display = 'flex';
    deatil.style.display = 'flex';


}


serchbox.addEventListener('click', () => {
    let cityIn = searchinput.value;

    checkWeather(cityIn);



})