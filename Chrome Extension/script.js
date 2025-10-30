const inputEl = document.getElementById("input-el");
const saveEl = document.getElementById("save-el");

let myLeads = [
  "www.example.com",
  "www.awesomelead.com",
  "www.epiclead.com",
  "www.greatlead.com",
];

// Push the value "www.awsomelead.com" to myAray when the input button is clicked

saveEl.addEventListener("click", () => {
  console.log(`button clicked`);
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// Log out the items in the myLeads array using a for loop
myLeads.forEach((element) => {
  console.log(element);
});
