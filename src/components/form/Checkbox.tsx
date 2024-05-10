import { Container } from './styles/Checkbox';

const Checkbox = () => {
  return (
    <Container>
      <input type="checkbox" name="save_login" />
      <label htmlFor="save_login">Salvar login</label>
    </Container>
  );
};

export default Checkbox;
