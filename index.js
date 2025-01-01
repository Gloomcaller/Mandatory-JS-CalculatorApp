const display = document.getElementById("display");

function appendToDisplay(input) {
    const lastChar = display.value.slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar) && ["+", "-", "*", "/"].includes(input)) {
        return;
    }
    display.value += input;
}

function appendToDisplay(input) {
    if (display.value === "Error") display.value = "";
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const result = Function('"use strict";return (' + display.value + ')')();
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function calculate() {
    const value = display.value;

    const operatorMatch = value.match(/(\+{5}|\-{5}|\*{5}|\/{5})/);
    if (operatorMatch) {
        const equalsButton = document.querySelector("#keys button:last-child");
        equalsButton.style.backgroundImage = "url('gif.gif')";
        equalsButton.style.backgroundSize = "cover";
        equalsButton.textContent = "";

        setTimeout(() => {
            equalsButton.style.backgroundImage = "";
            equalsButton.textContent = "=";
        }, 5000);
    } else {
        try {
            display.value = eval(value);
        } catch (error) {
            display.value = "Error";
        }
    }
}
