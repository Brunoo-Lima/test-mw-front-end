import { Container, Description, Information } from '../../cards/styles/Cards';

type MovieProps = {
  name: string;
  imgURL: string;
  description: string;
  openModal: () => void;
};

const Movie = ({ name, imgURL, description, openModal }: MovieProps) => {
  return (
    <Container style={{ background: `url(${imgURL})` }}>
      <Description>
        <Information>
          <h4>{name}</h4>

          <p>{description}</p>
          <button onClick={openModal}>Ver detalhes</button>
        </Information>
      </Description>
    </Container>
  );
};

export default Movie;
