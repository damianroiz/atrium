import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import AppLayout from './Components/AppLayout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Blog from './Pages/Blog/Blog';
import Account from './Pages/Blog/Account';
import Login from './Pages/Blog/Login';
import PageNotFound from './Pages/Blog/PageNotFound';
import Posts from './Pages/Blog/Posts';
import Users from './Pages/Blog/Users';
import Settings from './Pages/Blog/Settings';
import Faqs from './Pages/Faqs/Faqs';
import Appointment from './Pages/Appointment/Appointment';
import PostPage from './Pages/Blog/PostPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />}>
            <Route path="posts" element={<Posts />} />
            <Route path="post" element={<PostPage />} /> // modify this to add
            id to the path
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="faqs" element={<Faqs />} />
          <Route path="appointment" element={<Appointment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
