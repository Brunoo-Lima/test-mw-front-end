import {
  Wrapper,
  LogoHeader,
  Container,
  Navbar,
  UserProfile,
} from './styles/Header';
import Profile from '/img/profile.svg';

import { NavLink } from 'react-router-dom';
import useUserContext from '../../hook/useUserContext';

const Header = () => {
  const { logOut } = useUserContext();

  return (
    <Wrapper>
      <Container>
        <LogoHeader className="animate__slideInLeft">Marvel</LogoHeader>

        <Navbar className="animate__fadeInDown">
          <NavLink to="conta/characters">Personagens</NavLink>
          <NavLink to="conta/movies">Filmes</NavLink>
          <NavLink to="conta/comics">Hqs</NavLink>
          <UserProfile>
            <img src={Profile} alt="Foto do usuário" />
            <button onClick={logOut}>
              <p>Sair</p>
            </button>
          </UserProfile>
        </Navbar>
      </Container>
    </Wrapper>
  );
};

export default Header;
