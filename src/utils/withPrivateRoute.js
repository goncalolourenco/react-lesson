import React from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./useAuthorization";

const withPrivateRoute = (Component, redirectPath = "/login") => {
  const PrivateComponent = (props) => {
    const { auth } = React.useContext(AuthContext);

    if (auth.isLoggedIn) {
      return <Component {...props} />;
    }

    return <Redirect to={redirectPath} />;
  };

  return PrivateComponent;
};

export default withPrivateRoute;
