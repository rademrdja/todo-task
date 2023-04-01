import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Input.module.css";
import { AddSubtaskAction, AddTodoAction } from "../../store/todoActions.js";
import { Task } from "../../model/Task";
import { ADD_TODO } from "../../store/types";

const Input = ({actionType, parent, showInput}) => {
    const [taskName, setTaskName] = useState('');
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(false);
        if (taskName === "") {
            setError(true);
            return;
        }
        if (actionType === ADD_TODO) {
            const newTodo = new Task(Math.random(), taskName, false, false, [], []);
            dispatch(AddTodoAction(newTodo));
        } else {
            const newTodo = new Task(Math.random(), taskName, false, false, [...parent.parentsId, parent.id], []);
            dispatch(AddSubtaskAction(newTodo));
            showInput(false);
        }
        setTaskName('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
                value={taskName} 
                placeholder="Insert new task name" 
                onChange={event => {
                    setError(false); 
                    setTaskName(event.target.value);
                }} 
                className={`${styles['input-field']} ${error ? styles['input-field-error'] : ''}`}
            />
            <button type="submit" className={styles['input-button']}>ADD TASK</button>
        </form>
    );
}

export default Input;