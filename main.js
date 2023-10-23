// Array of jokes
const jokes = ['Joke1', 'Joke2', 'Joke3'];

// Function that return a random joke
function randomJoke() {
    const randomNum = Math.floor(Math.random() * jokes.length);
    return jokes[randomNum];
}

// Console out the random joke
console.log(randomJoke());