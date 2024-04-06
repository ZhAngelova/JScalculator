// Object Values
const calculator = {
    initialValue: '0',                   // Initializing the calculator display value
    firstOperand: null,                  // Storing the first operand of the calculation
    waitingForSecondOperand: false,      // Flag to indicate if the calculator is waiting for the second operand
    operator: null,                      // Storing the operator for the calculation
}



//Showing the "0", the initial value on the calculator:
function displayInitialValue() {
    const display = document.getElementById('display');  // Getting the display element
    display.value = calculator.initialValue;             // Setting the display value to the initial value of the calculator
}
displayInitialValue(); // Calling the function to display the initial value on page load


const buttonsContainer = document.getElementById('btns');  // Getting the container for calculator buttons

buttonsContainer.addEventListener('click', function (e) {   // Adding click event listener to the container
    const target = e.target;                                 // Getting the clicked element

    if (!target.matches('button')) {                         // Checking if the clicked element is a button
        return;                                              // Exiting if not a button
    }

    if (target.classList.contains('operator')) {             // Checking if the clicked button is an operator
        OperatorButtonClick(target.value);                   // Calling function for operator button click
        displayInitialValue();                               // Updating the display
        return;
    }

    if (target.classList.contains('decimal')) {              // Checking if the clicked button is a decimal
        inputDecimal(target.value);                          // Calling function for decimal input
        displayInitialValue();                               // Updating the display
        return;
    }

    if (target.classList.contains('allClear')) {             // Checking if the clicked button is for all clear
        allClear();                                          // Calling function for all clear
        displayInitialValue();                               // Updating the display
        return;
    }

    inputDigit(target.value);                                // Calling function for digit input
    displayInitialValue();                                   // Updating the display
});



// Activating the number buttons:
const inputDigit = (digit) => {                             // Function for handling digit inputs
    const { initialValue, waitingForSecondOperand } = calculator;  // Destructuring calculator properties

    if (waitingForSecondOperand === true) {                 // Checking if waiting for second operand
        calculator.initialValue = digit;                    // Setting the digit as initial value
        calculator.waitingForSecondOperand = false;         // Updating waiting flag

    } else {
        calculator.initialValue = initialValue === '0' ? digit : initialValue + digit;  // Appending digit to current value
    }
};



// Activating the AC button:
function allClear() {                                       // Function for clearing calculator
    calculator.initialValue = '0';                          // Resetting initial value
    calculator.firstOperand = null;                         // Resetting first operand
    calculator.waitingForSecondOperand = false;              // Resetting waiting flag
    calculator.operator = null;                              // Resetting operator
};



// Activate the decimal:
const inputDecimal = (decimalPoint) => {                    // Function for handling decimal input
    if (calculator.waitingForSecondOperand === true) {      // Checking if waiting for second operand
        calculator.initialValue = '0.';                     // Setting decimal as initial value
        calculator.waitingForSecondOperand = false;         // Updating waiting flag
        return;
    }

    if (!calculator.initialValue.includes(decimalPoint)) {  // Checking if decimal already exists
        calculator.initialValue += decimalPoint;            // Appending decimal to current value
    }
};



// Function to perform calculation
const calculate = (firstOperand, secondOperand, operator) => {  
    switch (operator) {                                     // Switch case for different operators
        case '+':
            return firstOperand + secondOperand;            // Addition
        case '-':
            return firstOperand - secondOperand;            // Subtraction
        case '*':
            return firstOperand * secondOperand;            // Multiplication
        case '/':
            return firstOperand / secondOperand;            // Division
        default:
            return secondOperand;                           // Default case
    }
};



// Function to handle operator button click
const OperatorButtonClick = (nextOperator) => {            
    const { firstOperand, initialValue, operator } = calculator;  // Destructuring calculator properties
    const inputValue = parseFloat(initialValue);             // Converting initial value to float

    if (operator && calculator.waitingForSecondOperand) {    // Checking if already waiting for second operand
        calculator.operator = nextOperator;                 // Setting next operator
        return;
    }

    if (firstOperand == null && !isNaN(inputValue)) {       // Checking if first operand is null and input value is a number
        calculator.firstOperand = inputValue;               // Setting input value as first operand
    } else if (operator) {                                  // If operator exists
        const result = calculate(firstOperand, inputValue, operator);  // Performing calculation
        calculator.initialValue = parseFloat(result.toFixed(7)).toString();  // Setting result as initial value
        calculator.firstOperand = result;                   // Updating first operand
    }

    calculator.waitingForSecondOperand = true;              // Setting waiting flag for second operand
    calculator.operator = nextOperator;                     // Setting next operator
};