import { addRedirectToMain } from "./events/addRedirectToMainPage";
import { millionaireTemplate } from "./template";

export function render() {
  const $app = document.querySelector('.app');

  $app.innerHTML = millionaireTemplate;

  addRedirectToMain();
}