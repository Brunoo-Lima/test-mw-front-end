import { ButtonNext, Wrapper } from '../../cards/styles/Container';
import Comic from './Comic';
import Background from '/img/background.svg';

import { comics } from '../../../data/data.json';

import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Image } from './styles/Comics';
import { useContext } from 'react';
import { Context } from '../../../../UserContext';
import ModalComic from '../../../modal/ModalComic';

const Comics = () => {
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

      {isOpenModal && <ModalComic modalData={modalData} closeModal={closeModal}/>}
    </Wrapper>
  );
};

export default Comics;
