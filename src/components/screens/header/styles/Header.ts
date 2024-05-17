import styled from 'styled-components';
import { Logo } from '../../../../styles/Logo';

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.second};
  color: ${({ theme }) => theme.colors.text};

  padding: 0 2rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1400px;
  height: 114px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.8rem 0;
    height: auto;
  }
`;

export const LogoHeader = styled(Logo)`
  animation-duration: 1s;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 0 2rem;

  animation-duration: 1s;

  a {
    font-size: ${({ theme }) => theme.size.xl};
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:active {
    color: red;
  }

  button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text};

    cursor: pointer;

    p {
      font-size: ${({ theme }) => theme.size.xl};
      font-weight: 600;
    }
  }
`;
