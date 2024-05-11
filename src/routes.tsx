import { createBrowserRouter } from 'react-router-dom';
import Default from './components/layouts/Default';
import Login from './components/screens/login/Login';
import Characters from './components/screens/characters/Characters';
import Home from './components/Home';
import Movies from './components/screens/movies/Movies';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/characters',
        element: <Characters />,
      },
      {
        path: '/movies',
        element: <Movies />,
      },
    ],
  },
]);
