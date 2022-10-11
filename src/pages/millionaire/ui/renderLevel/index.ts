import { renderAnswers } from "./renderAnswer";
import { renderQuestion } from "./renderQuestion";

export const renderLevel = ({question, answers}) => {
  renderQuestion(question);
  renderAnswers(answers);
}
