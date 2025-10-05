// first Practice Problem
let firstName = "Valay";
let lastName = "Bhaladhare";
let fullName = firstName + " " + lastName;
console.log(fullName);

console.log("");
console.log("Second Problem ->");

// Second Practice Problem
let greeting = "Hi there";
// Create a function that logs out "Hi there, ${name}!" when called
function greets() {
    // alert(`${greeting} ${firstName}!`);
    console.log(`${greeting} ${firstName}!`);
}
greets();

console.log("");
console.log("Third Problem");

// Third Practice Problem
let myPoints = 3;
// create two functions, add3Points() and remove1Point(), and have
// them add/remove points to/from the myPoints variable
function add3Points() {
    myPoints += 3;
}
function remove1Point() {
    myPoints -= 1;
}
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
// Call the functions to that the line below log out 10
console.log(myPoints);
console.log("");

// Fourth Practice Problem
console.log("Fourth Problem");
console.log("2" + 2) // --> "22"
console.log(11+7) // --> 18
console.log(6 + "5") // --> "65"
console.log("My points: " + 5 + 9) // --> "My points: 59"
console.log(2+2) // --> 4
console.log("11" + "14") // --> "1114"
