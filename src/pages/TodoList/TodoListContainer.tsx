import '../../styles/todoList.scss';
import useHandleLocalTodoList from '../../hooks/useHandleLocalTodoList';
import { AddTask } from '../../components/todoComponents/AddTask';

export const TodoListContainer = () => {
	const { addTask } = useHandleLocalTodoList();

	return (
		<>
			<h1>Todo List</h1>
			<div className='todoListContainer'>
				<AddTask onClick={addTask} />
			</div>
		</>
	);
};
