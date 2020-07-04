import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  max-width: 1100px;
  height: 100%;

  padding: 15px;
  margin: 0 auto;

  animation: 1s ${fadeIn};
`;
