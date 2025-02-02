function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return Number(num1) + Number(num2);
        case "-":
            return Number(num1) - Number(num2);
        case "*":
            return Number(num1) * Number(num2);
        case "/":
            return Number(num1) / Number(num2);
        default:
            return "ERROR";
    }
}

function clearDisplay() {
    document.querySelector("#calculation").innerHTML="";
    document.querySelector("#result").innerHTML= 0;
}

function updateDisplay(calc) {
    let resultDiv = document.querySelector("#result");

    resultDiv.innerHTML= calc.result;

}

function handleInput(keypress, calc) {
    let numbers="0123456789";
    let operands="+-*/";
    let special=".=";

    if (special.includes(keypress)) {
        if (keypress == ".") {
            if (calc.operator == "") {
                calc.operand1 += ".";
            } else {
                calc.operand2 += ".";
            }
        } else if (keypress == "=") {
            if (!calc.operand1 == "" && !calc.operand2 == "" && !calc.operator == "") {
                calc.result = operate(calc.operator, calc.operand1, calc.operand2);
                calc.operand1 = calc.result;
                calc.operand2 = "";
                calc.operator = "";
            }
        }
    } else if (numbers.includes(keypress)) {
        if (calc.operand1 == "") {
            calc.operand1 = keypress;
        } else {
            calc.operand2 = keypress;
        }
    } else if (operands.includes(keypress)) {
        calc.operator = keypress;
    }
}

let calculation = {
    operand1: "",
    operand2: "",
    operator: "",
    result: "",
}

testOperation = operate("/", 10, 5);
console.log("Test:", testOperation);

clearButton = document.querySelector("#ce-btn");
clearButton.addEventListener(
    "click", clearDisplay
);

equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener(
    "click", 
)

