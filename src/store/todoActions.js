import { ADD_TODO, DELETE_TODO, ADD_SUBTASK, TOGGLE_STATE, UPDATE_NAME } from './types';

export const AddTodoAction = (task) => {
    return {
        type: ADD_TODO,
        payload: task
    }
}

export const DeleteTodoAction = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const AddSubtaskAction = (task) => {
    return {
        type: ADD_SUBTASK,
        payload: task
    }
}

export const ToggleStateAction = (task) => {
    return {
        type: TOGGLE_STATE,
        payload: task
    }
}

export const UpdateNameAction = (task) => {
    return {
        type: UPDATE_NAME,
        payload: task
    }
}