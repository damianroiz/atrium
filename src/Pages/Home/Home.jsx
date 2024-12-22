import React from 'react';
import Carousel from './Carousel';
import { HomeCards, AboutUs, MissionBanner } from './HomeSections';

export default function Home() {
  return (
    <div>
      <Carousel />
      <HomeCards />
      <AboutUs />
      <MissionBanner />
    </div>
  );
}
