import React from 'react';
import { Cross, Zero } from '../SquareImages';

import './Square.scss';

type Props = {
  value: string;
  click: () => void;
};

export const Square: React.FC<Props> = (props) => {
  const { value } = props;
  let item;

  if (value === 'X') {
    item = <Cross show={value} />;
  }

  if (value === 'O') {
    item = <Zero show={value} />;
  }

  return (
    <button
      type="button"
      className="square"
      onClick={props.click}
    >
      {item}
    </button>
  );
};
