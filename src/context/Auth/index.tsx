import { useState, createContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props: any) => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 1,
    },
    {
      name: 'Game of Thrones',
      price: '$10',
      id: 2,
    },
    {
      name: 'Inception',
      price: '$10',
      id: 3,
    },
  ]);

  return (
    <AuthContext.Provider value={[movies, setMovies]}>
      {props.children}
    </AuthContext.Provider>
  );
};
