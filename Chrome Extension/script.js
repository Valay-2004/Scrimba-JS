const inputEl = document.getElementById("input-el");
const saveEl = document.getElementById("save-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];

// Indian date format for the links
const currentDate = new Date();
const indianDateFormat = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: "Asia/Kolkata",
}).format(currentDate);

saveEl.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
  console.log(myLeads);
});

const renderLeads = () => {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li> &rarr; &nbsp; <a href="${myLeads[i]}" target="_blank"> ${myLeads[i]} </a> &nbsp; [${indianDateFormat}] </li>`;
  }
  ulEl.innerHTML = listItems;
};
