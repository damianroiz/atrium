import { Routes, Route } from 'react-router-dom';
import Layout from './client/Layout';
import BlogIndex from './client/BlogIndex';
import LoginPage from './client/LoginPage';
import RegisterPage from './client/RegisterPage';
import CreatePost from './client/CreatePost';
import PostPage from './client/PostPage';
import EditPost from './client/EditPost';
import { UserContextProvider } from './client/UserContext';
import PageHeader from '../../Components/PageHeader';
import BlogCard from '../../Components/BlogCard';

export default function Blog() {
  return (
    <>
      <PageHeader title="Blog" />
      {/* <BlogCard /> */}
    </>
  );
}
