
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ isAuth, redirectPath = '/', children }) {
  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
}

