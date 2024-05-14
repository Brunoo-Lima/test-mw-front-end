import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  createContext,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

interface UserProps {
  name: string;
  password: string;
}

interface UserContextProps {
  isOpenModal: boolean;
  handleModal: () => void;

  selectedCard: null;
  setSelectedCard: React.Dispatch<React.SetStateAction<null>>;

  user: UserProps;
  setUser: React.Dispatch<React.SetStateAction<UserProps>>;

  userLogin: (e: FormEvent) => void;
  handleChange: (field: 'name' | 'password') => void;

  logOut: () => void;
}

type ContextProps = {
  children: ReactNode;
};

export const Context = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: ContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [user, setUser] = useState<UserProps>({
    name: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
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
      // setIsLoggedIn(true);
    }
  };

  const handleChange =
    <T extends keyof UserProps>(field: T) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setUser((prevUser) => ({
        ...prevUser!,
        [field]: event.target.value,
      }));
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

  const values = {
    isOpenModal,
    handleModal,
    selectedCard,
    setSelectedCard,
    user,
    setUser,
    userLogin,
    handleChange,
    logOut,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
