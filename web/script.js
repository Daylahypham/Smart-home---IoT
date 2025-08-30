const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB1eFoWhG7_fRxHMJ-Avjo_bhkwvb27D4Y",
    authDomain: "smarthome-f802f.firebaseapp.com",
    projectId: "smarthome-f802f",
    storageBucket: "smarthome-f802f.appspot.com",
    messagingSenderId: "290247897607",
    appId: "1:290247897607:web:e1a22bf3765eb825daf0a2",
    measurementId: "G-383MXL4K1R"
};

const app = initializeApp(firebaseConfig); // initializeApp khởi tạo một ứng dụng Firebase

const db = getDatabase(app); //getDatabase lấy đối tượng cơ sở dũ liệu từ app
document.getElementById("signUp-btn").addEventListener('click', function(e) {
    e.preventDefault();
    set(ref(db, 'Tài khoản/' + document.getElementById("user").value), {
        user: document.getElementById("user").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    });
    alert("Đăng ký thành công!");
});
// set: ghi đè dữ liệu hiện có tại vị trí đó bằng dữ liệu mới

document.getElementById("signIn-btn").addEventListener('click', function(e) {
    e.preventDefault();
    const user = document.getElementById("tk").value;
    const password = document.getElementById("pass").value;

    // Truy vấn cơ sở dữ liệu để lấy thông tin người dùng dựa trên email
    get(ref(db, 'Tài khoản/' + user)).then((snapshot) => {
        if (snapshot.exists()) {
            const userData = snapshot.val();
            const userPassword = userData.password;
            if (password == userPassword) {
                window.location.href = "login.html";
                alert("Đăng nhập thành công!");
            } else if (password == "") {
                alert("Bạn chưa nhập mật khẩu!");
            } else {
                alert("Mật khẩu không đúng!");
            }
        } else {
            alert("Không tìm thấy tài khoản!");
        }
    }).catch((error) => {
        console.error("Lỗi khi truy vấn cơ sở dữ liệu:", error);
    });
});