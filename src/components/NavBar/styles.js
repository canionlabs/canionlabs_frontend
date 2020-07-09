import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.nav`
  background: #0a1124;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 20px 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 40px;
    width: 40px;
  }
`;

export const SmallMenu = styled.div`
  display: none;

  div.links {
    > a {
      color: #8bc34a;
      text-decoration: none;
      padding-bottom: 5px;
      border-bottom: 1px solid #8bc34a;
    }

    > div {
      button {
        border: 0;
        background: transparent;

        img {
          width: 35px;
        }
      }
    }
  }

  @media (max-width: 850px) {
    display: flex;

    div.links {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-top: 20px;
      padding: 10px 15px 0;

      a {
        margin-bottom: 20px;
      }

      > div {
        display: flex;
        align-items: center;

        button + button {
          margin-left: 10px;
        }
      }
    }

    button {
      align-self: flex-start;
    }
  }
`;

export const LargeMenu = styled.div`
  display: flex;
  align-items: center;

  > a {
    color: #8bc34a;
    text-decoration: none;

    & + a {
      margin-left: 20px;
    }

    &:hover {
      color: ${shade(0.2, '#8bc34a')};
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
      background: ${shade(0.2, '#8bc34a')};
    }
  }

  button {
    display: flex;
    justify-content: center;

    border: 0;
    background: transparent;

    margin-left: 10px;

    &.first-button {
      border-left: 1px solid #a4a4a4;
      padding-left: 10px;
    }

    img {
      width: 35px;
    }
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

export const MenuIcon = styled.button`
  border: 0;
  background: transparent;
`;
