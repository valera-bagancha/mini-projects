import { getFixedNum } from "../../../../helpers/calc";
import { replacePointToComma } from "./replacePointToComma";

export const resolveOperator = ({ id, mathStr, showStr, isLastCharOperator, mathStrIncludeOperator }) => {
  let newMathStr = mathStr;
  let newShowStr = showStr;

  if (newMathStr === '0') {
    return [newMathStr, newShowStr];
  };

  if (isLastCharOperator) {
    newMathStr = newMathStr.substring(0, mathStr.length - 1) + id;

    return [newMathStr, newShowStr];
  }

  if (mathStrIncludeOperator) {
    let result = getFixedNum(`${eval(newMathStr)}`);

    newShowStr = result.includes('.') ? replacePointToComma(result) : result;
    newMathStr = `${result}${id}`;

    return [newMathStr, newShowStr];
  }

  newMathStr += id;

  return [newMathStr, newShowStr];
};