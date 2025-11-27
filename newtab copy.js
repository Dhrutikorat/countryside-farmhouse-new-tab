const bg = document.getElementById("background");
const quote = document.getElementById("quote");

// // Progressive image logic
// const images = [
//     "images/part1.jpg",
//     "images/part2.jpg",
//     "images/part3.jpg",
//     "images/part4.jpg"
// ];

// let index = parseInt(localStorage.getItem("imageIndex")) || 0;
// bg.style.backgroundImage = `url('${images[index]}')`;

// index++;
// if (index >= images.length) index = 0;
// localStorage.setItem("imageIndex", index);

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
    const hour = new Date().getHours();
    console.log(hour);
    if (hour >= 5 && hour < 12) {
        bg.style.backgroundImage = "url('images/morning.png')";
        quote.innerText = getRandomQuote(morningQuotes);
    } else if (hour >= 12 && hour < 17) {
        bg.style.backgroundImage = "url('images/afternoon.png')";
        quote.innerText = getRandomQuote(afternoonQuotes);
    } else if (hour >= 17 && hour < 21) {
        bg.style.backgroundImage = "url('images/evening.png')";
        quote.innerText = getRandomQuote(eveningQuotes); // Day is slowing but not finished
    } else {
        // Night (9PM - 5AM)
        bg.style.backgroundImage = "url('images/night.png')";
        quote.innerText = getRandomQuote(nightQuotes); // Day completed
    }

}

updateBg();
setInterval(updateBg, 60000);