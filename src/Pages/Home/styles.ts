import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #ccffff;
  padding: 50px 0;
  h1 {
    margin: 26px;
    align-self: flex-start;
  }
  .posts-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 30px;
  }
`;
