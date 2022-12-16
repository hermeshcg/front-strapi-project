import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Nav: React.FC = () => {
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }
  function logout() {
    sessionStorage.clear();
  }
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const isLogged = sessionStorage.getItem('@isLogged') === 'true';
  return (
    <Container>
      <AiOutlineMenu
        className="nav-btn"
        color="#fff"
        size={26}
        onClick={() => {
          setIsOpen(isOpen ? false : true);
        }}
      />
      {isOpen ? (
        <div className="nav-menu" ref={wrapperRef}>
          {isLogged ? (
            <>
              <Link to="/" className="default-btn">
                Home
              </Link>
              <Link to="/admin" className="default-btn">
                Admin
              </Link>
              <Link to="/admin/posts" className="default-btn">
                Posts
              </Link>
              <Link to="/admin/categories" className="default-btn">
                Category
              </Link>
              <Link to="/" onClick={logout} className="sign-out-btn">
                Sign out
              </Link>
            </>
          ) : (
            <>
              <Link to="/" className="default-btn">
                Home
              </Link>
              <Link to="/login" className="sign-in-btn">
                Sign in
              </Link>
            </>
          )}
        </div>
      ) : null}
    </Container>
  );
};

export default Nav;
