import { TodoType } from '../../types/todoType';
import { UpdateTask } from './UpdateTask';

interface TodoListProps {
	todoList: TodoType[];
	deleteTask: (id: number) => boolean;
	updateTask: (id: number, task: string) => boolean;
	toggleTaskCompletion: (id: number) => boolean;
}

export const TodoList = ({ todoList, deleteTask, updateTask, toggleTaskCompletion }: TodoListProps) => {
	return (
		<div>
			{todoList.map((el, idx) => {
				return (
					<div key={`${el} + ${idx}`}>
						<input
							type='checkbox'
							checked={el.isComplete}
							onChange={() => {
								toggleTaskCompletion(el.id);
							}}
						/>
						<span>{el.task}</span>
						<button onClick={() => deleteTask(el.id)}>delate</button>
						<UpdateTask id={el.id} task={el.task} onClick={updateTask} />
					</div>
				);
			})}
		</div>
	);
};
