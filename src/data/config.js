export const TOTAL_BOTTLES = 14;
export const TOTAL_ROWS = 2;
export const MAX_LIQUID_COUNT = 6;

const colors = [
  {
    id: 1,
    description: 'Green',
    value: 'linear-gradient(to right, rgba(48, 254, 183, 1), rgba(48, 254, 183, 0.4) 10%, rgba(48, 254, 183, 1))',
  },
  {
    id: 2,
    description: 'Violet',
    value: 'linear-gradient(to right, rgba(100, 44, 180, 1), rgba(100, 44, 180, 0.4) 10%, rgba(100, 44, 180, 1))',
  },
  {
    id: 3,
    description: 'Orange',
    value: 'linear-gradient(to right, rgba(242, 138, 8, 1), rgba(242, 138, 8, 0.4) 10%, rgba(242, 138, 8, 1))',
  },
  {
    id: 4,
    description: 'Yellow',
    value: 'linear-gradient(to right, rgba(254, 246, 68, 1), rgba(254, 246, 68, 0.4) 10%, rgba(254, 246, 68, 1))',
  },
  {
    id: 5,
    description: 'Brown',
    value: 'linear-gradient(to right, rgba(121, 83, 74, 1), rgba(121, 83, 74, 0.4) 10%, rgba(121, 83, 74, 1))',
  },
  {
    id: 6,
    description: 'Pink',
    value: 'linear-gradient(to right, rgba(224, 41, 124, 1), rgba(224, 41, 124, 0.4) 10%, rgba(224, 41, 124, 1))',
  },
  {
    id: 7,
    description: 'Red',
    value: 'linear-gradient(to right, rgba(255, 1, 4, 1), rgba(255, 1, 4, 0.4) 10%, rgba(255, 1, 4, 1))',
  },
];

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomColor = () => {
  const randomIndex = generateRandomNumber(0, colors.length - 1);
  return colors[randomIndex];
};

const getNewColorList = (totalColorsRequired, colors) => {
  let count = colors.length;
  const newColors = [];
  while (count > 0) {
    if (totalColorsRequired % count === 0) {
      break;
    }
    count--;
  }
  while (count > 0) {
    newColors.push(colors[count - 1]);
    count--;
  }
  return newColors;
};

const generateRandomLiquidList = (listLength, totalArrays, colors) => {
  const proportion = Math.floor(100000 / listLength) / 100000;
  const newColors = getNewColorList(listLength * totalArrays, colors);
  const width = Math.floor(100 / (TOTAL_BOTTLES / TOTAL_ROWS));
  let newList = [];
  for (let index = 0; newList.length < totalArrays * listLength; index++) {
    newList = [...newList, ...newColors];
  }
  const bottleList = [];
  for (let bottleIndex = 0; bottleIndex < totalArrays; bottleIndex++) {
    const liquidList = [];
    for (let liquidIndex = 0; liquidIndex < listLength; liquidIndex++) {
      const randomNumber = generateRandomNumber(0, newList.length - 1);
      const color = newList[randomNumber];
      newList.splice(randomNumber, 1);
      liquidList.push({ proportion, color });
    }
    bottleList.push({ id: bottleIndex, liquidList, width });
  }
  return bottleList;
};

export const config = {
  bottleList: [
    ...generateRandomLiquidList(MAX_LIQUID_COUNT, TOTAL_BOTTLES - 2, colors),
    {
      id: TOTAL_BOTTLES - 1,
      width: Math.floor(100 / (TOTAL_BOTTLES / TOTAL_ROWS)),
      liquidList: [],
    },
    {
      id: TOTAL_BOTTLES,
      width: Math.floor(100 / (TOTAL_BOTTLES / TOTAL_ROWS)),
      liquidList: [],
    },
  ],
};
