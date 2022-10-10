import { showQuestionsAnswer } from "./handlers/showQuestionsAnswer";

export const nextQuestion = () => {
  const $href = document.querySelector('.answer');

  $href.addEventListener('click', showQuestionsAnswer);
};