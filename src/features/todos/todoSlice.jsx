import {FETCH_TODO, ADD_TODO, DELETE_TODO, ALL_FINISHED, CHANGE_STATUS} from '../../actionConstants';

const initialState = [];

const addID = () => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TODO: 
      return [...state, action.payload];
      
    case ADD_TODO: 
      let id = addID;
      let newTodo = {id, ...action.payload};
      return [newTodo, ...state];
    
    case DELETE_TODO:
      return state.filter(todo.id !== action.payload);
  
    case CHANGE_STATUS:
      return state.map(todo => {
        if(todo.id === action.payload.id)
          todo.status = action.payload.status;
        return todo;
      });
    
    case ALL_FINISHED:
      return state.map(todo => ({...todo, status: "finished"}));
    
    default: 
      return state;
  }
}

export default appReducer;