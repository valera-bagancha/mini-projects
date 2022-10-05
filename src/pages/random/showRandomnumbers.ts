  export const showRandomNumbers = () => {
  const $button = document.querySelector('#first-button');

  $button.addEventListener('click', calcRandomNumbers);
};

  function calcRandomNumbers() {
  const first = document.querySelector('.first-random-number');
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  let str = `${random(1, 1000)}`
  first.innerHTML = str;
}
