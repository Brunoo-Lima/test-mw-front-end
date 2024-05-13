import { ChangeEvent } from 'react';
import { Container, InputContainer } from './styles/Input';

type InputProps = {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, type, ...rest }: InputProps) => {
  return (
    <Container>
      <InputContainer type={type} placeholder={placeholder} {...rest} />
    </Container>
  );
};

export default Input;
