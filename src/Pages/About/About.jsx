import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import PageHeader from "../../Components/PageHeader";
import StaffSection from "./StaffSection";
import OfficeCarousel from "../../Components/OfficeCarousel";
import Footer from "../../Components/Footer";

export default function About() {
  return (
    <>
    <PageHeader title="About" />
    <StaffSection />
    <OfficeCarousel />
    </>
  );
};

