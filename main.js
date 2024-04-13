var startTime;
var elapsedTime = 0;
var running = false;
var timer;

function startStopwatch() {
    if (!running) {
        running = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateStopwatch, 10); // Update every 10 milliseconds
    }
}

function stopStopwatch() {
    if (running) {
        running = false;
        clearInterval(timer);
    }
}

function resetStopwatch() {
    if (!running) {
        elapsedTime = 0;
        displayTime();
    }
}

function updateStopwatch() {
    var currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    displayTime();
}

function displayTime() {
    var milliseconds = Math.floor((elapsedTime % 1000) / 10);
    var seconds = Math.floor((elapsedTime / 1000) % 60);
    var minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    var hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

    var time = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds) + ':' + formatTime(milliseconds);
    document.getElementById('display').textContent = time;
}

function formatTime(value) {
    return value < 10 ? '0' + value : value;
} 