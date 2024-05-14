import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../../UserContext';

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const context = useContext(Context);
  const { login } = context!;

  if (login) {
    return children;
  } else if (login === false) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }
};

export default ProtectedRoute;
