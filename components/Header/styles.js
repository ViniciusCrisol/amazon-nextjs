import styled from 'styled-components';

export const Container = styled.header`
  height: 60px;
  box-shadow: 0 0 5px -1px rgba(150, 150, 150, 0.7);
`;

export const Content = styled.div`
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

  section {
    svg + svg {
      margin-left: 10px;
    }
  }
`;
