import { BoardButton } from './BoardButton';

interface GridGameBoardType {
	board: string[];
	onClick: (index: number) => void;
}

export const GridGameBoard = ({ board, onClick }: GridGameBoardType) => {
	return (
		<div className='GridGameBoard'>
			{board.map((value, index) => (
				<BoardButton key={index} value={value} onClick={() => onClick(index)} />
			))}
		</div>
	);
};
