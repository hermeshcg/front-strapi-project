import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Card from '../../../components/Card';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Card>
          <>
            <Link to="/admin/posts" className="default-btn">
              Posts
            </Link>
            <Link to="/admin/categories" className="default-btn">
              Category
            </Link>
          </>
        </Card>
      </Container>
    </>
  );
};

export default Home;
