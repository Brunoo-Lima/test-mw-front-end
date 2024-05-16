import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useUserContext from '../hook/useUserContext';

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useUserContext();

  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
