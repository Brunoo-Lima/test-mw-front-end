import { NavLink } from 'react-router-dom';
import { Wrapper, Container, Logo, Navbar, UserProfile } from './styles/Header';
import Profile from '/img/profile.svg';
import { useContext } from 'react';
import { Context } from '../../../UserContext';

const Header = () => {
  const context = useContext(Context);
  const { logOut } = context!;

  return (
    <Wrapper>
      <Container>
        <Logo>Marvel</Logo>

        <Navbar>
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
