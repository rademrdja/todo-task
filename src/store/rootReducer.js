import { initialState } from "./initialState";
import { ADD_TODO, DELETE_TODO, ADD_SUBTASK, TOGGLE_STATE, UPDATE_NAME } from './types';

const rootReducer = (state = initialState, action) => {
    let parent;
    switch (action.type) {
        case ADD_TODO:
            return { 
                ...state, 
                todos: [...state.todos, action.payload]
            };
        case DELETE_TODO:
            parent = state.todos.find(todo => todo.id === action.payload.parentsId[0]);
            if (action.payload.parentsId.length > 0) {
                for(let i = 1; i < action.payload.parentsId.length; i++) {
                    parent = parent.children.find(todo => todo.id === action.payload.parentsId[i]);
                }
                parent.children = parent.children.filter(todo => todo.id !== action.payload.id);
            } else {
                state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
            }
            return {
                ...state,
                todos: [...state.todos]
            };
        case TOGGLE_STATE:
            parent = state.todos.find(todo => todo.id === action.payload.parentsId[0]);
            if (action.payload.parentsId.length > 0) {
                    for (let i = 1; i < action.payload.parentsId.length; i++) {
                        parent = parent.children.find(todo => todo.id === action.payload.parentsId[i]);
                    }
                    parent.children = parent.children.map(todo => todo.id === action.payload.id ? { ...todo, isCompleted: !todo.isCompleted} : todo);
            } else {
                state.todos = state.todos.map(todo => todo.id === action.payload.id ? { ...todo, isCompleted: !todo.isCompleted} : todo);
            }
            return {
                ...state,
                todos: [...state.todos]
            }
        case ADD_SUBTASK:
            parent = state.todos.find(todo => todo.id === action.payload.parentsId[0]);
            if (action.payload.parentsId.length > 1) {
                for(let i = 1; i < action.payload.parentsId.length; i++) {
                    parent = parent.children.find(todo => todo.id === action.payload.parentsId[i]);
                }
                parent.children.push(action.payload);
            } else {
                parent.children.push(action.payload);
            }
            return {
                ...state,
                todos: [...state.todos]
            };
        case UPDATE_NAME:
            parent = state.todos.find(todo => todo.id === action.payload.parentsId[0]);
            if (action.payload.parentsId.length > 0) {
                for(let i = 1; i < action.payload.parentsId.length; i++) {
                    parent = parent.children.find(todo => todo.id === action.payload.parentsId[i]);
                }
                parent.children = parent.children.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo, name: action.payload.name
                        }
                    } else {
                        return todo;
                    }
                });
            } else {
                state.todos = state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo, name: action.payload.name
                        }
                    } else {
                        return todo;
                    }
                });
            }
            return {
                ...state,
                todos: [...state.todos]
            }; 
        default:
            return state;
    }
} 

export default rootReducer;