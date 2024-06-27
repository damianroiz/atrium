import React from "react";
import SectionInfo from "../../Components/SectionInfo";
import Navbar from "../../Components/Navbar";
import Carousel from "./Carousel";
import Footer from "../../Components/Footer";
import { HomeCards, AboutUs, MissionBanner } from "./HomeSections";

export default function Home() {
  return (
    <div>
      <SectionInfo />
      <Navbar />
      <Carousel />
      <HomeCards />
      <AboutUs />
      <MissionBanner />
      <Footer />
    </div>
  );
};

