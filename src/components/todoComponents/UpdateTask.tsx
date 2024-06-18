import { useState } from 'react';
import { Input } from '../Input';

interface UpdateTaskProps {
	onClick: (id: number, task: string) => boolean;
	id: number;
}

export const UpdateTask = ({ id, onClick }: UpdateTaskProps) => {
	const [currentTask, setCurrentTask] = useState<string>('');

	const updateCurrentTask = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentTask(e.target.value);
	};

	return (
		<>
			<Input onChange={updateCurrentTask} />
			<button
				onClick={(e) => {
					e.preventDefault();
					if (onClick(id, currentTask)) {
						setCurrentTask('');
					} //else 는 'Failed to save to localStorage'가 찍히면서 초기화 안되도록.
				}}
			>
				update
			</button>
		</>
	);
};
