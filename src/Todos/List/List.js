import React, { useState } from 'react';
import './List.css';
import { nextId } from '../../utils';
import Item from '../Items/Item';

function TodoList() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;

    setNewTodo(value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: nextId(), text: newTodo, done: false }]);
    setNewTodo('');
  };

  const handleClear = () => {
    setTodos([]);
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
        <button type='submit' onClick={handleAddTodo} disabled={!newTodo}>
          add
        </button>
      </form>
      {todos.map((todo) => (
        <Item key={todo.id} {...todo} />
      ))}
      {todos && todos.length > 0 && <button onClick={handleClear}>clear</button>}
    </div>
  );
}

export default TodoList;
