let num1;
let num2;
let operator;
const btns = document.querySelectorAll(".buttons > *");
const display = document.querySelector("#display");

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
  if (btnClass === "operator") {
    operator = btnValue;
    num1 = display.value.slice(0, -1);
    display.value = "";
  } else {
    display.value += btnValue;
  }
}
