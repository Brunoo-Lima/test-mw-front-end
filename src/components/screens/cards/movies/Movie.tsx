import { Container, Description, Information } from '../../cards/styles/Cards';

type MovieProps = {
  title: string;
  img: string;
  description: string;
  available: string[];
  assessments: number;
};

const Movie = ({ title, img, description }: MovieProps) => {
  return (
    <Container style={{ background: `url(${img})` }}>
      <Description>
        <Information>
          <h4>{title}</h4>

          <p>{description}</p>
          <button>Ver detalhes</button>
        </Information>
      </Description>
    </Container>
  );
};

export default Movie;
