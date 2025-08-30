import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
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
    let profile = document.querySelector('.Menulist li:nth-child(5)');
    let homeWork = document.querySelector('.work .home');
    let lightWork = document.querySelector('.work .light');
    let devicesWork = document.querySelector('.work .devices');
    let analyticsWork = document.querySelector('.work .analytics');
    let profileWork = document.querySelector('.work .profile');

    function activateHome() {
        home.classList.add('active');
        light.classList.remove('active');
        devices.classList.remove('active');
        analytics.classList.remove('active');
        profile.classList.remove('active');
        homeWork.style.display = 'block';
        lightWork.style.display = 'none';
        devicesWork.style.display = 'none';
        analyticsWork.style.display = 'none';
        profileWork.style.display = 'none';
    }

    function activateLight() {
        home.classList.remove('active');
        light.classList.add('active');
        devices.classList.remove('active');
        analytics.classList.remove('active');
        profile.classList.remove('active');
        homeWork.style.display = 'none';
        lightWork.style.display = 'block';
        devicesWork.style.display = 'none';
        analyticsWork.style.display = 'none';
        profileWork.style.display = 'none';
    }

    function activateDevices() {
        home.classList.remove('active');
        light.classList.remove('active');
        devices.classList.add('active');
        analytics.classList.remove('active');
        profile.classList.remove('active');
        homeWork.style.display = 'none';
        lightWork.style.display = 'none';
        devicesWork.style.display = 'block';
        analyticsWork.style.display = 'none';
        profileWork.style.display = 'none';
    }

    function activateAnalytics() {
        home.classList.remove('active');
        light.classList.remove('active');
        devices.classList.remove('active');
        analytics.classList.add('active');
        profile.classList.remove('active');
        homeWork.style.display = 'none';
        lightWork.style.display = 'none';
        devicesWork.style.display = 'none';
        analyticsWork.style.display = 'block';
        profileWork.style.display = 'none';
    }

    function activateProfile() {
        home.classList.remove('active');
        light.classList.remove('active');
        devices.classList.remove('active');
        analytics.classList.remove('active');
        profile.classList.add('active');
        homeWork.style.display = 'none';
        lightWork.style.display = 'none';
        devicesWork.style.display = 'none';
        analyticsWork.style.display = 'none';
        profileWork.style.display = 'block';
    }

    home.addEventListener('click', activateHome);
    light.addEventListener('click', activateLight);
    devices.addEventListener('click', activateDevices);
    analytics.addEventListener('click', activateAnalytics);
    profile.addEventListener('click', activateProfile);
});

document.addEventListener('DOMContentLoaded', function() {
    let menuToggle = document.querySelector('.menuToggle');
    let home = document.querySelector('.home');
    let light = document.querySelector('.light');
    let devices = document.querySelector('.devices')
    let analytics = document.querySelector('.analytics')
    let profile = document.querySelector('.profile')
    let datetime = document.querySelector('.datetime')

    menuToggle.addEventListener('click', function() {
        let isActive = menuToggle.classList.contains('active');
        if (isActive) {
            home.style.left = '300px';
            light.style.left = '300px';
            devices.style.left = '300px';
            analytics.style.left = '300px';
            profile.style.left = '300px';
            datetime.style.left = '300px';
        } else {
            home.style.left = '80px';
            light.style.left = '80px';
            devices.style.left = '80px';
            analytics.style.left = '80px';
            profile.style.left = '80px';
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

    if (hou >= 12) {
        pe = "PM";
    }
    if (hou == 0) {
        hou = 12;
    } else if (hou > 12) {
        hou = hou - 12;
    }

    hou = hou < 10 ? "0" + hou : hou;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    var timeString = hou + " : " + min + " : " + sec;

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dateString = week[dname] + ", " + months[mo] + " " + dnum + " " + yr;
    var values = [timeString, pe, dateString];

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

    // Thêm datetime vào phần tử profile
    var profileElement = document.querySelector('.profile');
    var profileDatetime = datetimeElement.cloneNode(true);
    profileElement.insertBefore(profileDatetime, profileElement.firstChild);
});

// LIVINGROOM
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('slide').addEventListener('input', function() {
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

        document.getElementById('brightnessDisplay').textContent = brightnessValue + "%";
    });
});

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('slide').addEventListener('input', function() {
        var brightnessValue = this.value;
        set(ref(db, 'Light/Livingroom/Brightness'), brightnessValue)
        if (brightnessValue > 0) {
            firebase.database().ref('devices/mainlight/active').set(true);
        } else {
            firebase.database().ref('devices/mainlight/active').set(false);
        }
    });
});

