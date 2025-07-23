import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ParticlesBackground from "../bgParticles/backgroundParticles";

const Login = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: -100, filter: "blur(10px)" },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center z-10" style={{ fontFamily: 'nukku3' }}>
      <ParticlesBackground />
      <form ref={formRef} className="relative z-20 bg-white/20 shadow-2xl backdrop-blur-lg rounded-2xl px-8 py-10 w-full max-w-sm flex flex-col items-center border border-white/30">
        <img src='/images/logo.avif' alt="Logo" className="w-40 h-20 mb-5 -mt-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-wide">Sign in</h2>
        <div className="w-full mb-4 flex flex-col">
          <label htmlFor="username" className="text-base text-gray-800 mb-1 font-medium">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required className="px-4 py-2 rounded-lg border border-gray-300 bg-white/80 text-base focus:outline-none focus:border-sky-400 transition" />
        </div>
        <div className="w-full mb-4 flex flex-col">
          <label htmlFor="password" className="text-base text-gray-800 mb-1 font-medium">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required className="px-4 py-2 rounded-lg border border-gray-300 bg-white/80 text-base focus:outline-none focus:border-sky-400 transition" />
        </div>
        <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 text-white text-lg font-semibold shadow-md hover:from-blue-600 hover:to-sky-400 transition mb-2 mt-1">Login</button>
        <div className="w-full text-right">
          <a href="#" className="text-sky-500 text-sm hover:text-blue-600 transition underline underline-offset-2">Forgot password?</a>
        </div>
        <Link to="/register" className="text-milk text-sm hover:text-blue-600 transition underline underline-offset-2 mt-2">Don't have an Account?</Link>
      </form>
    </div>
  );
};

export default Login;
