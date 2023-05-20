import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import PageHeader from "../../Components/PageHeader";
import BlogHome from "./client/BlogHome";
import Footer from "../../Components/Footer";

const Blog = () => {
  return (
    <div>
      <SectionInfo />
      <Navbar />
      <PageHeader title="Blog" />
      <BlogHome />
      <Footer />
    </div>
  );
};

export default Blog;
