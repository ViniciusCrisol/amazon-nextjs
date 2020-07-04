import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 320px;
  max-height: 140px;
  display: flex;

  margin: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px !important;
  padding: 10px;

  img {
    max-width: 120px;
    object-fit: contain;
  }

  main {
    width: 165px;
    margin-left: 15px;

    display: flex;
    flex-direction: column;

    h1 {
      font-size: 22px;
      margin-bottom: 5px;

      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    span {
      color: var(--dark-gray);
      font-weight: bold;
    }

    a {
      height: 40px;
      width: 100%;

      margin-top: 15px;
      padding: 7px;

      background-color: var(--primary);
      border: 0;

      text-align: center;
      color: white;
      font-size: 18px;
      font-weight: bold;

      transition: 200ms background;

      &:hover {
        background-color: ${darken(0.08, '#F99924')};
      }
    }
  }
`;
