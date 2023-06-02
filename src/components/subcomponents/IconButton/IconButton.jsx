import React from 'react';

const IconButton = (props) => {
  const { iconCode, className, handler } = props;
  return (
    <button 
      className= { className != undefined ? className + ' icon-button' : 'icon-button'}
      onClick={handler}
    >
      <span className='material-symbols-outlined'>
        {iconCode}
      </span>
    </button>
  )
}

export default IconButton;