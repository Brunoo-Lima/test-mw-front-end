import { Container, Description, Information } from '../../cards/styles/Cards';

type CardProps = {
  name: string;
  imgURL: string;
  description: string;
  appearances?: string[];
  assessments?: number;
  openModal: () => void;
};

const Card = ({ name, imgURL, description, openModal }: CardProps) => {
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

export default Card;
