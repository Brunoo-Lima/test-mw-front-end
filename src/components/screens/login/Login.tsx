import {
  Wrapper,
  ContainerLogin,
  Background,
  LogoLogin,
  Title,
  Forms,
  ContentSaveLogin,
  Register,
} from './styles/Login';
import BackgroundLogin from '/img/background.svg';

import { Link } from 'react-router-dom';
import Input from '../../form/Input';
import Checkbox from '../../form/Checkbox';
import useUserContext from '../../hook/useUserContext';

const Login = () => {
  const { user, userLogin, handleChangeEvents } = useUserContext();

  return (
    <Wrapper>
      <ContainerLogin>
        <LogoLogin>Marvel</LogoLogin>
        <Title>Bem-vindo(a) de volta!</Title>

        <h2>Acesse sua conta:</h2>
        <Forms onSubmit={userLogin}>
          <Input
            type="text"
            placeholder="Usuário"
            value={user.name}
            onChange={(e) => handleChangeEvents(e, 'name')}
          />

          <Input
            type="password"
            placeholder="Senha"
            value={user.password}
            onChange={(e) => handleChangeEvents(e, 'password')}
          />

          <ContentSaveLogin>
            <Checkbox />

            <Link to="/*">Esqueci a senha</Link>
          </ContentSaveLogin>

          <button type="submit">Entrar</button>

          <Register>
            Ainda não tem o login? <Link to="/register">Cadastre-se</Link>
          </Register>
        </Forms>
      </ContainerLogin>

      <Background
        src={BackgroundLogin}
        alt="Imagem de fundo dos Vingadores"
        width={855}
        height={768}
      />
    </Wrapper>
  );
};

export default Login;
