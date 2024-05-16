import styled from 'styled-components';
import { Wrapper } from '../../styles/Container';

export const WrapperMovies = styled(Wrapper)``;

export const Image = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;

  mask-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.1) 30%,
    rgba(0, 0, 0, 15) 10%
  );

  filter: brightness(0.5);
`;

export const SelectField = styled.select``;
