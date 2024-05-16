import Character from './Character';
import Background from '/img/background.svg';

import { characters } from '../../../data/data.json';
import { Wrapper, ButtonNext } from '../../cards/styles/Container';

import ModalCharacter from '../../../modal/ModalCharacter';

import 'swiper/css';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from './styles/Characters';
import useUserContext from '../../../hook/useUserContext';

const Characters = () => {
  const { isOpenModal, openModal, closeModal, modalData } = useUserContext();

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
        <ModalCharacter modalData={modalData} closeModal={closeModal} />
      )}
    </Wrapper>
  );
};

export default Characters;
