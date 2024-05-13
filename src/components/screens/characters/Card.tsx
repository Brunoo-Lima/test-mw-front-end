import { Container, Description, Information } from '../../styles/Cards';

type CardProps = {
  name: string;
  imgURL: string;
  description: string;
  handleOpenModal: () => void;
};

const Card = ({ name, imgURL, description, handleOpenModal }: CardProps) => {
  return (
    <Container style={{ background: `url(${imgURL})` }}>
      <Description>
        <Information>
          <h4>{name}</h4>

          <p>{description}</p>
          <button onClick={handleOpenModal}>Ver detalhes</button>
        </Information>
      </Description>
    </Container>
  );
};

export default Card;
