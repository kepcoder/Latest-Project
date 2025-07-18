import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Loading({ onComplete }) {
  const chocTop = useRef();
  const chocBottom = useRef();
  const container = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete(); // Callback to hide loader
      }
    });

    // Initial state
    gsap.set([chocTop.current, chocBottom.current], {
      rotation: 0,
      x: 0,
      opacity: 1,
    });

    // Main animation
    tl.to(chocTop.current, {
      duration: 1,
      rotation: -90,
      x: -200,
      ease: "power3.inOut"
    })
    .to(chocBottom.current, {
      duration: 1,
      rotation: 90,
      x: 200,
      ease: "power3.inOut"
    }, "<") // run at same time
    .to(container.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
      onComplete: () => {
    if (onComplete) onComplete();
  }
    }, "+=0.3");

  }, []);

  return (
    <div ref={container} className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
      <div className="relative w-60 h-60">
        <img
          ref={chocTop}
          src="/images/choco1.webp"
          alt="Top Chocolate"
          className="absolute w-40 left-10 top-20 origin-center"
        />
        <img
          ref={chocBottom}
          src="/images/choco2.webp"
          alt="Bottom Chocolate"
          className="absolute w-40 left-10 top-20 origin-center"
        />
      </div>
    </div>
  );
}
