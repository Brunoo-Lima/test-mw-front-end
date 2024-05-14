import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 700px;
  max-width: 1400px;
  margin: 0 auto;

  .slider-controll {
    width: 75%;
  }
`;

export const ImageTeste = styled.div`
  img {
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -50;
    mask-image: linear-gradient(to left, #000000 30%, rgba(0, 0, 0, 0.1) 10%);
    filter: brightness(0.5);
  }
`;

export const ButtonNext = styled.div`
  position: absolute;
  transform: translateX(-300%);
  top: 50%;
  color: #ff0000;
`;
