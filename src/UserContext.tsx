import { ReactNode, createContext, useState } from 'react';

interface UserContextProps {
  isOpenModal: boolean;
  handleModal: () => void;

  selectedCard: null;
  setSelectedCard: React.Dispatch<React.SetStateAction<null>>;

  login: null;
  setLogin: React.Dispatch<React.SetStateAction<null>>;
}

type ContextProps = {
  children: ReactNode;
};

export const Context = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: ContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [login, setLogin] = useState(null);

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const values = {
    isOpenModal,
    handleModal,
    selectedCard,
    setSelectedCard,
    login,
    setLogin,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
