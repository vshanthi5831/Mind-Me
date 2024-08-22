
document.addEventListener('DOMContentLoaded', () => {

    const playButton = document.getElementById("playButton");
    const pauseButton = document.getElementById("pauseButton");
    const stopButton = document.getElementById("stopButton");
    const player = document.getElementById("meditationPlayer");
    const sessionSelect = document.getElementById("sessionSelect");

    playButton.addEventListener('click', () => {
        player.play();
    });

    pauseButton.addEventListener('click', () => {
        player.pause();
    });

    stopButton.addEventListener('click', () => {
        player.pause();
        player.currentTime = 0;
    });

    sessionSelect.addEventListener('change', () => {
        player.src = event.target.value;
        player.play();
    });
});
