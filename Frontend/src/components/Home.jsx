import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ParticlesBackground from './../bgParticles/backgroundParticles';
import LandingPage from "../sections/landingPage";
import MissionPage from './../sections/MissionPage';
import FlavorSection from "../sections/flavouSection";
import Page3 from './../sections/page3';
import BenefitSection from './../sections/benefitSection';
import CravingSection from './../sections/CravingSection';
import ModelSection from './../sections/3DSection';
import StoreSection from './../sections/StoreSection';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <>
      <div className="w-screen relative" id="smooth-wrapper">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(135deg,#0079AC,#00B3D2)]" />
        {/* Particles js */}
        <ParticlesBackground />

        {/* My content */}
        <div className="z-10 relative" id="smooth-content">
          <LandingPage/>
          <MissionPage />
          <FlavorSection />
          <Page3/>
          <BenefitSection/>
          <CravingSection/>
          <ModelSection/>
          <StoreSection/>
        </div>
      </div>
    </>
  );
}
