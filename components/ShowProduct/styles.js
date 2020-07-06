import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  a {
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }

  main {
    margin-top: 120px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    img {
      max-width: 340px;
    }

    section {
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: right;

      margin-left: 60px;

      span {
        margin-top: 30px;

        font-size: 22px;
        font-weight: bold;
      }

      div {
        margin-top: 30px;
        max-width: 260px;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
          flex: 1;
          height: 40px;

          border: 0;
          background-color: var(--dark-gray);

          color: white;
          font-weight: bold;

          transition: 200ms;
          cursor: pointer;

          & + button {
            margin-left: 15px;
            margin-left: 15px;
            background-color: var(--primary);

            &:hover {
              background-color: ${darken(0.08, '#F99924')};
            }
          }

          &:hover {
            transform: translateY(-2px);
            background-color: ${darken(0.08, '#C4C4C4')};
          }
        }
      }
      p {
        margin-top: 30px;
        max-width: 550px;

        font-size: 18px;
      }
    }
  }

  @media (max-width: 880px) {
    main {
      margin-top: 60px;

      section {
        margin: 60px 0;

        div {
          margin: 50px auto;
        }
      }
    }
  }
`;
