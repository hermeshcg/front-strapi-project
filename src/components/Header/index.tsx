import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Project strapi</h1>
      </div>
      <div>
        <Link to="/login">
          <p>Sign in</p>
        </Link>
      </div>
    </Container>
  );
};

export default Header;
