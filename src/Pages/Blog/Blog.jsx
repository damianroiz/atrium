import { Routes, Route } from "react-router-dom";
import Layout from "./client/Layout";
import BlogIndex from "./client/BlogIndex";
import LoginPage from "./client/LoginPage";

const Blog = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BlogIndex />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default Blog;
