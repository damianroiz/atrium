import React from "react";
import SectionInfo from "../../Components/SectionInfo";
import { Navbar } from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { SliderHome } from "./SliderHome";
import { CardsHome } from "./CardsHome";
import { AboutHome } from "./AboutHome";
import { Reviews } from "./Reviews";
import { BannerApoint } from "./BannerApoint";
import MapContact from "../Contact/MapContact";

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
      <MapContact />
      <Footer />
    </div>
  );
};

export default Home;
