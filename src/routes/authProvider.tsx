import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Reducers from '../redux/reducers/index';
import { AuthState } from '../redux/reducers/auth';
import LoginPage from '../pages/login';
import App from '../App';
import { isValidToken } from '../redux/actions';

// eslint-disable-next-line react/prop-types
const AuthProvider: React.FC = ({ children }) => {
  const auth = useSelector<ReturnType<typeof Reducers>, AuthState>((state) => state.authState);
  console.log(auth);
  useEffect(() => {
    isValidToken();
  }, []);

  if (auth.user && auth.validToken) {
    // axios.defaults.headres.commom['authorization'] = user.token;
    return (<App>{children}</App>);
  }

  return (<LoginPage />);
};

export default AuthProvider;
