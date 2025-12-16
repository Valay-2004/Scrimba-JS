import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  remove,
  onValue,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  databaseURL:
    "https://leads-tracker-app-7a922-default-rtdb.asia-southeast1.firebasedatabase.app/",
};
// Initialize Firebase
// App
const app = initializeApp(firebaseConfig);
// Database
const database = getDatabase(app);
console.log(database);

// a const called 'referenceInDB' and use the ref function to create a reference called 'leads' in the database
const referenceInDB = ref(database, "leads");

// onValue gives us the snapshot of the things in our database
onValue(referenceInDB, function (snapshot) {
  // check if the snapshot exists if not so there is nothing in db
  if (snapshot.exists()) {
    const snapshotValues = snapshot.val();
    // we convert arrays of the data to object and render it using the render function
    const leads = Object.values(snapshotValues);
    render(leads);
  }
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

deleteBtn.addEventListener("dblclick", function () {
  remove(referenceInDB);
  ulEl.innerHTML = "";
});

inputBtn.addEventListener("click", function () {
  console.log(inputEl.value);
  // Challenge: Import the 'push' function and modify the line above to push inputEl.value to the referenceInDB in the database
  push(referenceInDB, inputEl.value);
  inputEl.value = "";
});
