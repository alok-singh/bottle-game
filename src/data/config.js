const colors = [
  {
    id: 1,
    description: "Green",
    value:
      "linear-gradient(to right, rgba(48, 254, 183, 1), rgba(48, 254, 183, 0.5) 10%, rgba(48, 254, 183, 1))",
  },
  {
    id: 2,
    description: "Violet",
    value:
      "linear-gradient(to right, rgba(100, 44, 180, 1), rgba(100, 44, 180, 0.5) 10%, rgba(100, 44, 180, 1))",
  },
  {
    id: 3,
    description: "Orange",
    value:
      "linear-gradient(to right, rgba(242, 138, 8, 1), rgba(242, 138, 8, 0.5) 10%, rgba(242, 138, 8, 1))",
  },
  {
    id: 4,
    description: "Yellow",
    value:
      "linear-gradient(to right, rgba(254, 246, 68, 1), rgba(254, 246, 68, 0.5) 10%, rgba(254, 246, 68, 1))",
  },
  {
    id: 5,
    description: "Brown",
    value:
      "linear-gradient(to right, rgba(121, 83, 74, 1), rgba(121, 83, 74, 0.5) 10%, rgba(121, 83, 74, 1))",
  },
  {
    id: 6,
    description: "Pink",
    value:
      "linear-gradient(to right, rgba(224, 41, 124, 1), rgba(224, 41, 124, 0.5) 10%, rgba(224, 41, 124, 1))",
  },
];

const generateRandomNumber = (min, max) => {
  return Math.ceil((max - min) * Math.random());
};

const getRandomColor = () => {
  const randomIndex = generateRandomNumber(0, colors.length - 1);
  return colors[randomIndex];
};

const generateRandomLiquidList = (intervals = 10, intervalSize = 4) => {
  const newList = [...colors];
  const bigList = [];
  for(let index = 0; index < (intervals*intervalSize); index++) {
    bigList.push();
  }
};

export const config = {
  bottleList: [
    {
      id: 1,
      liquidList: [
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
      ],
    },
    {
      id: 2,
      liquidList: [
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
      ],
    },
    {
      id: 3,
      liquidList: [
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
      ],
    },
    {
      id: 4,
      liquidList: [
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
      ],
    },
    {
      id: 5,
      liquidList: [
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
      ],
    },
    {
      id: 6,
      liquidList: [
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
      ],
    },
    {
      id: 7,
      liquidList: [
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
      ],
    },
    {
      id: 8,
      liquidList: [
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
      ],
    },
    {
      id: 9,
      liquidList: [
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
      ],
    },
    {
      id: 10,
      liquidList: [
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
        {
          proportion: 0.25,
          color: getRandomColor(),
        },
      ],
    },
  ],
};
