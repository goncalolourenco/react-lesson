import React, { memo, useContext } from 'react';
import { AuthContext } from '../../utils';
import './Item.css';

function TodosItem({ id, text, done, onClick, onRemove }) {
  const { hasWritePermissions } = useContext(AuthContext);

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
      {hasWritePermissions() && (
        <button className='delete' onClick={handleRemoveClick}>
          X
        </button>
      )}
    </li>
  );
}

export default memo(TodosItem);
