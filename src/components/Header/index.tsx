import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
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
          <h1>TESTE :)</h1>
        </Link>
      </div>
      <div>
        <Nav />
      </div>
    </Container>
  );
};

export default Header;
