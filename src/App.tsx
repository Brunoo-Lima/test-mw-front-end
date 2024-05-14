import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/screens/header/Header';
import Login from './components/screens/login/Login';
import { UserProvider } from './UserContext';
import ProtectedRoute from './components/helper/ProtectedRoute';
import Home from './components/home/Home';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <Header />
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
