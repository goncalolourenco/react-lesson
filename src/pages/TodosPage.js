import React, { useState } from 'react';
import TodoList from '../Todos/List/List';
import Users from '../Todos/Users/Users';

const TodosPage = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleUserClick = (id) => {
    setSelectedId(id);
  };

  return (
    <>
      <Users onClick={handleUserClick} />
      {selectedId && <TodoList user={{ id: selectedId }} />}
    </>
  );
};

export default TodosPage;
