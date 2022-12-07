import styled from 'styled-components';

export const Container = styled.div`
  .loading {
    margin: 100px;
    animation: spin 1s linear infinite;
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
