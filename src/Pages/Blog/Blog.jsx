import { Routes, Route } from "react-router-dom";
import Layout from "./client/Layout";
import BlogIndex from "./client/BlogIndex";
import LoginPage from "./client/LoginPage";
import RegisterPage from "./client/RegisterPage";
import CreatePost from "./client/CreatePost";
import { UserContextProvider } from "./client/UserContext";

const Blog = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BlogIndex />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default Blog;
