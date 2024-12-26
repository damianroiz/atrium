import React from 'react';
import HomeSection from '../../Components/HomeSection';
import HomeCarousel from '../../Components/HomeCarousel';
import HomeCards from '../../Components/HomeCards';
import { cardsContent } from './home_content';
import MissionBanner from '../../Components/MissionBanner';
import Reviews from '../../Components/Reviews';

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      <HomeCards cardsContent={cardsContent} />
      <HomeSection />
      <MissionBanner />
      <Reviews />
    </div>
  );
}
