import React, { useEffect, useState } from 'react';
import { Todo, Empty } from '../../components';
import { getTodos } from '../../actions/todos';
const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos =  async () => {
      const data = await fetch("http://localhost:3000/tasks")
                          .then(response  => response.json())
                          .then(data => {
                            setTodos(data);
                          })
                          .catch(error => console.log(error.message));
                  
    };
    fetchTodos();
    
    return () => {
      console.log('All cleaned up!');
    }
  }, []);

  useEffect(() => {
    const todoActions = document.querySelectorAll('.todo__actions');
    
    const activeButton = () => {
      console.log("called");
      todoActions.forEach(todoAction => {
        todoAction.querySelectorAll('.icon-button').forEach((child, index) => {
          if(child.classList.contains('active')) {
            child.parentNode.querySelector('.active-indicator').style.left = 10 + (24*index) + (10*index) + 'px'
          }
        })
      })
    }
    activeButton();
  
    return () => {
      console.log('Working?')
    }
  }, [todos])
  
  
  return (
    <section className="todo-container">
        {
          todos.length > 0 ? (
            <div className='container border'>
              {
                todos.map((todo) => (
                  <Todo todo={todo} key={todo.id}/>
                ))
              }
            </div>
          ) : (
            <Empty />
          )
        }
    </section>
  )
}

export default Todos;