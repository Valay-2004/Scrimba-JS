const inputEl = document.getElementById("input-el");
const saveEl = document.getElementById("save-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [
  "www.example.com",
  "www.awesomelead.com",
  "www.epiclead.com",
  "www.greatlead.com",
  "https://music.youtube.com",
];

saveEl.addEventListener("click", () => {
  console.log(`button clicked`);
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// 1. Create a variable, listItems,
// to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = "";

// Render the leads in the unordered list using ulEl.textContent
for (let i = 0; i < myLeads.length; i++) {
  // 2. Add the item to the listItem variable instead of the ulEl.innerHTML
  listItems += "<li>" + myLeads[i] + "</li>";
}

// 3. Render the listItem inside the unordered list using ulEl.innerHTMl
ulEl.innerHTML = listItems;
