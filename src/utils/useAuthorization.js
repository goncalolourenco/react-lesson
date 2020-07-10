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
      permissions: ['READ'],
    });
  };

  const logout = () => {
    setAuthorization(defaultState);
  };

  return { auth: authorization, login, logout };
};

export const AuthContext = React.createContext();
