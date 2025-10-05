// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
const errorId = document.getElementById("error");
console.log(errorId); // confirm you have got the correct id

const renderMsg = () => {
    console.log("button clicked");
    errorId.textContent = "Something went wrong, please try again";
}
