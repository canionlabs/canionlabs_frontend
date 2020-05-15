import styled from 'styled-components';

export const NavBar = styled.nav`
  background: #0a1124;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 10px 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 40px;
    width: 40px;
  }

  div {
    a {
      color: #8bc34a;
      text-decoration: none;

      & + a {
        margin-left: 20px;
      }

      &:hover {
        opacity: 0.8;
        border-bottom: 1px solid #8bc34a;
      }
    }

    a.contact {
      color: #0a1124;
      padding: 5px;
      border-radius: 4px;
      background: #8bc34a;

      &:hover {
        border: 0;
        opacity: 0.8;
      }
    }
  }
`;
