import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: #000000;
  color: #fff;
  padding: 0 2rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1400px;
  height: 114px;
  margin: auto;
`;

export const Navbar = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 0 6rem;

    li {
      font-size: 30px;
    }
  }
`;
