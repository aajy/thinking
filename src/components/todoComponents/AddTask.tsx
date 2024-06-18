import { useState } from 'react';
import { Input } from '../Input';

interface AddTaskProps {
	onClick: (task: string) => boolean;
}

export const AddTask = ({ onClick }: AddTaskProps) => {
	const [currentTask, setCurrentTask] = useState<string>('');

	const updateCurrentTask = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentTask(e.target.value);
	};

	return (
		<>
			<Input value={currentTask} onChange={updateCurrentTask} />
			<button
				onClick={(e) => {
					e.preventDefault();
					if (onClick(currentTask)) {
						setCurrentTask('');
					} //else 는 'Failed to save to localStorage'가 찍히면서 초기화 안되도록.
				}}
			>
				add
			</button>
		</>
	);
};
