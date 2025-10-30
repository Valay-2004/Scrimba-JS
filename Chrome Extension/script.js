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

// Render the leads in the unordered list using ulEl.textContent
myLeads.forEach((element) => {
  ulEl.innerHTML += `<li> ${element} </li>`;
  console.log(element);
});
