import { useState } from 'react';
import { Input } from '../Input';

interface UpdateTaskProps {
	id: number;
	task: string;
	onClick: (id: number, task: string) => boolean;
}

export const UpdateTask = ({ id, task, onClick }: UpdateTaskProps) => {
	const [currentTask, setCurrentTask] = useState<string>(task);

	const updateCurrentTask = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentTask(e.target.value);
	};

	return (
		<>
			<Input value={currentTask} onChange={updateCurrentTask} />
			<button
				onClick={(e) => {
					e.preventDefault();
					onClick(id, currentTask);
				}}
			>
				update
			</button>
		</>
	);
};
