import React from "react";
import { nextId } from "../../utils";
import "./List.css";
import TodoItem from "../Items/Item";

function TodosList() {
  const [newTodo, setNewTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);

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
    setNewTodo("");
  };

  React.useEffect(() => {
    console.log("todos list", todos);
  }, [todos]);

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
            return <TodoItem key={todo.id} {...todo} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodosList;
