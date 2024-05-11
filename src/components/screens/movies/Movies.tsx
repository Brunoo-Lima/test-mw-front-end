import { movies } from '../../data/data.json';
import Movie from './Movie';
import {
  ButtonNextSlide,
  Cards,
  ContainerCards,
  Wrapper,
} from '../../styles/Container';
import Background from '/img/background.svg';
import { ImageTeste } from './styles/Movies';
import ArrowRight from '../../../assets/icons/arrow-right.svg';

const Movies = () => {
  return (
    <Wrapper>
      <ContainerCards>
        <Cards>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              img={movie.img}
              description={movie.description}
              available={movie.available}
              assessments={movie.assessments}
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

export default Movies;
