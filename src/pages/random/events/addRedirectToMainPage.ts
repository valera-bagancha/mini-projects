import { redirectToMainPage } from "./handlers/redirectToMainPage";

export const addRedirectToMain = () => {
  const $href = document.querySelector('#back-to-main-page');

  $href.addEventListener('click', redirectToMainPage);
};