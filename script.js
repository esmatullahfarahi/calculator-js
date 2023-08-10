// Create 6 variables whichs grabs the document element id for each elemnt needed to create the calculator

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph in the index.html

// E.g. if the user enter 8 in the first input field and 2 in the second input field then clicks on the "Plus" button, it should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph index.html
const num1 = document.getElementById("num1-el");
const num2 = document.getElementById("num2-el");
const result = document.getElementById("result");
const error = document.getElementById("error");
const addbutton = document.getElementById("add");
const subbutton = document.getElementById("subtract");
const divbutton = document.getElementById("divide");
const multbutton = document.getElementById("multiply");

function errorMessage(number1, number2) {
    if (number1 === "") {
        error.textContent = "Please enter first number";
        result.textContent = "";
        return;
    }

    if (number2 === "") {
        error.textContent = "Please enter second number";
        result.textContent = "";
        return;
    } else if (number1 && number2) {
        error.textContent = "";
    }

}


addbutton.addEventListener("click", function() {
    let usernum1 = num1.value;
    let usernum2 = num2.value;
    errorMessage(usernum1, usernum2);

    let total
    total = parseInt(usernum1) + parseInt(usernum2)

    // console.log(total)

    if (isNaN(total))
        return
    else
        result.textContent = `Result : ${total}`

})

subbutton.addEventListener("click", function() {
    let usernum1 = num1.value;
    let usernum2 = num2.value;
    errorMessage(usernum1, usernum2);


    let total
    total = parseInt(usernum1) - parseInt(usernum2)

    if (isNaN(total))
        return
    else
        result.textContent = `Result : ${total}`

})

divbutton.addEventListener("click", function() {
    let usernum1 = num1.value;
    let usernum2 = num2.value;
    errorMessage(usernum1, usernum2);


    let total
    total = parseInt(usernum1) / parseInt(usernum2)
    if (isNaN(total))
        return
    else
        result.textContent = `Result : ${total}`

})

multbutton.addEventListener("click", function() {
    let usernum1 = num1.value;
    let usernum2 = num2.value;

    errorMessage(usernum1, usernum2);

    let total
    total = parseInt(usernum1) * parseInt(usernum2)
    if (isNaN(total))
        return
    else
        result.textContent = `Result : ${total}`

})