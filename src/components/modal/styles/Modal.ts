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

  border-radius: 1.875rem;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 459px;
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

  h3 {
    margin-top: 1.5rem;
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
