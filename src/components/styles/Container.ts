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

export const ButtonNext = styled.div`
  position: absolute;
  transform: translateX(-300%);
  top: 50%;
  color: #ff0000;
`;
