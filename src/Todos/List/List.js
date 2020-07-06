import React from 'react';
import './List.css';
import TodoItem from '../Items/Item';
import { nextId } from '../../utils';

class TodosList extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      todos: [],
    };
  }

  handleInputChange = (event) => {
    const { value } = event.target;

    this.setState({ newTodo: value });
  };

  handleAddTodo = (event) => {
    event.preventDefault();
    const { todos, newTodo } = this.state;

    this.setState({
      todos: [...todos, { id: nextId(), text: newTodo, done: false }],
      newTodo: '',
    });
  };

  render() {
    const { newTodo, todos } = this.state;

    return (
      <div className='todos-container'>
        <h3>Todos list</h3>

        <form className='todos-form'>
          <input
            className='flex-fullwidth'
            type='text'
            placeholder='new task'
            value={newTodo}
            onChange={this.handleInputChange}
          />
          <button
            type='submit'
            onClick={this.handleAddTodo}
            disabled={!newTodo}
          >
            add
          </button>
        </form>

        <div className='todos-list-container'>
          <ul className='todos-list'>
            {todos.map((todo) => {
              return <TodoItem key={todo.id} {...todo} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodosList;
