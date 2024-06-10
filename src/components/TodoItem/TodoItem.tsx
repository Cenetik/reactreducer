import './styles.css'
import {TodoModel} from '../../models/TodoModel';

interface TodoItemProps {
    todo: TodoModel,   
    removeTodo: (todo: TodoModel)=>void;
}

export const TodoItem = ({ todo, removeTodo }: TodoItemProps) => {
    const { id, text } = todo;

    const onDeleteTodo = () => {
        removeTodo(todo);
        // const newTodos = todos.filter((todo) => {
        //     return todo.id !== id;
        // });

        // setTodos(newTodos);
    }

    return (
        <li className='todo-item'>
            <div>
                {text}
            </div>
            <button className='todo-delete-button' onClick={onDeleteTodo}>
                удалить
            </button>
        </li>
    )
}