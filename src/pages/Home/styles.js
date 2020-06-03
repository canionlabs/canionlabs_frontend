import styled, { keyframes, css } from 'styled-components';
import { shade } from 'polished';

const maxWidth = '1080px';

const blink = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const ContentPage = styled.div`
  height: 95vh;
  background: linear-gradient(
    45deg,
    rgba(10, 17, 35, 0.96) 25%,
    rgba(58, 56, 56, 0.96) 100%,
    rgba(137, 195, 84, 0.34) 100%
  );
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
    color: #fff;
    font-size: 22px;
    font-weight: lighter;
  }

  svg {
    position: absolute;
    bottom: 20px;
    animation: ${blink} 2s cubic-bezier(0.5, 0, 1, 1) infinite;
  }

  section {
    margin-top: 100px;
  }

  @media only screen and (max-width: ${maxWidth}) {
    & {
      padding: 0 10px;

      p {
        text-align: center;
      }

      img {
        height: 150px;
        width: 300px;
      }
    }
  }
`;

export const MainTextSections = styled.h3`
  color: #8bc34a;
  font-size: 25px;
  margin-bottom: 50px;

  display: flex;
  align-items: center;

  ${(props) =>
    props.right &&
    css`
      justify-content: flex-end;
    `}
`;

export const About = styled.section`
  margin: 0 auto;
  max-width: ${maxWidth};
  padding: 80px 0;

  p {
    color: #0a1124;
    font-size: 20px;
    font-weight: lighter;
    text-align: justify;
  }

  @media only screen and (max-width: ${maxWidth}) {
    & {
      padding: 80px 25px;

      p {
        text-align: center;
      }
    }
  }
`;

export const ProductContainer = styled.section`
  margin: 0 auto;
  max-width: ${maxWidth};
  padding: 80px 0;

  @media only screen and (max-width: ${maxWidth}) {
    & {
      h3 {
        margin-right: 25px;
      }
    }
  }
`;

export const ProductContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Contact = styled.section`
  margin: 0 auto;
  max-width: ${maxWidth};
  padding: 80px 0;

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

      textarea {
        font-size: 16px;
        font-family: 'Roboto', sans-serif;

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
        background: #8bc34a;
        border: 0;
        border-radius: 6px;
        padding: 10px 15px;
        transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.2, '#8bc34a')};
        }
      }
    }
  }

  @media only screen and (max-width: ${maxWidth}) {
    & {
      padding: 80px 25px;
    }
  }

  @media only screen and (max-width: 890px) {
    div.contact-form {
      flex-direction: column-reverse;

      form {
        width: 100%;
        margin-bottom: 50px;
      }

      iframe {
        width: 100%;
        margin-right: 0;
      }
    }
  }
`;
