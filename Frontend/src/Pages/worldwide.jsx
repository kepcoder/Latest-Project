import React from "react";
import { motion } from "framer-motion";
import styles from "./Worldwide.module.css";
import BackgroundParticles from "../bgParticles/backgroundParticles";
import FooterSection from './../sections/Footer';

const Worldwide = () => {
  const regions = [
    {
      title: "North America",
      countries: [
        { name: "United States", shipping: "Free shipping on orders $50+" },
        { name: "Canada", shipping: "Free shipping on orders $75+" },
        { name: "Mexico", shipping: "Standard shipping available" },
      ],
    },
    {
      title: "Europe",
      countries: [
        { name: "United Kingdom", shipping: "Free shipping on orders £40+" },
        { name: "France", shipping: "Standard EU shipping" },
        { name: "Germany", shipping: "Standard EU shipping" },
        { name: "Spain", shipping: "Standard EU shipping" },
        { name: "Ireland", shipping: "Standard EU shipping" },
        { name: "Iceland", shipping: "Express shipping available" },
      ],
    },
    {
      title: "Asia Pacific",
      countries: [
        { name: "India", shipping: "Standard shipping available" },
        { name: "Bangladesh", shipping: "Express shipping available" },
        { name: "Malaysia", shipping: "Standard shipping available" },
        { name: "Australia", shipping: "Free shipping on orders $100+" },
        { name: "New Zealand", shipping: "Standard shipping available" },
      ],
    },
    {
      title: "Central America",
      countries: [
        { name: "Costa Rica", shipping: "Standard shipping available" },
        { name: "Panama", shipping: "Express shipping available" },
      ],
    },
  ];

  return (
    <>
    <div className="min-h-screen relative">
      <BackgroundParticles />
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-24 pb-16 px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 font-[Kanit-Medium] uppercase"
          >
            Available Worldwide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white max-w-2xl mx-auto font-[Kanit-Medium] tracking-wide uppercase"
          >
            Delivering happiness to chocolate lovers across the globe! 🌎
          </motion.p>
        </div>

        {/* World Map Section */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className={styles.mapAnimation}>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="max-h-[400px] overflow-hidden">
                <img
                  src="/images/worlmap.jpeg"
                  alt="World Map Shipping"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Regions Grid */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, regionIndex) => (
              <div
                key={region.title}
                className={styles.regionAnimation}
                style={{ animationDelay: `${regionIndex * 0.2}s` }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: regionIndex * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:bg-white/20 cursor-pointer"
                >
                  <h3 className="text-2xl font-bold text-white mb-4 font-[Kanit-Medium] uppercase">
                    {region.title}
                  </h3>
                  <div className="space-y-4">
                    {region.countries.map((country, index) => (
                      <div
                        key={country.name}
                        className="flex items-center justify-between"
                      >
                        <span className="text-white font-medium font-[Kanit-Medium] uppercase">
                          {country.name}
                        </span>
                        <span className="text-white/80 text-sm font-[Kanit-Medium] uppercase">
                          {country.shipping}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="text-center pb-20 px-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/90 max-w-2xl mx-auto font-[Kanit-Medium] uppercase"
          >
            More countries being added soon! Stay tuned for updates on our
            global expansion.
          </motion.p>
        </div>
      </div>
    </div>
    <FooterSection/>
    </>
  );
};

export default Worldwide;
