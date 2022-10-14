import { useCallQlue } from "./handlers/useCallQlue";

export const addCallQlue = () => {
  const $href = document.querySelector('#call');
  
  
  $href.addEventListener('click', useCallQlue);
};