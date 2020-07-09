import React from 'react';
import './App.css';
import TodosList from './TodosHooks/List';
import UsersList from './TodosHooks/Users';
import { ApiQuery, withApiQuery } from './utils';
import client from './client';
import { fromPairs } from 'lodash';

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
        <UsersList onClick={this.handleClickUser} />
        <TodosList user={selectedUser} />
      </div>
    );
  }
}

export default App;
