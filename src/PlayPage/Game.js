import React from 'react';
import Board from './Board';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { result: squares[a], squares: [a, b, c] };
    }
  }
  return null;
}

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0
    };
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if ((winner && winner.result) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
    console.log("squares", squares, winner);
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner && winner.result) {
      status = 'Winner: ' + winner.result;
    } else {
      if(this.state.history[this.state.history.length - 1].squares.every(s => s)) {
        status = 'Draw';
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
    }


    if(this.state.isDraw) {
      status = 'Game Draw';
    }

    return (
      <div className="game">
        <div className="game-info">
          <a className="text-danger" onClick={() => {this.jumpTo(0); render()}}>Reset Game</a>
          <div>{status}</div>
        </div>
        <div className="game-board">
          <Board squares={current.squares} winnerSquares={winner ? winner.squares : []} onClick={(i) => this.handleClick(i)} />
        </div>
      </div>
    );
  }
}
export default Game;