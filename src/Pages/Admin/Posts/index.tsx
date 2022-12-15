import React from 'react';
import Header from '../../../components/Header';

import { Container } from './styles';

const Posts: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Olá posts</h1>
      </Container>
    </>
  );
};

export default Posts;
