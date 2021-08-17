let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array

function getRandomElement() {
    let idx = Math.floor(Math.random() * hands.length);
    return hands[idx];
}