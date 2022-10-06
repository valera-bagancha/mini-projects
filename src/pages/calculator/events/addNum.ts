import { showNum } from "./handlers/hello";



export const addNum = () => {
  const $href = document.querySelector('.num');

  $href.addEventListener('click', showNum);
};