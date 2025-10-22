// 2. Create the player object. Give it two keys, name and chips, and set their values
const player = {
  name: "Valay",
  chips: 120,
};
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

// 3. Grab a hold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el");
// 4. Render the players name and chips in playerEl
playerEl.textContent = `$ ${player.chips}`;
function getRandomCard() {
  let random = Math.floor(Math.random() * 10 + 2);
  return random;
}
// Create a new function called startGame() that calls
// renderGame()
function startGame() {
  isAlive = true;
  // Generate two random number
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards.push(firstCard, secondCard);
  // Re-assign the cards and sum variables so that the game can start
  sum += firstCard + secondCard;
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
    hasBlackJack = true;
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
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    console.log(card);
    sum += card;
    cards.push(card);
    renderGame();
  } else {
    console.log("Is either a winner or looser");
  }
}
