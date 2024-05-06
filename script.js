let num1;
let num2;
let operator;
const btns = document.querySelectorAll(".buttons > *");
const display = document.querySelector("#display");
const point = document.querySelector(".point");
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
    const btn = e.target;
    const btnValue = e.target.textContent;
    const btnClass = e.target.getAttribute("class");
    updateDisplay(btn, btnValue, btnClass);
  });
});

function updateDisplay(btn, btnValue, btnClass) {
  if (btnClass === "point") {
    btn.disabled = true;
  }
  if (btnClass === "reset") {
    getReset();
  } else if (btnClass === "equals") {
    getEqual();
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

function getReset() {
  display.value = "0";
  num1 = "";
  num2 = "";
  operator = "";
}

function getEqual() {
  getOperator();
  display.value = operate(num1, num2, operator);
  num1 = "";
  num2 = "";
  operator = "";
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
