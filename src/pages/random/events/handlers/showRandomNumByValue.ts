import { getRandomNumber } from "../../../../helpers/getRandomNumber";

export function showRandomNumByValue() {
  const secondButton = document.querySelector('.second-random-number');
  const min = document.querySelector('#min') as HTMLInputElement;
  const max = document.querySelector('#max') as HTMLInputElement;
  const amount = document.querySelector('#get-num') as HTMLInputElement;

  if (+amount.value === 0) {
    amount.value = '1'
  }

  if (max.value < amount.value) {
    amount.value = max.value
  };

  let arr = [];

  for (let i = 0; i < 100; i++) {
    const num = getRandomNumber(+min.value, +max.value);
      if (!arr.includes(num)) {
        arr.push(num)
      } 
      if (arr.length === +amount.value) {
        break
      }
  };

  const str = arr.join(', ');

  secondButton.innerHTML = str;
}

