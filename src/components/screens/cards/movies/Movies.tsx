import { movies } from '../../../data/data.json';
import Movie from './Movie';
import { Wrapper, ButtonNext } from '../../cards/styles/Container';
import Background from '/img/background.svg';
import { Image } from './styles/Movies';

import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useContext } from 'react';
import { Context } from '../../../../UserContext';
import ModalMovie from '../../../modal/ModalMovie';

const Movies = () => {
  const context = useContext(Context);
  const { isOpenModal, modalData, openModal, closeModal } = context!;
  return (
    <Wrapper>
      <Image
        src={Background}
        alt="Imagem de fundo dos Vingadores"
        width={855}
        height={768}
      />

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
        {movies.map((movie) => (
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
    </Wrapper>
  );
};

export default Movies;
