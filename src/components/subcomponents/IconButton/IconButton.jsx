import React from 'react';

const IconButton = (props) => {
  const { iconCode, className, handler, active } = props;
  return (
    <button 
      className= { className != undefined && className == active ? className + ' active' + ' icon-button' : className + ' icon-button'}
      onClick={handler}
    >
      <span className='material-symbols-outlined'>
        {iconCode}
      </span>
    </button>
  )
}

export default IconButton;