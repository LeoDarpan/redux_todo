import { combineReducers } from 'redux';
import todoReducer from '../features/todos/todoSlice';

const rootReducer = combineReducers({
  todos: todoReducer
})

export default rootReducer;