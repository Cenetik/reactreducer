import './styles.css'
import {TodoModel} from '../../models/TodoModel';
import {ChangeEvent, FormEvent, useState} from 'react';
import {getRandomInt} from '../../utils/getRandomInt';

interface TodoInputProps {
   // todos?: TodoModel[],
   // setTodos: (todos: TodoModel[]) => void;
    addTodo: (newTodo:TodoModel)=>void;
}

export const TodoInput = ({ addTodo }: TodoInputProps) => {

    const [todoText, setTodoText] = useState<string>('');

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value);
    };

    const onAddTodo = (e: FormEvent) => {
        e.preventDefault()
        if (todoText !== '') {
            setTodoText('');
            addTodo({
                         id: getRandomInt(),
                         text: todoText
                     });
            // setTodos([
            //     ...todos,
            //     {
            //         id: getRandomInt(),
            //         text: todoText
            //     }
            // ]);
        }
    }
    return (
        <form onSubmit={onAddTodo} className='todo-form'>
            <input
                type='text'
                className='todo-input'
                placeholder='Введите todo...'
                onChange={onInputChange}
                value={todoText}
            />
            <button type='submit' className='todo-submit-button'>
                Добавить
            </button>
        </form>
    )
}