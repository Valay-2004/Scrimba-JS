const inputEl = document.getElementById("input-el");
const saveEl = document.getElementById("save-el");
let myLeads = [
  "www.example.com",
  "www.awesomelead.com",
  "www.epiclead.com",
  "www.greatlead.com",
];

// Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el");

saveEl.addEventListener("click", () => {
  console.log(`button clicked`);
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// Log out the items in the myLeads array using a for loop
myLeads.forEach((element) => {
  console.log(element);
});
