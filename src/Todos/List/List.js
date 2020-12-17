import React, { useState, useEffect } from 'react';
import './List.css';
import { nextId } from '../../utils';
import Item from '../Items/Item';
import client from '../../client';

function TodoList() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await client.getUserTodos({ userId: 1 });
      setTodos(res);
    };

    fetchTodos();
  }, []);

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

  const handleItemClick = (id, done) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done };
        }

        return todo;
      })
    );
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
      <div className='todos-list-container'>
        <ul className='todos-list'>
          {todos.map((todo) => (
            <Item key={todo.id} {...todo} onClick={handleItemClick} />
          ))}
        </ul>
      </div>
      {todos && todos.length > 0 && <button onClick={handleClear}>clear</button>}
    </div>
  );
}

export default TodoList;
