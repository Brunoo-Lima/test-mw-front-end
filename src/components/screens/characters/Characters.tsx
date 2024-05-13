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
import { useContext } from 'react';
import Modal from '../../modal/Modal';
import { Context } from '../../../UserContext';

const Characters = () => {
  const context = useContext(Context);
  const { isOpenModal, handleModal } = context!;

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
              handleModal={handleModal}
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

      {isOpenModal && <Modal handleModal={handleModal} />}
    </Wrapper>
  );
};

export default Characters;
