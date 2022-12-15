import React from 'react';
import Header from '../../../components/Header';

import { Container } from './styles';

const Category: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Olá categorias</h1>
      </Container>
    </>
  );
};

export default Category;
