import '../../styles/tictactoe.scss';
import { useState } from 'react';
import { GridGameBoard } from '../../components/TictactoeComponents/GridGameBoard';
import useCheckWinner from '../../hooks/useCheckWinner';

export const TictactoeContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState<string>('O');
	const [board, setBoard] = useState<string[]>(Array(9).fill(''));

	// 게임보드버튼 클릭 이벤트 핸들러
	const handleClick = (index: number): void => {
		// 해당 칸이 비어있으면 currentPlayer로 채우기
		if (board[index] === '') {
			const newBoard = [...board];
			newBoard[index] = currentPlayer;
			setBoard(newBoard);

			// 플레이어 교체
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		}
	};

	// 게임판 초기화
	const resetGame = () => {
		setBoard(Array(9).fill(''));
		setCurrentPlayer('O');
	};

	// 현재 승자를 체크
	const winner = useCheckWinner(board);

	return (
		<div className='TictactoeContainer'>
			<h1>Tic Tac Toe</h1>
			<h2>Chill Coding with Aajy</h2>

			<p>
				Player <span className={currentPlayer === 'O' ? 'player1' : 'player2'}>{currentPlayer}</span> turn
			</p>

			<div className='GridGameBoardWrap'>
				<GridGameBoard board={board} onClick={handleClick} />
			</div>

			<button className='reset' onClick={resetGame}>
				Reset
			</button>

			<div className='status'>{winner && winner !== 'Draw' ? <p>Player {winner} wins</p> : winner ? <p>It's a draw!</p> : <p></p>}</div>
		</div>
	);
};
