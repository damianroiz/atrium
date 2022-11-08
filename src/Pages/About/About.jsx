import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import SectionTitle from "../../Components/SectionTitle";
import CarouselImg from "./Carousel";
import Staff from "./Staff";
import Footer from "../../Components/Footer";

const About = () => {
  return (
    <div>
      <SectionInfo />
      <Navbar />
      <SectionTitle title="About" />
      <CarouselImg />
      <Staff />
      <Footer />
    </div>
  );
};

export default About;
