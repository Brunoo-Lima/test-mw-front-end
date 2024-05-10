import { createBrowserRouter } from 'react-router-dom';
import Default from './components/layouts/Default';
import Home from './components/screens/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
