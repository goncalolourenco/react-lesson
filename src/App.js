import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { useAuthorization, AuthContext } from "./utils";
import Header from "./Header";
import TodosPage from "./pages/TodosPage";
import Login from "./pages/Login";

function App() {
  const authInfo = useAuthorization();

  return (
    <Router>
      <AuthContext.Provider value={authInfo}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Redirect to="/todos" />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/todos">
              <TodosPage />
            </Route>
          </Switch>
        </div>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
