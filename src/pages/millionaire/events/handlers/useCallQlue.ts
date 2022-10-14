import { getRandomNumber } from "../../../../helpers/getRandomNumber";
import { levels } from "../../constants/levels";
import { getLevelIndex } from "../../state/levelServies";
import { getUsedQLueInCurrentLevel, getUsedPhoneQlue, setUsedPhoneQlue, setUsedQlueInCurrentLevel } from "../../state/qlueServies";


export const useCallQlue = () => {
  
  if (getUsedPhoneQlue() || getUsedQLueInCurrentLevel()) return;
  
  const random = getRandomNumber(0, 3);
  const levelIndex = getLevelIndex();
  const answers = levels[levelIndex].answers;
  const filteredAnswers = answers.filter((item, index) => index !== random);

  const removeElem1 = filteredAnswers[0];
  const removeElem2 = filteredAnswers[1];
  const removeElem3 = filteredAnswers[2];

  const $answer1  = document.getElementById(removeElem1.id);
  const $answer2  = document.getElementById(removeElem2.id);
  const $answer3  = document.getElementById(removeElem3.id);
  
  $answer1.remove();
  $answer2.remove();
  $answer3.remove();
 
  setUsedQlueInCurrentLevel(true);
  setUsedPhoneQlue();
}
