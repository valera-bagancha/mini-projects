import { redirectToCalc } from "./handlers/redirectToCalc";

export const addRedirectToCalc = () => {
  const calculator = document.querySelector('#calculator');

  calculator.addEventListener('click', redirectToCalc);
};

