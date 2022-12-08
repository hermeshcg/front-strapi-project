import React, { useState } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [form, setForm] = useState({ identifier: '', password: '' });
  const navigate = useNavigate();

  function login() {
    console.log(form);
    api
      .post('/auth/local', form)
      .then((res) => {
        if (res.status === 200) {
          toast.success('Welcome', {
            position: 'top-right',
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          sessionStorage.setItem('@bearer', res.data.jwt);
          sessionStorage.setItem('@isLogged', 'true');
          return navigate('/admin');
        }
      })
      .catch((err) => {
        toast.error(
          'An error occured, make sure you have the right password and the fields are filled',
          {
            position: 'top-right',
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          }
        );
      });
  }
  return (
    <Container>
      <div className="card-login">
        <form>
          <div>
            <label htmlFor="user">User</label>
            <input
              type="text"
              name="user"
              onChange={(e) => {
                setForm({
                  identifier: e.target.value,
                  password: form.password,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setForm({
                  identifier: form.identifier,
                  password: e.target.value,
                });
              }}
            />
          </div>
        </form>
        <div>
          <button type="submit" onClick={login}>
            Sign in
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
