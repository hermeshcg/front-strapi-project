import React from 'react';
import Header from '../../../components/Header';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Olá</h1>
      </Container>
    </>
  );
};

export default Home;
