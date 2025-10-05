let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");

// Create four functions: add(), subtract(), divide(), multiply()
const add = (a, b) => {
    console.log("add clicked");
    
    sumEl.textContent = a+b;
}
const subtract = (a, b) => {
    sumEl.textContent = a - b;
}
const divide = (a, b) => {
    try {
        if(b == 0){
            throw new Error("Cannot divide by zero.");
        }
        sumEl.textContent = a/b;
    } catch (error) {
        console.error("Division Error: ", error.message);
        return "Error: " + error.message;
    }
}
const multiply = (a, b) => {
    sumEl.textContent = a * b;
}

add(num1, num2);
subtract(num1, num2);
divide(num1, num2);
multiply(num1, num2);
