import Header from "../../../Components/Header";
import Navbar from "../../../Components/Navbar";
import BlogMenu from "./BlogMenu";
import PageHeader from "../../../Components/PageHeader";
import { Outlet } from "react-router-dom";
import Footer from "../../../Components/Footer";

export default function Layout() {
  return (
    <main>
      <Header />
      <Navbar />
      <PageHeader title={'Blog'} path={'/'} link={'Home'} />
      <BlogMenu />
      <Outlet />
      <Footer />
    </main>
  );
}
