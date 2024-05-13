import Card from './Card';
import Background from '/img/background.svg';
import ArrowRight from '../../../assets/icons/arrow-right.svg';

import { ImageTeste } from './styles/Characters';
import { cards } from '../../data/data.json';
import {
  ButtonNextSlide,
  Cards,
  ContainerCards,
  Wrapper,
} from '../../styles/Container';
import { useState } from 'react';
import Modal from '../../modal/Modal';

const Characters = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(isOpenModal);
  }

  function handleModal() {}

  return (
    <Wrapper>
      <ContainerCards>
        <Cards>
          {cards.map((card) => (
            <Card
              key={card.id}
              name={card.name}
              imgURL={card.imgURL}
              description={card.description}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </Cards>

        <ButtonNextSlide>
          <button>
            <img src={ArrowRight} alt="" />
          </button>
        </ButtonNextSlide>
      </ContainerCards>

      <ImageTeste>
        <img src={Background} alt="" />
      </ImageTeste>

      {isOpenModal && <Modal />}
    </Wrapper>
  );
};

export default Characters;
