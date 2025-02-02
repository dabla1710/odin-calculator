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

    if (calc.result == "") {
        if (calc.operand2 == "") {
            if (calc.operand1 == "") {
                resultDiv.innerHTML = 0;
            } else {
                resultDiv.innerHTML = calc.operand1;
            } 
        } else {
            resultDiv.innerHTML = calc.operand2;
        }
    } else {
        resultDiv.innerHTML= calc.result;
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
        clearDisplay();
    }
    else if (special.includes(keypress)) {
        console.log("special !");
        if (keypress == ".") {
            if (calc.operator == "") {
                calc.operand1 += ".";
            } else {
                calc.operand2 += ".";
            }
        } else if (keypress == "=") {
            if ( !(calc.operand1 == "") && !(calc.operand2 == "") && !(calc.operator == "") ) {
                calc.result = operate(calc.operator, calc.operand1, calc.operand2);
                calc.operand1 = calc.result;
                calc.operand2 = "";
                calc.operator = "";
                calc.result = ""
            }
        }
    } else if (numbers.includes(keypress)) {
        console.log("number !");
        if (calc.operand1 == "") {
            calc.operand1 = keypress;
        } else {
            calc.operand2 = keypress;
        }
    } else if (operands.includes(keypress)) {
        console.log("operand !");
        calc.operator = keypress;
    }

    console.log("handleInput Calc finish:", calc);
    updateDisplay(calc);
}

let calculation = {
    operand1: "",
    operand2: "",
    operator: "",
    result: "",
}

testOperation = operate("/", 10, 5);
console.log("Test:", testOperation);


allBtns = document.querySelectorAll(".numpad-button");
console.log(allBtns);
allBtns.forEach(element => {
    element.addEventListener(
        "click", () => handleInput(element.textContent, calculation)
    );
});

