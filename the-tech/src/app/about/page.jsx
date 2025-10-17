// import React from 'react';
// import AboutHeroSection from '@/components/about/AboutHeroSection';
// import OurMission from '@/components/about/OurMission';
// import StatsSection from '@/components/about/StatsSection';
// import WhatWeDo from '@/components/about/WhatWeDo';
// import OurValues from '@/components/about/OurValues';
// import Achievements from '@/components/about/Achievements';
// import GetStarted from '@/components/about/GetStarted';

// const AboutPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF]">
//       <AboutHeroSection />
//       <OurMission />
//       <StatsSection />
//       <WhatWeDo />
//       <OurValues />
//       <Achievements />
//       <GetStarted />
//     </div>
//   );
// };

// export default AboutPage;


import React from 'react';
import dynamic from 'next/dynamic';

// Lazy load heavy components
const AboutHeroSection = dynamic(() => import('@/components/about/AboutHeroSection'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse"></div>
});
const OurMission = dynamic(() => import('@/components/about/OurMission'));
const StatsSection = dynamic(() => import('@/components/about/StatsSection'));
const WhatWeDo = dynamic(() => import('@/components/about/WhatWeDo'));
const OurValues = dynamic(() => import('@/components/about/OurValues'));
const Achievements = dynamic(() => import('@/components/about/Achievements'));
const GetStarted = dynamic(() => import('@/components/about/GetStarted'));

// Fix: Use a different name for the export to avoid conflict with the import
export const dynamicParams = false; // This forces static generation

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
