import React from 'react';
import './App.css';
import TodosList from './Todos/List/List';
import UsersList from './Todos/Users/Users';
import { useAuthorization, AuthContext } from './utils';
import Header from './Header';

function App() {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const authInfo = useAuthorization();

  const handleClickUser = (_, user) => {
    setSelectedUser(user);
  };

  return (
    <AuthContext.Provider value={authInfo}>
      <div className='App'>
        <Header />
        {authInfo.auth.isLoggedIn && (
          <>
            <UsersList onClick={handleClickUser} />
            <TodosList user={selectedUser} />
          </>
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
