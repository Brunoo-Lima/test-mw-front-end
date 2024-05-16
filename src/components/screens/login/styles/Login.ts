import styled from 'styled-components';
import 'animate.css/animate.min.css';

import { Logo } from '../../../../styles/Logo';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  min-height: 100vh;
  max-width: 100%;

  @media (max-width: 768px) {
    z-index: 1000;
    grid-template-columns: 1fr;
  }
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;

  .animate__fadeInLeft {
    animation-duration: 1s;
  }

  @media (max-width: 468px) {
    padding: 0 1rem;
  }

  h2 {
    color: ${({ theme }) => theme.colors.tertiary};
    text-align: start;
    font-size: ${({ theme }) => theme.size.xl};
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 0.875rem 0;
    width: 100%;
    height: 55px;

    border: none;
    border-radius: 2.0625rem;

    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.size.xxl};
    font-weight: 500;

    cursor: pointer;
  }
`;

export const LogoLogin = styled(Logo)`
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin-top: 2rem;

  font-size: ${({ theme }) => theme.size.xxl};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: center;
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
    font-size: ${({ theme }) => theme.size.xs};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.tertiary};

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Register = styled.p`
  font-size: ${({ theme }) => theme.size.xs};
  color: ${({ theme }) => theme.colors.tertiary};
  text-align: center;

  a {
    font-size: ${({ theme }) => theme.size.xs};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Background = styled.img`
  height: 100vh;
  max-width: 100%;
  width: 885px;

  mask-image: linear-gradient(to right, gray 10%, rgba(0, 0, 0, 0.07) 90%);

  .animate__fadeInRight {
    animation-duration: 1s;
  }

  @media (max-width: 768px) {
    position: absolute;
    z-index: -1000;
  }

  @media (max-width: 468px) {
    display: none;
  }
`;
