// first Practice Problem
let firstName = "Valay";
let lastName = "Bhaladhare";
let fullName = firstName + " " + lastName;
console.log(fullName);


// Second Practice Problem
let greeting = "Hi there";
// Create a function that logs out "Hi there, ${name}!" when called
function greets() {
    // alert(`${greeting} ${firstName}!`);
    console.log(`${greeting} ${firstName}!`);
}
greets();


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
