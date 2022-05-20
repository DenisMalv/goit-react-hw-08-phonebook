import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLogin } from 'redux/userSlice/userSlice';

const PublicRoute = ({ children }) => {
  const isLogin = useSelector(getIsLogin);
  return !isLogin ? children : <Navigate to="/" />;
};

export default PublicRoute;
