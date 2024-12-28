import { Outlet } from 'react-router-dom';
import PageHeader from '../../Components/PageHeader';
import BlogCard from '../../Components/BlogCard';
import styled from 'styled-components';

const StyledLink = styled.a`
  font-size: 1.5rem;
  color: #000;
`;

export default function Blog() {
  return (
    <>
      <PageHeader title="Blog" />
      {/* <BlogCard /> */}
      <StyledLink href="/dashboard">admin</StyledLink>
      <Outlet />
    </>
  );
}
