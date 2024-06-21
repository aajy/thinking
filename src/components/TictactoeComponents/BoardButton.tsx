interface BoardButtonType {
	value: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const BoardButton = ({ value, onClick }: BoardButtonType) => {
	return (
		<button className='boardButton' onClick={onClick}>
			{value}
		</button>
	);
};
