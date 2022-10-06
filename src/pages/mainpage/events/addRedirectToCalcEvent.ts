import { redirectToCalcHandler } from "./handlers/redirectToCalcHandler";

export const addRedirectToCalcEvent = () => {
  const calculator = document.querySelector('#calculator');

  calculator.addEventListener('click', redirectToCalcHandler);
};

