export const fetchTodos = () => fetch('http://localhost:3000/tasks');
export const deleteTodo = (id) => fetch('http://localhost:3000/tasks/' + id, {method: 'DELETE'});