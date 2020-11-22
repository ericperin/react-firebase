import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateAccountPage from "./pages/create";
import LoginPage from "./pages/login";
import RootPage from "./App";

const router = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/create-account">Create</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/create-account">
            <CreateAccountPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <RootPage message={"Welcome!!!"} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default router;