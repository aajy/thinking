import useCheckWinner from '../../hooks/useCheckWinner';
import { BoardButton } from './BoardButton';

interface GridGameBoardType {
	board: string[];
	onClick: (index: number) => void;
}

export const GridGameBoard = ({ board, onClick }: GridGameBoardType) => {
	// 현재 승자를 체크
	const winner = useCheckWinner(board);

	return (
		<div className='GridGameBoard'>
			{board.map((value, index) => (
				<BoardButton key={index} value={value} isDone={winner === 'O' || winner === 'X' || winner === 'draw' ? true : false} onClick={() => onClick(index)} />
			))}
		</div>
	);
};
