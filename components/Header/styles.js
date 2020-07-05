import styled from 'styled-components';

export const Container = styled.header`
  height: 60px;
  box-shadow: 0 0 5px -1px rgba(150, 150, 150, 0.7);

  div {
    max-width: 1100px;
    width: 100%;
    height: 100%;

    margin: 0 auto;
    padding: 0 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      cursor: pointer;
    }

    a {
      position: relative;

      span {
        position: absolute;
        right: -8px;
        top: -18px;

        z-index: 2;

        width: 18px;
        height: 18px;

        border-radius: 50%;
        background-color: var(--primary);

        display: flex;
        align-items: center;
        justify-content: center;

        color: white;
        line-height: 1;
      }

      svg {
        transition: 200ms;
      }

      &:hover {
        svg {
          transform: scale(1.1);
        }
      }

      & + a {
        margin-left: 15px;
      }
    }
  }
`;
