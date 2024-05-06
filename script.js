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
  return operator(parseFloat(num1), parseFloat(num2));
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnValue = e.target.textContent;
    const btnClass = e.target.getAttribute("class");
    updateDisplay(btnValue, btnClass);
  });
});

function updateDisplay(btnValue, btnClass) {
  if (btnClass === "point") {
    point.disabled = true;
  }
  if (btnClass === "reset") {
    getReset();
  } else if (btnClass === "equals") {
    getEqual();
  } else if (btnClass === "operator" && operator) {
    getOperator();
    display.value = operate(num1, num2, operator);
    // num1 = parseFloat(display.value);
    num1 = display.value;
    num2 = "";
    operator = btnValue;
    point.disabled = false;
  } else if (btnClass === "point" && operator) {
    display.value = "";
    display.value += btnValue;
    num2 = display.value;
  } else if (btnClass === "operator") {
    operator = btnValue;
    // num1 = parseFloat(display.value);
    num1 = display.value;
    point.disabled = false;
  } else if (num2) {
    display.value += btnValue;
    // num2 = parseFloat(display.value);
    num2 = display.value;
  } else if (operator) {
    display.value = "";
    display.value += btnValue;
    // num2 = parseFloat(display.value);
    num2 = display.value;
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
  point.disabled = false;
}

function getEqual() {
  getOperator();
  display.value = operate(num1, num2, operator);
  num1 = "";
  num2 = "";
  operator = "";
  point.disabled = false;
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
