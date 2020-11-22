import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Reducers from './redux/reducers/index';
import { AuthState } from './redux/reducers/auth';

// interface RootState {
//   isOn: boolean
//   authState: {
//     loggedIn: boolean
//   }
// }
// const mapStateToProps = (state: RootState) => ({
//   ...state
// });
// const mapDispatch = {
//   toggleOn: () => ({ type: 'TOGGLE_IS_ON' })
// }

// const connector = connect(mapStateToProps, mapDispatch)
// type PropsFromRedux = ConnectedProps<typeof connector>

// type Props = PropsFromRedux & {

// }
type AppProps = { message: string };
const App = ({ message }: AppProps) => {
  const auth = useSelector<ReturnType<typeof Reducers>, AuthState>((state) => state.authState);

  return (
    (auth.loggedIn
      ? <div className="App">
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
      </div>
      : <Redirect to="/login" />)
  )
}

export default App;
