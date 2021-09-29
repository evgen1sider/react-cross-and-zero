import React from 'react';
import './App.scss';
import { ChosePlayer } from './components/ChosePlayer';
import { Game } from './components/Game';

type State = {
  isStart: boolean;
  firstPlayer: string;
  secondPlayer: string;
};

export class App extends React.Component<{}, State> {
  state = {
    isStart: false,
    firstPlayer: '',
    secondPlayer: '',
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // eslint-disable-next-line no-console
    console.log('submit', event.currentTarget.id);
  };

  getNameOfPlayers = (values: string[]) => {
    // eslint-disable-next-line no-console
    console.log('App player:', values); // input value

    this.setState({
      firstPlayer: values[0],
      secondPlayer: values[1],
      isStart: true,
    });
  };

  render() {
    const { isStart, firstPlayer, secondPlayer } = this.state;

    // eslint-disable-next-line no-console
    console.log(firstPlayer, secondPlayer);

    return (
      <div className="starter">
        {!isStart ? (
          <ChosePlayer
            firstPlayer={firstPlayer}
            secondPlayer={secondPlayer}
            isStart={isStart}
            onSubmit={this.handleSubmit}
            getName={this.getNameOfPlayers}
          />
        ) : (null)}
        <Game />
      </div>
    );
  }
}
