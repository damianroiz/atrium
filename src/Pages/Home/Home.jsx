import React from "react";
import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { SliderHome } from "./SliderHome";
import { CardsHome } from "./CardsHome";
import { AboutHome } from "./AboutHome";
import { Reviews } from "./Reviews";
import { BannerApoint } from "./MissionBanner";

const Home = () => {
  return (
    <div>
      <SectionInfo />
      <Navbar />
      <SliderHome />
      <CardsHome />
      <AboutHome />
      <BannerApoint />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
