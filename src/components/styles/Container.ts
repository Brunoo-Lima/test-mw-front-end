import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10% 0;
`;

export const ImageTeste = styled.div`
  img {
    position: absolute;
    right: 0;
    top: 0;
    overflow: hidden;

    mask-image: linear-gradient(to left, #000000 30%, rgba(0, 0, 0, 0.1) 10%);
    filter: brightness(0.5);
  }
`;

export const ContainerCards = styled.div`
  z-index: 100;
  display: grid;
  max-width: 1200px;
  overflow: auto;
  //scrollbar nao aparece assim
  scrollbar-width: none;
`;

export const Cards = styled.ul`
  display: flex;
  gap: 8rem;
  list-style: none;
  padding: 2rem;
`;

export const ButtonNextSlide = styled.div`
  position: absolute;
  right: 100px;
  top: 50%;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
