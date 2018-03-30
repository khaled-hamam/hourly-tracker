import { ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/taskActions';

const initialState = ['Task 1', 'Task 2', 'Task 3'];

function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        case EDIT_TASK:
            let {index, newName} = action.payload;
            index = parseInt(index);
            return [
                ...state.slice(0, index),
                newName,
                ...state.slice(index + 1)
            ];
        case DELETE_TASK:
            action.payload = parseInt(action.payload);
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ];
        default:
            return state;
    }
}

export default taskReducer;