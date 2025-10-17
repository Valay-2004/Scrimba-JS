let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
console.log(sum);

function getRandomCard() {
  let random = Math.floor(Math.random() * 10 + 2);
  return random;
}
// Create a new function called startGame() that calls
// renderGame()
function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = `Cards: `;
  // Create a for loop that renders out all the cards instead of just two
  cards.forEach((element) => {
    cardsEl.textContent += element + " ";
  });
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
function newCard() {
  let card = getRandomCard();
  console.log(card);
  sum += card;
  cards.push(card);
  renderGame();
}
