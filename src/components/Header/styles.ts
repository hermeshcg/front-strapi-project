import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 32px;
  background-color: #36454f;
  position: absolute;
  h1 {
    color: #eee;
    margin: 8px 0 !important;
  }

  .sign-in-btn {
    color: #111;
    text-decoration: none;
    background-color: #ddd;
    border-radius: 50px;
    padding: 8px;
    transition: 0.5s;
  }
  .sign-in-btn:hover {
    background-color: #ccc;
    cursor: pointer;
  }
`;
