import { Routes, Route } from "react-router-dom";
import Layout from "./client/Layout";
import BlogIndex from "./client/BlogIndex";
import LoginPage from "./client/LoginPage";
import RegisterPage from "./client/RegisterPage";
import CreatePost from "./client/CreatePost";
import PostPage from "./client/PostPage";
import EditPost from "./client/EditPost";
import { UserContextProvider } from "./client/UserContext";

function Blog() {
  return (
// <    <UserContextProvider>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<BlogIndex />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/create" element={<CreatePost />} />
//           <Route path="/post/:id" element={<PostPage />} />
//           <Route path="/edit/:id" element={<EditPost />} />
//         </Route>
//       </Routes>
//     </UserContextProvider>>
<h1>This is the blog</h1>
  );
};

export default Blog;
