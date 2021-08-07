import React, { useState } from 'react';
import { BOARD_SIZE, getFilledBoardAtPositions } from './data';
import { deepCopy } from '../../utils/deepCopyObject';

import './styles.css';

const Board = (props) => {
  const board = props.board;
  return (
    <div className="chess-board">
      {board.map((row, rowIndex) => {
        return (
          <div className="row" key={`row-${rowIndex}`}>
            {row.map((column, columnIndex) => {
              return (
                <div
                  onClick={() => props.onClick(rowIndex, columnIndex)}
                  className={`cell ${column.filled ? `filled` : ``}`}
                  key={`cell-${column.id}`}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const Instructions = (props) => {
  return <div className="instructions"></div>;
};

const PebbleChessboard = () => {
  const initialConfig = [
    [6, 0],
    [7, 0],
    [7, 1],
  ];
  const [board, setBoard] = useState(getFilledBoardAtPositions(initialConfig));

  const onClickPebble = (row, column) => {
    if (row < 1 || column === BOARD_SIZE + 1) {
      return;
    }
    if (board[row][column].filled) {
      if (!board[row - 1][column].filled && !board[row][column + 1].filled) {
        const newBoard = deepCopy(board);
        newBoard[row][column].filled = false;
        newBoard[row - 1][column].filled = true;
        newBoard[row][column + 1].filled = true;
        setBoard(newBoard);
      }
    }
  };

  return (
    <div className="pebble-chessboard">
      <Board board={board} onClick={(row, column) => onClickPebble(row, column)} />
      <Instructions />
    </div>
  );
};

export default PebbleChessboard;
