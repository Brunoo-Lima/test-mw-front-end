import { Container, Description, Information } from '../../cards/styles/Cards';

type ComicProps = {
  title: string;
  img: string;
  description: string;
  available: string[];
  assessments: number;
};

const Comic = ({ title, img, description }: ComicProps) => {
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

export default Comic;
