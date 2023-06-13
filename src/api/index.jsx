export const fetchTodos = () => fetch('http://localhost:3000/tasks');

export const writeTodos = (todo) => fetch('http://localhost:3000/tasks', {
  method: "POST", 
  headers: {
    'Accept': "application/json",
    'Content-type': "application/json"
  },
  body: JSON.stringify(todo)
});

export const deleteTodo = (id) => fetch('http://localhost:3000/tasks/' + id, {
  method: 'DELETE'
});

export const patchTodo = (id, status) => fetch('http://localhost:3000/tasks/' + id, {
  method: 'PATCH',
  headers: {
    'Accept': "application/json",
    'Content-type': "application/json"
  },
  body: JSON.stringify(status)
})