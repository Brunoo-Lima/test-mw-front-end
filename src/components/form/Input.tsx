import { Container, InputContainer } from './styles/Input';

type InputProps = {
  type: string;
  placeholder: string;
};

const Input = ({ placeholder, type }: InputProps) => {
  return (
    <Container>
      <InputContainer type={type} placeholder={placeholder} />
    </Container>
  );
};

export default Input;
