import {
  Wrapper,
  Description,
  Button,
  Assessments,
  Stars,
  Appearances,
} from './styles/Modal';

import { CircleX } from 'lucide-react';
import { CardProps } from '../../UserContext';

type ModalCharacterProps = {
  imagePosition: 'left' | 'right';
  modalData: CardProps | null;
  closeModal: () => void;
};

const ModalCharacter = ({
  imagePosition,
  modalData,
  closeModal,
}: ModalCharacterProps) => {
  return (
    <Wrapper imagePosition={imagePosition} className="animate__zoomIn">
      <img src={modalData?.imgURL} alt="Imagem do personagem" />

      <Description>
        <h2>{modalData?.name}</h2>
        <Appearances>
          <p>Aparições: </p>
          {modalData?.appearances!.map((appe, index) => (
            <p key={index}>{appe}</p>
          ))}
        </Appearances>

        <Assessments>Avaliações dos Fãs</Assessments>
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

export default ModalCharacter;
