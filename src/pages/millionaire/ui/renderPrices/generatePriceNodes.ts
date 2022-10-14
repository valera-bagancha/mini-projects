import { levels } from "../../constants/levels";
import { getLevelIndex } from "../../state/levelServies";



export const generatePriceNodes = () => {
  const levelIndex = getLevelIndex();

  return [...levels].reverse().map(({price},index, arr) =>
    `<div class='price ${price.isStable ? 'big' : ''} ${levelIndex >= arr.length - index ? 'is-active' : '' }'>${price.value}</div>`).join('');
}
