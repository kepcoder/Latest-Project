import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const LoadingPage = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null); // 👈 ref for animation

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          // ✅ Animate slide up when done
          gsap.to(containerRef.current, {
            y: "-100%",
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
              if (onComplete) onComplete(); // 🔥 Call parent to hide
            },
          });

          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen flex justify-center items-center bg-black text-white flex-col gap-4 fixed top-0 left-0 z-[9999]"
    >
      <img src="/images/logo.avif" alt="MrBeast Logo" className="loading-logo w-70 h-30" />
      <h1 className="text-2xl">Customizing Your Experience...</h1>

      <div className="w-[80%] h-2 bg-white/30 rounded-full">
        <div
          className="h-full bg-white rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm mt-2">{progress}%</p>
    </div>
  );
};

export default LoadingPage;
