import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackgroundParticles from "../bgParticles/backgroundParticles";
import styles from "./EthicalSourcing.module.css";

gsap.registerPlugin(ScrollTrigger);

const processData = [
  {
    step: "Source",
    description:
      "We carefully select our cocoa beans from sustainable farms, ensuring fair compensation for farmers.",
    video: "/videos/source.mp4",
  },
  {
    step: "Verify",
    description:
      "Each batch is verified for quality and ethical sourcing standards through rigorous testing.",
    video: "/videos/verify.mp4",
  },
  {
    step: "Process",
    description:
      "Our beans are processed using state-of-the-art equipment while maintaining traditional methods.",
    video: "/videos/Process.mp4",
  },
  {
    step: "Package",
    description:
      "Environmentally conscious packaging that maintains product freshness.",
    video: "/videos/packaging.mp4",
  },
];

const imageCards = [
  {
    title: "pay farmers What They deserve ",
    description: "Supporting farmer communities through fair compensation",
    image: "/images/ethical-image1.webp",
  },
  {
    title: "Source from Fairtrade Certified Cooperatives",
    description: "Promoting eco-friendly cultivation methods",
    image: "/images/ethical-image2.webp",
  },
  {
    title: "Partner With Farms That Protect Children",
    description: "Ensuring premium chocolate quality at every step",
    image: "/images/ethical-image3.webp",
  },
];

const EthicalSourcing = () => {
  const timelineRef = useRef(null);
  const cardsRef = useRef(null); // Add new ref for cards

  useEffect(() => {
    // Timeline animation for process with adjusted triggers
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 80%", // Changed from center to 80%
        end: "bottom 60%", // Changed to 60%
        scrub: 0.5, // Reduced scrub time for smoother animation
      },
    });

    timeline
      .from(".process-item", {
        opacity: 0,
        y: 30, // Reduced y distance
        stagger: 0.1, // Faster stagger
      })
      .from(
        ".process-line",
        {
          scaleY: 0,
          transformOrigin: "top",
          duration: 0.5, // Reduced duration
        },
        "<"
      );

    // Improved cards animation
    const cards = gsap.utils.toArray(".card-container");
    cards.forEach((card, i) => {
      gsap.set(card, { opacity: 0, y: 50 }); // Reduced initial y offset

      ScrollTrigger.create({
        trigger: card,
        start: "top 90%", // Earlier trigger point
        end: "top 60%", // Earlier end point
        scrub: 0.5, // Smoother scrub
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.5, // Faster animation
            ease: "power1.out", // Smoother easing
            delay: i * 0.1, // Shorter delay between cards
          });
        },
        onLeaveBack: () => {
          gsap.to(card, {
            opacity: 0,
            y: 50,
            duration: 0.3,
          });
        },
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <BackgroundParticles />
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="h-[70vh] flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className=" mt-10 text-6xl md:text-8xl bg-[#ec9214] -rotate-2 p-4 font-[Kanit-Bold] text-white mb-6 uppercase inline-block ">
              Our Commitment to
            </h1>
            <h1 className="text-6xl md:text-8xl bg-[#e3a458] rotate-2 p-4 font-[Kanit-Bold] text-white mb-6 uppercase inline-block">
              Ethical Sourcing
            </h1>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <div className="py-10 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          ></motion.div>
        </div>

        {/* Image Cards Section*/}
        <div className="bg-[#523122] py-20 px-4" ref={cardsRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {imageCards.map((card, index) => (
              <div key={index} className="card-container">
                <motion.div
                  className={`${styles.imageCard}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden h-[500px] relative group">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="card-image w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/60" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <h3 className="text-2xl font-[Kanit-Medium] text-white mb-2 transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-2">
                        {card.title}
                      </h3>
                      <p className="text-white/90 transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-2">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="bg-[#faeade] py-20 px-4" ref={timelineRef}>
          <h2 className="text-4xl md:text-5xl font-[Kanit-Medium] text-[#523122] text-center mb-16">
            Our Process
          </h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="process-line absolute left-1/2 top-0 w-1 h-full bg-[#523122]/20 transform -translate-x-1/2"></div>
            {processData.map((item, index) => (
              <div
                key={item.step}
                className="process-item flex items-center mb-16 relative"
              >
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-[Kanit-Medium] text-[#523122]">
                    {item.step}
                  </h3>
                  <p className="text-[#523122]/80 mt-2">{item.description}</p>
                </div>
                <div className="w-4 h-4 bg-[#523122] rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pl-8">
                  <video
                    className="rounded-lg shadow-xl w-full h-48 object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action with new background */}
        <div className="bg-[#523122] py-20 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-[Kanit-Medium] text-white mb-8">
              Join Us in Making a Difference
            </h2>
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-[Kanit-Medium] hover:bg-white/90 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EthicalSourcing;
