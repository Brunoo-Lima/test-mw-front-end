import { ButtonNext } from '../../cards/styles/Container';
import { Image, WrapperMovies, SelectField } from './styles/Movies';
import Background from '/img/background.svg';

import { useState } from 'react';
import { movies } from '../../../data/data.json';

import Movie from './Movie';
import ModalMovie from '../../../modal/ModalMovie';
import useUserContext from '../../../hook/useUserContext';

import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Movies = () => {
  const { isOpenModal, openModal, closeModal, modalData } = useUserContext();
  const [filterCategory, setFilterCategory] = useState('Launch');

  const filteredMovies = movies.filter(() => {
    if (filterCategory === 'Launch') {
      const MappedMoviesReleaseYear = movies.sort(
        (a, b) => a.releaseYear - b.releaseYear
      );
      return MappedMoviesReleaseYear;
    } else if (filterCategory === 'Chronology') {
      const MappedMoviesYear = movies.sort((a, b) => a.year - b.year);

      return MappedMoviesYear;
    } else {
      return false;
    }
  });

  return (
    <WrapperMovies>
      <Image
        src={Background}
        alt="Imagem de fundo dos Vingadores"
        width={855}
        height={768}
      />

      <label htmlFor="category">Filtrar por</label>
      <SelectField
        name="category"
        id=""
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="Chronology">Cronologia</option>
        <option value="Launch">Lançamento</option>
      </SelectField>

      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
        }}
        breakpoints={{
          // Quando a largura da tela for >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: false,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 40,
            centeredSlides: false,
          },
        }}
        modules={[Pagination, Navigation]}
        className="slider-controll"
      >
        {filteredMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Movie
              name={movie.name}
              imgURL={movie.imgURL}
              description={movie.description}
              openModal={() => openModal(movie)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ButtonNext className="swiper-button-next"></ButtonNext>

      {isOpenModal && (
        <ModalMovie modalData={modalData} closeModal={closeModal} />
      )}
    </WrapperMovies>
  );
};

export default Movies;
