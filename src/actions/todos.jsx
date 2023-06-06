import * as api from '../api/index';
import { FETCH_TODOS } from '../actionConstants';

export const getTodos = async (dispatch) => {
  try {
    const todos = await api.fetchTodos().then(response => response.json());
    dispatch({
      type: FETCH_TODOS, payload: todos
    });
  } catch (error) {
    console.log(error);
  }
}; 