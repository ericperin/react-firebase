import React from 'react';

import logo from '../logo.svg';

type AppProps = { message: string };
const Dashboard = ({ message }: AppProps) => {

  return (<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {message}
      </a>
    </header>
  </div>)
}

export default Dashboard;
