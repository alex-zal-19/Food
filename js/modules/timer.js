function timer(id, deadline) {

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
    
        const timezoneOffset = (new Date()).getTimezoneOffset() * 60 * 1000; 
        const t = Date.parse(endtime) - Date.now() + timezoneOffset;
    
        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((t / (1000 * 60)) % 60);
            seconds = Math.floor((t / 1000) % 60);
        }
    
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            daysElement = timer.querySelector('#days'),
            hoursElement = timer.querySelector('#hours'),
            minutesElement = timer.querySelector('#minutes'),
            secondsElement = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            daysElement.innerHTML = getZero(t.days);
            hoursElement.innerHTML = getZero(t.hours);
            minutesElement.innerHTML = getZero(t.minutes);
            secondsElement.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline);
}

export default timer;