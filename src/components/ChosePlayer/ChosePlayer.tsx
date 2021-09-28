import React, { useState } from 'react';
import './ChosePlayer.scss';

type Props = {
  firstPlayer: string;
  secondPlayer: string;
  onSubmit: (event: React.FormEvent) => void;
  getName: (values: string[]) => void;
};

export const ChosePlayer: React.FC<Props> = (props) => {
  const { firstPlayer, secondPlayer } = props;
  const [query1, setQuery1] = useState<string>('');
  const [query2, setQuery2] = useState<string>('');

  const handleChangeFirstPlayer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery1(event.target.value);
  };

  const handleChangeSecondPlayer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery2(event.target.value);
  };

  return (
    <div id="popup" className="chose-player">
      <form
        action="#"
        className="chose-player__form form"
        onSubmit={(event) => {
          props.getName([query1, query2]);
          props.onSubmit(event);
        }}
      >
        <label htmlFor="first-player" className="form__item">
          first player:
          <input
            name="first-player"
            type="text"
            value={query1}
            className="form__input"
            onChange={handleChangeFirstPlayer}
          />
        </label>
        <label htmlFor="second-player">
          second player:
          <input
            name="second-player"
            type="text"
            value={query2}
            className="form__input"
            onChange={handleChangeSecondPlayer}
          />
        </label>
        <button type="submit">Begin</button>
      </form>
      <div>
        <p>{firstPlayer}</p>
        <p>{secondPlayer}</p>
      </div>
    </div>
  );
};
