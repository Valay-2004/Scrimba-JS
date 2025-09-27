let countEl = document.getElementById("count-el");
let welcomeEl = document.getElementById("welcome-el");
let saveEl = document.getElementById("save-el");
console.log(countEl);
let count = 0;

let user = prompt("Name: ", "Valay");
let greeting = `Welcome ${user}, Glad you are Here!`;
welcomeEl.innerText = greeting;
welcomeEl.innerText += "🫦";

//increment function
function increment() {
  count += 1;
  // countEl.style.color = "red";
  countEl.innerText = count;
}

//save function
function save(){
  let countStr = count + " - "
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;  
}

