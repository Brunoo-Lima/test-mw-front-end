import styled from 'styled-components';

export const Container = styled.div`
  margin: 0.4rem 0;
`;

export const InputContainer = styled.input`
  width: 383px;
  height: 60px;

  border: 1px solid transparent;
  border-radius: 9999px;
  padding-left: 2rem;
  outline: none;

  font-size: ${({ theme }) => theme.size.xxl};
  transition: all 0.2s;

  &::placeholder {
    color: #d1d1d6;
    font-size: ${({ theme }) => theme.size.xxl};
  }

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 468px) {
    width: 100%;
  }
`;
