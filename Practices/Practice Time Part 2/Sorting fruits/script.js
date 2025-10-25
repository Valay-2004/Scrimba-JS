let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelfEl = document.getElementById("apple-shelf");
let orangeShelfEl = document.getElementById("orange-shelf");

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruit(fruit) {
  fruit.forEach((element) => {
    if (element === "🍎") {
      appleShelfEl.textContent += element;
    } else {
      orangeShelfEl.textContent += element;
    }
  });
}

sortFruit(fruit);
