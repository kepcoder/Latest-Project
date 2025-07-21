import { useRef } from "react";
import { CravingCards } from "../data/flavourData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CravingSection = () => {
  const vdRef = useRef([]);
  let startValue = window.innerWidth < 768 ? "10% top" : "20% top";

  useGSAP(() => {
   const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    // For desktops and tablets
    gsap.set(".testimonials-section", {
      marginTop: "-140vh",
    });
  });

  mm.add("(max-width: 767px)", () => {
    // For mobile devices
    gsap.set(".testimonials-section", {
      marginTop: "-10vh", // You can adjust this to fit
    });
  });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: 70,
    })
      .to(
        ".testimonials-section .sec-title",
        {
          xPercent: 25,
        },
        "<"
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -50,
        },
        "<"
      );

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: startValue,
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });

  const handlePlay = (index) => {
    const video = vdRef.current[index];
    video.play();
  };

  const handlePause = (index) => {
    const video = vdRef.current[index];
    video.pause();
  };

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">A Flavour</h1>
        <h1 className="text-pink-400 sec-title">For Every</h1>
        <h1 className="text-light-brown third-title">Craving</h1>
      </div>

      <div className="pin-box">
        {CravingCards.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={(el) => (vdRef.current[index] = el)}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CravingSection;