import { TodoType } from '../../types/todoType';
import { UpdateTask } from './UpdateTask';

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
						<UpdateTask id={el.id} onClick={updateTask} />
					</div>
				);
			})}
		</div>
	);
};
