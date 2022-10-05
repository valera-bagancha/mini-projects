import { addRedirectToRandomEvent } from "./events/addRedirectToRandomEvent";
import { mainPageTemplate } from "./template";

export const render = () => {
  const $app = document.querySelector('.app');

  $app.innerHTML = mainPageTemplate;

  addRedirectToRandomEvent();
}