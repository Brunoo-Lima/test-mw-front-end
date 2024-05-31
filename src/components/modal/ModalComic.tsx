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
  imagePosition: 'left' | 'right';
  modalData: CardProps | null;
  closeModal: () => void;
};

const ModalComic = ({
  modalData,
  closeModal,
  imagePosition,
}: ModalComicProps) => {
  return (
    <Wrapper imagePosition={imagePosition} className="animate__zoomIn">
      <img src={modalData?.imgURL} alt="Imagem do personagem" />

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
            <span key={index}>{ass === '&#9733;' ? '★' : '☆'}</span>
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
