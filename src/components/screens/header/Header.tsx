import { Wrapper, Container, Navbar } from './styles/Header';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Titulo</h1>

        <Navbar>
          <ul>
            <li>Personagens</li>
            <li>Filmes</li>
            <li>Hqs</li>
            <li>Sair</li>
          </ul>
        </Navbar>
      </Container>
    </Wrapper>
  );
};

export default Header;
