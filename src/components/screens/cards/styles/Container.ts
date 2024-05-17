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
      max-width: 100%;
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

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
