function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    daysBtn.addEventListener('click', onClick);
    hoursBtn.addEventListener('click', onClick);
    minutesBtn.addEventListener('click', onClick);
    secondsBtn.addEventListener('click', onClick);
    function onClick(e) {
        if (e.target === daysBtn) {
            const d = Number(days.value);
            hours.value = d * 24;
            minutes.value = d * 1440;
            seconds.value = d * 86400;
        } else if (e.target === hoursBtn) {
            const h = Number(hours.value);
            days.value = h / 24;
            minutes.value = h * 60;
            seconds.value = h * 3600;
        } else if (e.target === minutesBtn) {
            const m = Number(minutes.value);
            days.value = m / 1440;
            hours.value = m / 60;
            seconds.value = m * 60;
        } else {
            const s = Number(seconds.value);
            days.value = s / 86400;
            hours.value = s / 3600;
            minutes.value = s / 60;
        }
    }
}