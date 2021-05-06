import React from 'react';
import TodosList from '../Todos/List/List';
import Users from '../Todos/Users/Users';

const TodosPage = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };
  return (
    <>
      <Users onClick={handleUserClick} />
      {selectedUser && <TodosList user={selectedUser} />}
    </>
  );
};

export default TodosPage;
