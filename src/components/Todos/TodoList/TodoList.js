import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
    const todos = useSelector(state => state.todos);

    return (
        <div>
            {todos.map(todo => <TodoItem key={todo.id} task={todo} depth={-1}/>)}
            {todos.length === 0 && <p>You have no tasks to show.</p> }
        </div>
    )
}

export default TodoList;