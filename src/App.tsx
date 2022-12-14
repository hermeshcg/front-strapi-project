import Routes from './routes';
import GlobalStyle from './styles/Global';
import { ToastContainer, Bounce } from 'react-toastify';
import { AuthProvider } from './context/Auth';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <ToastContainer
        autoClose={3500}
        position="top-right"
        limit={5}
        transition={Bounce}
      />
      <Routes />
    </AuthProvider>
  );
}

export default App;
