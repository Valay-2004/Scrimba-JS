import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  databaseURL:
    "https://leads-tracker-app-7a922-default-rtdb.asia-southeast1.firebasedatabase.app/",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log(database);

// Challenge: Create a const called 'referenceInDB' and use the ref function to create a reference called 'leads' in the database
const referenceInDB = ref(database, "leads");

onValue(referenceInDB, function (snapshot) {
  console.log(snapshot.val());
});

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {});

inputBtn.addEventListener("click", function () {
  console.log(inputEl.value);
  // Challenge: Import the 'push' function and modify the line above to push inputEl.value to the referenceInDB in the database
  push(referenceInDB, inputEl.value);
  inputEl.value = "";
});
