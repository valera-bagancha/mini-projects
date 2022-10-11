import { showQuestionsAnswer } from "./handlers/showQuestionsAnswer";

export const nextQuestion = () => {
  const $href = document.querySelector('.answer-parent');

  $href.addEventListener('click', showQuestionsAnswer);
};