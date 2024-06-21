interface BoardButtonType {
	value: string;
	isDone: boolean;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const BoardButton = ({ value, isDone, onClick }: BoardButtonType) => {
	return (
		<button className='boardButton' disabled={isDone} onClick={onClick}>
			{value}
		</button>
	);
};
