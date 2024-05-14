import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/screens/login/Login';
import { UserProvider } from './UserContext';
import ProtectedRoute from './components/helper/ProtectedRoute';
import Home from './components/screens/home/Home';
import User from './components/screens/user/User';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
