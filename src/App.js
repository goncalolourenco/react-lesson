import React from 'react';
import './App.css';
import TodosList from './Todos/List/List';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <TodosList />
      </div>
    );
  }
}

export default App;