const brightnessRefLivingroom = firebase.database().ref('Light/Livingroom/Brightness');
brightnessRefLivingroom.on('value', (snapshot) => {
    const brightnessValue = snapshot.val();

    var blub = document.querySelector('.blub');
    var wallLightShadow = document.querySelector('.wall-light-shadow');
    blub.style.opacity = brightnessValue / 100;
    wallLightShadow.style.opacity = brightnessValue / 100;

    document.getElementById('brightnessDisplay').textContent = brightnessValue + "%";
    document.getElementById('slide').value = brightnessValue;
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
        if (brightnessValueKitchen > 0) {
            firebase.database().ref('devices/dining-lamp/active').set(true);
        } else {
            firebase.database().ref('devices/dining-lamp/active').set(false);
        }
    });
});


const brightnessRefKitchen = firebase.database().ref('Light/Kitchen/Brightness');
brightnessRefKitchen.on('value', (snapshot) => {
    const brightnessValueKitchen = snapshot.val();

    var blubKitchen = document.querySelector('.blub-kitchen');
    var wallLightShadowKitchen = document.querySelector('.wall-light-shadow-kitchen');
    blubKitchen.style.opacity = brightnessValueKitchen / 100;
    wallLightShadowKitchen.style.opacity = brightnessValueKitchen / 100;

    document.getElementById('brightnessDisplay-kitchen').textContent = brightnessValueKitchen + "%";
    document.getElementById('slide-kitchen').value = brightnessValueKitchen;
});

//BATHROOM
document.addEventListener('DOMContentLoaded', function() {
    var bathroomCheckbox = document.getElementById('check-bep');

    bathroomCheckbox.addEventListener('change', function() {
        var isChecked = this.checked;
        var valueToSet = isChecked ? "ON" : "OFF";
        firebase.database().ref('Light/Bathroom').set(valueToSet)
    });

    // Listen for changes in Firebase
    firebase.database().ref('Light/Bathroom').on('value', (snapshot) => {
        var value = snapshot.val();
        bathroomCheckbox.checked = (value === "ON");
        if (value === "ON") {
            firebase.database().ref('devices/bathroom-lamp/active').set(true);
        } else {
            firebase.database().ref('devices/bathroom-lamp/active').set(false);
        }
    });
    // Listen for changes in Firebase for 'devices/desk-lamp/active'
    firebase.database().ref('devices/bathroom-lamp/active').on('value', (snapshot) => {
        var isActive = snapshot.val();
        if (!isActive) {
            firebase.database().ref('Light/Bathroom').set("OFF");
        } else {
            firebase.database().ref('Light/Bathroom').set("ON");
        }
    });
});

//BEDROOM-THEBED
document.addEventListener('DOMContentLoaded', function() {
    var bedCheckbox = document.getElementById('check-bed');

    bedCheckbox.addEventListener('change', function() {
        var isChecked = this.checked;
        var valueToSet = isChecked ? "ON" : "OFF";
        set(ref(db, 'Light/Bedroom/Bed'), valueToSet)
    });

    // Listen for changes in Firebase
    firebase.database().ref('Light/Bedroom/Bed').on('value', (snapshot) => {
        var value = snapshot.val();
        bedCheckbox.checked = (value === "ON");
        if (value === "ON") {
            firebase.database().ref('devices/desk-lamp/active').set(true);
        } else {
            firebase.database().ref('devices/desk-lamp/active').set(false);
        }
    });
    // Listen for changes in Firebase for 'devices/desk-lamp/active'
    firebase.database().ref('devices/desk-lamp/active').on('value', (snapshot) => {
        var isActive = snapshot.val();
        if (!isActive) {
            firebase.database().ref('Light/Bedroom/Bed').set("OFF");
        } else {
            firebase.database().ref('Light/Bedroom/Bed').set("ON");
        }
    });
});

