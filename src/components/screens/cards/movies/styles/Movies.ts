import styled from 'styled-components';
import { Wrapper } from '../../styles/Container';

export const WrapperMovies = styled(Wrapper)`
  margin-top: 2rem 0;
`;

export const Image = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  max-height: 100%;

  mask-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.1) 30%,
    rgba(0, 0, 0, 15) 10%
  );

  filter: brightness(0.5);

  @media (max-width: 768px) {
    max-height: 100%;
  }
`;

export const SelectField = styled.select`
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.second};
  font-size: ${({ theme }) => theme.size.sm};

  padding: 0.5rem;
  outline: none;
`;

export const ContainerSelect = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  transform: translateX(100%);

  @media (max-width: 768px) {
    transform: translateX(50%);
  }

  label {
    font-size: ${({ theme }) => theme.size.xl};
    margin-right: 4px;
  }
`;
