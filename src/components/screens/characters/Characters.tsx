import Card from './Card';
import Background from '../../../assets/img/background-login.svg';
import {
  Cards,
  Wrapper,
  ContainerCards,
  ButtonNextSlide,
  ImageTeste,
} from './styles/Characters';
import { cards } from '../../data/data.json';

const Characters = () => {
  return (
    <Wrapper
    // style={{
    //   background: `url(${Background})`,
    //   backgroundPosition: 'right',
    //   backgroundRepeat: 'no-repeat',
    // }}
    >
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
          <button>passar</button>
        </ButtonNextSlide>
      </ContainerCards>

      <ImageTeste>
        <img src={Background} alt="" />
      </ImageTeste>
    </Wrapper>
  );
};

export default Characters;
