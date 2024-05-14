import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Logo = styled.h1`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};

  font-size: ${({ theme }) => theme.size.xxxl};
  font-family: ${({ theme }) => theme.fonts.logo};
  text-transform: uppercase;
  letter-spacing: 1px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  width: 150px;
  padding: 0.625rem 0 0.125rem 0;
  border-radius: 0.125rem;
`;
