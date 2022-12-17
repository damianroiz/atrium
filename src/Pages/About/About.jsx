import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import SectionTitle from "../../Components/PageHeader";
import Office from "./Office";
import Staff from "./Staff";
import Footer from "../../Components/Footer";

const About = () => {
  return (
    <div>
      <SectionInfo />
      <Navbar />
      <SectionTitle title="About" />
      <Staff />
      <Office />
      <Footer />
    </div>
  );
};

export default About;
