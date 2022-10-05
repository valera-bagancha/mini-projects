export const showRandomNumByInput = () => {
  const generate = document.querySelector('#second-button');

  generate.addEventListener('click', calc);
};

function calc() {
  const secondButton = document.querySelector('.second-random-number');
  const min = document.querySelector('#min') as HTMLInputElement;
  const max = document.querySelector('#max') as HTMLInputElement;
  // console.log(min.value, max.value);
  function random(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  let str = `${random(min.value, max.value)}`
  secondButton.innerHTML = str;
}

