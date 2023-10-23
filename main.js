// Array of jokes
const jokes = [
    `Which is faster, hot or cold? Hot, because you can catch cold.`,
    `What did one plate say to the other plate? Dinner's on me.`,
    `Why do oranges wear sunscreen? So they don't peel.`,
    `My wife told me to stop acting like a flamingo, so I had to put my foot down.`,
    `What do you call a pig that does karate? A pork chop.`,
    `Where does Batman go to the bathroom? The batroom.`,
    `What do you call a pony with a sore throat? A little horse.`,
    `What did the left eye say to the right eye? Between you and me, something smells.`];

// Function that return a random joke
function randomJoke() {
    const randomNum = Math.floor(Math.random() * jokes.length);
    return jokes[randomNum];
}

// Console out the random joke
console.log(randomJoke());