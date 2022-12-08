import Routes from './routes';
import GlobalStyle from './styles/Global';
import { ToastContainer, Bounce } from 'react-toastify';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        autoClose={3500}
        position="top-right"
        limit={5}
        transition={Bounce}
      />
      <Routes />
    </>
  );
}

export default App;
