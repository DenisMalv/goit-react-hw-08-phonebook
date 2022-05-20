import { NavLink } from 'react-router-dom';

export const AuthMenu = () => {
  return (
    <div>
      <NavLink to="register">Registration</NavLink>
      <NavLink to="login">LogIn</NavLink>
    </div>
  );
};
