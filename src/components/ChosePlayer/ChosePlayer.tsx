/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import classNames from 'classnames';
import './ChosePlayer.scss';

type Props = {
  isStart: boolean;
  onSubmit: (event: React.FormEvent) => void;
  getName: (values: string[]) => void;
};

export const ChosePlayer: React.FC<Props> = (props) => {
  const { isStart } = props;
  const [query1, setQuery1] = useState<string>('');
  const [query2, setQuery2] = useState<string>('');
  const domId: string[] = ['first', 'second'];
  const [isHidden, setIsHidden] = useState<boolean>(isStart);

  const handleChangeFirstPlayer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery1(event.target.value);
  };

  const handleChangeSecondPlayer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery2(event.target.value);
  };

  return (
    <div id="popup" className={classNames('chose-player', isHidden && 'chose-player--hidden')}>
      <form
        action="#"
        className="chose-player__form form"
        onSubmit={(event) => {
          props.getName([query1, query2]);
          props.onSubmit(event);
          setIsHidden(true);
        }}
      >
        <fieldset className="form__fieldset">
          <legend><strong>Chose name: </strong></legend>
          <div className="form__item">
            <label htmlFor={domId[0]}>
              first player:
            </label>
            <input
              name="first-player"
              type="text"
              id={domId[0]}
              value={query1}
              placeholder="fist player"
              className="form__input"
              onChange={handleChangeFirstPlayer}
            />
          </div>
          <div className="form__item">
            <label htmlFor={domId[1]}>
              second player:
            </label>
            <input
              name="second-player"
              id={domId[1]}
              type="text"
              value={query2}
              placeholder="second player"
              className="form__input"
              onChange={handleChangeSecondPlayer}
            />
          </div>

          <div className="form__submit-container">
            <button type="submit" className="form__submit">Begin</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
