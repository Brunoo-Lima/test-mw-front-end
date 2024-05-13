import { ReactNode, createContext, useState } from 'react';

interface UserContextProps {
  isOpenModal: boolean;
  handleModal: () => void;
}

type ContextProps = {
  children: ReactNode;
};

export const Context = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: ContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const values = {
    isOpenModal,
    handleModal,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
