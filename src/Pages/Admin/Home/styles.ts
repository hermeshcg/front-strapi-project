import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #ccffff;
  padding: 50px 0;
  .default-btn {
    color: #111;
    text-decoration: none;
    transition: 0.5s;
    margin: 8px 0;
  }
  .default-btn:hover {
    transform: scale(1.1);
  }
`;
