import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton } from '../subcomponents';
import { changeStatus, deleteTodos } from '../../actions/todos';

const Todo = memo((props) => {
  const dispatch = useDispatch();
  const {task, status, id} = props.todo;
  const active = status.toLowerCase().split(' ').join('-');
  
  const handleChange = (e) => {
    let parent = e.target.parentNode;
    let buttons = parent.querySelectorAll('.icon-button');
    let indicator = parent.querySelector('.active-indicator');
    let id = e.target.parentNode.parentNode.id;
    let newStatus = {"status": e.target.getAttribute('status')};
    
    buttons.forEach((button, i) => {
      button.classList.remove('active');
      if(button == e.target) {
        button.classList.add('active');
        indicator.style.left = 10 + 24*i + 10*i + 'px';
      }
    });

    dispatch(changeStatus(id, newStatus));
    
  };

  const handleDelete = async (e) => {
    dispatch(deleteTodos(id));
  }
  
  return (
    <div className="todo" id={id}>
      <div className="todo__text">
        <span>{task}</span>
      </div>
      <div className="todo__actions">
        <span className='active-indicator'></span>
        <IconButton iconCode='&#xe876;' className='finished' active={active} handler={handleChange} status='finished'/>
        <IconButton iconCode='&#xf726;' className='in-progress' active={active} handler={handleChange} status='in-progress'/>
        <IconButton iconCode='&#xef64;' className='pending' active={active} handler={handleChange} status='pending'/>
        <IconButton iconCode='&#xe5c9;' className='delete' handler={handleDelete} />
      </div>
    </div>
  )
});

export default Todo;