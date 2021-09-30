import React from 'react';
import './App.scss';
import { ChosePlayer } from './components/ChosePlayer';
import { Game } from './components/Game';

type State = {
  isStart: boolean;
  firstPlayer: Player;
  secondPlayer: Player;
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    isStart: false,
    firstPlayer: {
      name: 'player1',
      score: 0,
    },
    secondPlayer: {
      name: 'player2',
      score: 0,
    },
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  getNameOfPlayers = (values: string[]) => {
    if (values[0].length > 0) {
      this.setState({
        firstPlayer: {
          name: values[0],
          score: 0,
        },
      });
    }

    if (values[1].length > 0) {
      this.setState({
        secondPlayer: {
          name: values[1],
          score: 0,
        },
      });
    }
  };

  getScores = (x: number, o: number) => {
    this.setState((curentState) => ({
      firstPlayer: {
        name: curentState.firstPlayer.name,
        score: x,
      },
      secondPlayer: {
        name: curentState.secondPlayer.name,
        score: o,
      },
      isStart: curentState.isStart,
    }));
  };

  render() {
    const { isStart, firstPlayer, secondPlayer } = this.state;

    // eslint-disable-next-line no-console
    console.log(firstPlayer, secondPlayer);

    return (
      <div className="starter">
        {!isStart ? (
          <ChosePlayer
            isStart={isStart}
            onSubmit={this.handleSubmit}
            getName={this.getNameOfPlayers}
          />
        ) : (null)}
        <Game
          firstPlayer={firstPlayer}
          secondPlayer={secondPlayer}
          addScores={this.getScores}
        />
      </div>
    );
  }
}
