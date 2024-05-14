import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import Characters from '../cards/characters/Characters';
import Movies from '../cards/movies/Movies';
import Comics from '../cards/comics/Comics';

const User = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="conta/characters" element={<Characters />} />
        <Route path="conta/movies" element={<Movies />} />
        <Route path="conta/comics" element={<Comics />} />
      </Routes>
    </>
  );
};

export default User;
