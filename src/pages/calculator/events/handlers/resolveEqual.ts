import { getFixedNum } from "../../../../helpers/calc";
import { replacePointToComma } from "./replacePointToComma";

export const resolveEqual = ({ mathStr, showStr, isLastCharOperator }) => {
  let newMathStr = mathStr;
  let newShowStr = showStr;

  if (isLastCharOperator) {
    newMathStr = parseFloat(mathStr);
  }

  let result = getFixedNum(`${eval(newMathStr)}`);

  newShowStr = result.includes('.') ? replacePointToComma(result) : result;
  newMathStr = `${result}`;

  return [newMathStr, newShowStr];
};