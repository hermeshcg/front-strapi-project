import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'fit-content',
          height: '100%',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1>Project strapi</h1>
        </Link>
      </div>
      <div>
        <Link to="/login" className="sign-in-btn">
          Sign in
        </Link>
      </div>
    </Container>
  );
};

export default Header;
