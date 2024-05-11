import styled from 'styled-components';

export const ImageTeste = styled.div`
  img {
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;

    mask-image: linear-gradient(to left, #000000 30%, rgba(0, 0, 0, 0.1) 10%);
    filter: brightness(0.5);
  }
`;
