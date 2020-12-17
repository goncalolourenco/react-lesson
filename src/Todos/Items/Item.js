import React from 'react';
import './Item.css';

const Item = ({ id, text, done, onClick, onRemove }) => {
  const handleItemClick = () => {
    onClick(id, !done);
  };

  const handleRemoveClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    onRemove(id);
  };

  return (
    <li className='todo-item' onClick={handleItemClick}>
      <span className={done ? 'done' : ''}>{text}</span>
      <button className='delete' onClick={handleRemoveClick}>
        X
      </button>
    </li>
  );
};

export default Item;
