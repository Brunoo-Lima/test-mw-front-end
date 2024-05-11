import {
  ButtonNextSlide,
  Cards,
  ContainerCards,
  Wrapper,
} from '../../styles/Container';
import Comic from './Comic';
import { ImageTeste } from './styles/Comics';
import Background from '/img/background.svg';
import ArrowRight from '../../../assets/icons/arrow-right.svg';

import { comics } from '../../data/data.json';

const Comics = () => {
  return (
    <Wrapper>
      <ContainerCards>
        <Cards>
          {comics.map((comic) => (
            <Comic
              key={comic.id}
              title={comic.title}
              img={comic.img}
              description={comic.description}
              available={comic.available}
              assessments={comic.assessments}
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

export default Comics;
