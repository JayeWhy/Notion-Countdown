const targetDate = new Date("2024-06-08T23:59:59"); // Set your target date here

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById('weeks').innerText = weeks;
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;

    if (difference < 0) {
        clearInterval(timer);
        document.getElementById('timer').innerHTML = "Countdown finished";
    }
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000 * 60 * 60); // Update every hour