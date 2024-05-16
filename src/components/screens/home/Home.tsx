import { Container } from './styles/Home';
import { Logo } from '../../../styles/Logo';
import { Link } from 'react-router-dom';

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
