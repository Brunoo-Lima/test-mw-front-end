import {
  Wrapper,
  Description,
  Button,
  DescriptionMovie,
  Assessments,
  Available,
  Stars,
} from './styles/Modal';

import { CircleX } from 'lucide-react';
import { CardProps } from '../../UserContext';

type ModalComicProps = {
  modalData: CardProps | null;
  closeModal: () => void;
};

const ModalComic = ({ modalData, closeModal }: ModalComicProps) => {
  return (
    <Wrapper>
      <img
        src={modalData?.imgURL}
        alt="Imagem do personagem"
        width={659}
        height={439}
      />

      <Description>
        <h2>{modalData?.name}</h2>

        <DescriptionMovie>{modalData?.description}</DescriptionMovie>

        <Available>Disponível em streaming: </Available>
        {modalData?.available!.map((av, index) => (
          <img src={av} key={index} />
        ))}

        <Assessments>Crítica</Assessments>
        <Stars>
          {modalData?.assessments.map((ass, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: ass }} />
          ))}
        </Stars>
      </Description>

      <Button onClick={closeModal}>
        <CircleX color="#ffffff" />
      </Button>
    </Wrapper>
  );
};

export default ModalComic;
