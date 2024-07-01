function updateTimeAndDay() {
    const utcTimeElement = document.getElementById('utcTime');
    const dayOfWeekElement = document.getElementById('dayOfWeek');
    
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
    
    utcTimeElement.textContent = utcTime;
    dayOfWeekElement.textContent = dayOfWeek;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();
