import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route } from 'react-router-dom';
import { getIsLogin } from 'redux/userSlice/userSlice';

function PrivateRoute({ children, ...routeProps }) {
  const isLogin = useSelector(getIsLogin);
  return isLogin ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
