import { useState } from 'react';
import { Input } from '../../components/Input';
import '../../styles/todoList.scss';
import useHandleLocalTodoList from '../../hooks/useHandleLocalTodoList';

export const TodoListContainer = () => {
	const [currentTask, setCurrentTask] = useState<string>('');
	const { addTask } = useHandleLocalTodoList();

	const updateCurrentTask = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.value.length) return;
		setCurrentTask(e.target.value);
	};

	return (
		<>
			<h1>Todo List</h1>
			<div className='todoListContainer'>
				<Input onChange={updateCurrentTask} />

				<button
					onClick={() => {
						if (addTask(currentTask)) {
							setCurrentTask('');
						}
					}}
				>
					add
				</button>
			</div>
		</>
	);
};
