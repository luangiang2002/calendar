let periodFocus = 30;
updatePeriodFocus(periodFocus);
const minusTimeBtn = document.querySelector('.fa-minus');
const plusTimeBtn = document.querySelector('.fa-plus');

minusTimeBtn.addEventListener('click', () => {
    if (periodFocus === 5) return;
    periodFocus -= 5;
    updatePeriodFocus(periodFocus);
});

plusTimeBtn.addEventListener('click', () => {
    periodFocus += 5;
    updatePeriodFocus(periodFocus);
});

function updatePeriodFocus() {
    document.querySelector('.period').textContent = periodFocus;
}
let interval;
function startFocus(duration) {
    let minutes = duration;
    let second = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        if (second === 0) {
            if (minutes === 0) {
                clearInterval(interval);
                return;
            }
            minutes--;
            second = 60;
        }
        second--;
        document.querySelector('.time').textContent = `${minutes}:${second < 10 ? '0' + second : second}`;
    }, 1000);
}

focus = document.querySelector('.focus')
focus.addEventListener('click', () => {
    startFocus(periodFocus);
});
