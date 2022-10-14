import { addRedirectToMain } from "./events/addRedirectToMainPage";
// import { addShowRandomNumber } from "./events/addShowRandomNumber";
import { addShowRandomNumberByValue } from "./events/addShowRandomNumberByValue";
import { randomTemplate } from "./template";

export function render() {
  const $app = document.querySelector('.app');

  $app.innerHTML = randomTemplate;

  addRedirectToMain();
  // addShowRandomNumber();
  addShowRandomNumberByValue();
}