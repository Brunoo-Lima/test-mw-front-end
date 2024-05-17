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
  modalData: CardProps | null;
  closeModal: () => void;
};

const ModalCharacter = ({ modalData, closeModal }: ModalCharacterProps) => {
  return (
    <Wrapper className="animate__zoomIn">
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

export default ModalCharacter;
