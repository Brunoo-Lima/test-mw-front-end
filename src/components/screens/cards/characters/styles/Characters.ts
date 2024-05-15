import styled from 'styled-components';

export const Image = styled.img`
  max-height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -50;
  mask-image: linear-gradient(to left, #000000 30%, rgba(0, 0, 0, 0.1) 10%);
  filter: brightness(0.5);
`;
