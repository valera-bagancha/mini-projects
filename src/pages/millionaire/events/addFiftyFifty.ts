import { useFiftyFiftyQlue } from "./handlers/useFiftyFiftyQlue";

export const addFiftyFifty = () => {
  const $href = document.querySelector('#fifty-fifty');

  $href.addEventListener('click', useFiftyFiftyQlue);
};