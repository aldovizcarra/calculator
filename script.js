let num1;
let num2;
let operator;
const btns = document.querySelectorAll(".buttons > *");
const display = document.querySelector("#display");
display.value = "0";

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "THIS IS NOT A NUMBER";
  }
  return num1 / num2;
}

function operate(num1, num2, operator) {
  return operator(num1, num2);
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnValue = e.target.textContent;
    const btnClass = e.target.getAttribute("class");
    updateDisplay(btnValue, btnClass);
  });
});

function updateDisplay(btnValue, btnClass) {
  if (btnClass === "reset") {
    display.value = "0";
    num1 = "";
    num2 = "";
    operator = "";
  } else if (btnClass === "equals") {
    getOperator();
    display.value = operate(num1, num2, operator);
    num1 = "";
    num2 = "";
    operator = "";
  } else if (btnClass === "operator" && operator) {
    getOperator();
    display.value = operate(num1, num2, operator);
    num1 = parseFloat(display.value);
    num2 = "";
    operator = btnValue;
  } else if (btnClass === "operator") {
    operator = btnValue;
    num1 = parseFloat(display.value);
  } else if (num2) {
    display.value += btnValue;
    num2 = parseFloat(display.value);
  } else if (operator) {
    display.value = "";
    display.value += btnValue;
    num2 = parseFloat(display.value);
  } else if (!num1) {
    display.value = "";
    display.value += btnValue;
    num1 = display.value;
  } else {
    display.value += btnValue;
  }
}

function getOperator() {
  switch (operator) {
    case "+":
      operator = add;
      break;
    case "-":
      operator = subtract;
      break;
    case "x":
      operator = multiply;
      break;
    case "/":
      operator = divide;
      break;
  }
}
