import { Routes, Route } from 'react-router-dom';

import Login from '../Pages/Login';
import Home from '../Pages/Admin/Home';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Home />} />
    </Routes>
  );
}

export default Router;
