
const display = document.getElementById('display');

let firstNumber = '';
let secondNumber = '';
let operator = '';

function appendValue(value) {

    if (value == "-" || value == "/" || value == "*" || value == "+") {

        operator = value;
        firstNumber = display.value;
        display.value = "";

    } else {

        display.value += value;

    }
}

function calculate() {

    secondNumber = display.value;

    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    let result;

    if (operator == "+") {
        result = num1 + num2;
    }

    else if (operator == "-") {
        result = num1 - num2;
    }

    else if (operator == "*") {
        result = num1 * num2;
    }

    else if (operator == "/") {

        if (num2 == 0) {
            display.value = "Error";
            return;
        }

        result = num1 / num2;
    }

    display.value = result;

    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function clearDisplay() {

    display.value = "";

    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function remove() {

    display.value = display.value.slice(0, -1);

}
