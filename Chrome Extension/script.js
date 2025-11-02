const inputEl = document.getElementById("input-el");
const saveEl = document.getElementById("save-el");
const ulEl = document.getElementById("ul-el");
const delEl = document.getElementById("del-btn");
let myLeads = [];
let oldLeads = [];

// Indian date format for the links
const currentDate = new Date();
const indianDateFormat = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: "Asia/Kolkata",
}).format(currentDate);

const localItem = JSON.parse(localStorage.getItem("myLeads"));

if (localItem) {
  myLeads = localItem;
  renderLeads(myLeads);
}

function renderLeads(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li> &rarr; &nbsp; <a href="${leads[i]}" target="_blank"> ${leads[i]} </a> &nbsp; [${indianDateFormat}] </li>`;
  }
  ulEl.innerHTML = listItems;
}

delEl.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});

saveEl.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
});
