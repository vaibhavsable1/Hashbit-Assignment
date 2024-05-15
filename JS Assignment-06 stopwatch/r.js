let timer; 
let hours = 0, minutes = 0, seconds = 0; 

function start() {
    document.getElementById('start').disabled = true; 
    document.getElementById('pause').disabled = false; 
    document.getElementById('stop').disabled = false; 
    
    timer = setInterval(updateTime, 1000); 
}

function pause() {
    clearInterval(timer); 
    document.getElementById('pause').textContent = 'Continue'; 
    document.getElementById('pause').onclick = continueTimer; 
}

function continueTimer() {
    timer = setInterval(updateTime, 1000); 
    document.getElementById('pause').textContent = 'Pause'; 
    document.getElementById('pause').onclick = pause; 
}

function stop() {
    clearInterval(timer); 
    hours = 0; minutes = 0; seconds = 0; 
    updateTime(); 
    document.getElementById('start').disabled = false; 
    document.getElementById('pause').disabled = true; 
    document.getElementById('stop').disabled = true; 
}

function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    const timeString = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    document.getElementById('time').textContent = timeString;
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}