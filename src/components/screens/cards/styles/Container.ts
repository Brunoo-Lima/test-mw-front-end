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

    @media (max-width: 1024px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      width: 80%;
    }
  }

  .swiper {
    position: relative;
  }
`;

export const ButtonNext = styled.div`
  position: absolute;
  transform: translateX(-300%);
  top: 50%;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 1024px) {
    display: none;
  }
`;
