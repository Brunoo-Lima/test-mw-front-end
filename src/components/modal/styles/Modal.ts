import styled, { keyframes } from 'styled-components';
import 'animate.css/animate.min.css';

const animation = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

export const Wrapper = styled.div`
  background-image: linear-gradient(to right, #400e0e 40%, #ff0000);
  width: 659px;
  height: 439px;

  position: absolute;
  top: auto;
  bottom: auto;
  left: auto;
  right: auto;
  z-index: 1000;

  border-radius: 1.875rem;
  display: flex;

  .animate__fadeInRightBig {
    animation: ${animation} 4s;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 90%;
    height: 439px;

    img {
      display: none;
    }
  }
`;

export const Description = styled.div`
  padding: 4rem 2rem;
  color: ${({ theme }) => theme.colors.text};

  h2 {
    font-size: ${({ theme }) => theme.size.xxl};
    margin-bottom: 0.625rem;
  }
`;

export const Button = styled.button`
  display: block;
  background: none;
  border: none;

  cursor: pointer;

  position: absolute;
  bottom: 1.25rem;
  right: 1.75rem;
`;

export const Appearances = styled.div`
  margin: 1.2rem 0;
`;

export const DescriptionMovie = styled.p`
  font-size: ${({ theme }) => theme.size.sm};
  font-family: ${({ theme }) => theme.fonts.fonts_stack_light};
  margin: 1.8rem 0;
`;

export const Assessments = styled.p`
  font-size: ${({ theme }) => theme.size.xxl};
`;

export const Available = styled.p`
  display: flex;
  gap: 0.875rem;
`;

export const Stars = styled.div`
  font-size: ${({ theme }) => theme.size.xxxl};
  color: #ffb300;
  display: flex;
  gap: 0.5rem;
`;
