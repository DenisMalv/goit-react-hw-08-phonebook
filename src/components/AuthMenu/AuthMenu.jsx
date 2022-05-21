import { NavLink } from 'react-router-dom';
import { RegisterLink, LoginLink, AuthContainer } from './AuthMenu.styled';
import { getIsLoggining } from 'redux/userSlice/userSlice';
import { useSelector } from 'react-redux';

export const AuthMenu = () => {
  const IsLoginning = useSelector(getIsLoggining);
  return (
    !IsLoginning && (
      <AuthContainer>
        <RegisterLink to="register">
          <span>Registration</span>
        </RegisterLink>
        <LoginLink to="login">
          <span>LogIn</span>
        </LoginLink>
      </AuthContainer>
    )
  );
};
