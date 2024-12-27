import { Outlet } from 'react-router-dom';
import PageHeader from '../../Components/PageHeader';
import BlogCard from '../../Components/BlogCard';

export default function Blog() {
  return (
    <>
      <PageHeader title="Blog" />
      {/* <BlogCard /> */}
      <Outlet />
    </>
  );
}
