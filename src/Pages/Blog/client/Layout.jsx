import SectionInfo from "../../../Components/SectionInfo";
import Navbar from "../../../Components/Navbar";
import BlogMenu from "./BlogMenu";
import PageHeader from "../../../Components/PageHeader";
import { Outlet } from "react-router-dom";
import Footer from "../../../Components/Footer";

export default function Layout() {
  return (
    <main>
      <SectionInfo />
      <Navbar />
      <PageHeader title={'Blog'} path={'/'} link={'Home'} />
      <BlogMenu />
      <Outlet />
      <Footer />
    </main>
  );
}
