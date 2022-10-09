import { calc } from "../../../../helpers/calc";
import { comma } from "../../constants/comma";
import { numbers } from "../../constants/numbers";
import { operators } from "../../constants/operators";
import { technicalOperators } from "../../constants/technicalOperators";

let current = [];

export function showNum(event:Event) {
  const target = event.target as HTMLElement
  const num = document.querySelector('.screen-number')

  const isOperator = operators.includes(target.id);
  const isNumber = numbers.includes(target.id);
  const isTechOperator = technicalOperators.includes(target.id);
  const lastElem = current[current.length - 1];
  const isFull = current.length === 3


  if (isFull && target.id === '%') {
    const result = calc(+current[0], +current[2], current[1]);

    num.innerHTML = `${result}`;

    current = [result, '/', '100'];

    return console.log(current);
  };

  if ((lastElem === '-' || '+' || '/' || 'x') && target.id === '%') {
    current = [current[0], '/', '100'];

    return console.log(current);
  };

  if (isFull && isOperator) {
    const result = calc(+current[0], +current[2], current[1]);

    num.innerHTML = `${result}`;

    current = [result, target.id];

    return console.log(current);
  };

  if (isFull && target.id === '=') {
    const result = calc(+current[0], +current[2], current[1]);

    num.innerHTML = `${result}`;

    current = [result, '='];
    return console.log(current);
  };

  if (target.id === 'AC') {
    current = [];

    num.innerHTML = '0';
  };

  if (isOperator && lastElem === '=') {
    current = [current[0], target.id];

    return console.log(current);
  };

  if (isNumber && lastElem === '=') {
    current = [target.id];

    num.innerHTML = `${target.id}`;

    return console.log(current);
  };

  if (!isNaN(+lastElem) && target.id === '%') {
    current.push('/', '100');

    return console.log(current);
  };

  if (target.id === '%' && lastElem === '=') {
    current = [current[0], '/', '100'];

    return console.log(current);
  };

  if (isOperator && !current.length) {
    current.push('0', target.id);

    return console.log(current);
  };

  if ((lastElem === '-' || '+' || '/' || 'x') && isOperator) {
    current = [current[0], target.id];

    return console.log(current);
  }

  if (isTechOperator && !current.length) return;
    
  if (comma.includes(target.id) && !current.length) {
    current.push('0' + target.id);

    num.innerHTML = `${current}`;

    return console.log(current);
  }

  if (isNumber && !current.length) {
    current.push(target.id);

    num.innerHTML = `${target.id}`;

    return console.log(current);
  };  

  if (lastElem[lastElem.length - 1] === '.' && comma.includes(target.id)) {
    current[current.length - 1];

    return console.log(current);
  }

  if (lastElem.includes('.') && comma.includes(target.id)) {
    current[current.length - 1]

    return console.log(current);
  }

  if ((isNumber || comma.includes(target.id)) && (lastElem[lastElem.length - 1] === '.' || !isNaN(+lastElem))) {
    const sum = lastElem + target.id

    current[current.length - 1] = sum;

    num.innerHTML = sum;

    return console.log(current);
  };


  if (isOperator && current.length === 1) {
    current.push(target.id);

    return console.log(current);
  }

  if (isNumber && isNaN(+lastElem)) {
    current.push(target.id);

    num.innerHTML = `${target.id}`;

    return console.log(current);
  }
}

