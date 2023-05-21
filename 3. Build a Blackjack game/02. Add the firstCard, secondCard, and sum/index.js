// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = Math.floor(Math.random() * 12) + 1;
let secondCard = Math.floor(Math.random() * 12) + 1;

let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("Want to draw more card?");
}
else if (sum === 21) {
    console.log("You won!!");
}
else {
    console.log("You lost!");
}