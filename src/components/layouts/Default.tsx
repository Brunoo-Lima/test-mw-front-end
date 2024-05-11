import { Outlet } from 'react-router-dom';
import Header from '../screens/header/Header';

const Default = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Default;
