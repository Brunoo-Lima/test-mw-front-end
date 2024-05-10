import { Outlet } from 'react-router-dom';
import { Container } from './styles/Default';

const Default = () => {
  return (
    <div>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default Default;
