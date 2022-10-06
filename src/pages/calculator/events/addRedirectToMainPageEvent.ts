import { redirectMainPageHandler } from "./handlers/redirectToMainPageHandler";


export const addRedirectToMainEvent = () => {
  const $href = document.querySelector('#back-to-main-page');

  $href.addEventListener('click', redirectMainPageHandler);
};