//BEDROOM-THEOFFICE
document.addEventListener('DOMContentLoaded', function() {
    var officeCheckbox = document.getElementById('check-office');

    officeCheckbox.addEventListener('change', function() {
        var isChecked = this.checked;
        var valueToSet = isChecked ? "ON" : "OFF";
        firebase.database().ref('Light/Bedroom/Office').set(valueToSet)
    });

    // Listen for changes in Firebase
    firebase.database().ref('Light/Bedroom/Office').on('value', (snapshot) => {
        var value = snapshot.val();
        officeCheckbox.checked = (value === "ON");
        // If the checkbox is checked (ON), make the 'office-lamp' device active
        if (value === "ON") {
            firebase.database().ref('devices/office-lamp/active').set(true);
        } else {
            firebase.database().ref('devices/office-lamp/active').set(false);
        }
    });
    // Listen for changes in Firebase for 'devices/desk-lamp/active'
    firebase.database().ref('devices/office-lamp/active').on('value', (snapshot) => {
        var isActive = snapshot.val();
        if (!isActive) {
            firebase.database().ref('Light/Bedroom/Office').set("OFF");
        } else {
            firebase.database().ref('Light/Bedroom/Office').set("ON");
        }
    });
});

//------------Toggle-color và đổi màu ở class home-----------------

const toggleColorElements = document.querySelectorAll('.toggle-color');

// Listen for changes in Firebase
firebase.database().ref('devices').on('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        var device = childSnapshot.key;
        var active = childSnapshot.val().active;

        var element = document.querySelector('.toggle-color[data-device="' + device + '"]');
        var targetIcon = document.querySelector('.home [data-device="' + device + '"] ion-icon, .home [data-device="' + device + '"] i');

        if (active) {
            element.classList.add('active');
            targetIcon.style.color = 'white';
        } else {
            element.classList.remove('active');
            targetIcon.style.color = '';
        }
    });
});

toggleColorElements.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');

        var activeDevice = element.getAttribute('data-device');

        var targetIcon = document.querySelector('.home [data-device="' + activeDevice + '"] ion-icon, .home [data-device="' + activeDevice + '"] i');

        if (targetIcon.style.color === 'white') {
            targetIcon.style.color = '';
        } else {
            targetIcon.style.color = 'white';
        }

        // Update data on Firebase
        var deviceRef = firebase.database().ref('devices/' + activeDevice);
        deviceRef.set({
            active: element.classList.contains('active')
        });
    });
});

firebase.database().ref('devices/mainlight/active').on('value', (snapshot) => {
    var isActive = snapshot.val();

    if (!isActive) {
        // Set brightness to 0 if 'mainlight' is not active
        set(ref(db, 'Light/Livingroom/Brightness'), 0);
        document.getElementById('slide').value = 0;
        document.getElementById('brightnessDisplay').textContent = "0%";
        var blub = document.querySelector('.blub');
        var wallLightShadow = document.querySelector('.wall-light-shadow');
        blub.style.opacity = 0;
        wallLightShadow.style.opacity = 0;
    } else {
        // Set brightness to 99 if 'mainlight' is active
        set(ref(db, 'Light/Livingroom/Brightness'), 1);
        document.getElementById('slide').value = 1;
        document.getElementById('brightnessDisplay').textContent = "1%";
        var blub = document.querySelector('.blub');
        var wallLightShadow = document.querySelector('.wall-light-shadow');
        blub.style.opacity = 0.01;
        wallLightShadow.style.opacity = 0.01;
    }
});

