import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { registerAction } from '../redux/actions';

const CreateAccountPage: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const udpateName = (event:ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const udpateEmail = (event:ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const udpatePassword = (event:ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  function handleSubmit() {
    dispatch(registerAction(name, email, password));
  }

  return (
    <>
      <input type="text" placeholder="Name" onChange={udpateName} value={name} />
      <input type="text" placeholder="Email" onChange={udpateEmail} />
      <input type="text" placeholder="Password" onChange={udpatePassword} />
      <button type="submit" onClick={handleSubmit}>Criar conta</button>
    </>
  )
}

export default CreateAccountPage;