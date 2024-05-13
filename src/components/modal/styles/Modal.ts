import styled from 'styled-components';

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

  border-radius: 30px;
  display: flex;
`;

export const Description = styled.div`
  padding: 4rem 2rem;
  color: #ffffff;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  display: block;
  background: none;
  border: none;

  cursor: pointer;

  position: absolute;
  bottom: 20px;
  right: 28px;
`;
