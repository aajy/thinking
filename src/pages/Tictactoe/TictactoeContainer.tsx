import '../../styles/tictactoe.scss';
import { useState } from 'react';
import { GridGameBoard } from '../../components/TictactoeComponents/GridGameBoard';

export const TictactoeContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState<string>('O');
	const [end, setEnd] = useState<boolean>(false);
	const [board, setBoard] = useState<string[]>(Array(9).fill(''));

	// 클릭 이벤트 핸들러: 해당 칸이 비어있으면 currentPlayer로 채우기
	const handleClick = (index: number): void => {
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
		setCurrentPlayer('X');
	};

	// 승리 조건 체크 함수
	const checkWinner = () => {
		// 승리 조건들을 배열로 정의
		const lines = [
			[0, 1, 2], // 가로
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6], // 세로
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8], // 대각선
			[2, 4, 6],
		];

		// 모든 가능한 승리 조건을 순회하면서 체크
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				return board[a]; // X나 O가 3개 연속으로 있는 경우, 해당 플레이어 반환
			}
		}

		// 모든 칸이 채워졌는지 체크
		if (board.every((square) => square !== '')) {
			return 'Draw'; // 모든 칸이 채워져 있으면 무승부
		}

		return null; // 아직 승자가 없는 경우
	};

	// 현재 승자를 체크
	const winner = checkWinner();

	return (
		<div className='TictactoeContainer'>
			<h1>Tic Tac Toe</h1>
			<h2>Chill Coding with Aajy</h2>
			<p>
				Player <span className={currentPlayer === 'O' ? 'player1' : 'player2'}>{currentPlayer}</span> turn
			</p>

			<GridGameBoard board={board} onClick={handleClick} />
			<button className='reset' onClick={resetGame}>
				Reset
			</button>
			{end && <p>{`Player ${winner} win`}</p>}
			<div className='status'>{winner ? winner === 'Draw' ? <p>It's a draw!</p> : <p>Player {winner} wins!</p> : <p>Next player: {currentPlayer}</p>}</div>
		</div>
	);
};
