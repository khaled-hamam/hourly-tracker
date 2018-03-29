import { ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/taskActions';

const initialState = [];

function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        case EDIT_TASK:
        // TODO: Implementation
            return {
                ...state
            };
        case DELETE_TASK:
        // TODO: Implementation
            return {
                ...state
            };
        default:
            return state;
    }
}

export default taskReducer;