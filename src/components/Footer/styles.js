import styled from 'styled-components';

export const Content = styled.footer`
  height: 80px;
  background: #0a1124;

  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 1080px;
  max-width: 1080px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div.social-media {
    display: flex;
    align-items: center;

    a {
      &:hover {
        opacity: 0.7;
      }

      & + a {
        margin-left: 15px;
      }

      svg {
        color: #8bc34a;
      }
    }
  }

  div.canion {
    display: flex;
    align-items: center;
    flex-direction: column;

    strong {
      color: #8bc34a;
    }

    span {
      font-size: 14px;
      color: #8bc34a;
      margin-top: 2px;
    }
  }

  div.go-back {
    a {
      color: #8bc34a;
      text-decoration: none;

      display: flex;
      align-items: center;

      &:hover {
        opacity: 0.8;
      }

      svg {
        margin-left: 5px;
      }
    }
  }
`;
