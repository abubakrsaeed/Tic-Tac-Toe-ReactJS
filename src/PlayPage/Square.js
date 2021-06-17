import React from 'react';
import './Square.css';

function Square(props) {
	return (
		<button className={`square ${props.value} ${props.winner ? 'winner' : ''}`} onClick={() => props.onClick()}>
			<label>{props.value}</label>
		</button>
	)
}
export default Square;
