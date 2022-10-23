import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import "./timerscript.js";
import { dateCalcForm } from "./switch.js";
import "./style.css";
import chunk from 'lodash/chunk';

console.log(chunk(['a', 'b', 'c', 'd'], 2));

const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();
  
  let { firstDate, secondDate } = event.target.elements;
  firstDate = firstDate.value, 
  secondDate = secondDate.value;
  
  if (firstDate && secondDate) {
    const diff = diffDates(firstDate, secondDate);
    dateCalcResult.innerHTML = diffToHtml(diff); 
    } 
  else dateCalcResult.innerHTML = formatError(
    "Для расчета промежутка необходимо заполнить оба поля"
  );
}