firebase.database().ref('devices/dining-lamp/active').on('value', (snapshot) => {
    var isActive = snapshot.val();

    if (!isActive) {
        // Set brightness to 0 if 'dininglamp' is not active
        set(ref(db, 'Light/Kitchen/Brightness'), 0);
        document.getElementById('slide-kitchen').value = 0;
        document.getElementById('brightnessDisplay-kitchen').textContent = "0%";
        var blub = document.querySelector('.blub-kitchen');
        var wallLightShadow = document.querySelector('.wall-light-shadow-kitchen');
        blub.style.opacity = 0;
        wallLightShadow.style.opacity = 0;
    } else {
        // Set brightness to 99 if 'dininglamp' is active
        set(ref(db, 'Light/Kitchen/Brightness'), 1);
        document.getElementById('slide-kitchen').value = 1;
        document.getElementById('brightnessDisplay-kitchen').textContent = "1%";
        var blub = document.querySelector('.blub-kitchen');
        var wallLightShadow = document.querySelector('.wall-light-shadow-kitchen');
        blub.style.opacity = 0.01;
        wallLightShadow.style.opacity = 0.01;
    }
});

//----------------------Tìm kiếm thiết bị---------------------------

const searchInput = document.getElementById('devices_searchinput');
const images = document.querySelectorAll('.pic img');

const keywordMapping = {
    "ps5": "PS5",
    "maygiat": "Washing Machine",
    "coffeemachine": "Coffee Machine",
    "bep": "Electric Stove",
    "tulanh": "Refrigerator",
    "tv": "TV",
    "lamp": "Desk Lamp",
    "denbep": "Dining Lamp",
    "mainlight": "Main Light",
    "dining-lamp": "Bathroom Lamp",
    "cooker": "Cooker",
    "loa": "Speaker",
    "office_fix": "Office Lamp",
    "printer": "Printer",
    "tv": "TV",
    "maylanh": "Air-Conditioner",
    "airconditioner": "Air-Cooler",
};

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    images.forEach(image => {
        const imageName = image.src.split('/').pop().split('.')[0].toLowerCase();
        if (imageName.includes(searchTerm) || (keywordMapping[imageName] && keywordMapping[imageName].toLowerCase().includes(searchTerm))) {
            image.style.display = 'inline-block';
        } else {
            image.style.display = 'none';
        }
    });
}

searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

// --------------------Thông tin thiết bị---------------------------

var devices = document.querySelectorAll('.toggle-color');

var deviceStatus = {};

firebase.database().ref('devices').on('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        var deviceName = childSnapshot.key;
        var active = childSnapshot.val().active;
        deviceStatus[deviceName] = {
            status: active ? 'on' : 'off',
        };
    });
});

var inputsearch = document.getElementById('devices_searchinput');

function normalize(str) {
    return str.replace(/-/g, ' ').replace(/\s/g, '').toLowerCase();
}

inputsearch.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        var input = normalize(e.target.value);
        for (var deviceName in deviceStatus) {
            var normalizedDeviceName = normalize(deviceName);
            if (normalizedDeviceName.includes(input)) {
                var info = document.querySelector('.info');
                info.querySelector('h3').innerHTML = deviceName + ' is <br>' + deviceStatus[deviceName].status;
            }
        }
    } else {
        var info = document.querySelector('.info');
        info.querySelector('h3').innerText = '';
    }
});

//------------------Đăng xuất--------------------------------------

document.getElementById("logout-btn").addEventListener('click', function(e) {
    e.preventDefault();

    const auth = getAuth(app);
    signOut(auth).then(() => {
        window.location.href = "index.html";
        alert("Đăng xuất thành công!");
    }).catch((error) => {
        console.error('Error signing out: ', error);
        alert("Đăng xuất thất bại!");
    });
});

// ---------------------------------------------------------------

// Phát

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

searchinput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        let cityIn = searchinput.value;
        checkWeather(cityIn);
    }
});