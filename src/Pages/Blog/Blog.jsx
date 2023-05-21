import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import BlogIndex from "./client/BlogIndex";
import LoginPage from "./client/LoginPage";

const Blog = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<BlogIndex/>} />
        <Route path={"/login"} element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default Blog;
