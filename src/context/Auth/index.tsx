import { useState, createContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props: any) => {
  const [logged, setLogged] = useState<Boolean>(false);

  return (
    <AuthContext.Provider value={[logged, setLogged]}>
      {props.children}
    </AuthContext.Provider>
  );
};
