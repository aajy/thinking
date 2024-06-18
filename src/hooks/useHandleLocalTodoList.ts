import { useEffect, useState } from 'react';
import { TodoType } from '../types/todoType';

const useHandleLocalTodoList = () => {
	const [todoList, setTodoList] = useState<TodoType[]>([]);

	// localStorage에 저장된 todoList가 있으면 가져옴
	useEffect(() => {
		const storedTodoList = localStorage.getItem('todoList');
		if (storedTodoList) {
			setTodoList(JSON.parse(storedTodoList));
		}
	}, []);

	// localStorage에 저장하는 함수
	const saveTodoListToLocalStorage = (updatedList: TodoType[]): boolean => {
		try {
			localStorage.setItem('todoList', JSON.stringify(updatedList));
		} catch (error) {
			console.error('Failed to save to localStorage', error);
			return false;
		}
		return true;
	};

	//localStorage에 새로운 task저장 후 결과 boolean값 반환
	const addTask = (task: string, deadline?: number): boolean => {
		const newTask: TodoType = {
			id: Date.now(), // 예시로 타임스탬프를 사용한 ID 생성
			task,
			isComplete: false,
			deadline: deadline || 1,
		};

		const updatedList = [...todoList, newTask];
		setTodoList(updatedList);
		if (!saveTodoListToLocalStorage(updatedList)) {
			return false;
		}
		console.log('updatedList: ', updatedList);
		return true;
	};

	//localStorage에 특정 task삭제 후 결과 boolean값 반환
	const deleteTask = (id: number): boolean => {
		const updatedList = todoList.filter((item) => item.id !== id);
		setTodoList(updatedList);
		if (!saveTodoListToLocalStorage(updatedList)) {
			return false;
		}
		return true;
	};

	//localStorage에 특정 task의 완료 boolean값 저장 후 결과 boolean값 반환
	const toggleTaskCompletion = (id: number): boolean => {
		const updatedList = todoList.map((item) => (item.id === id ? { ...item, isComplete: !item.isComplete } : item));
		setTodoList(updatedList);
		if (!saveTodoListToLocalStorage(updatedList)) {
			return false;
		}
		return true;
	};

	return {
		todoList,
		addTask,
		deleteTask,
		toggleTaskCompletion,
	};
};

export default useHandleLocalTodoList;
