import { TodoModel } from '../../models/TodoModel';
import {TodoItem} from '../TodoItem/TodoItem';
import './styles.css'

interface TodoListProps {
    todos?: TodoModel[],
    removeTodo: (todo:TodoModel)=>void;
}

export const TodoList = ({ todos, removeTodo }: TodoListProps) => {
    return (
        <ul className='list'>
            {todos?.map((todo: TodoModel) =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                />
            )}
        </ul>
    )

}