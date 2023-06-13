import * as api from '../api/index';
import { FETCH_TODOS, ADD_TODO, DELETE_TODO, TEST, CHANGE_STATUS, START_LOADING, END_LOADING } from '../actionConstants';

export const getTodos = async (dispatch) => {
  try {
    dispatch({type: START_LOADING});
    const todos = await api.fetchTodos().then(response => response.json());
    dispatch({
      type: FETCH_TODOS, payload: todos
    });
    dispatch({type: END_LOADING});
  } catch (error) {
    console.log(error);
  }
}

export const writeTodos = (todo) => async (dispatch) => {
  try {
    const write = await api.writeTodos(todo).then(response => response.json).then(data => console.log(data));
    console.log(write);
    dispatch({
      type: ADD_TODO, payload: todo
    });
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteTodos = (id) => async (dispatch) => {
  try {
    const deleteTodo = await api.deleteTodo(id).then(response => response.json);
    console.log(deleteTodo);
    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  } catch (error) {
    console.log(error);
  }
}

export const changeStatus = (id, status) => async (dispatch) => {
  try {
    const patchTodo = await api.patchTodo(id, status);
    dispatch({
      type: CHANGE_STATUS,
      payload: {
        id, status
      }
    })
  } catch (error) {
    console.log(error.message);
  }
}