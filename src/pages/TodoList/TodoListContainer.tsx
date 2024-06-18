import '../../styles/todoList.scss';
import useHandleLocalTodoList from '../../hooks/useHandleLocalTodoList';
import { AddTask } from '../../components/todoComponents/AddTask';
import { TodoList } from '../../components/todoComponents/TodoList';

export const TodoListContainer = () => {
	const { todoList, addTask, deleteTask, updateTask, toggleTaskCompletion } = useHandleLocalTodoList();

	return (
		<>
			<h1>Todo List</h1>
			<div className='todoListContainer'>
				<AddTask onClick={addTask} />
				<TodoList todoList={todoList} deleteTask={deleteTask} updateTask={updateTask} toggleTaskCompletion={toggleTaskCompletion} />
			</div>
		</>
	);
};
