import * as api from '../../api';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { IconButton } from '../subcomponents';
import { useDispatch } from 'react-redux';
import { writeTodos } from '../../actions/todos';

const Form = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showError, setShowError] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(todo.trim() != '') {
      let id = uuidv4();
      let newTodo = {"id": id, "task": todo.trim(), "status": 'pending'};
      dispatch(writeTodos(newTodo));
      setShowError(false);
      setTodo("");
    }else{
      setShowError(true);
    }
  }

  return (
    <section className="add-todo">
      <div className="container max-sized">
        <h1>Add a task</h1>
        <p>Please click on + or hit enter</p>
        <form onSubmit={handleSubmit} className='add-todo__form'>
          <span className={showCursor ? 'add-todo__cursor animate' : 'add-todo__cursor'}></span>
          <input 
            type="text" 
            value = {todo} 
            onChange={e => setTodo(e.target.value)} 
            onFocus={() => setShowCursor(false)}
            onBlur={() => setShowCursor(true)}
            className='add-todo__input'
          />
          <IconButton iconCode="&#xe145;" className={todo ? 'show add-todo__icon' : 'hide add-todo__icon'}/>
        </form>
        <p className={showError ? 'add-todo__error show' : 'add-todo__error hide'}>Add a todo first!</p>
      </div>
    </section>
  )
};

export default Form;