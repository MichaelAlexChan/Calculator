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
    switch(string) {
        case "+":
            value = add(num1, num2);
            break;
        case "-":
            value = subtract(num1, num2);
            break;
        case "*":
            value = multiply(num1, num2);
            break;
        case "/":
            value = divide(num1, num2);
            break;
        default:
            console.log("Are u dumbbb fammm");
    }
    return value;
}

const buttons = document.getElementById('grid-container');
const display = document.getElementById('numberDisplay');

let num1;
let num2;
let operator;

buttons.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';

    if (!isButton) {
        return;
    }
    
    console.log(typeof(event.target.innerText));
    display.textContent += event.target.innerText;
});

