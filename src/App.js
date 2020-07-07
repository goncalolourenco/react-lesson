import React from 'react';
import './App.css';
import TodosList from './Todos/List/List';
import UsersList from './Todos/Users/Users';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <UsersList />
        <TodosList />
      </div>
    );
  }
}

export default App;
