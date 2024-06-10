import './styles.css'
import {TodoInput} from '../components/TodoInput/TodoInput';
import {TodoList} from '../components/TodoList/TodoList';
import {TodoModel} from '../models/TodoModel';
import {useReducer, useState} from 'react';
import {getRandomInt} from '../utils/getRandomInt';
import { todoReducer } from '../reducers/todoReducer';

const initialTodos: TodoModel[] = [
	{
		id: getRandomInt(),
		text: 'Полить цветы'
	},
	{
		id: getRandomInt(),
		text: 'Погулять с собакой'
	},
	{
		id: getRandomInt(),
		text: 'Прочитать книгу'
	}
]

export const App = () => {	
	//const [todos, setTodos] = useState<TodoModel[]>(initialTodos)
	const [todos, dispatch] = useReducer(todoReducer,initialTodos); 
	function addTodo(newTodo: TodoModel){
		dispatch({actionCode:'ADD',payload:newTodo});
	}

	function removeTodo(todo: TodoModel) {
		dispatch({actionCode:'DELETE',payload:todo});
	}

	return (
		<div className='container'>
			<div className='inner'>
				<TodoInput addTodo={addTodo}/>
				<TodoList todos={todos} removeTodo={removeTodo} />
			</div>
		</div>
	)
}