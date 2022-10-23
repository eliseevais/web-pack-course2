export const dateCalcForm = document.getElementById("datecalc");

const checkbox = document.querySelector(".input-checkbox");
const text = document.querySelector(".text");
const timer = document.getElementById("timerform");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    dateCalcForm.classList.add("hidden");
    timer.classList.remove("hidden");
    text.textContent = "Переключиться на калькулятор дат";
  } else {
    timer.classList.add("hidden");
    dateCalcForm.classList.remove("hidden");
    text.textContent = "Переключиться на таймер";
  }
});