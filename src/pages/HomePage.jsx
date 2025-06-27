import React from 'react';
import HeroSection from '../components/HeroSection';
import VisionMissionSection from '../components/VisionMissionSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import AudienceSection from '../components/AudienceSection';
import PositioningSection from '../components/PositioningSection';
// import MarketSection from '../components/MarketSection';
import ValuePropositionSection from '../components/ValuePropositionSection';
// import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import ThemeToggle from '../components/ThemeToggle';
import ScrollToTop from '../components/ScrollToTop';

const HomePage = () => {
  return (
    <div className="theme-transition min-h-screen">
      <ThemeToggle />
      <ScrollToTop />
      
      <HeroSection />
      
      <div className="space-y-16 md:space-y-24 pt-16">
        <VisionMissionSection />
        <ProblemSection />
        <SolutionSection />
        <AudienceSection />
        <PositioningSection />
        {/* <MarketSection /> */}
        <ValuePropositionSection />
        {/* <TeamSection /> */}
        <ContactSection />
      </div>
    </div>
  );
};

export default HomePage;