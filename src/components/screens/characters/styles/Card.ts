import styled from 'styled-components';

export const Container = styled.li`
  width: 289px;
  height: 439px;

  position: relative;
  overflow: hidden;
`;

export const Description = styled.div`
  background: #ff0000;
  color: #ffffff;
  filter: opacity(0.7);

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
    font-weight: 400;
    text-align: center;
    margin-bottom: 6px;
  }

  p {
    font-size: 12px;
    line-height: 1.8;
  }

  button {
    font-size: 20px;
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
