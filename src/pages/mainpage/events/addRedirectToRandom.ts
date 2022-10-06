import { redirectRandomPage } from "./handlers/redirectToRandom";

export const addRedirectToRandom = () => {
  const $href = document.querySelector('#random');

  $href.addEventListener('click', redirectRandomPage);
};