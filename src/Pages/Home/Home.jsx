import React from "react";
import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { SliderHome } from "./SliderHome";
import { HomeCards, AboutUs, MissionBanner, Reviews } from "./HomeSections";

const Home = () => {
  return (
    <div>
      <SectionInfo />
      <Navbar />
      <SliderHome />
      <HomeCards />
      <AboutUs />
      <MissionBanner />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
