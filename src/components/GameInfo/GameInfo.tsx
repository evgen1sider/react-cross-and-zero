import React from 'react';

import './GameInfo.scss';

type Props = {
  winner: [string, number] | null;
  whoWin: string;
  firstPlayer: Player;
  secondPlayer: Player;
};

export const GameInfo: React.FC<Props> = (props) => {
  const {
    firstPlayer, secondPlayer, whoWin, winner,
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
        {winner && `${winner[0] === 'X' ? firstPlayer.name : secondPlayer.name} Win!!! in this round`}
      </p>
      {whoWin.length > 0
        && <p>{(whoWin === 'Draw') ? `${whoWin} in last round` : `${whoWin} win in last round`}</p>}
    </div>
  );
};
