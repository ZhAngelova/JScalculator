JS Calculator - A simple and stylish calculator built with JavaScript, HTML, and CSS.

Features:
Basic arithmetic operations: addition, subtraction, multiplication, and division.
Clear (AC) button to reset the calculator.
Responsive design centered on the screen.
Supports decimal inputs.

File Structure:
index.html: The main HTML file that contains the structure of the calculator.
calculator.js: The JavaScript file that contains the logic for handling calculator operations and interactions.
style.css: The CSS file that styles the calculator and positions it on the screen.


Getting Started!
Prerequisites:
To run this project, you need a web browser that supports HTML5 and JavaScript.

Installation:
1.Clone the repository to your local machine:
git clone https://github.com/yourusername/js-calculator.git

2.Navigate to the project directory:
cd js-calculator

Usage:
1.Open the index.html file in your web browser:
open index.html
or
start index.html


Use the calculator to perform basic arithmetic operations.


Code Overview:
HTML - The index.html file provides the structure for the calculator. It includes an input field for displaying the results and buttons for digits, operators, and special functions like clear and decimal point.

JavaScript - The calculator.js file contains the logic for the calculator:
It defines the calculator object with properties such as initialValue, firstOperand, waitingForSecondOperand, and operator.
Functions like displayInitialValue, inputDigit, allClear, inputDecimal, calculate, and OperatorButtonClick handle various aspects of the calculator's functionality.
An event listener on the buttons container (btns) listens for click events to determine which button was pressed and invokes the appropriate function.


CSS - The style.css file provides the styling for the calculator:
It uses a combination of flexbox and grid layout to position the calculator and its buttons.
The calculator is centered on the screen using CSS transformations.
Colors and dimensions are defined to give the calculator a clean and modern look.
Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any features, enhancements, or bug fixes.

License
This project is licensed under the MIT License.

Acknowledgements
Icons made by Icons8 from Icons8.
