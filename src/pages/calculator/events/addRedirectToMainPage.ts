import { redirectMainPage } from "./handlers/redirectToMainPage";


export const addRedirectToMainPage = () => {
  const $href = document.querySelector('#back-to-main-page');

  $href.addEventListener('click', redirectMainPage);
};