import React from 'react';

import './GameInfo.scss';

type Props = {
  winner: [string, number] | null;
  isDraw: string;
  firstPlayer: Player;
  secondPlayer: Player;
};

export const GameInfo: React.FC<Props> = (props) => {
  const {
    firstPlayer, secondPlayer, isDraw, winner,
  } = props;

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
      <p>
        {winner && `${winner[0]} Win!!! in this round`}
      </p>
      {isDraw.length > 0
        && <p>{(isDraw === 'Draw') ? `${isDraw} in last round` : `${isDraw} win in last round`}</p>}
    </div>
  );
};
