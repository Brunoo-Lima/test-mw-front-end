import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 100vh;
`;

export const ImageTeste = styled.div`
  img {
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;

    mask-image: linear-gradient(to left, #000 30%, rgba(0, 0, 0, 0.1) 10%);
    filter: brightness(0.5);
  }
`;

export const ContainerCards = styled.div`
  z-index: 100;
  overflow-x: hidden;
  flex: 1;
`;

export const Cards = styled.ul`
  display: flex;
  gap: 4rem;
  list-style: none;
  width: 100vw;
  overflow-x: auto;
  margin: 0 auto;
`;

export const ButtonNextSlide = styled.div`
  position: absolute;
  right: 50px;
  top: 50%;
`;
