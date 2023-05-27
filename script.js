// Получаем ссылки на кнопки и счетчики кликов
const startButton = document.getElementById("startButton");
const button = document.getElementById("clickButton");
const counter = document.getElementById("counter");
const maxCounter = document.getElementById("maxCounter");
const cps = document.getElementById("cps");
const timer = document.getElementById("timer");
button.disabled = true;
// Добавляем обработчик клика по кнопке "Начать игру"
startButton.addEventListener("click", () => {
    // Включаем кнопку, чтобы игрок мог начать игру
    button.disabled = false;
    startButton.disabled = true;
    // Сбрасываем счетчики и таймер
    let count = 0;
    let maxCount = parseInt(localStorage.getItem("maxClickCount")) || 0;
    counter.innerText = count;
    
    maxCounter.innerText = maxCount;

    let secondsRemaining = 10;
    timer.innerText = secondsRemaining + " сек.";

    // Устанавливаем таймер на 20 секунд
    let countdownInterval = setInterval(() => {
        secondsRemaining--;
        timer.innerText = secondsRemaining + " сек.";

        if (secondsRemaining <= 0) {
            // Отключаем кнопку, чтобы игрок не мог продолжать игру после окончания времени
            button.disabled = true;
            clearInterval(countdownInterval);
            alert("Время вышло! Вы сделали " + count + " кликов.");
            startButton.disabled = false;
        }
    }, 1000);

    // Добавляем обработчик клика по кнопке "Кликни меня!"
    button.addEventListener("click", () => {
        count++;
        counter.innerText = count;
        cps.innerText = count / 10 + " к/c "
        if (count > maxCount) {
            maxCount = count;
            maxCounter.innerText = maxCount;

            // Сохраняем значение максимального счетчика в localStorage
            localStorage.setItem("maxClickCount", maxCount);
        }

        // Сохраняем значение текущего счетчика в localStorage
        localStorage.setItem("clickCount", count);
    });
});


