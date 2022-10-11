import { getRandomNumber } from "../../../../helpers/getRandomNumber"
import { shuffle } from "../../../../helpers/shuffle";
import { levels } from "../../constants/levels";
import { getLevelIndex } from "../../state/levelServies";

let usedQlue = false;

export const useFiftyFiftyQlue = () => {

if (usedQlue) return;
  const levelIndex = getLevelIndex();
  const answers = levels[levelIndex].answers;
  const correctAnswerIndex = answers.findIndex(({isCorrect}) => isCorrect);
  const filteredAnswers = answers.filter((item, index) => index !== correctAnswerIndex);
  shuffle(filteredAnswers);
  const removeElem1 = filteredAnswers[0];
  const removeElem2 = filteredAnswers[1];
  const $answer1  = document.getElementById(removeElem1.id);
  const $answer2  = document.getElementById(removeElem2.id);
  $answer1.remove();
  $answer2.remove();
     
  usedQlue = true
}
