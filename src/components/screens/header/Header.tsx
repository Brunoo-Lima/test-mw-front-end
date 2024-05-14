import { NavLink, Navigate } from 'react-router-dom';
import { Wrapper, Container, Logo, Navbar, UserProfile } from './styles/Header';
import Profile from '/img/profile.svg';
import { useState } from 'react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Wrapper>
      <Container>
        <Logo>Marvel</Logo>

        <Navbar>
          <ul>
            <NavLink to="conta/characters">Personagens</NavLink>
            <NavLink to="conta/movies">Filmes</NavLink>
            <NavLink to="conta/comics">Hqs</NavLink>
            <UserProfile>
              <img src={Profile} alt="Foto do usuário" />
              <button onClick={handleClick}>
                {isLoggedIn ? 'Sair' : 'Entrar'}
              </button>
            </UserProfile>
          </ul>
        </Navbar>
      </Container>

      {isLoggedIn && <Navigate to="/login" />}
    </Wrapper>
  );
};

export default Header;
