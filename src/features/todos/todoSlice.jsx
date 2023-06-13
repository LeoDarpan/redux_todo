import { FETCH_TODOS, ADD_TODO, DELETE_TODO, ALL_FINISHED, CHANGE_STATUS, TEST, START_LOADING, END_LOADING } from '../../actionConstants';

const initialState = {todos: [], isLoading: true};

const appReducer = (state = initialState, action) => {
  let newTodos = [];
  switch(action.type) {
    case START_LOADING: 
      state = {...state, isLoading: true};
      return state;
    
    case END_LOADING:
      state = {...state, isLoading: false};
      return state;
    
    case FETCH_TODOS:
      state = {...state, todos: action.payload};
      return state;
      
    case ADD_TODO: 
      newTodos = [...state.todos, action.payload]
      state = {...state, todos: newTodos};
      return state;
    
    case DELETE_TODO:
      newTodos = state.todos.filter(todo => todo.id !== action.payload);
      state = {...state, todos: newTodos};
      return state;
  
    case CHANGE_STATUS:
      newTodos = state.todos.map(todo => {
        if(todo.id == action.payload.id) {
          todo.status = action.payload.status.status;
        }
        return todo;
      });
      state = {...state, todos: newTodos};
      return state;
    
    case ALL_FINISHED:
      state.todos = state.todos.map(todo => ({...todo, status: "finished"}));
      return state;
    
    case TEST:
    default: 
      return state;
  }
}

export default appReducer;