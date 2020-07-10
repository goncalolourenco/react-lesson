import React from 'react';
import { AuthContext } from './utils';
import './Header.css';

function Header() {
  const { auth, login, logout } = React.useContext(AuthContext);

  return (
    <header className='app-header'>
      {auth.isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </header>
  );
}

export default Header;
