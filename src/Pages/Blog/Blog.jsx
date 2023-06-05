import { Routes, Route } from "react-router-dom";
import Layout from "./client/Layout";
import BlogIndex from "./client/BlogIndex";
import LoginPage from "./client/LoginPage";
import RegisterPage from "./client/RegisterPage";

const Blog = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BlogIndex />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default Blog;
