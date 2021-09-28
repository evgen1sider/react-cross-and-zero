import React from 'react';
import './GameInfo.scss';

type Props = {
  winner: string | null;
  isWinnerX: boolean;
};

export const GameInfo: React.FC<Props> = (props) => {
  const { winner, isWinnerX } = props;

  return (
    <div className="game-info">
      <p>
        {winner ? `Winner is ${winner} ` : `Now turn:  ${(isWinnerX ? 'X' : 'O')}`}
      </p>
    </div>
  );
};
