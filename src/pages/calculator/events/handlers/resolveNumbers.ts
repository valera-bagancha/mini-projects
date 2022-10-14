export const resolveNumbers = ({ id, mathStr, showStr, isLastCharOperator, isPrevEqual }) => {
  let newMathStr = mathStr;
  let newShowStr = showStr;



  if (isLastCharOperator) {
    if (newMathStr.length === 1) {
      newMathStr += id;
      newShowStr += id;

      return [newMathStr, newShowStr, isPrevEqual]
    } 

    newMathStr += id;
    newShowStr = id;

    return [newMathStr, newShowStr, isPrevEqual]
  }

  if ((isPrevEqual || newShowStr === '0') && !newMathStr.includes('.')) {
    newShowStr = id;
    newMathStr = id;

    return [newMathStr, newShowStr, false];
  }
  
  if (newShowStr.length >= 11) {
    return [mathStr, showStr, isPrevEqual]
  }

  newShowStr += id;
  newMathStr += id;

  return [newMathStr, newShowStr, isPrevEqual];
};