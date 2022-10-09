import { showNum } from "./handlers/logicCalc";



export const addNum = () => {
  const $href = document.querySelector('.num');

  $href.addEventListener('click', showNum);
};