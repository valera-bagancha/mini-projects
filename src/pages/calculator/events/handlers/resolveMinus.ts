export const resolveMinus = ({ id, mathStr, showStr }) => {
  let newMathStr = mathStr;
  let newShowStr = showStr;

  if (mathStr !== '0') return [newMathStr, newShowStr];

  newMathStr = id;
  newShowStr = id;

  return [newMathStr, newShowStr];
};
