import { redirectToMillionaire } from "./handlers/redirectToMillionaire";

export const addRedirectToMillionaire = () => {
  const $href = document.querySelector('#millionaire');

  $href.addEventListener('click', redirectToMillionaire);
};
