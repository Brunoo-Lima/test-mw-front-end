import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  background: #000000;
  height: 100vh;
  max-width: 100%;

  @media (max-width: 768px) {
    position: relative;
    z-index: 1000;
    grid-template-columns: 1fr;
  }

  @media (max-width: 468px) {
  }
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;

  @media (max-width: 1200px) {
    align-items: center;
  }

  h2 {
    color: #84848d;
    text-align: start;
    font-size: 1rem;
  }

  button {
    background-color: rgba(255, 0, 0);
    margin: 0.875rem 0;
    width: 100%;
    height: 55px;

    border: none;
    border-radius: 33px;

    color: #ffffff;
    font-size: 20px;
    font-weight: 500;

    cursor: pointer;
  }
`;

export const Logo = styled.h1`
  background-color: #ff0000;
  color: #ffffff;

  font-size: 40px;
  font-family: 'MarvelRegular', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  width: 150px;
  padding: 10px 0 2px 0;
  border-radius: 2px;
`;

export const Title = styled.h1`
  margin-top: 32px;

  font-size: 24px;
  color: #ff0000;
  text-align: center;
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ContentSaveLogin = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    margin-top: 0;
  }

  a {
    font-size: 14px;
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
  font-size: 14px;
  color: #84848d;
  text-align: center;

  a {
    font-size: 14px;
    text-decoration: none;
    color: rgba(255, 0, 0);
  }
`;

export const Background = styled.img`
  height: 100vh;
  width: 100%;

  box-shadow: inset 2px 4px 2px rgba(0, 0, 0, 0.02);
  mask-image: linear-gradient(to right, gray 10%, rgba(0, 0, 0, 0.07) 90%);

  @media (max-width: 768px) {
    position: absolute;
    z-index: -1000;
  }

  @media (max-width: 468px) {
    display: none;
  }
`;
