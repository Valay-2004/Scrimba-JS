// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

let firstCard = Math.floor(Math.random() * 10 + 2);
let secondCard = Math.floor(Math.random() * 10 + 2);

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


// Age Check
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases
let age = 22;
if(age < 21){
    console.log(`You cannot enter the club`);
} else{
    console.log(`Welcome!`)
}

/*
// Get a birthday card if age is 100
// Check if the person is elegible for a birthday card from the King! (100)
if( age < 100){
    console.log(`Not eligible`);
} else if(age === 100){
    console.log(`Here is your birthday card from the King!`);
} else {
    console.log(`Not eligible, you have already one`);
}
*/
