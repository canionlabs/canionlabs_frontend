import styled from 'styled-components';
import { shade } from 'polished';

const Width = '340px';
const Height = '240px';

export const Container = styled.div`
  color: #fff;
  margin: 10px;
  width: ${Width};
  height: ${Height};
  background: linear-gradient(
    45deg,
    rgba(10, 17, 35, 0.96) 25%,
    rgba(58, 56, 56, 0.96) 100%,
    rgba(137, 195, 84, 0.34) 100%
  );
  border-radius: 10px;
  /* border-radius: 120px 4px 120px 120px; */

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover div.content-hover {
    visibility: visible;
    opacity: 1;
  }

  img {
    width: 250px;
    height: 100px;
  }

  strong {
    font-size: 50px;
  }

  div.content-hover {
    width: ${Width};
    height: ${Height};
    padding: 20px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    background: rgba(10, 17, 36, 0.85);
    visibility: hidden;
    opacity: 0;

    transition: opacity 0.3s;

    p {
      color: #fff;
      font-size: 16px;
      text-align: justify;
      font-weight: lighter;
      line-height: 25px;
    }

    a {
      border: 0;
      color: #0a1124;
      padding: 5px;
      border-radius: 12px 4px 12px 12px;
      margin-top: 20px;
      background: #8bc34a;
      text-decoration: none;

      align-self: flex-end;

      display: flex;
      align-items: center;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#8bc34a')};
      }

      svg {
        margin-left: 3px;
      }
    }
  }
`;
