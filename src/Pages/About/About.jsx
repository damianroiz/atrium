import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import PageHeader from "../../Components/PageHeader";
import StaffSection from "./StaffSection";
import Office from "./Office";
import Footer from "../../Components/Footer";

const About = () => {
  return (
    <div>
      <SectionInfo />
      <Navbar />
      <PageHeader title="About" />
      <StaffSection />
      <Office />
      <Footer />
    </div>
  );
};

export default About;
