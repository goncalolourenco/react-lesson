import React from 'react';
import './List.css';
import TodoItem from '../Items/Item';
import { nextId } from '../../utils';
import client from '../../client';

class TodosList extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      todos: [],
      fetchState: {
        isLoading: false,
        error: null,
      },
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

  handleRemoveTodo = (id) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter((todo) => {
        return todo.id !== id;
      }),
    });
  };

  handleItemClick = (id, done) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done };
        }

        return todo;
      }),
    });
  };

  handleClear = () => {
    this.setState({
      todos: [],
    });
  };

  async componentDidMount() {
    const { user } = this.props;

    if (user) {
      try {
        this.setState({ fetchState: { isLoading: true, error: null } });
        const todos = await client.getUserTodos({ userId: user.id });
        this.setState({ todos, fetchState: { isLoading: false } });
      } catch (error) {
        this.setState({
          fetchState: { isLoading: false, error: 'The request has failed' },
        });
      }
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.user && prevProps.user !== this.props.user) {
      try {
        this.setState({ fetchState: { isLoading: true, error: null } });
        const todos = await client.getUserTodos({ userId: this.props.user.id });
        this.setState({ todos, fetchState: { isLoading: false } });
      } catch (error) {
        this.setState({
          fetchState: { isLoading: false, error: 'The request has failed' },
        });
      }
    }
  }

  render() {
    const {
      newTodo,
      todos,
      fetchState: { isLoading, error },
    } = this.state;

    const { user } = this.props;

    return (
      <div className='todos-container'>
        <h3>{user ? `${user.name} To-do list` : 'No user selected'}</h3>

        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}

        {user && !isLoading && !error && (
          <>
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
                  return (
                    <TodoItem
                      key={todo.id}
                      {...todo}
                      onClick={this.handleItemClick}
                      onRemove={this.handleRemoveTodo}
                    />
                  );
                })}
              </ul>

              {todos && todos.length > 0 && (
                <button onClick={this.handleClear}>clear</button>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default TodosList;
