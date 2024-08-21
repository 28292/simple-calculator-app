let num1 = 9
let num2 = 2
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let finalResult = document.getElementById("sum-el");

// Create four functions: add(), subtract(), divide(), multiply()
function add(){
    let result = num1 + num2;
    finalResult.textContent = "Sum: " + result;
}

function subtract(){
    let result = num1 - num2;
    finalResult.textContent = "subtract: " + result;
}

function divide(){
    let result = num1 / num2;
    finalResult.textContent = "divide: " + result;
}

function multiply(){
    let result = num1 * num2;
    finalResult.textContent = "multiply: " + result;
}
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2

// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"



