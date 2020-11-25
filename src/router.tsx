import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import CreateAccountPage from './pages/create';
import Dashboard from './pages/dashboard';
import LoginPage from './pages/login';
import RootPage from './routes/authProvider';

const router = () => (
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
        <Route path="/dashboard">
          <Dashboard message="Oi" />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default router;
