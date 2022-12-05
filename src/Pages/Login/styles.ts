import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #ccffff;
  .card-login {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 16px;
    -webkit-box-shadow: -1px 7px 23px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 7px 23px -8px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 7px 23px -8px rgba(0, 0, 0, 0.75);
    background-color: #fff;
    padding: 32px;
    div {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex-direction: column;
      margin-bottom: 15px;
    }
    label {
      align-self: flex-start;
    }
    input {
      margin: 8px 0;
      border: none;
      padding: 6px;
      background-color: #ddd;
      border-radius: 4px;
    }
    button {
      align-self: center;
      padding: 8px 16px;
      border: none;
      border-radius: 8px;
      background-color: blue;
      color: white;
      width: 100%;
    }
  }
`;
