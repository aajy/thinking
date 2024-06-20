import { useState } from 'react';
import { GridGameBoard } from '../../components/TictactoeComponents/GridGameBoard';

export const TictactoeContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState<string>('O');
	const [winPlayer, setWinPlayer] = useState<string>('O');
	const [end, setEnd] = useState<boolean>(false);
	return (
		<div>
			<h1>Tic Tac Toe</h1>
			<h2>Chill Coding with Aajy</h2>
			<p>{`Player ${currentPlayer} turn`}</p>

			<GridGameBoard />
			<button>Reset</button>
			{end && <p>{`Player ${winPlayer} win`}</p>}
			<p></p>
		</div>
	);
};
