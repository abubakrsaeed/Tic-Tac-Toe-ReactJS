import React from 'react';
import Header from '../_components/HeaderComponent';
import './GuidePage.css';

function GuidePage() {

    return (
        <>
            <Header />
            <div className="body">
                <div className="container box box-override">
                    <h4>How to Play?</h4>
                    <hr />
                    <p className="lead">
                        Tic-Tac -Toe (along with a lot of other games) involves looking ahead and trying to figure out what the person playing against you might do next.
                    </p>
                    <hr />
                    <h5>RULES FOR TIC-TAC-TOE</h5>
                    <ul className="lead">
                        <li>The game is played on a grid that's 3 squares by 3 squares.</li>
                        <li>You are X, your friend O. Players take turns putting their marks in empty squares.</li>
                        <li>The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.</li>
                        <li>When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.</li>
                    </ul>
                    <hr />
                    <h5>HOW CAN I WIN AT TIC-TAC-TOE?</h5>
                    <p className="lead">
                        To beat the other player (or at least tie), you need to make use of a little bit of strategy. Strategy means figuring out what you need to do to win.

                        Part of your strategy is trying to figure out how to get three Xs in a row. The other part is trying to figure out how to stop the other player from getting three Os in a row.

                        After you put an X in a square, you start looking ahead. Where's the best place for your next X? You look at the empty squares and decide which ones are good choices—which ones might let you make three Xs in a row.

                        You also have to watch where the other player puts its O. That could change what you do next. If the other player gets two Os in a row, you have to put your next X in the last empty square in that row, or the other player will win. You are forced to play in a particular square or lose the game.
                    </p>
                </div>
            </div>

        </>
    );
}

export { GuidePage };