import { numbers } from "../../constants/numbers";
import { operators } from "../../constants/operators";
import { resolveComma } from "./resolveComma";
import { resolveEqual } from "./resolveEqual";
import { resolveMinus } from "./resolveMinus";
import { resolveNumbers } from "./resolveNumbers";
import { resolveOperator } from "./resolveOperator";
import { resolvePerсent } from "./resolvePerсent";


const screenNumber = document.querySelector('.screen-number');

console.log(screenNumber);


let mathStr = '0';
let showStr = '0';
let isPrevEqual = false;

export const eventHandler = (e) => {
  const screenNumber = document.querySelector('.screen-number');

console.log(screenNumber);
  const id = e.target.id;

  const isOperator = operators.includes(id);
  const isNumber = numbers.includes(id);

  const isLastCharOperator = operators.includes(mathStr[mathStr.length - 1]);
  const mathStrIncludeOperator = operators.some((operator) => mathStr.substring(1).includes(operator));

  if (isNumber) {
    const options = {
      id,
      mathStr,
      showStr,
      isLastCharOperator,
      isPrevEqual
    };

    const [newMathStr, newShowStr, newIsPrevEqual] = resolveNumbers(options);

    mathStr = newMathStr;
    showStr = newShowStr;

    screenNumber.innerHTML = newShowStr;

    isPrevEqual = newIsPrevEqual;
  }

  if (isOperator) {
    const options = {
      id,
      mathStr,
      showStr,
      isLastCharOperator,
      mathStrIncludeOperator
    };

    const [newMathStr, newShowStr] = resolveOperator(options);

    mathStr = newMathStr;
    showStr = newShowStr;

    screenNumber.innerHTML = newShowStr;
  }

  switch (id) {
    case '=': {
      const options = {
        mathStr,
        showStr,
        isLastCharOperator
      };

      const [newMathStr, newShowStr] = resolveEqual(options);

      mathStr = newMathStr;
      showStr = newShowStr;

      screenNumber.innerHTML = newShowStr;
  
      isPrevEqual = true;
      break;
    }
  
    case '-': {
      const options = {
        id,
        mathStr,
        showStr
      };

      const [newMathStr, newShowStr] = resolveMinus(options);

      mathStr = newMathStr;
      showStr = newShowStr;

      screenNumber.innerHTML = newShowStr;
      break;
    }

    case ',': {
      const options = {
        id,
        mathStr,
        showStr,
        mathStrIncludeOperator
      };

      const [newMathStr, newShowStr] = resolveComma(options);

      mathStr = newMathStr;
      showStr = newShowStr;

      screenNumber.innerHTML = newShowStr;
      break;
    }

    case 'AC': {
      mathStr = '0';
      showStr = '0';

      screenNumber.innerHTML = showStr;
      break;
    }

    case '%': {
      const options = {
        mathStr,
        showStr,
      };
  

      const [newMathStr, newShowStr] = resolvePerсent(options);

      mathStr = newMathStr;
      showStr = newShowStr;

      screenNumber.innerHTML = newShowStr;
      break;
    }

  }
};



