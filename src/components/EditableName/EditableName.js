import styles from "./EditableName.module.css";

const EditableName = (props) => {
  return (
    <div>
      {props.showInputEle ? (
          <input 
            type="text"
            value={props.value}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            autoFocus
            className={styles['input-field']}
            onKeyDown={props.handleEnterPress}
          />
          ) : (
          <span 
            onClick={props.handleClick}
            className={`${props.isCompleted ? styles['completed-task'] : ''}`}
          >
            {props.value}
          </span>
        )
      }
      </div>
  );
}

export default EditableName;