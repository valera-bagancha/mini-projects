let levelIndex = 0;

export const incrementLevelIndex = () => {
  levelIndex += 1;
  return levelIndex;
}

export const resetLevelIndex = () => {
  levelIndex = 0;
  return levelIndex;
}

export const getLevelIndex = () => levelIndex

