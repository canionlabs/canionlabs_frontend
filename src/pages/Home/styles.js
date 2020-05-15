import styled, { keyframes } from 'styled-components';

const maxWidth = '1080px';

const blink = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Content = styled.div`
  div {
    background: #757575;
    padding: 45px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      height: 250px;
      width: 500px;

      margin-bottom: 40px;
    }

    p {
      color: #0a1124;
    }

    svg {
      margin-top: 80px;
      animation: ${blink} 1.5s cubic-bezier(0.5, 0, 1, 1) infinite;
    }
  }

  section {
    margin-top: 100px;
  }
`;

export const About = styled.section`
  margin: 0 auto;
  max-width: ${maxWidth};
  padding: 80px 0;

  h3 {
    color: #8bc34a;
    font-size: 25px;
    margin-bottom: 50px;

    display: flex;
    align-items: center;
  }

  p {
    color: #0a1124;
    text-align: justify;
  }
`;

export const Product = styled.section`
  margin: 0 auto;
  max-width: ${maxWidth};
  padding: 80px 0;

  h3 {
    color: #8bc34a;
    font-size: 25px;
    margin-bottom: 50px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  div {
    margin: 0 auto;
    padding: 30px;
    border: 1px solid #0a1124;
    border-radius: 4px;

    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;

    img {
      height: 115px;
      width: 296px;
      margin-right: 30px;
    }

    div {
      border: 0;
      border-left: 1px solid #0a1124;
      border-radius: 0;

      display: flex;
      flex: 1;
      flex-direction: column;

      p {
        color: #0a1124;
        text-align: justify;
      }

      a {
        background: #8bc34a;
        padding: 8px;
        border-radius: 4px;
        color: #0a1124;
        margin-top: 30px;
        align-self: flex-end;
        text-decoration: none;

        display: flex;
        align-items: center;

        &:hover {
          opacity: 0.8;
        }

        svg {
          margin-left: 8px;
        }
      }
    }
  }
`;

export const Contact = styled.section`
  margin: 0 auto;
  max-width: ${maxWidth};
  padding: 80px 0;

  h3 {
    color: #8bc34a;
    font-size: 25px;
    margin-bottom: 50px;

    display: flex;
    align-items: center;
  }

  div {
    display: flex;
    align-items: center;

    iframe {
      height: 350px;
      border: 0;
      border-radius: 4px;
      margin-right: 15px;
    }

    form {
      display: flex;
      flex-direction: column;
      flex: 1;

      span {
        color: #0a1124;
        margin-bottom: 8px;
      }

      input {
        color: #0a1124;
        border: 1px solid #0a1124;
        border-radius: 6px;
        padding: 10px 15px;
        margin-bottom: 30px;

        &::placeholder {
          color: #0a1124;
        }
      }

      button {
        color: #0a1124;
        background: #a7ee55;
        border: 0;
        border-radius: 6px;
        padding: 10px 15px;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
