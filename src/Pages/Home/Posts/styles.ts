import styled from 'styled-components';

export const Container = styled.div`
  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: center;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0 1px 3px #121212;
    width: 240px;
    height: 250px;
    margin: 20px;
    justify-content: center;
    background: #fefefe;
    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      margin-bottom: auto;
    }
    .img-blank {
      width: 100%;
      height: 150px;
      object-fit: cover;
      margin-bottom: auto;
    }
    h3 {
      color: hsl(200, 15%, 8%);
      margin: 10px 0;
      padding-bottom: 16px;
    }
    span {
      padding-bottom: 10px;
      color: #aaafa0;
      align-self: flex-start;
      margin-left: 16px;
    }
    transition: transform 0.2s;
  }
  .post-card:hover {
    transform: scale(1.2);
  }
`;
