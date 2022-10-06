import { renderCalc } from "../../../calculator/renderCalc";

export const redirectToCalcHandler = (event: Event) => {
  event.preventDefault();
  
  renderCalc()
};


