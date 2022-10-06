import { getRandomNumber } from "../../../../helpers/getRandomNumber";

export function showRandomNumByValue() {
  const secondButton = document.querySelector('.second-random-number');
  const min = document.querySelector('#min') as HTMLInputElement;
  const max = document.querySelector('#max') as HTMLInputElement;

  const str = `${getRandomNumber(+min.value, +max.value)}`;

  secondButton.innerHTML = str;
}
