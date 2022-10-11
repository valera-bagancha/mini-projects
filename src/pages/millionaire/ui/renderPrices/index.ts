import { generatePriceNodes } from "./generatePriceNodes";

export const renderPrices = () => {
  const $numbers = document.querySelector('.numbers');

  $numbers.innerHTML = generatePriceNodes();
}