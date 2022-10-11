import { levels } from "../../constants/levels";
import { renderLevel } from "../../ui/renderLevel";
import { redirectToMainPage } from "./redirectToMainPage";

let levelIndex = 0;


export function showQuestionsAnswer(event: Event) {
  const target = event.target as HTMLElement
  
  const id = target.id;
  const answers = levels[levelIndex].answers;
  const answer = answers.find(item => item.id === id);
  const isStable = levels[levelIndex].price.isStable;
  const currentLevels = levels.slice(0, levelIndex + 1);
  const level = currentLevels.reverse().find(item => item.price.isStable)
  console.log(isStable);
  

  if (answer.isCorrect) {
    if (levelIndex === 14) {
      alert(`You win. ${level ? level.price.value : 0}.`);
      levelIndex = 0;
      return redirectToMainPage(event);
    }
    levelIndex = levelIndex + 1

    return renderLevel(levels[levelIndex]);
  } 
    const text =  `You are lost. Your win ${level ? level.price.value : 0}` 
    const isRestart = confirm(`${text} Do you want to restart ?`);

    if (isRestart) {
      levelIndex = 0

      return renderLevel(levels[levelIndex]);
    } 
      return redirectToMainPage(event);
} 

