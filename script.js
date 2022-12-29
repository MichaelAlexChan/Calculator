const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
/*
    Things to work on: 
    -division by 0;
    -floating numbers
*/

const operate = (string, num1, num2) => {
    let value;
    switch (string) {
        case "+":
            value = add(num1, num2);
            break;
        case "-":
            value = subtract(num1, num2);
            break;
        case "x":
            value = multiply(num1, num2);
            break;
        case "÷":
            value = divide(num1, num2);
            break;
        default:
            console.log("Are u dumbbb fammm");
    }
    return value;
}

let num1;
let num2;
//Determines if a user is inputting a number into the num1 array
let num1Active;
let num2Active;

//Determines if an operator has been clicked
let operator;
let opActive;

//Determines if the current number being operated on is a result from a previous calculation
let resultActive;
let result;


const display = document.getElementById('numberDisplay');

function appendDisplay(event) {
    display.textContent += event.target.innerText;
}

function removeFromDisplay(operator) {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
}

function resultDisplay(result) {
    display.textContent = result;
}

function clearAll() {
    display.textContent = "";
    num1 = [];
    num2 = [];
    num1Active = false;
    opActive = false;
    resultActive = false;
}

const buttons = document.getElementById('grid-container');
clearAll();

buttons.addEventListener('click', (event) => {
    if (!(event.target.nodeName === 'BUTTON')) {
        return;
    }
    const content = event.target.innerText;
    determineInput(event, content);
});


function determineInput(event, content) {
    if (content === 'clear all') {
        clearAll();
    }
    
    else {
        if ((content === '+' || content === '-' || content === 'x' || content === '÷') && num1Active) {
            if (opActive) {
                removeFromDisplay();
            }
            opActive = true;
            operator = content;
            appendDisplay(event);
        }
        else if (content === '=' && opActive) {
            if (!(resultActive)) {
                opActive = false;
                num1 = parseInt(num1.join(''));
                num2 = parseInt(num2.join(''));
                result = operate(operator, num1, num2);
                resultDisplay(result);
                num2 = [];
                resultActive = true;
            }
            else {
                num2 = parseInt(num2.join(''));
                result = operate(operator, result, num2);
                display.textContent = result;
                num2 = [];
            }
        }
        else if (parseInt(content) >= 0) {
            if (!opActive && !resultActive) {
                num1.push(content);
                console.log(num1);
                num1Active = true;
                display.textContent += event.target.innerText;
            }
            else {
                num2.push(content);
                console.log(num2);
                display.textContent += event.target.innerText;
            }
        }
        else {
            return;
        }
    }
}
