import { Link } from 'react-router-dom';
import BackgroundLogin from '../../../assets/img/background-login.svg';
import {
  Wrapper,
  ContainerLogin,
  Background,
  Logo,
  Title,
  Forms,
  ContentSaveLogin,
  Register,
} from './styles/Login';
import Input from '../../form/Input';
import Checkbox from '../../form/Checkbox';

const Login = () => {
  return (
    <Wrapper>
      <ContainerLogin>
        <Logo>Marvel</Logo>
        <Title>Bem-vindo(a) de volta!</Title>

        <h2>Acesse sua conta:</h2>
        <Forms className="" onSubmit={(e) => e.preventDefault()}>
          <Input
            type="text"
            placeholder="Usuário"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Senha"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />

          <ContentSaveLogin>
            <Checkbox />

            <Link to="/*">Esqueci a senha</Link>
          </ContentSaveLogin>

          <button
          // onClick={handleLogin}
          >
            Entrar
          </button>

          <Register>
            Ainda não tem o login? <Link to="/register">Cadastre-se</Link>
          </Register>
        </Forms>
      </ContainerLogin>

      <Background src={BackgroundLogin} alt="" width={855} height={768} />
    </Wrapper>
  );
};

export default Login;
