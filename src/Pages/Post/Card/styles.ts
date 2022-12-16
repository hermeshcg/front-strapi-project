import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  background-color: #fefefe;
  box-shadow: 0 1px 3px #121212;
  margin: 20px;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 16px;
  span {
    padding-bottom: 10px;
    color: #aaafa0;
    align-self: flex-start;
    margin: 8px 0;
  }
  h1 {
    margin: 8px;
  }
  img {
    max-width: 100%;
    height: 150px;
    align-self: center;
  }
`;
