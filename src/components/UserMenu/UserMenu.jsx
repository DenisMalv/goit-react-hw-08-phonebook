import { useSelector, useDispatch } from 'react-redux';
import { getEmail, getName } from 'redux/userSlice/userSlice';
import { logout } from 'redux/authOperations/authOperations';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const name = useSelector(getName);
  const email = useSelector(getEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <p>{`UserName : ${name}`}</p>
      <p>{`UserEmail : ${email}`}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
          navigate('/');
        }}
      >
        Logout
      </button>
    </div>
  );
};
