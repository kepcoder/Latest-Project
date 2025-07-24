import React, { useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { CiFaceSmile } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navBarFade = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        variants={navBarFade}
        initial="hidden"
        animate="visible"
        className="h-[75px] w-full flex justify-between items-center bg-[#72E2FF] px-6 border-b-4 border-black xl:justify-between xl:px-6"
      >
        <div className="xl:hidden text-3xl text-black">
          <BsHandbag />
        </div>

        <Link
          to="/"
          className="logo w-[160px] mx-auto xl:mx-0 sm:w-[140px] xs:w-[120px] max-[400px]:w-[100px] cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.location.replace("/");
          }}
        >
          <img src="/images/logo.avif" alt="logo" className="mx-auto" />
        </Link>

        {/* Desktop Menu - NO BACKGROUND ADDED HERE */}
<div className="hidden xl:flex items-center gap-8 font-[Kanit-BlackItalic] text-xl text-black tracking-wide">
      {[
        { label: "Shop", link: "/products" },
        { label: "Ethical Sourcing", link: "/ethicalsourcing", forceReload: true },
        { label: "Available Worldwide", link: "/worldwide" },
        { label: "Influencer", link: "/influencer" },
      ].map((item, i) => (
        <div key={i} className="relative group">
          {item.forceReload ? (
            <a
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = item.link; // reloads the page
              }}
              className="text-black text-lg"
            >
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                {item.label}
              </span>
              <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-black rounded-full blur-sm opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100"></span>
            </a>
          ) : (
            <Link to={item.link} className="text-black text-lg">
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                {item.label}
              </span>
              <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-black rounded-full blur-sm opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100"></span>
            </Link>
          )}
        </div>
      ))}
    </div>



        <div className="hidden xl:flex gap-4 text-3xl items-center">
          <HiOutlineQuestionMarkCircle className="cursor-not-allowed" />
          <div className="w-9 h-9 rounded-full border-2 border-black overflow-hidden">
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/571/519/original/circle-flag-of-india-free-png.png"
              alt="India"
              className="w-full h-full object-cover cursor-not-allowed"
            />
          </div>
           <Link to="/login">
    <div className="bg-sky-400 text-xl px-8 py-2 rounded-full font-semibold text-white hover:bg-sky-500 transition-all cursor-pointer">
      Login
    </div>
  </Link>
          <a href="https://feastables.com/pages/find-a-store">
            <IoLocationOutline className="cursor-pointer" />
          </a>
          <BsHandbag className="cursor-not-allowed" />
        </div>

        <div
          className="xl:hidden text-4xl text-black cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <GiHamburgerMenu />
        </div>
      </motion.div>

      {/* ✅ Mobile Menu with BACKGROUND & BLUR */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, ease: "anticipate" }}
            className="fixed top-0 right-0 w-full h-screen bg-[#72E2FF] z-50 shadow-xl p-6 flex flex-col"
          >
            <div className="text-right text-xl font-bold mb-4">
              <button onClick={() => setIsOpen(false)}>✕</button>
            </div>

            <div className="flex flex-col gap-4 mt-4 font-[Kanit-BlackItalic] text-lg text-black tracking-wide">
              {[
                { label: "Shop", link: "/products" },
                { label: "Ethical Sourcing", link: "/ethicalsourcing", forceReload: true },
                { label: "Available Worldwide", link: "/worldwide" },
                { label: "Influencer", link: "/influencer" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="backdrop-blur-md bg-white/20 px-4 py-3 rounded-xl flex justify-between items-center hover:bg-white/30 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.forceReload ? (
                    <a
                      href={item.link}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = item.link;
                      }}
                      className="flex justify-between items-center w-full"
                    >
                      <span>{item.label}</span>
                      <span className="text-xl inline-block animate-[wiggle_1.5s_ease-in-out_infinite] rotate-[-45deg]">➜</span>
                    </a>
                  ) : (
                    <Link to={item.link} className="flex justify-between items-center w-full">
                      <span>{item.label}</span>
                      <span className="text-xl inline-block animate-[wiggle_1.5s_ease-in-out_infinite] rotate-[-45deg]">➜</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t-2 border-black flex flex-col gap-4 text-3xl">
              <div className="flex gap-4 justify-center">
                <HiOutlineQuestionMarkCircle />
                 <Link to="/login">
    <div className="bg-sky-400 px-10 py-3 text-2xl rounded-full font-semibold text-white hover:bg-sky-500 transition-all cursor-pointer">
      Login
    </div>
  </Link>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-black mx-auto overflow-hidden">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/011/571/519/original/circle-flag-of-india-free-png.png"
                  alt="India"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
