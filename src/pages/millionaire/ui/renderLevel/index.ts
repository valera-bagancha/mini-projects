import { setUsedQlueInCurrentLevel } from "../../state/qlueServies";
import { renderPrices } from "../renderPrices";
import { renderAnswers } from "./renderAnswer";
import { renderQuestion } from "./renderQuestion";

export const renderLevel = ({question, answers}) => {
  setUsedQlueInCurrentLevel(false);

  renderQuestion(question);
  renderAnswers(answers);

  renderPrices();
}
