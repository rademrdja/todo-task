import { Task } from "../model/Task";

export const initialState = {
    todos: [
        new Task(1, "Learn React", false, true, [], [
            new Task(1.1, "Complete React course", false, false, [1], [])
        ]),
        new Task(2, "Finish homework", true, true, [], [])
    ]
};