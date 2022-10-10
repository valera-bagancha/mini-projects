import { levels } from "../../constants/levels";

export function showQuestionsAnswer(event: Event) {
  const target = event.target as HTMLElement
  
} 

const generatePriceNodes = () => levels.reverse().map(({price}) => 
`<div class='price ${price.isStable ? 'big' : ''}'>${price.value}</div>`).join('');

export const renderPrices = () => {
  const $numbers = document.querySelector('.numbers');

  $numbers.innerHTML = generatePriceNodes();
}

const generateAnswerNodes = (answers) => answers.map(({text, id}) => 
  `<div id='${id}' class='answer'>${text}</div>`).join('');

const renderAnswers = (answers) => {
  const $answer = document.querySelector('.answer-parent');

  $answer.innerHTML = generateAnswerNodes(answers);
};

const renderQuestion = (question: string) => {
  const $question = document.querySelector('.question');

  $question.innerHTML = question;
};

export const renderLevel = ({question, answers}) => {
  renderQuestion(question);
  renderAnswers(answers);
}
