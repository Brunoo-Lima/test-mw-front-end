import { Link, Navigate, useNavigate } from 'react-router-dom';
import BackgroundLogin from '/img/background.svg';
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
import { ChangeEvent, useState } from 'react';

// type UserProps = {
//   name: string;
//   password: string;
// };

const Login = () => {
  // const [user, setUser] = useState({
  //   name: '',
  //   password: '',
  // });

  // const navigate = useNavigate();

  // function handleLogin() {
  //   if (user.name !== 'Bruno' || user.password !== '123') {
  //     return alert('Erro');
  //   } else {
  //     navigate('/characters');
  //   }
  // }

  return (
    <Wrapper>
      <ContainerLogin>
        <Logo>Marvel</Logo>
        <Title>Bem-vindo(a) de volta!</Title>

        <h2>Acesse sua conta:</h2>
        <Forms onSubmit={(e) => e.preventDefault()}>
          <Input
            type="text"
            placeholder="Usuário"
            // value={user.name}
            // onChange={(e) => setUser(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Senha"
            // value={user.password}
            // onChange={(e) => setUser(e.target.value)}
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
