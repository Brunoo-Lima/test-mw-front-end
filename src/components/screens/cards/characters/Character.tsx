import { Container, Description, Information } from '../styles/Cards';

type CharacterProps = {
  name: string;
  imgURL: string;
  description: string;
  appearances?: string[];
  assessments?: number;
  openModal: () => void;
};

const Character = ({
  name,
  imgURL,
  description,
  openModal,
}: CharacterProps) => {
  return (
    <Container
      style={{ background: `url(${imgURL})` }}
      className="animate__zoomIn"
    >
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

export default Character;
