import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;
  background-color: #36454f;
  position: absolute;
  box-shadow: 0 1px 1px #000;
  h1 {
    color: #eee;
    margin: 8px 0 !important;
  }
`;
