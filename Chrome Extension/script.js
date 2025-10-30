const inputEl = document.getElementById("input-el");
const saveEl = document.getElementById("save-el");

let myLeads = [];

// Push the value "www.awsomelead.com" to myAray when the input button is clicked

saveEl.addEventListener("click", () => {
  // Push the value from the inputEl into the myLeads array
  // instead of hard-coded "www.awesomeleads.com" value
  // Google -> "get value from the input field js"
  console.log(`button clicked`);
  myLeads.push(inputEl.value);
  console.log(myLeads);
});
