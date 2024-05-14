import Card from './Card';
import Background from '/img/background.svg';

import { cards } from '../../../data/data.json';
import { Wrapper, ButtonNext } from '../../cards/styles/Container';

import { useContext } from 'react';
import Modal from '../../../modal/Modal';
import { Context } from '../../../../UserContext';

import 'swiper/css';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from './styles/Characters';

const Characters = () => {
  const context = useContext(Context);
  const { isOpenModal, handleModal } = context!;

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
        navigation={{
          nextEl: '.swiper-button-next',
        }}
        modules={[Pagination, Navigation]}
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
        className="slider-controll"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="swiper">
            <Card
              name={card.name}
              imgURL={card.imgURL}
              description={card.description}
              handleModal={handleModal}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ButtonNext className="swiper-button-next"></ButtonNext>

      {isOpenModal && <Modal handleModal={handleModal} />}
    </Wrapper>
  );
};

export default Characters;
