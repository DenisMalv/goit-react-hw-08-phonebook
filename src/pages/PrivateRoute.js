import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIsLogin } from 'redux/userSlice/userSlice';
import { getIsLoggining } from 'redux/userSlice/userSlice';

function PrivateRoute({ children }) {
  const isLogin = useSelector(getIsLogin);
  const isLoginning = useSelector(getIsLoggining);
  return (
    <>
      {isLogin && children}
      {!isLogin && !isLoginning && (
        <h2>
          Please <Link to="/login">LogIn</Link>
        </h2>
      )}
    </>
  );
}

export default PrivateRoute;
