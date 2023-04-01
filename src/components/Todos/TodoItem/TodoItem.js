import styles from "./TodoItem.module.css";
import { FaChevronLeft } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteTodoAction, ToggleStateAction, UpdateNameAction } from "../../../store/todoActions.js";
import Input from "../../Input/Input";
import EditableName from "../../EditableName/EditableName";

const TodoItem = (props) => {
    const [showChildren, setShowChildren] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const dispatch = useDispatch();
    const nested = props.depth + 1;
    const [taskName, setTaskName] = useState(props.task.name);
    const [showInputEle, setShowInputEle] = useState(false);

    const toggleChildren = () => {
        setShowChildren(!showChildren);
    }

    const deleteTask = (task) => {
        dispatch(DeleteTodoAction(task));
    }

    const toggleState = (task) => {
        dispatch(ToggleStateAction(task));
    }

    const updateName = (task) => {
        setShowInputEle(false);
        dispatch(UpdateNameAction(task));
    } 

    return (
        <>
            <div className={styles['todo-item-container']} style={{marginLeft: `${nested * 30}px`}}>
                <div className={styles['todo-item-text']}>
                    <input checked={props.task.isCompleted} type="checkbox" onChange={()=>toggleState(props.task)} className={styles['todo-item-checkbox']}/>
                    <EditableName 
                        value={taskName}
                        isCompleted={props.task.isCompleted}
                        handleChange={(e) => setTaskName(e.target.value)}
                        handleEnterPress={(e) => {
                            if (e.key === 'Enter') {
                                updateName({...props.task, name: taskName});
                            }
                        }}
                        handleClick={() => setShowInputEle(true)}
                        handleBlur={() => {
                            if(taskName === '') {
                                return;
                            }
                            updateName({...props.task, name: taskName})
                        }}
                        showInputEle = {showInputEle}
                        classes = {['todo-item-name', props.task.isCompleted ? 'completed-task' : '']}
                    />
                </div>
                <div className={styles['todo-item-icons']}>
                    {showInput && 
                    <Input actionType='ADD_SUBTASK' parent={props.task} showInput={setShowInput}></Input>
                    }
                    <p className={styles['add-subtask-button']} onClick={()=>setShowInput(!showInput)}>+ Add subtask</p>
                    <div>
                        <AiFillDelete className={styles['delete-icon']} onClick={() => deleteTask(props.task)}/>
                        {props.task.children.length > 0 && <FaChevronLeft className={`${styles['arrow-icon']} ${showChildren ? styles['rotate-icon'] : ''}`} onClick={toggleChildren}/>}
                    </div>
                </div>
            </div>
            {props.task.children.length > 0 && showChildren && props.task.children.map(todo => <TodoItem key={todo.id} task={todo} depth={nested}/>)}
        </>
    );
}

export default TodoItem;