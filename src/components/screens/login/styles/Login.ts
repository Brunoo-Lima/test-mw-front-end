import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  background: #000000;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;

  h2 {
    color: #84848d;
    text-align: start;
  }

  button {
    background-color: rgba(255, 0, 0);
    margin: 0.875rem 0;
    width: 383px;
    height: 65px;

    border: none;
    border-radius: 33px;

    color: #ffffff;
    font-size: 28px;

    cursor: pointer;
  }
`;

export const Logo = styled.h1`
  background-color: #ff0000;
  color: #ffffff;

  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 237px;
  height: 95px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin-top: 32px;

  font-size: 30px;
  color: #ff0000;
  text-align: center;
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ContentSaveLogin = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  margin-top: 0.5rem;

  a {
    text-decoration: none;
    color: #84848d;
  }

  a::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #ff0000;
  }
`;

export const Register = styled.p`
  font-size: 16px;
  color: #84848d;
  text-align: center;

  a {
    text-decoration: none;
    color: rgba(255, 0, 0);
  }
`;

export const Background = styled.img`
  height: 100vh;
  width: 100%;

  box-shadow: inset 2px 4px 2px rgba(0, 0, 0, 0.02);
  mask-image: linear-gradient(to right, gray 10%, rgba(0, 0, 0, 0.07) 90%);
`;
