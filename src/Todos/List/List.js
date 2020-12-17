import React, { useState, useEffect } from 'react';
import './List.css';
import { nextId } from '../../utils';
import Item from '../Items/Item';
import client from '../../client';

function TodoList({ user }) {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);
      const res = await client.getUserTodos({ userId: user.id });
      setTodos(res);
      setIsLoading(false);
    };

    fetchTodos();
  }, [user]);

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

  const handleRemoveItem = (id) => {
    setTodos((todos) =>
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
            <Item key={todo.id} {...todo} onClick={handleItemClick} onRemove={handleRemoveItem} />
          ))}
        </ul>
      </div>
      {todos && todos.length > 0 && <button onClick={handleClear}>clear</button>}
    </div>
  );
}

export default TodoList;
