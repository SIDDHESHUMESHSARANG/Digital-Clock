function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const day = days[now.getDay()];
    const dayId = dayNames[now.getDay()];

    // Update clock and day
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('day').textContent = day;

    // Highlight current day
    dayNames.forEach(day => {
        document.getElementById("day").classList.remove('highlight');
    });
    document.getElementById(dayId).classList.add('highlight');
}

setInterval(updateClock, 1000);
updateClock();
