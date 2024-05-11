import { Outlet } from 'react-router-dom';
import { Container } from './styles/Default';
import Header from '../screens/header/Header';

const Default = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Default;
