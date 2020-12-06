import React, { useCallback, useContext } from "react";
import "./List.css";
import TodoItem from "../Items/Item";
import { nextId, useQuery, AuthContext } from "../../utils";
import client from "../../client";

function TodosList({ user }) {
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState("");
  const { hasWritePermissions } = useContext(AuthContext);

  const handleInputChange = (event) => {
    const { value } = event.target;

    setNewTodo(value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    setTodos([...todos, { id: nextId(), text: newTodo, done: false }]);
    setNewTodo("");
  };

  const handleRemoveTodo = useCallback((id) => {
    setTodos((todos) =>
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  }, []);

  const handleItemClick = useCallback((id, done) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done };
        }

        return todo;
      })
    );
  }, []);

  const handleClear = () => {
    setTodos([]);
  };

  const { data: todosData, isLoading, error } = useQuery(
    user && client.getUserTodos,
    {
      userId: user && user.id,
    }
  );

  React.useEffect(() => {
    if (todosData) {
      setTodos(todosData);
    }
  }, [todosData]);

  return (
    <div className="todos-container">
      <h3>{user ? `${user.name} To-do list` : "No user selected"}</h3>

      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {user && !isLoading && !error && (
        <>
          {hasWritePermissions() && (
            <form className="todos-form">
              <input
                className="flex-fullwidth"
                type="text"
                placeholder="new task"
                value={newTodo}
                onChange={handleInputChange}
              />
              <button type="submit" onClick={handleAddTodo} disabled={!newTodo}>
                add
              </button>
            </form>
          )}
          <div className="todos-list-container">
            <ul className="todos-list">
              {todos.map((todo) => {
                return (
                  <TodoItem
                    key={todo.id}
                    {...todo}
                    onClick={handleItemClick}
                    onRemove={handleRemoveTodo}
                  />
                );
              })}
            </ul>

            {todos && todos.length > 0 && (
              <button onClick={handleClear}>clear</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default TodosList;
