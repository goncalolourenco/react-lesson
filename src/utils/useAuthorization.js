import React from 'react';

const defaultState = {
  user: null,
  isLoggedIn: false,
  permissions: [],
};

export const useAuthorization = () => {
  const [authorization, setAuthorization] = React.useState(defaultState);

  const login = (username, password) => {
    setAuthorization({
      user: 'system',
      isLoggedIn: true,
      permissions: ['READ', 'WRITE'],
    });
  };

  const logout = () => {
    setAuthorization(defaultState);
  };

  const hasWritePermissions = () => {
    return (
      authorization.permissions && authorization.permissions.includes('WRITE')
    );
  };

  return { auth: authorization, login, logout, hasWritePermissions };
};

export const AuthContext = React.createContext();
