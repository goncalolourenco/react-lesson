import React from 'react';
import '../Todos/Items/Item.css';

function TodosItem({ id, text, done, onClick, onRemove }) {
  const handleRemoveClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    onRemove && onRemove(id);
  };

  const handleItemClick = () => {
    onClick && onClick(id, !done);
  };

  return (
    <li className='todo-item' onClick={handleItemClick}>
      <span className={done ? 'done' : ''}>{text}</span>
      <button className='delete' onClick={handleRemoveClick}>
        X
      </button>
    </li>
  );
}

export default TodosItem;
