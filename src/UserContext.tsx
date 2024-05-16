import { FormEvent, ReactNode, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserProps {
  name: string;
  password: string;
}

export interface CardProps {
  name: string;
  imgURL: string;
  description?: string;
  appearances?: string[];
  assessments: string[];
  available?: string[];
  year?: number;
  releaseYear?: number;
}

export interface UserContextProps {
  isOpenModal: boolean;

  openModal: (character: CardProps) => void;
  closeModal: () => void;

  modalData: CardProps | null;

  user: UserProps;

  userLogin: (e: FormEvent) => void;
  handleChangeEvents: (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => void;

  logOut: () => void;
}

type ContextProps = {
  children: ReactNode;
};

export const Context = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: ContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState<CardProps | null>(null);
  const [user, setUser] = useState<UserProps>({
    name: '',
    password: '',
  });

  const navigate = useNavigate();

  const openModal = (character: CardProps) => {
    setModalData(character);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setModalData(null);
  };

  const userLogin = (e: FormEvent) => {
    e.preventDefault();

    if (user && user.name && user.password) {
      setUser({
        name: user.name,
        password: user.name,
      });

      localStorage.setItem('username', user.name);
      localStorage.setItem('password', user.password);
      navigate('conta/characters');
    }
  };

  const logOut = () => {
    setUser({
      name: '',
      password: '',
    });

    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');
    navigate('/');
  };

  const handleChangeEvents = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const { value } = e.target;
    setUser({ ...user, [fieldName]: value });
  };

  const values = {
    isOpenModal,
    openModal,
    closeModal,
    modalData,
    user,
    userLogin,
    handleChangeEvents,
    logOut,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
