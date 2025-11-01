const inputEl = document.getElementById("input-el");
const saveEl = document.getElementById("save-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];

saveEl.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
  console.log(myLeads);
});

const renderLeads = () => {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // Wrap the lead in an anchor tag (<a>) inside the <li>
    // Can you make the link open in a new tab?

    listItems += `<li> <a href="${myLeads[i]}" target="_blank"> ${myLeads[i]} </a> </li>`;
  }
  ulEl.innerHTML = listItems;
};
