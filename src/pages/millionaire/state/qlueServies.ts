let usedPhoneQlue = false;
let usedFiftyFiftyQlue = false;
let usedQlueInCurrentLevel = false;

export const setUsedQlueInCurrentLevel = (isUsed: boolean) => {
  usedQlueInCurrentLevel = isUsed;
};

export const getUsedQLueInCurrentLevel = () => usedQlueInCurrentLevel;

export const setUsedPhoneQlue = () => {
  usedPhoneQlue = true;

  return usedPhoneQlue;
};

export const setUsedFiftyFiftyQlue = () => {
  usedFiftyFiftyQlue = true;

  return usedFiftyFiftyQlue;
};

export const getUsedPhoneQlue = () => usedPhoneQlue;

export const getUsedFiftyFiftyQlue = () => usedFiftyFiftyQlue;

export const resetBothUseQlue = () => {
  usedPhoneQlue = false;
  usedFiftyFiftyQlue = false;
};