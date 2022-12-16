import styled from 'styled-components';

export const Container = styled.div`
  .default-btn,
  .sign-out-btn,
  .sign-in-btn {
    text-decoration: none;
    transition: 0.5s;
  }
  .default-btn {
    color: #111;
    margin-bottom: 8px;
  }
  .sign-out-btn {
    color: #cd2626;
  }
  .sign-in-btn {
    color: #006cff;
  }
  .default-btn:hover,
  .sign-out-btn:hover,
  .sign-in-btn:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .nav-menu {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
    position: absolute;
    right: 10px;
    box-shadow: 0 1px 1px #ccc;
  }
  .nav-btn {
    transition: 0.5s;
  }
  .nav-btn:hover {
    transform: scale(1.1);
  }
`;
