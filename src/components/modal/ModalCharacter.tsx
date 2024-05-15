import { Wrapper, Description, Button } from './styles/Modal';

import { CircleX } from 'lucide-react';
import { CardProps } from '../../UserContext';

type ModalCharacterProps = {
  modalData: CardProps;
  closeModal: () => void;
};

const ModalCharacter = ({ modalData, closeModal }: ModalCharacterProps) => {
  return (
    <Wrapper>
      <img src={modalData.imgURL} alt="" />

      <Description>
        <h2>{modalData.name}</h2>
        <p>Aparições: </p>
        {modalData.appearances.map((appe, index) => (
          <p key={index}>{appe}</p>
        ))}

        <h3>Avaliações dos Fãs</h3>
        {modalData.assessments}
      </Description>

      <Button onClick={closeModal}>
        <CircleX color="#ffffff" />
      </Button>
    </Wrapper>
  );
};

export default ModalCharacter;
