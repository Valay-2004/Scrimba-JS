// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = "420.69235632455";
const btnEl = document.getElementById("btn");
btnEl.textContent = `Buy €${Math.floor(totalPrice * 100) / 100}`;

btnEl.addEventListener("click", () => {
  alert("Congrats! You bought it...");
});
