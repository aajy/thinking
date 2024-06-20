import '../../styles/tictactoe.scss';
import { useState } from 'react';
import { GridGameBoard } from '../../components/TictactoeComponents/GridGameBoard';

export const TictactoeContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState<string>('O');
	const [winPlayer, setWinPlayer] = useState<string>('O');
	const [end, setEnd] = useState<boolean>(false);
	return (
		<div className='TictactoeContainer'>
			<h1>Tic Tac Toe</h1>
			<h2>Chill Coding with Aajy</h2>
			<p>
				Player <span className={currentPlayer === 'O' ? 'player1' : 'player2'}>{currentPlayer}</span> turn
			</p>

			<GridGameBoard />
			<button className='reset'>Reset</button>
			{end && <p>{`Player ${winPlayer} win`}</p>}
			<p></p>
		</div>
	);
};
