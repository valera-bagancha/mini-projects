import { addNum } from "./events/addNum";
import { addRedirectToMainPage } from "./events/addRedirectToMainPage";
import { eventHandler } from "./events/handlers/logicCalc";
import { calculatorTemplate } from "./template";

export function render() {
  const $app = document.querySelector('.app');

  $app.innerHTML = calculatorTemplate;

  addRedirectToMainPage();
  addNum();
}