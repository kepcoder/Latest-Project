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

  // Internal navigation links
  const navItems = [
    { name: "Shop", path: "/products" },
    {
      name: "Ethical Sourcing",
      path: "/ethicalsourcing",
    },
    { name: "Available Worldwide", path: "/worldwide" },
    { name: "Influencer", path: "/influencer" },
  ];

  const mobileItems = [
    { name: "Chocolate", path: "/chocolate" },
    { name: "Cups", path: "/cups" },
    { name: "Bundles", path: "/bundles" },
    { name: "Limited Time", path: "/limited-time" },
  ];

  const waveVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  const navBarFade = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const renderLink = (item, idx, onClickClose) => {
    const classes = "relative group";

    if (item.external) {
      return (
        <motion.a
          key={idx}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          custom={idx}
          variants={waveVariants}
          initial="hidden"
          animate="visible"
          className={classes}
        >
          {item.name}
          <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-black group-hover:w-full transition-all duration-500" />
        </motion.a>
      );
    } else {
      return (
        <motion.div
          key={idx}
          custom={idx}
          variants={waveVariants}
          initial="hidden"
          animate="visible"
        >
          <Link to={item.path} onClick={onClickClose} className={classes}>
            {item.name}
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-black group-hover:w-full transition-all duration-500" />
          </Link>
        </motion.div>
      );
    }
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
          className="logo w-[160px] mx-auto xl:mx-0 sm:w-[140px] xs:w-[120px] max-[400px]:w-[100px]"
        >
          <img src="/images/logo.avif" alt="logo" className="mx-auto" />
        </Link>

        <div className="hidden xl:flex gap-8 font-[Kanit-BlackItalic] text-xl text-black tracking-wide">
          {navItems.map((item, idx) => renderLink(item, idx))}
        </div>

        <div className="hidden xl:flex gap-4 text-3xl items-center">
          <HiOutlineQuestionMarkCircle className="cursor-pointer" />
          <div className="w-9 h-9 rounded-full border-2 border-black overflow-hidden">
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/571/519/original/circle-flag-of-india-free-png.png"
              alt="India"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
          <CiFaceSmile className="cursor-pointer" />
          <IoLocationOutline className="cursor-pointer" />
          <BsHandbag className="cursor-pointer" />
        </div>

        <div
          className="xl:hidden text-4xl text-black cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <GiHamburgerMenu />
        </div>
      </motion.div>

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

            <motion.div
              className="flex flex-col gap-6 mt-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {[...mobileItems, ...navItems].map((item, idx) =>
                renderLink(item, idx, () => setIsOpen(false))
              )}
            </motion.div>

            <div className="mt-auto pt-10 border-t-2 border-black flex flex-col gap-4 text-3xl">
              <div className="flex gap-4 justify-center">
                <HiOutlineQuestionMarkCircle />
                <CiFaceSmile />
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
