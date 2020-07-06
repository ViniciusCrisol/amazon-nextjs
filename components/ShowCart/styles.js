import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  footer {
    margin-top: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      max-width: 300px;
      width: 100%;

      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      background-color: var(--primary);

      color: white;
      font-weight: bold;
      text-transform: uppercase;

      transition: 200ms;

      &:hover {
        background-color: ${darken(0.08, '#F99924')};
      }
    }

    span {
      font-size: 36px;
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;

    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;

    font-size: 18px;
    font-weight: 500;
    color: #999;
  }

  button {
    height: 30px;
    width: 30px;

    border: 0;
    background-color: var(--primary);
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    transition: 200ms;

    &:hover {
      background-color: ${darken(0.08, '#F99924')};
    }
  }
`;
