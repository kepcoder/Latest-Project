import ParticlesBackground from "./bgParticles/backgroundParticles";
import Navbar from "./components/navbar";
import LandingPage from "./sections/landingPage";
import MissionPage from "./sections/MissionPage";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import FlavorSection from "./sections/flavouSection";
import { useGSAP } from "@gsap/react";
import Page3 from "./sections/page3";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App() {

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
        <div className="w-full fixed top-0 left-0 z-100">
          <Navbar />
        </div>
        <div className="z-10 relative" id="smooth-content">
          <LandingPage/>
          <MissionPage />
          <FlavorSection />
          <Page3/>
        </div>
      </div>
    </>
  );
}
