import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getState, getIsLoggining } from 'redux/userSlice/userSlice';
import { login } from 'redux/authOperations/authOperations';

import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const state = useSelector(getState);
  const loading = useSelector(getIsLoggining);
  const dispatch = useDispatch();

  const handleImputChange = event => {
    const { name, value } = event.currentTarget;
    // eslint-disable-next-line default-case
    switch (name) {
      case 'email':
        console.log(name, value);

        setEmail(value);
        break;
      case 'password':
        console.log(name, value);
        setPassword(value);
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    const userLogin = { email, password };
    console.log('user loginForm', userLogin);
    console.log('state', state);
    console.log('loading', loading);
    dispatch(login(userLogin));
    reset();
  };

  // qwertyuiqq@gmail.com
  // 1234567890qq

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        <span>email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleImputChange}
        />
      </label>
      <label>
        password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleImputChange}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

// function PrivateRoute() {
//   const isLogin = useSelector(getIsLogin);

//   return isLogin ? <Outlet /> : <Navigate to="login" />;
// }
