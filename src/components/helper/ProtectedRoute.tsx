import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../../UserContext';

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const context = useContext(Context);
  const { user } = context!;

  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
