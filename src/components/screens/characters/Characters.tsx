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

const Characters = () => {
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
    </Wrapper>
  );
};

export default Characters;
