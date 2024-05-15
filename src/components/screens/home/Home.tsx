import { Link } from 'react-router-dom';
import { Container, Logo } from './styles/Home';

const Home = () => {
  return (
    <Link
      to="login/"
      style={{ display: 'block', maxHeight: '100%', textDecoration: 'none' }}
    >
      <Container>
        <Logo>Marvel</Logo>
      </Container>
    </Link>
  );
};

export default Home;
