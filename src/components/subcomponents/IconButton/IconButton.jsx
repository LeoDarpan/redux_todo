import React from 'react';

const IconButton = (props) => {
  const { iconCode, className, handler, active, status } = props;
  if(status !== undefined)
    return (  
      <button 
        className= { className != undefined && className == active ? className + ' active' + ' icon-button' : className ? className + ' icon-button' : 'icon-button'}
        onClick={handler}
        status={status}
      >
        <span className='material-symbols-outlined'>
          {iconCode}
        </span>
      </button>
  ) 
  else 
    return (  
      <button 
        className= { className != undefined && className == active ? className + ' active' + ' icon-button' : className ? className + ' icon-button' : 'icon-button'}
        onClick={handler}
      >
        <span className='material-symbols-outlined'>
          {iconCode}
        </span>
      </button>
    )
}

export default IconButton;