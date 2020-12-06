import React from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./utils";
import "./Header.css";

function Header() {
  const { auth, logout } = React.useContext(AuthContext);
  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <header className="app-header">
      {auth.isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </header>
  );
}

export default Header;
