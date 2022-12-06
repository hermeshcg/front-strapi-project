import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #d3d3d3;
  h1 {
    margin: 26px;
    align-self: flex-start;
  }
  .posts-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 30px;
  }
  .loading {
    margin: 100px;
    animation: spin 1s linear infinite;
    background-color: black;
  }
  @keyframes spin {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`;
