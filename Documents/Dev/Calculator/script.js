// Inital variables
const display = document.querySelector(".display");
const clearBtn = document.getElementById("data-all-clear");
const deleteBtn = document.getElementById("data-delete");
const equalsBtn = document.querySelector("[data-equals]");
const numberBtn = document.querySelectorAll("[data-number]");
const operationBtn = document.querySelectorAll("[data-operation]");
const previousOperand = document.querySelector("[data-previous-operand]");
const currentOperand = document.querySelector("[data-current-operand]");

numberBtn.addEventListener("click", function () {
  console.log(numberBtn.textContent);
});
