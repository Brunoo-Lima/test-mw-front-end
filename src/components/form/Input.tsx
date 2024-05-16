import { Container, InputContainer } from './styles/Input';
import { ChangeEvent } from 'react';

type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, type, onChange, value, ...rest }: InputProps) => {
  return (
    <Container>
      <InputContainer
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </Container>
  );
};

export default Input;
