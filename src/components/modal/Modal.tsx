import { ReactNode } from 'react';
import { Wrapper, Description, Button } from './styles/Modal';
import HomemAranha from '/img/cards/homem-aranha.svg';

import { CircleX } from 'lucide-react';

type ModalProps<T extends ReactNode> = {
  title?: string;
  content?: T;
  icon?: string;
  handleModal: () => void;
};

const Modal = <T extends ReactNode>({
  title,
  content,
  icon,
  handleModal,
}: ModalProps<T>) => {
  return (
    <Wrapper>
      <img src={icon} alt="" />

      <Description>
        <h2>{title}</h2>
        {typeof content === 'string' ? <p>{content}</p> : content}
      </Description>

      <Button onClick={handleModal}>
        <CircleX color="#ffffff" />
      </Button>
    </Wrapper>
  );
};

export default Modal;
