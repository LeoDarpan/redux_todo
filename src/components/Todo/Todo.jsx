import React from 'react';
import { IconButton } from '../subcomponents';

const Todo = (props) => {
  const {task, status} = props.todo;
  const active = status.toLowerCase().split(' ').join('-');
  
  const changeState = (e) => {
    let parent = e.target.parentNode;
    let buttons = parent.querySelectorAll('.icon-button');
    let indicator = parent.querySelector('.active-indicator');
    
    buttons.forEach((button, i) => {
      button.classList.remove('active');
      if(button == e.target) {
        button.classList.add('active');
        indicator.style.left = 10 + 24*i + 10*i + 'px';
      }
    });
  };
  
  return (
    <div className="todo">
      <div className="todo__text">
        {task}
      </div>
      <div className="todo__actions">
        <span className='active-indicator'></span>
        <IconButton iconCode='&#xe876;' className='finished' active={active} handler={changeState}/>
        <IconButton iconCode='&#xf726;' className='in-progress' active={active} handler={changeState}/>
        <IconButton iconCode='&#xef64;' className='pending' active={active} handler={changeState}/>
      </div>
    </div>
  )
}

export default Todo;