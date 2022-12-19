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

let operator = "*";
let num1 = 2;
let num2 = 2;

console.log(operate(operator, num1, num2));

