import React from 'react';
import Carousel from './Carousel';
import HomeSection from '../../Components/HomeSection';
import HomeCards from '../../Components/HomeCards';
import { cardsContent } from './home_content';
import MissionBanner from '../../Components/MissionBanner';

export default function Home() {
  return (
    <div>
      <Carousel />
      <HomeCards cardsContent={cardsContent} />
      <HomeSection />
      <MissionBanner />
    </div>
  );
}
