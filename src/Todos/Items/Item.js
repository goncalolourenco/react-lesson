import React from 'react';
import './Item.css';

const Item = ({ id, text, done, onClick }) => {
  const handleItemClick = () => {
    onClick(id, !done);
  };

  return (
    <li className='todo-item' onClick={handleItemClick}>
      <span className={done ? 'done' : ''}>{text}</span>
      <button className='delete'>X</button>
    </li>
  );
};

export default Item;
