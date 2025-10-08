// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

let firstCard = Math.floor(Math.random() * 10 + 2);
let secondCard = Math.floor(Math.random() * 10 + 2);
console.log(firstCard);
console.log(secondCard);

// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard;
console.log(sum);

// If-else statements
if( sum < 21 ){
    console.log(`Do you want to draw a new card? 🙂`)
} else if( sum === 21){
    console.log(`Wohooo!! You've got BlackJack! 🥇`);
} else{
    console.log(`You're out of the game! 😭`);
}
