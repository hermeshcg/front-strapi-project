import Routes from './routes';
import GlobalStyle from './styles/Global';
import { ToastContainer, Bounce } from 'react-toastify';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
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
