import { levels } from "../../constants/levels";

export const generatePriceNodes = () => [...levels].reverse().map(({price}) => 
`<div class='price ${price.isStable ? 'big' : ''}'>${price.value}</div>`).join('');