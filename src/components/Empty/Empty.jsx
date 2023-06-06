import React from 'react';  
import empty from '../../assets/images/empty.png';

const Empty = () => {
  return (
    <div className="empty">
      <img src={empty} alt="Empty" className='empty__image'/>
      <p className='empty__text'>All tasks complete</p>
      <p className='empty__sub-text'>Nice Work!</p>
    </div>
  )
}

export default Empty;