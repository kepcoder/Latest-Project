import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticlesBackground from "../bgParticles/backgroundParticles";
import { FaYoutube, FaInstagram, FaGlobe } from "react-icons/fa";
import FooterSection from "../sections/Footer";

gsap.registerPlugin(ScrollTrigger);

const INFLUENCER_IMG = "/images/mrbeast.webp"; // Use your best available image

const Influencer = () => {
  const titleRef = useRef(null);
  const aboutRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Clip-path parallelogram reveal for title
    gsap.fromTo(
      titleRef.current,
      { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0, filter: "blur(10px)" },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
      }
    );
    // Sliding effect for card
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: 100, filter: "blur(10px)" },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1.2,
        delay: 0.5,
        ease: "power2.out",
      }
    );
    // Scroll reveal for about text
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 60, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <>
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#fceabb] overflow-x-hidden" style={{ fontFamily: 'nukku3' }}>
      <ParticlesBackground />
      <div className="w-full flex flex-col items-center pt-32 pb-16 px-4 z-10">
        {/* Title with parallelogram clip-path */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-white mb-10"
          style={{
            WebkitClipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
            clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
            background: "#A76E3B",
            color: "milk",
            padding: "0.5em 1.5em",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            borderRadius: "1.5rem",
            display: "inline-block",
            letterSpacing: "0.05em",
          }}
        >
          About Influencer
        </h1>
        {/* Influencer Card */}
        <div
          ref={cardRef}
          className="w-full max-w-2xl bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl flex flex-col items-center p-8 md:p-12 border border-white/30 mb-10"
        >
          <img
            src={INFLUENCER_IMG}
            alt="MrBeast"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl border-4 border-[#2c5364] shadow-lg mb-6"
            style={{ background: '#fceabb' }}
          />
          <h2 className="text-3xl md:text-4xl font-bold text-[#232224] mb-2 tracking-wide">MrBeast</h2>
          <div className="flex gap-6 mb-4">
            <a href="https://www.youtube.com/@MrBeast" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-400 text-3xl transition-all"><FaYoutube /></a>
            <a href="https://www.instagram.com/mrbeast/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 text-3xl transition-all"><FaInstagram /></a>
            <a href="https://feastables.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 text-3xl transition-all"><FaGlobe /></a>
          </div>
          {/* About text, scroll reveal */}
          <p
            ref={aboutRef}
            className="text-lg md:text-xl text-[#232224] font-medium text-center leading-relaxed mt-2"
          >
            Jimmy Donaldson, aka MrBeast, is a world-famous YouTuber known for his viral challenges, philanthropy, and record-breaking giveaways. <br />
            He inspires millions by using his platform to make a positive impact and push the boundaries of online entertainment.<br />
            With over 200 million subscribers, MrBeast is a true influencer in the digital age.
          </p>
        </div>
      </div>
    </div>
    <FooterSection/>
    </>
  );
};

export default Influencer;
