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

function clearDisplayAndReset(calc) {
    calc.operand1 = "";
    calc.operand2 = "";
    calc.operator = "";
    calc.result = ""
    document.querySelector("#result").innerHTML= 0;
}

function updateDisplay(calc) {
    let resultDiv = document.querySelector("#result");

    if (calc.operand2 == "") {
        if (calc.operand1 == "") {
            resultDiv.innerHTML = 0;
        } else {
            resultDiv.innerHTML = calc.operand1;
        } 
    } else {
        resultDiv.innerHTML = calc.operand2;
    }   
}

function handleInput(keypress, calc) {
    let numbers="0123456789";
    let operands="+-*/";
    let special=".=";

    console.log("handleInput keypress:", keypress);
    console.log("handleInput Calc start:", calc);
    console.log("Is special:", special.includes(keypress));
    console.log("Is number:", numbers.includes(keypress));
    console.log("Is operand:", operands.includes(keypress));

    if (keypress == "CE") {
        clearDisplayAndReset(calc);
    } else if (keypress == "+/-") {
        if (calc.operator == "") {
            calc.operand1 = -calc.operand1;
        } else {
            calc.operand2 = - calc.operand2;
        }
    } else if (special.includes(keypress)) {
        if (keypress == ".") {
            if (calc.operator == "") {
                if (!calc.operand1.includes(".")) calc.operand1 += ".";
            } else {
                if (!calc.operand2.includes(".")) calc.operand2 += ".";
            }
        } else if (keypress == "=") {
            if ( !(calc.operand1 == "") && !(calc.operand2 == "") && !(calc.operator == "") ) {
                calc.operand1 = operate(calc.operator, calc.operand1, calc.operand2);;
                calc.operand2 = "";
                calc.operator = "";
            }
        }
    } else if (numbers.includes(keypress)) {
        // check if operator is entered already and decide which operand to expand
        if (calc.operator == "") {
            calc.operand1 += keypress;
        } else {
            calc.operand2 += keypress;
        }
    } else if (operands.includes(keypress)) {
        // evaluate expression, store in operand1 and reset others
        // if operands and operators are filled already
        if ( !(calc.operand1 == "") && !(calc.operand2 == "") && !(calc.operator == "") ) {
            calc.operand1 = operate(calc.operator, calc.operand1, calc.operand2);
            calc.operand2 = "";
            calc.operator = "";
        }
        calc.operator = keypress;
    }

    console.log("handleInput Calc finish:", calc);
    updateDisplay(calc);
}

let calculation = {
    operand1: "",
    operand2: "",
    operator: "",
}

allBtns = document.querySelectorAll(".numpad-button");
allBtns.forEach(element => {
    element.addEventListener(
        "click", () => handleInput(element.textContent, calculation)
    );
});

/* 
+- button
teilen durch 0
ist teilen von negativ durch negativ positiv

*/