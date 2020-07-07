import React from 'react';
import './App.css';
import TodosList from './Todos/List/List';
import UsersList from './Todos/Users/Users';

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
