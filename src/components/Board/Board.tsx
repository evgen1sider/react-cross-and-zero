import React from 'react';
import './Board.scss';
import { Square } from '../Square';
import { BoardLines, RedLine } from '../BoardLines';

type Props = {
  squares: string[];
  click: (index: number) => void;
  index: number|null
};

export const Board: React.FC<Props> = (props) => {
  const { squares, index, click } = props;

  return (
    <div className="board">
      {squares.map((square: string, i: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <Square key={i} value={square} click={() => click(i)} />
      ))}
      <BoardLines />

      {index && <RedLine index={index} />}
    </div>
  );
};
