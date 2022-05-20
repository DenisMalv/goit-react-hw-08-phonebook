import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleImputChange = event => {
    const { name, value } = event.currentTarget;
    // eslint-disable-next-line default-case
    switch (name) {
      case 'name':
        console.log(name, value);
        setName(value);
        break;
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
    const user = { name, email, password };
    console.log('newUser RegisterForm', user);
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        <span>name</span>
        <input
          type="name"
          name="name"
          value={name}
          onChange={handleImputChange}
        />
      </label>
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
        <span>password</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleImputChange}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
