import React from 'react';

import './GameInfo.scss';

type Props = {
  winner: string | null;
  isDraw: string;
  firstPlayer: Player;
  secondPlayer: Player;
};

export const GameInfo: React.FC<Props> = (props) => {
  const {
    firstPlayer, secondPlayer, isDraw,
  } = props;

  const winLastRound = (isDraw === 'Draw') ? isDraw : `Win in last round: ${isDraw}`;

  return (
    <div className="game-info">
      <h3>Scores:</h3>
      <p>
        <span>{`${firstPlayer.name}: `}</span>
        <span>{firstPlayer.score}</span>
      </p>
      <p>
        <span>{`${secondPlayer.name}: `}</span>
        <span>{secondPlayer.score}</span>
      </p>
      <p>{isDraw && winLastRound}</p>
    </div>
  );
};
