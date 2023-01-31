const stopwatch = document.getElementById('stopwatch');
const time = document.getElementById('time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let isRunning = false;
let interval;
let elapsedTime = 0;

function updateTime() {
    let seconds = Math.floor(elapsedTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 1000);

    hours %= 60;
    minutes %= 60;
    seconds %= 60;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    time.textContent = `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            elapsedTime += 1000;
            updateTime();
        }, 1000);
    }
}

function stopStopwatch() {
    if (isRunning) {
        isRunning = false;
        clearInterval(interval);
    }
}

function resetStopwatch() {
    stopStopwatch();
    elapsedTime = 0;
    updateTime();
}

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);