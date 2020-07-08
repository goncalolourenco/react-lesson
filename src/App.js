import React from 'react';
import './App.css';
import TodosList from './Todos/List/List';
import UsersList from './Todos/Users/Users';
import { ApiQuery } from './utils';
import client from './client';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedUser: null,
    };
  }

  handleClickUser = (_, user) => {
    this.setState({
      selectedUser: user,
    });
  };

  render() {
    const { selectedUser } = this.state;

    return (
      <div className='App'>
        <ApiQuery fetchFunction={client.getUsers}>
          {(users, loading) => (
            <UsersList
              onClick={this.handleClickUser}
              users={users}
              isLoading={loading}
            />
          )}
        </ApiQuery>

        <ApiQuery
          fetchFunction={selectedUser ? client.getUserTodos : null}
          params={{ userId: selectedUser && selectedUser.id }}
        >
          {(todos, loading, error) => (
            <TodosList
              user={selectedUser}
              todosData={todos}
              isLoading={loading}
              error={error}
            />
          )}
        </ApiQuery>
      </div>
    );
  }
}

export default App;
