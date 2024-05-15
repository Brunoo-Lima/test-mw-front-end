import styled from 'styled-components';

export const Container = styled.div`
  width: 289px;
  height: 439px;

  position: relative;
  overflow: hidden;
  border-radius: 1.875rem;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Description = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  filter: opacity(0.8);

  border-radius: 1.875rem;

  position: absolute;
  bottom: 0;
  padding: 2rem;

  width: 289px;
  height: 234px;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Information = styled.div`
  h4 {
    font-size: ${({ theme }) => theme.size.xxl};
    line-height: 1.2;
    font-weight: 400;
    text-align: center;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: ${({ theme }) => theme.size.sm};
    font-family: ${({ theme }) => theme.fonts.font_stack_light};
    line-height: 1.5;
  }

  button {
    font-size: ${({ theme }) => theme.size.xxl};
    font-family: ${({ theme }) => theme.fonts.font_stack_light};

    color: ${({ theme }) => theme.colors.text};
    background: transparent;
    border: none;
    cursor: pointer;
    margin-top: 0.375rem;
    position: absolute;

    bottom: 0.75rem;
    left: 0;
    right: 0;
  }
`;
