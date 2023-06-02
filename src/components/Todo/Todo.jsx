import React from 'react';
import { IconButton } from '../subcomponents';

const Todo = () => {
  const changeState = (e) => {
    const buttons = document.querySelectorAll('.icon-button');
    const indicator = document.querySelector('.active-indicator');
    for(let [index, button] of buttons.entries()) {
      button.classList.remove('active');
      if(button.classList == e.target.classList) {
        button.classList.add('active');
        indicator.style.left = 10 + (24*index) + (10*index) + 'px';
      }
    }
  };

  return (
    <div className="todo">
      <div className="todo__text">
        This is a sample text.
      </div>
      <div className="todo__actions">
        <span className='active-indicator'></span>
        <IconButton iconCode='&#xe876;' className='finished active' handler={changeState}/>
        <IconButton iconCode='&#xf726;' className='in-progress' handler={changeState}/>
        <IconButton iconCode='&#xef64;' className='pending' handler={changeState}/>
      </div>
    </div>
  )
}

export default Todo;