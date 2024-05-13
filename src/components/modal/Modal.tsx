import { Wrapper, Description, Button } from './styles/Modal';
import HomemAranha from '/img/cards/homem-aranha.svg';

import { CircleX } from 'lucide-react';

type ModalProps = {
  handleModal: () => void;
};

const Modal = ({ handleModal }: ModalProps) => {
  return (
    <Wrapper>
      <img src={HomemAranha} alt="" />

      <Description>
        <h2>Wanda Maximoff</h2>
        <p>Aparições:</p>

        <p>Avaliações dos Fãs: </p>
      </Description>

      <Button onClick={handleModal}>
        <CircleX color="#ffffff" />
      </Button>
    </Wrapper>
  );
};

export default Modal;
