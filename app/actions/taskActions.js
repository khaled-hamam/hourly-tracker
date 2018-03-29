export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export function addTask(taskName) {
    return {
        type: ADD_TASK,
        payload: taskName
    }
}

export function editTask(index, newName) {
    return {
        type: EDIT_TASK,
        payload: {index, newName}
    }
}

export function deleteTask(index) {
    return {
        type: DELETE_TASK,
        payload: index
    }
}