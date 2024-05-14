import { movies } from '../../../data/data.json';
import Movie from './Movie';
import { Wrapper, ButtonNext } from '../../cards/styles/Container';
import Background from '/img/background.svg';
import { Image } from './styles/Movies';

import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Movies = () => {
  return (
    <Wrapper>
      <Image src={Background} alt="" width={855} height={768} />

      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
        }}
        modules={[Pagination, Navigation]}
        className="slider-controll"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Movie
              title={movie.title}
              img={movie.img}
              description={movie.description}
              available={movie.available}
              assessments={movie.assessments}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ButtonNext className="swiper-button-next"></ButtonNext>
    </Wrapper>
  );
};

export default Movies;
