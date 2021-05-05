import React from "react";
import "./Item.css";

function TodoItem({ id, text, done, onClick, onRemove }) {

  const handleItemClick =()=> {
    onClick(id);
  }

  const handleRemoveClick =()=> {
    onRemove(id);
  }

  return (
    <li key={id} className='todo-item' onClick={handleItemClick}>
      <span className={done? "done": ""} >{text}</span>
      <button className="delete" onClick={handleRemoveClick}>X</button>
    </li>
  );
}

export default TodoItem;
