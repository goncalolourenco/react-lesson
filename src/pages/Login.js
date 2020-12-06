import React from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../utils';
import './Login.css';

const Login = () => {
  const { login } = React.useContext(AuthContext);
  const history = useHistory();
  const [{ username, password }, setLoginState] = React.useState({
    username: '',
    password: '',
  });

  const handleUserChange = ({ target }) => {
    setLoginState((prevState) => ({ ...prevState, username: target.value }));
  };

  const handlePasswordChange = ({ target }) => {
    setLoginState((prevState) => ({ ...prevState, password: target.value }));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    login(username, password);
    history.push('/todos');
  };

  return (
    <form className='login-form' onSubmit={handleLogin}>
      <input
        className='form-input'
        type='text'
        placeholder='username'
        value={username}
        onChange={handleUserChange}
      />
      <input
        className='form-input'
        type='text'
        placeholder='password'
        value={password}
        onChange={handlePasswordChange}
      />
      <button type='submit'>login</button>
    </form>
  );
};

export default Login;
