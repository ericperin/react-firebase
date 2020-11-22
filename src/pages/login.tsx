import React, { ChangeEvent, useState } from "react";
import { connect, ConnectedProps, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { loginAction } from "../redux/actions";
import Reducers from "../redux/reducers";
import { AuthState } from "../redux/reducers/auth";

interface RootState {
  isOn: boolean
  authState: {
    loggedIn: boolean
  }
}
const mapStateToProps = (state: RootState) => ({
  ...state
});

const mapDispatchToProps = (dispatch: any) => ({
  // loginAction: (email, password)(dispatch(loginAction(email, password)))
});

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {

}

const LoginPage = (props: Props) => {
  const auth = useSelector<ReturnType<typeof Reducers>, AuthState>((state) => state.authState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const udpateEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const udpatePassword = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  function handleSubmit() {
    dispatch(loginAction(email, password));
  }

  return (!auth.loggedIn ?
    <>
      <input type="text" placeholder="Email" onChange={udpateEmail} />
      <input type="text" placeholder="Password" onChange={udpatePassword} />
      <button type="submit" onClick={handleSubmit}>Entrar</button>
    </>
    : <Redirect to="/" />
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
