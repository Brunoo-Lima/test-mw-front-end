import { useContext } from 'react';
import { Context } from '../../UserContext';

const useUserContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useUserContext deve ser usado dentro de um UserProvider');
  }

  return context;
};

export default useUserContext;
