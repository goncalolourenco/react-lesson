import React from 'react';
import './Item.css';

class TodoItem extends React.Component {
  handleRemoveClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const { id } = this.props;
  };

  render() {
    const { text, done } = this.props;

    return (
      <li className='todo-item'>
        <span className={done ? 'done' : ''}>{text}</span>
        <button className='delete' onClick={this.handleRemoveClick}>
          X
        </button>
      </li>
    );
  }
}

export default TodoItem;
