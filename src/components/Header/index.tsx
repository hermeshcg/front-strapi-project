import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Header: React.FC = () => {
  const isLogged = sessionStorage.getItem('@isLogged') === 'true';
  function logout() {
    sessionStorage.clear();
  }
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
        {isLogged ? (
          <>
            <Link to="/" onClick={logout} className="sign-in-btn">
              Admin
            </Link>
            <Link to="/" onClick={logout} className="sign-in-btn">
              Sign out
            </Link>
          </>
        ) : (
          <Link to="/login" className="sign-in-btn">
            Sign in
          </Link>
        )}
      </div>
    </Container>
  );
};

export default Header;
