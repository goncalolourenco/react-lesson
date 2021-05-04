import React from "react";
import "./Item.css";

function TodoItem({ id, text, done }) {
  return (
    <li key={id} className='todo-item'>
      <span className={done ? "done" : ""}> {text}</span>
    </li>
  );
}

export default TodoItem;
