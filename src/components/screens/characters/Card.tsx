import { Container, Description, Information } from './styles/Card';

type CardProps = {
  name: string;
  imgURL: string;
  description: string;
};

const Card = ({ name, imgURL, description }: CardProps) => {
  return (
    <Container style={{ background: `url(${imgURL})` }}>
      <Description>
        <Information>
          <h4>{name}</h4>

          <p>{description}</p>
          <button>Ver detalhes</button>
        </Information>
      </Description>
    </Container>
  );
};

export default Card;
