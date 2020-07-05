import React from 'react';
import './App.css';
import TodosList from './Todos/List/List';
import UsersList from './Todos/Users/Users';
import useAuthorization, { AuthContext } from './utils/useAuthorization';
import Header from './Header';
// import ApiQuery from './utils/ApiQuery';
import client from './client';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedUser: null,
    };
  }

  handleClickUser = (_, user) => {
    this.setState({ selectedUser: user });
  };

  render() {
    const { selectedUser } = this.state;

    return (
      <div className='App'>
        {/* <ApiQuery fetchFunction={client.getUsers}>
          {(users, loading) => (
            <UsersList users={users} isLoading={loading} onClick={this.handleClickUser} />
          )}
        </ApiQuery> */}
        {/* <UsersList fetchFunction={client.getUsers} onClick={this.handleClickUser} /> */}
        {/* <ApiQuery
          fetchFunction={selectedUser ? client.getUserTodos : null}
          params={{ userId: selectedUser && selectedUser.id }}
        >
          {(todos, loading, error) => ( */}
        {/* <TodosList user={selectedUser} /> */}
        {/* )}
        </ApiQuery> */}

        <UsersList onClick={this.handleClickUser} />
        <TodosList user={selectedUser} />
      </div>
    );
  }
}

function Appp() {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const auth = useAuthorization();

  const handleClickUser = (_, user) => {
    setSelectedUser(user);
  };

  return (
    <AuthContext.Provider value={auth}>
      <div className='App'>
        <Header />
        {auth.auth.isLoggedIn && (
          <>
            <UsersList
              fetchFunction={client.getUsers}
              onClick={handleClickUser}
            />
            <TodosList user={selectedUser} />
          </>
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default Appp;
