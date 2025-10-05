let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
const add = () => {
  console.log("add clicked");
  sumEl.textContent = num1 + num2;
};
const subtract = () => {
  console.log("subtract clicked");
  sumEl.textContent = num1 - num2;
};
const divide = () => {
  try {
    if (num2 == 0) {
      throw new Error("Cannot divide by zero.");
    }
    console.log("divide clicked");
    sumEl.textContent = num1 / num2;
  } catch (error) {
    console.error("Division Error: ", error.message);
    return "Error: " + error.message;
  }
};
const multiply = () => {
  console.log("multiply clicked");
  sumEl.textContent = num1 * num2;
};
