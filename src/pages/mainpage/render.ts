import { addRedirectToCalc } from "./events/addRedirectToCalc";
import { addRedirectToMillionaire } from "./events/addRedirectToMillionaire";
import { addRedirectToRandom } from "./events/addRedirectToRandom";
import { mainPageTemplate } from "./template";

export const render = () => {
  const $app = document.querySelector('.app');

  $app.innerHTML = mainPageTemplate;

  addRedirectToRandom();
  addRedirectToCalc();
  addRedirectToMillionaire();
}