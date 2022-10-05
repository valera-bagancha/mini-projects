import { redirectRandomPageHandler } from "./handlers/redirectToRandomPageHandler";

export const addRedirectToRandomEvent = () => {
  const $href = document.querySelector('#random');

  $href.addEventListener('click', redirectRandomPageHandler);
};