import React from 'react';
import { IconButton } from '../subcomponents';

const Todo = () => {
  const changeState = (e) => {
    console.log(e.target);
  };

  return (
    <div className="todo">
      <div className="todo__text">
        This is a sample text.
      </div>
      <div className="todo__actions">
        <IconButton iconCode='&#xe876;' className='finished' handler={changeState}/>
        <IconButton iconCode='&#xf726;' className='in-progress' handler={changeState}/>
        <IconButton iconCode='&#xef64;' className='pending' handler={changeState}/>
      </div>
    </div>
  )
}

export default Todo;