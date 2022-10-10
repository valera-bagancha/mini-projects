import { levels } from "./constants/levels";
import { addRedirectToMain } from "./events/addRedirectToMainPage";
import { renderLevel, renderPrices, showQuestionsAnswer } from "./events/handlers/showQuestionsAnswer";
import { nextQuestion } from "./events/nextQuestion";
import { millionaireTemplate } from "./template";

export function render() {
  const $app = document.querySelector('.app');

  $app.innerHTML = millionaireTemplate;


  addRedirectToMain();
  renderLevel(levels[0]);
  renderPrices();
}