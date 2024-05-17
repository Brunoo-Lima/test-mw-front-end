import { Container, Description, Information } from '../../cards/styles/Cards';

type ComicProps = {
  name: string;
  imgURL: string;
  description: string;
  openModal: () => void;
};

const Comic = ({ name, imgURL, description, openModal }: ComicProps) => {
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

export default Comic;
