export const isAllBottleHaveOnlyOneColor = (bottleList) => {
  return bottleList.reduce((acc, bottle) => {
    const isAllColourSame = bottle.liquidList.every(liquid => bottle.liquidList[0].color.id === liquid.color.id);
    return acc && isAllColourSame;
  }, true);
}

export const isAllBottleEmpty = (bottleList) => {
  return bottleList.reduce((acc, bottle) => {
    const isEmpty = bottle.liquidList.length === 0;
    return acc && isEmpty;
  }, true);
}