import { Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Post from '../Pages/Post';
import HomeAdmin from '../Pages/Admin/Home';

function Router() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/admin" element={<HomeAdmin />} />
    </Routes>
  );
}

export default Router;
