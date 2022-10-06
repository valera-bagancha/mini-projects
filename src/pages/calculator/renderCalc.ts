import { addRedirectToMainEvent } from "./events/addRedirectToMainPageEvent";
import { calculatorTemplate } from "./template";

export function renderCalc() {
  const $app = document.querySelector('.app');

  $app.innerHTML = calculatorTemplate;

  addRedirectToMainEvent()
}