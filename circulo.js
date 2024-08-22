document.addEventListener('DOMContentLoaded', () => {
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');
    const startButton = document.getElementById('startButton');
    const pauseButton = document.getElementById('pauseButton');
    const resetButton = document.getElementById('resetButton');

    let timerInterval;
    let minutes = 25;
    let seconds = 0;
    let isRunning = false;

    function updateDisplay() {
        minutesDisplay.textContent = String(minutes).padStart(2, '0');
        secondsDisplay.textContent = String(seconds).padStart(2, '0');
    }

    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            timerInterval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(timerInterval);
                        isRunning = false;
                        alert('Pomodoro session completed!');
                        return;
                    }
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }
                updateDisplay();
            }, 1000);
        }
    }

    function pauseTimer() {
        clearInterval(timerInterval);
        isRunning = false;
    }

    function resetTimer() {
        clearInterval(timerInterval);
        isRunning = false;
        minutes = 25;
        seconds = 0;
        updateDisplay();
    }

    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);

    updateDisplay();
});
