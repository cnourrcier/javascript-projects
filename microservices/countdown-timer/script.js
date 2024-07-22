let countdownInterval;
let remainingTime;
let endTime;
let isPaused = false;

function startCountdown() {
    const inputMinutes = document.getElementById('minutesInput').value;
    if (!inputMinutes) {
        alert('Please enter the minutes.');
        return;
    }

    const countdownTime = parseInt(inputMinutes) * 60;
    endTime = Date.now() + countdownTime * 1000;
    isPaused = false;

    updateTimer();
    countdownInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (isPaused) return;

    remainingTime = endTime - Date.now();

    if (remainingTime <= 0) {
        clearInterval(interval);
        timerElement.textContent = "00:00:00";
        alert("Time's up!");
        return;
    }

    const totalSeconds = Math.floor(remainingTime / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('timer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function pauseCountdown() {
    isPaused = true;
    clearInterval(countdownInterval);
}

function resumeCountdown() {
    if (!isPaused) return;
    isPaused = false;
    endTime = Date.now() + remainingTime;
    countdownInterval = setInterval(updateTimer, 1000);
}

function resetCountdown() {
    clearInterval(countdownInterval);
    document.getElementById('timer').textContent = "00:00:00";
    document.getElementById('minutesInput').value = '';
    isPaused = false;
    remainingTime = 0;
    endTime = 0;
}