import { getRandomNumber } from "../../../../helpers/getRandomNumber";

export function showRandomNumber() {
  const first = document.querySelector('.first-random-number');

  const str = `${getRandomNumber(1, 1000)}`
  first.innerHTML = str;
}