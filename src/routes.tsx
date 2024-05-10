import { createBrowserRouter } from 'react-router-dom';
import Default from './components/layouts/Default';
import Home from './components/screens/Home';
import Login from './components/screens/login/Login';

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
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
