import React from 'react';
import './BoardLines.scss';

const Linear: React.FC = () => (
  <svg width="480" height="24">
    <circle
      r="4"
      cx="340"
      cy="20"
      stroke="violet"
      fill="violet"
    />
    <line
      x1="340"
      y1="20"
      x2="20"
      y2="20"
      stroke="violet"
      strokeWidth="9"
    />
    <circle
      r="4"
      cx="20"
      cy="20"
      stroke="violet"
      fill="violet"
    />
  </svg>
);

export const BoardLines:React.FC = () => {
  return (
    <>
      <div className="board__linear board__linear--1">
        <Linear />
      </div>
      <div className="board__linear board__linear--2">
        <Linear />
      </div>
      <div className="board__linear board__linear--3">
        <Linear />
      </div>
      <div className="board__linear board__linear--4">
        <Linear />
      </div>
    </>
  );
};

export const RedLine: React.FC<{index: number | null}> = ({ index }) => (
  <div
    className={index === null ? 'red-line' : `red-line--${index + 1}`}
  >
    <svg width="280" height="24">
      <line
        x1="280"
        y1="20"
        x2="20"
        y2="20"
        stroke="red"
        strokeWidth="9"
      />
    </svg>
  </div>
);
