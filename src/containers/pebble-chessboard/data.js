export const BOARD_SIZE = 8;

export const boardConfig = (size) =>
  new Array(size).fill(0).map((row, rowIndex) => {
    return new Array(size).fill(0).map((cell, cellIndex) => {
      return {
        id: rowIndex * size + (cellIndex + 1),
        filled: false,
      };
    });
  });

export const getFilledBoardAtPositions = (filled = []) => {
  const newBoard = boardConfig(BOARD_SIZE);
  filled.forEach(([row, column]) => {
    newBoard[row][column].filled = true;
  });
  return newBoard;
};
