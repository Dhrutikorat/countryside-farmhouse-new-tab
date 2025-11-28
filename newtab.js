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

const morningMessages = [
    "Drink a few sips of water slowly and feel it refresh you.",
    "Blink slowly and relax your eyes for a few seconds.",
    "Read a page of any book before jumping into the day.",
    "Acknowledge your family who supports your mornings.",
    "Take 5 slow breaths and feel the fresh start.",
    "Stretch your arms gently and loosen your body.",
    "Drink a glass of water to wake your system.",
    "Smile at yourself - today is a new chance.",
    "Write one goal for today, even a small one.",
    "Avoid checking your phone for 2 minutes.",
    "Step near a window and absorb daylight.",
    "Say: I choose calm and focus today.",
];


const afternoonMessages = [
    "Take a short walk if possible.",
    "Fix your posture and relax your jaw.",
    "Drink water, not just tea or coffee.",
    "Close your eyes for 10 seconds and reset.",
    "Compliment someone mentally.",
    "Eat one fruit or something light and fresh.",
    "Organize one small thing around you.",
    "Deep inhale… slow exhale… repeat twice.",
    "Sit straight and relax your shoulders",
    "Thank someone who helped or taught you something today.",
    "Rest your eyes by looking far away for 10 seconds.",
    "Respect others' opinions, even if they differ from yours."
];

const eveningMessages = [
    "Drink some water or warm tea slowly.",
    "Think of one person you are grateful for today.",
    "Read at least one page before ending the day.",
    "Let go of any tension and forgive small mistakes.",
    "Play soft music or nature sounds.",
    "Write one good thing that happened today.",
    "Put your phone away for 5 minutes.",
    "Look at the sky and breathe deeply.",
    "Talk to someone you care about.",
    "Leave work thoughts behind - tomorrow is another day.",
    "Wash your face and feel refreshed.",
    "Smile - you made it through the day.",
];


const nightMessages = [
    "Lower screen brightness and relax your eyes.",
    "Be grateful for someone who stood by you today.",
    "Respect yourself for getting through the day.",
    "Acknowledge that rest is also part of progress.",
    "Put your phone down and close your eyes gently.",
    "Relax your body from head to toe.",
    "Take slow breaths - in… out…",
    "Release all worries for tomorrow.",
    "Thank yourself for surviving today.",
    "Darken the room slightly more.",
    "Listen to your heartbeat for a moment.",
    "Sleep is healing - let it happen."
];

// Random quote selector
function getRandomQuote(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let lastHour = -1;
let lastMinute = -1;

function updateBg() {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();

    if (hour === lastHour && minute === lastMinute) return;
    lastHour = hour;
    lastMinute = minute;

    let message = "";

    if (hour >= 5 && hour < 12) {
        background.style.backgroundImage = "url('images/sunrise.png')";
        greeting.innerText = getRandomQuote(morningQuotes);
        message = morningMessages[minute % morningMessages.length];
    } else if (hour >= 12 && hour < 17) {
        background.style.backgroundImage = "url('images/afternoon.png')";
        greeting.innerText = getRandomQuote(afternoonQuotes);
        message = afternoonMessages[minute % afternoonMessages.length];
    } else if (hour >= 17 && hour < 21) {
        background.style.backgroundImage = "url('images/sunset.png')";
        greeting.innerText = getRandomQuote(eveningQuotes);
        message = eveningMessages[minute % eveningMessages.length];
    } else {
        background.style.backgroundImage = "url('images/night.png')";
        greeting.innerText = getRandomQuote(nightQuotes);
        message = nightMessages[minute % nightMessages.length];
    }
    factElement.innerText = message;
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