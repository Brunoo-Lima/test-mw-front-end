import { createBrowserRouter } from 'react-router-dom';
import Default from './components/layouts/Default';
import Login from './components/screens/login/Login';
import Characters from './components/screens/characters/Characters';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/characters',
        element: <Characters />,
      },
    ],
  },
]);
