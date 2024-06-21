const useCheckWinner = (board: string[]): string | null => {
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

export default useCheckWinner;
