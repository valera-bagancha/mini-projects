import { getRandomNumber } from "../../../../helpers/getRandomNumber"
import { levels } from "../../constants/levels";



export const useFiftyFiftyQlue = (levelIndex: number) => {
  const firstNum = getRandomNumber(0, 3);
  const secondNum = getRandomNumber(0, 3);
  const answers = levels[levelIndex].answers;

  console.log(firstNum);
  console.log(secondNum);

}


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 

    [array[i], array[j]] = [array[j], array[i]];
  }
}