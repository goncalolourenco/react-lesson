import React from 'react';
import { nextId } from '../../utils';
import './List.css';
import TodoItem from '../Items/Item';
import client from '../../client';

function TodosList({ user }) {
  const [newTodo, setNewTodo] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);
      const newTodos = await client.getUserTodos({ userId: user.id });
      setTodos(newTodos);
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

    setTodos([
      ...todos,
      {
        id: nextId(),
        text: newTodo,
        done: false,
      },
    ]);
    setNewTodo('');
  };

  const handleItemClick = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
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

  const handleClear = () => {
    setTodos([]);
  };

  React.useEffect(() => {
    console.log('todos list', todos);
  }, [todos]);

  if (isLoading) {
    return <div>is loading...</div>;
  }

  return (
    <div className='todos-container'>
      <h3>To-do list</h3>

      <form className='todos-form'>
        <input
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
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                {...todo}
                onClick={handleItemClick}
                onRemove={handleRemoveItem}
              />
            );
          })}
        </ul>
        {todos.length > 0 && <button onClick={handleClear}>clear</button>}
      </div>
    </div>
  );
}

export default TodosList;
