import { eventHandler } from "./handlers/logicCalc";

export const addNum = () => {
  
  const parent = document.querySelector('.num');
  
  parent.addEventListener('click', eventHandler);
}