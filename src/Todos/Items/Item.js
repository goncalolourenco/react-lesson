import React from 'react';
import './Item.css';

class TodoItem extends React.Component {
  handleRemoveClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const { id, onRemove } = this.props;
    onRemove && onRemove(id);
  };

  handleItemClick = () => {
    const { id, done, onClick } = this.props;

    onClick && onClick(id, !done);
  };

  render() {
    const { text, done } = this.props;

    return (
      <li className='todo-item' onClick={this.handleItemClick}>
        <span className={done ? 'done' : ''}>{text}</span>
        <button className='delete' onClick={this.handleRemoveClick}>
          X
        </button>
      </li>
    );
  }
}

export default TodoItem;
