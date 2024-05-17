import { Image } from './styles/Comics';
import { ButtonNext, Overlay, Wrapper } from '../../cards/styles/Container';
import Background from '/img/background.svg';

import { comics } from '../../../data/data.json';

import Comic from './Comic';
import ModalComic from '../../../modal/ModalComic';
import useUserContext from '../../../hook/useUserContext';

import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Comics = () => {
  const { isOpenModal, modalData, openModal, closeModal } = useUserContext();

  return (
    <Wrapper>
      <Image src={Background} alt="Imagem de fundo dos Vingadores" />

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
        {comics.map((comic) => (
          <SwiperSlide key={comic.id}>
            <Comic
              name={comic.name}
              imgURL={comic.imgURL}
              description={comic.description}
              openModal={() => openModal(comic)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ButtonNext className="swiper-button-next"></ButtonNext>

      {isOpenModal && (
        <Overlay>
          <ModalComic modalData={modalData} closeModal={closeModal} />
        </Overlay>
      )}
    </Wrapper>
  );
};

export default Comics;
