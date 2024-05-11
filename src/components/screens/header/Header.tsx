import { NavLink } from 'react-router-dom';
import { Wrapper, Container, Logo, Navbar } from './styles/Header';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>Marvel</Logo>

        <Navbar>
          <ul>
            <NavLink to="/characters">Personagens</NavLink>
            <NavLink to="/movies">Filmes</NavLink>
            <NavLink to="/comics">Hqs</NavLink>
            <li>Sair</li>
          </ul>
        </Navbar>
      </Container>
    </Wrapper>
  );
};

export default Header;
