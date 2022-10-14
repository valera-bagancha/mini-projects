import { levels } from "../constants/levels";
import { addCallQlue } from "../events/addCallqlue";
import { addFiftyFifty } from "../events/addFiftyFifty";
import { addRedirectToMain } from "../events/addRedirectToMainPage";
import { nextQuestion } from "../events/nextQuestion";
import { millionaireTemplate } from "../template";
import { renderLevel } from "./renderLevel";
import { renderPrices } from "./renderPrices";

export const render = () => {
  const $app = document.querySelector('.app');

  $app.innerHTML = millionaireTemplate;


  addRedirectToMain();
  renderLevel(levels[0]);
  renderPrices();
  nextQuestion();
  addFiftyFifty();
  addCallQlue();
}