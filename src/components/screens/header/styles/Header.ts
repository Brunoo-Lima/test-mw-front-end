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
  background-color: #ff0000;
  color: #ffffff;

  font-size: 40px;
  font-family: 'MarvelRegular', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  padding: 10px 0 2px 0;
  border-radius: 2px;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 0 2rem;

  a {
    font-size: 16px;
    color: #ffffff;
    text-decoration: none;
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
    color: #ffffff;

    cursor: pointer;

    p {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;
