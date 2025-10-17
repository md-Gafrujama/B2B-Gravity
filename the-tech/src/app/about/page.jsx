import React from 'react';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import OurMission from '@/components/about/OurMission';
import StatsSection from '@/components/about/StatsSection';
import WhatWeDo from '@/components/about/WhatWeDo';
import OurValues from '@/components/about/OurValues';
import Achievements from '@/components/about/Achievements';
import GetStarted from '@/components/about/GetStarted';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF]">
      <AboutHeroSection />
      <OurMission />
      <StatsSection />
      <WhatWeDo />
      <OurValues />
      <Achievements />
      <GetStarted />
    </div>
  );
};

export default AboutPage;