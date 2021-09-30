import React, { useState } from 'react';
import './Game.scss';
import { Board } from '../Board';
import { GameInfo } from '../GameInfo/GameInfo';
import { calculateWinner } from '../../scripts/helper';

type Props = {
  firstPlayer: Player;
  secondPlayer: Player;
  addScores: (x: number, o: number) => void;
};

export const Game: React.FC<Props> = (props) => {
  const { firstPlayer, secondPlayer } = props;
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [playerOneScore, setPlayerOneScore] = useState<number>(firstPlayer.score);
  const [playerTwoScore, setPlayerTwoScore] = useState<number>(secondPlayer.score);
  const [hosWin, setIsDraw] = useState<string>('');
  const winner: [string, number] | null = calculateWinner(board);
  let x: number = playerOneScore;
  let o: number = playerTwoScore;

  const restart = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    props.addScores(x, o);
  };

  const checkBoard = (arr: string[]) => {
    for (let i = 0; i < arr.length; i += 1) {
      const el = arr[i];

      if (el === null) {
        return false;
      }
    }

    return true;
  };

  const handleClick = (index: number) => {
    const boardCopy = [...board];

    if (winner) {
      if (winner[0] === 'X') {
        setPlayerOneScore(x += 1);
        setIsDraw(firstPlayer.name);
        restart();
      }

      if (winner[0] === 'O') {
        setPlayerTwoScore(o += 1);
        setIsDraw(secondPlayer.name);
        restart();
      }
    }

    if (winner || checkBoard(boardCopy)) {
      restart();
      if (!winner) {
        setIsDraw('Draw');
      }

      return;
    }

    if (!boardCopy[index]) {
      boardCopy[index] = xIsNext ? 'X' : 'O';
    }

    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="game">
      <div className="game__board">
        <Board squares={board} index={winner} click={handleClick} />

        <GameInfo
          isDraw={hosWin}
          winner={winner}
          firstPlayer={firstPlayer}
          secondPlayer={secondPlayer}
        />
      </div>
    </div>
  );
};
