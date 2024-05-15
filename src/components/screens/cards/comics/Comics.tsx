import { ButtonNext, Wrapper } from '../../cards/styles/Container';
import Comic from './Comic';
import Background from '/img/background.svg';

import { comics } from '../../../data/data.json';

import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Image } from './styles/Comics';

const Comics = () => {
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
        {comics.map((comic) => (
          <SwiperSlide key={comic.id}>
            <Comic
              title={comic.title}
              img={comic.img}
              description={comic.description}
              available={comic.available}
              assessments={comic.assessments}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ButtonNext className="swiper-button-next"></ButtonNext>
    </Wrapper>
  );
};

export default Comics;
