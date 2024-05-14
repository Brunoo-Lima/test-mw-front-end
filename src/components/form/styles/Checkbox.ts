import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  label {
    font-size: ${({ theme }) => theme.size.xs};
    color: #84848d;
    margin-top: 0.2rem;
  }

  input {
    border-radius: 0.25rem;
    accent-color: ${({ theme }) => theme.colors.primary};
  }
`;
