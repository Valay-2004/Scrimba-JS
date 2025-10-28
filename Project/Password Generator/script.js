const passField = document.getElementById("generated-password");
const generateBtn = document.getElementById("generated-button");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const lengthSlider = document.getElementById("lengthForPass");

// characters sets
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "1234567890";
const symbolChars = "`~!@#$%^&*()_+-{}|:<>?;,./=";

generateBtn.addEventListener("click", generatePassword);
function generatePassword() {
  let pass = "";
  if (uppercaseCheck.checked) pass += upperChars;
  if (lowercaseCheck.checked) pass += lowerChars;
  if (numbersCheck.checked) pass += numberChars;
  if (symbolsCheck.checked) pass += symbolChars;

  // case for empty pass type
  if (pass === "") {
    alert("Please select at least one character type!");
    return;
  }

  // get the slider value(length for pass)
  let passLength = parseInt(lengthSlider.value);

  // get the password
  let password = "";
  for (let i = 0; i < passLength; i++) {
    const randomInt = Math.floor(Math.random() * pass.length);
    password += pass[randomInt];
  }

  passField.value = password;
}
