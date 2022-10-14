import { operators } from "../../constants/operators";

export const resolveComma = ({ id, mathStr, showStr, mathStrIncludeOperator }) => {
  let newMathStr = mathStr;
  let newShowStr = showStr;

  const operatorInMathStr = operators.find((operator) => newMathStr.substring(1).includes(operator));
  const operatorIndex = newMathStr.indexOf(operatorInMathStr, 1);

  const firstPartIncludePoint = operatorInMathStr 
    ? newMathStr.substring(0, operatorIndex).includes('.')
    : newMathStr.includes('.');

  const secondPartIncludePoint = operatorInMathStr 
    ? newMathStr.substring(operatorIndex).includes('.') 
    : false;

  if ((mathStrIncludeOperator && secondPartIncludePoint) || (firstPartIncludePoint && !mathStrIncludeOperator)) {
    console.log('hello');
    
    return [newMathStr, newShowStr];
  }
  
  newMathStr += '.';
  newShowStr += id;

  return [newMathStr, newShowStr];
};