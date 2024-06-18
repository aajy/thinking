import { TodoType } from '../../types/todoType';

interface TodoListProps {
	todoList: TodoType[];
	deleteTask: (id: number) => boolean;
	updateTask: (id: number, task: string) => boolean;
}

export const TodoList = ({ todoList, deleteTask, updateTask }: TodoListProps) => {
	return (
		<div>
			{todoList.map((el, idx) => {
				return (
					<div key={`${el} + ${idx}`}>
						<span>{el.task}</span>
						<button onClick={() => deleteTask(el.id)}>delate</button>
						{/* <button onClick={() => updateTask(el.id, el.task)}>update</button> */}
					</div>
				);
			})}
		</div>
	);
};
