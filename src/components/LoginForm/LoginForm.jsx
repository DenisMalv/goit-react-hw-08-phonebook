import { useState } from 'react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    reset();
  };

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
