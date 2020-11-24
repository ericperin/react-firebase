import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { loginAction } from '../redux/actions';
import Reducers from '../redux/reducers';
import { AuthState } from '../redux/reducers/auth';

const LoginPage = () => {
  const auth = useSelector<ReturnType<typeof Reducers>, AuthState>((state) => state.authState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const udpateEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const udpatePassword = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  function handleSubmit() {
    dispatch(loginAction(email, password));
  }

  return (!auth.validToken
    ? (
      <>
        <input type="text" placeholder="Email" onChange={udpateEmail} />
        <input type="text" placeholder="Password" onChange={udpatePassword} />
        <button type="submit" onClick={handleSubmit}>Entrar</button>
      </>
    )
    : <Redirect to="/" />
  );
};

export default LoginPage;
