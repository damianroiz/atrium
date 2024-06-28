import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import PageHeader from "../../Components/PageHeader";
import StaffSection from "./StaffSection";
import Office from "./Office";
import Footer from "../../Components/Footer";

export default function About() {
  return (
    <div>
      <PageHeader title="About" />
      <StaffSection />
      <Office />
    </div>
  );
};

