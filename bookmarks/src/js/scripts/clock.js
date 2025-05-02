export function initClock() {
    const clockElement = document.getElementById('clock'); // Элемент, в который будет выводиться время

    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        clockElement.textContent = timeString;
    }

    // Убедитесь, что элемент существует, прежде чем обновлять
    if (clockElement) {
        setInterval(updateTime, 1000); // Обновление времени каждую секунду
        updateTime(); // Немедленно отобразить время
    }
}
