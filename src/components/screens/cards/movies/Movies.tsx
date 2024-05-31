import { ButtonNext, Overlay } from '../../cards/styles/Container';
import {
  Image,
  WrapperMovies,
  SelectField,
  ContainerSelect,
} from './styles/Movies';
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
import { CardProps } from '../../../../UserContext';

const Movies = () => {
  const { isOpenModal, openModal, closeModal, modalData, imagePosition } =
    useUserContext();
  const [filterCategory, setFilterCategory] = useState('Chronology');

  const sortMovies = (movies: CardProps[], category: string) => {
    switch (category) {
      case 'Launch':
        return [...movies].sort((a, b) => {
          if (a.releaseYear !== undefined && b.releaseYear !== undefined) {
            return a.releaseYear - b.releaseYear;
          }
          return 0;
        });

      case 'Chronology':
        return [...movies].sort((a, b) => {
          if (a.year !== undefined && b.year !== undefined) {
            return a.year - b.year;
          }
          return 0;
        });
      default:
        return movies;
    }
  };

  const filteredMovies = sortMovies(movies, filterCategory);

  return (
    <WrapperMovies>
      <Image src={Background} alt="Imagem de fundo dos Vingadores" />

      <ContainerSelect>
        <label htmlFor="category">Filtrar por</label>
        <SelectField
          name="category"
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="Chronology">Cronologia</option>
          <option value="Launch">Lançamento</option>
        </SelectField>
      </ContainerSelect>

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
            spaceBetween: 20,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: false,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
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
              description={movie.description!}
              openModal={() => openModal(movie)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ButtonNext className="swiper-button-next"></ButtonNext>

      {isOpenModal && (
        <Overlay>
          <ModalMovie
            imagePosition={imagePosition}
            modalData={modalData}
            closeModal={closeModal}
          />
        </Overlay>
      )}
    </WrapperMovies>
  );
};

export default Movies;
