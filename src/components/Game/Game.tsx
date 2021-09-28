import React, { useState } from 'react';
import './Game.scss';
import { Board } from '../Board';
import { GameInfo } from '../GameInfo/GameInfo';
import { calculateWinner } from '../../scripts/helper';

export const Game: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index:number) => {
    const boardCopy = [...board];

    if (winner || boardCopy[index]) {
      return;
    }

    boardCopy[index] = xIsNext ? 'X' : 'O';

    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button
        type="button"
        className="game__start-button"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        New Game
      </button>
    );
  };

  return (
    <div className="game">
      { startNewGame()}
      <Board squares={board} click={handleClick} />
      <GameInfo winner={winner} isWinnerX={xIsNext} />
    </div>
  );
};
