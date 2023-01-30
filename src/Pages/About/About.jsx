import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import PageHeader from "../../Components/PageHeader";
import Office from "./Office";
import Staff from "./Staff";
import Footer from "../../Components/Footer";

const About = () => {
  return (
    <div>
      <SectionInfo />
      <Navbar />
      <PageHeader />
      <Staff />
      <Office />
      <Footer />
    </div>
  );
};

export default About;
