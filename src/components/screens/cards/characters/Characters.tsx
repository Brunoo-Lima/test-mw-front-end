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
      <Image src={Background} alt="" />

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
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
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
