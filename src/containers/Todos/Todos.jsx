import React, { useEffect } from 'react';
import { Todo, Empty } from '../../components';
import { Loader } from '../../components/subcomponents';
import { useSelector } from 'react-redux';

const Todos = () => {
  const todos = useSelector(state => state.todos.todos);
  const isLoading = useSelector(state => state.todos.isLoading);
  
  const pendingTodos = todos.filter(todo => {
    let status = todo.status.toLowerCase().split(" ").join('-');
    return status === "pending";
  });
  
  const inProgressTodos = todos.filter(todo => {
    let status = todo.status.toLowerCase().split(" ").join('-');
    return status === "in-progress";
  });
  
  const finishedTodos = todos.filter(todo => {
    let status = todo.status.toLowerCase().split(" ").join('-');
    return status === "finished";
  });
  
  useEffect(() => {
    const todoActions = document.querySelectorAll('.todo__actions');
    const activeButton = () => {
      todoActions.forEach(todoAction => {
        todoAction.querySelectorAll('.icon-button').forEach((child, index) => {
          if(child.classList.contains('active')) {
            child.parentNode.querySelector('.active-indicator').style.left = 10 + (24*index) + (10*index) + 'px'
          }
        })
      })
    }
    activeButton();
  }, [todos])

  return (
    <section className="todo-container">
        {
          true ? (
            todos.length > 0 ? (
              <div className='container border max-sized align-self-start'>
                <div className="tasks-group">
                  <h4>Pending Tasks</h4>
                  {
                    pendingTodos.length > 0 ? (
                      pendingTodos.map((todo) => (
                        <Todo todo={todo} key={todo.id}/>
                      ))
                    ) : (
                      <p>- - -</p>
                    )
                  }
                </div>
                <div className="tasks-group">
                  <h4>In Progress Tasks</h4>
                  {
                    inProgressTodos.length > 0 ? (
                      inProgressTodos.map((todo) => (
                        <Todo todo={todo} key={todo.id}/>
                      ))
                    ) : (
                      <p>- - -</p>
                    )
                  }
                </div>
                <div className="tasks-group">
                  <h4>Finished Tasks</h4>
                  {
                    finishedTodos.length > 0 ? (
                      finishedTodos.map((todo) => (
                        <Todo todo={todo} key={todo.id}/>
                      ))
                    ) : (
                      <p>- - -</p>
                    )
                  }
                </div>
              </div>
            ) : (
              <Empty />
            )
          ) : (
            <Loader />
          )
        }
    </section>
  )
}

export default Todos;