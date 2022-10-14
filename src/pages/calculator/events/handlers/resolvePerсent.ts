export const resolvePerсent = ({mathStr, showStr}) => {
  let newMathStr = mathStr;
  let newShowStr = showStr;

  if (newMathStr === '0') {
    return [newMathStr, newShowStr];
  };

  if (!isNaN(+newMathStr)) {
    newMathStr = `${newMathStr / 100}`;
    newShowStr = newMathStr;

    return [newMathStr, newShowStr];
  };

  return [newMathStr, newShowStr];
}