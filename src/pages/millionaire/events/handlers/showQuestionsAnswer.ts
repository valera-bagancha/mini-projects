import { levels } from "../../constants/levels";
import { getLevelIndex, incrementLevelIndex, resetLevelIndex } from "../../state/levelServies";
import { renderLevel } from "../../ui/renderLevel";
import { redirectToMainPage } from "./redirectToMainPage";




export function showQuestionsAnswer(event: Event) {
  const target = event.target as HTMLElement
  
  const id = target.id;
  const levelIndex = getLevelIndex();
  const answers = levels[levelIndex].answers;

  const answer = answers.find(item => item.id === id);

  const currentLevels = levels.slice(0, levelIndex + 1);

  const level = currentLevels.reverse().find(item => item.price.isStable);

  
console.log(answer);
console.log(levelIndex);


  if (answer.isCorrect) {
    if (levelIndex === 14) {
      alert(`You win. ${level ? level.price.value : 0}.`);
      resetLevelIndex()
      return redirectToMainPage(event);
    }
    const updatedLevelIndex = incrementLevelIndex()

    return renderLevel(levels[updatedLevelIndex]);
  } 
    const text =  `You are lost. Your win ${level ? level.price.value : 0}` 
    const isRestart = confirm(`${text} Do you want to restart ?`);

    if (isRestart) {
      const updateLevelIndex = resetLevelIndex()

      return renderLevel(levels[updateLevelIndex]);
    } 
      return redirectToMainPage(event);
} 

