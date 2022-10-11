import { generateAnswerNodes } from "./generateAnswerNodes";

export const renderAnswers = (answers) => {
  const $answer = document.querySelector('.answer-parent');

  $answer.innerHTML = generateAnswerNodes(answers);
};