import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Reducers from '../redux/reducers/index';
import { AuthState } from '../redux/reducers/auth';
import LoginPage from '../pages/login';
import PrivateLayout from '../layouts';
import { isValidToken } from '../redux/actions';

type Props = {
  children: React.ReactNode
}
// eslint-disable-next-line react/prop-types
const AuthProvider: React.FC<Props> = ({ children }) => {
  console.log("ch", children);
  const auth = useSelector<ReturnType<typeof Reducers>, AuthState>((state) => state.authState);
  useEffect(() => {
    isValidToken();
  }, []);

  if (auth.user && auth.validToken) {
    // axios.defaults.headres.commom['authorization'] = user.token;
    return (<PrivateLayout>{children}</PrivateLayout>);
  }

  return (<LoginPage />);
};

export default AuthProvider;
