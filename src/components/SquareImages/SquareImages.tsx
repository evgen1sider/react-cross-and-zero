import React from 'react';
import './SquareImages.scss';

type Props = {
  show: string;
};

export const Zero: React.FC<Props> = ({ show }) => (
  <div className={show === 'X' ? 'zero' : 'zero zero--show'}>
    <svg width="100" height="100">
      <circle
        r="32"
        cx="50"
        cy="50"
        stroke="grey"
        strokeWidth="9"
        fill="transparent"
      />
    </svg>
  </div>
);

export const Cross: React.FC<Props> = ({ show }) => (
  <div className={show === 'O' ? 'cross' : 'cross cross--show'}>
    <svg width="200" height="100">
      <line
        x1="10"
        y1="10"
        x2="80"
        y2="80"
        stroke="grey"
        strokeWidth="9"
      />
      <line
        x1="80"
        y1="10"
        x2="10"
        y2="80"
        stroke="grey"
        strokeWidth="9"
      />
    </svg>
  </div>
);
