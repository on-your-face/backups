import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Конфигурация Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD6P36jxuceyH3BHGU4COCvQiSrx1wBsJA",
    authDomain: "nexeption-cd7e7.firebaseapp.com",
    projectId: "nexeption-cd7e7",
    storageBucket: "nexeption-cd7e7.firebasestorage.app",
    messagingSenderId: "580435537926",
    appId: "1:580435537926:web:4d88a9115d89caaa081387",
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Проверка состояния авторизации (если не авторизован, перенаправляем на страницу входа)
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "/index.html"; // Если не авторизован — перенаправляем на логин
    }
});

// Функция для выхода
window.logout = () => {
    signOut(auth)
        .then(() => {
            window.location.href = "/index.html"; // После выхода перенаправляем на страницу входа
        })
        .catch((error) => {
            console.error("Ошибка при выходе:", error);
        });
};

// Слушаем клик по элементу с id="logout" (иконка выхода)
document.getElementById("logout").addEventListener("click", () => {
    logout(); // Вызываем функцию для выхода при клике
});