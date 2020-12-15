import React, { useState } from 'react';
import './List.css';

function TodoList() {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;

    setNewTodo(value);
  };

  return (
    <div className='todos-container'>
      <form className='todos-form'>
        <input
          name='newTodo'
          className='flex-fullwidth'
          type='text'
          placeholder='new task'
          value={newTodo}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default TodoList;
