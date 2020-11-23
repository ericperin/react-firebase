import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Reducers from '../redux/reducers/index';
import { AuthState } from '../redux/reducers/auth';
import LoginPage from '../pages/login';
import App from '../App';
import { isValidToken } from '../redux/actions';

const AuthProvider: React.FC = ({ children }) => {
  const auth = useSelector<ReturnType<typeof Reducers>, AuthState>((state) => state.authState);
  console.log(auth);
  useEffect(() => {
    isValidToken();
  }, []);

  if (auth.user && auth.validToken) {
    // axios.defaults.headres.commom['authorization'] = user.token;
    return (<App>{children}</App>)
  }
  else {
    return (<LoginPage />)
  }
}

export default AuthProvider;
