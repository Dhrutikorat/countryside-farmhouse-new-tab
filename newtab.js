const background = document.querySelector(".background");
const greeting = document.getElementById("greeting");
const timeElement = document.getElementById("time");
const factElement = document.getElementById("fact");

const morningQuotes = [
    "Start fresh.",
    "A new day begins.",
    "Keep it simple."
];

const afternoonQuotes = [
    "Stay steady.",
    "Keep moving.",
    "Remain calm."
];

const eveningQuotes = [
    "Slow down the pace.",
    "The day is settling.",
    "Move gently."
];

const nightQuotes = [
    "The day is complete.",
    "Rest your mind.",
    "Let everything settle."
];


// Random quote selector
function getRandomQuote(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function updateBg() {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();

    let message = "";

    console.log(hour);
    if (hour >= 5 && hour < 12) {
        background.style.backgroundImage = "url('images/sunrise.png')";
        greeting.innerText = getRandomQuote(morningQuotes);

        if (minute % 4 === 0) {
            message = "Drink a few sips of water slowly and feel it refresh you.";
        }
        else if (minute % 4 === 1) {
            message = "Blink slowly and relax your eyes for a few seconds.";
        }
        else if (minute % 4 === 2) {
            message = "Read a page of any book before jumping into the day.";
        }
        else {
            message = "Acknowledge your family who supports your mornings.";
        }

    } else if (hour >= 12 && hour < 17) {
        background.style.backgroundImage = "url('images/afternoon.png')";
        greeting.innerText = getRandomQuote(afternoonQuotes);

        if (minute % 4 === 0) {
            message = "Sit straight and relax your shoulders.";
        }
        else if (minute % 4 === 1) {
            message = "Thank someone who helped or taught you something today.";
        }
        else if (minute % 4 === 2) {
            message = "Rest your eyes by looking far away for 10 seconds.";
        }
        else {
            message = "Respect others' opinions, even if they differ from yours.";
        }

    } else if (hour >= 17 && hour < 21) {
        background.style.backgroundImage = "url('images/sunset.png')";
        greeting.innerText = getRandomQuote(eveningQuotes);

        if (minute % 4 === 0) {
            message = "Drink some water or warm tea slowly.";
        }
        else if (minute % 4 === 1) {
            message = "Think of one person you are grateful for today.";
        }
        else if (minute % 4 === 2) {
            message = "Read at least one page before ending the day.";
        }
        else {
            message = "Let go of any tension and forgive small mistakes.";
        }

    } else {
        // Night (9PM - 5AM)
        background.style.backgroundImage = "url('images/night.png')";
        greeting.innerText = getRandomQuote(nightQuotes);

        if (minute % 4 === 0) {
            message = "Lower screen brightness and relax your eyes.";
        }
        else if (minute % 4 === 1) {
            message = "Be grateful for someone who stood by you today.";
        }
        else if (minute % 4 === 2) {
            message = "Respect yourself for getting through the day.";
        }
        else {
            message = "Acknowledge that rest is also part of progress.";
        }
    }
    factElement.innerText = "One Small Habit - " + message;
}

// Clock
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    timeElement.textContent = `${hours}:${minutes} ${ampm}`;
}

updateBg();
setInterval(updateBg, 60000);

updateTime();
setInterval(updateTime, 1000);