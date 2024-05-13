import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: #000000;
  color: #fff;
  padding: 0 2rem;
  border-bottom: 2px solid #ff0000;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1400px;
  height: 114px;
  margin: auto;
`;

export const Logo = styled.h1`
  width: 122px;
  height: 54px;
  background-color: #ff0000;

  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Navbar = styled.nav`
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 0 2rem;

    a {
      font-size: 16px;
      color: #ffffff;
      text-decoration: none;
    }
  }
`;

export const UserProfile = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    background: transparent;
    border: none;
    color: #ffffff;

    cursor: pointer;
  }
`;
