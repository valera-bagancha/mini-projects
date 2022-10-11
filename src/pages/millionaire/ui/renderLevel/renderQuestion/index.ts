export const renderQuestion = (question: string) => {
  const $question = document.querySelector('.question');

  $question.innerHTML = question;
};