interface BoardButtonType {
	value: string;
	isDone: boolean;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const BoardButton = ({ value, isDone, onClick }: BoardButtonType) => {
	return (
		<button className={value === 'O' ? 'boardButton player1' : 'boardButton player2'} disabled={isDone} onClick={onClick}>
			{value}
		</button>
	);
};
