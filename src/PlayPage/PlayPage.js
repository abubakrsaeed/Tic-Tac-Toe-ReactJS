import React, { Component } from 'react';
import './TicTacToe.css';
import Game from './Game.js';
import Header from '../_components/HeaderComponent';
import './PlayPage.css';

class PlayPage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="body">
          <div className="container box">
            <div className="App-header">
              <h2 className="text-center">Welcome to Game</h2>
            </div>
            <p className="text-center">
              <Game></Game>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export { PlayPage };
