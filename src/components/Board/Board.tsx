import React from 'react';
import './Board.scss';
import { Square } from '../Square';
import { BoardLines } from '../BoardLines';

type Props = {
  squares: string[];
  click: (index: number) => void;
};

export const Board: React.FC<Props> = (props) => {
  const { squares, click } = props;

  return (
    <div className="board">
      {squares.map((square: string, i: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <Square key={i} value={square} click={() => click(i)} />
      ))}
      <BoardLines />
    </div>
  );
};
