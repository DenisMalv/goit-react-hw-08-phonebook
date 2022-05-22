import { useSelector, useDispatch } from 'react-redux';
import { getName } from 'redux/userSlice/userSlice';
import { logout } from 'redux/authOperations/authOperations';
import { useNavigate } from 'react-router-dom';
import { UserMenuContainer, UserName, LogOutButton } from './UserMenu.styled';

export const UserMenu = () => {
  const name = useSelector(getName);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <UserMenuContainer>
      <UserName>
        UserName : <span>{name}</span>
      </UserName>

      <LogOutButton
        type="button"
        onClick={() => {
          dispatch(logout());
          navigate('/');
        }}
      >
        <span>Logout</span>
      </LogOutButton>
    </UserMenuContainer>
  );
};
