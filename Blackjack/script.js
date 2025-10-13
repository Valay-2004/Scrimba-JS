let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let firstCard = Math.floor(Math.random() * 10);
let secondCard = Math.floor(Math.random() * 10 + 10);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
console.log(sum);

// Create a new function called startGame() that calls 
// renderGame()
function startGame(){
  renderGame();
}

function renderGame() {
  // If-else statements
  cardsEl.textContent = `Cards: ${firstCard}  ${secondCard}`;
  sumEl.textContent = `Sum: ${sum}`;
  if (sum < 21) {
    message = `Do you want to draw a new card?`;
  } else if (sum === 21) {
    message = `Wohooo!! You've got BlackJack!`;
  } else {
    message = `You're out of the game!`;
    isAlive = false;
  }

  messageEl.textContent = message;
  console.log(message);
}

//Create a function newCard() that logs out 
// "Drawing a new card from the deck!"
function newCard(){
  let card = Math.floor(Math.random() * 10 + 2);
  console.log(card);
  sum += card;
  console.log("Drawing a new card from the deck");
}
