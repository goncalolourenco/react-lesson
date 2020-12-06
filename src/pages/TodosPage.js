import React from "react";

import TodosList from "../Todos/List/List";
import UsersList from "../Todos/Users/Users";
import withPrivateRoute from "../utils/withPrivateRoute";

function TodosPage() {
  const [selectedUser, setSelectedUser] = React.useState(null);

  const handleClickUser = (_, user) => {
    setSelectedUser(user);
  };

  return (
    <>
      <UsersList onClick={handleClickUser} />
      <TodosList user={selectedUser} />
    </>
  );
}

export default withPrivateRoute(TodosPage);
