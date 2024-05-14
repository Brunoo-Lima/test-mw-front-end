import styled from 'styled-components';

export const Container = styled.div`
  width: 289px;
  height: 439px;

  position: relative;
  overflow: hidden;
  border-radius: 30px;
`;

export const Description = styled.div`
  background: #ff0000;
  color: #ffffff;
  filter: opacity(0.8);

  border-radius: 30px;

  position: absolute;
  bottom: 0;
  padding: 2rem;

  width: 289px;
  height: 234px;
`;

export const Information = styled.div`
  h4 {
    font-size: 20px;
    line-height: 1.2;
    font-weight: 400;
    text-align: center;
    margin-bottom: 4px;
  }

  p {
    font-size: 12px;
    font-family: 'Axiforma Light', sans-serif;
    line-height: 1.5;
  }

  button {
    font-size: 20px;
    font-family: 'Axiforma Light';
    color: #ffffff;
    background: transparent;
    border: none;
    cursor: pointer;
    margin-top: 6px;
    position: absolute;

    bottom: 12px;
    left: 0;
    right: 0;
  }
`;
