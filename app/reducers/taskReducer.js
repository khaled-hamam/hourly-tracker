import { ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/taskActions';
import Task from '../lib/models/Task';

const initialState = [
  new Task('Use + to add a Task'),
  new Task('Swipe Right to Edit'),
  new Task('Swipe Left to Delete')
];

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, new Task(action.payload)];
    case EDIT_TASK:
      let { index, newName } = action.payload;
      index = parseInt(index);
      let newTask = state[index];
      newTask.setName(newName);
      return [...state.slice(0, index), newTask, ...state.slice(index + 1)];
    case DELETE_TASK:
      action.payload = parseInt(action.payload);
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
    default:
      return state;
  }
}

export default taskReducer;
