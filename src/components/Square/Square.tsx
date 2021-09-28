import React from 'react';

import './Square.scss';

type Props = {
  value: string;
  click: () => void;
};

export const Square: React.FC<Props> = (props) => {
  const { value } = props;

  return (
    <button
      type="button"
      className="square"
      onClick={props.click}
    >
      {value}
    </button>
  );
};
