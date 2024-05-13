import { createBrowserRouter } from 'react-router-dom';
import Default from './components/layouts/Default';
import Characters from './components/screens/characters/Characters';
import Movies from './components/screens/movies/Movies';
import Comics from './components/screens/comics/Comics';
import Home from './components/Home';

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
        path: '/characters',
        element: <Characters />,
      },
      {
        path: '/movies',
        element: <Movies />,
      },
      {
        path: '/comics',
        element: <Comics />,
      },
    ],
  },
]);
