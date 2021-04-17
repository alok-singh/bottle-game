import { isAllBottleHaveOnlyOneColor } from "../utils/bottleUtils";
import { deepCopy } from "../utils/deepCopyObject";

export const getTopLiquidId = (bottle) => {
  return bottle.liquidList[0].color.id;
};

export const pourFromTo = (bottleList, sourceIndex, destinationIndex, maxLiquidCount) => {
  if(bottleList[sourceIndex].liquidList.length === 0) {
    return bottleList;
  }
  if(bottleList[destinationIndex].liquidList.length === maxLiquidCount) {
    return bottleList;
  }
  bottleList[destinationIndex].liquidList.push(bottleList[sourceIndex].liquidList.pop());
  return bottleList;
}

export const createState = (bottleList) => {
  return bottleList.reduce((acc, item) => {
    acc = `${acc}-${item.liquidList
      .map((liquid) => liquid.color.id)
      .join("-")}`;
    return acc;
  }, ``);
};

export const solvePuzzel = (bottleList) => {
  const visited = {};
  console.log(createState(bottleList));
};
