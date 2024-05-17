import { Image } from './styles/Characters';
import { Wrapper, ButtonNext, Overlay } from '../../cards/styles/Container';
import Background from '/img/background.svg';

import { characters } from '../../../data/data.json';

import Character from './Character';
import ModalCharacter from '../../../modal/ModalCharacter';
import useUserContext from '../../../hook/useUserContext';

import 'swiper/css';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Characters = () => {
  const { isOpenModal, openModal, closeModal, modalData } = useUserContext();

  return (
    <Wrapper>
      <Image src={Background} alt="Imagem de fundo dos Vingadores" />

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
        className="slider-controll"
      >
        {characters.map((character) => (
          <SwiperSlide key={character.id} className="swiper">
            <Character
              name={character.name}
              imgURL={character.imgURL}
              description={character.description}
              openModal={() => openModal(character)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ButtonNext className="swiper-button-next"></ButtonNext>

      {isOpenModal && (
        <Overlay>
          <ModalCharacter modalData={modalData} closeModal={closeModal} />
        </Overlay>
      )}
    </Wrapper>
  );
};

export default Characters;
