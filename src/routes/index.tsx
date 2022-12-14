import { Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Post from '../Pages/Post';
import HomeAdmin from '../Pages/Admin/Home';
import CategoryAdmin from '../Pages/Admin/Category';
import PostsAdmin from '../Pages/Admin/Posts';
import { useContext } from 'react';
import { AuthContext } from '../context/Auth';

function Router() {
  // const { logged } = useContext<any>(AuthContext);
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/admin" element={<HomeAdmin />} />
      <Route path="/admin/posts" element={<PostsAdmin />} />
      <Route path="/admin/category" element={<CategoryAdmin />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Router;
