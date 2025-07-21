import { useRef } from "react";
import { CravingCards } from "../data/flavourData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CravingSection = () => {
  const vdRef = useRef([]);

  useGSAP(() => {
    gsap.set(".Craving-section", {
      marginTop: "-140vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Craving-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });

    tl.to(".Craving-section .first-title", {
      xPercent: 70,
    })
      .to(
        ".Craving-section .sec-title",
        {
          xPercent: 25,
        },
        "<"
      )
      .to(
        ".Craving-section .third-title",
        {
          xPercent: -50,
        },
        "<"
      );

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Craving-section",
        start: "10% top",
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
    <section className="Craving-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">A Flavor</h1>
        <h1 className="text-light-brown sec-title">For Every</h1>
        <h1 className="text-black third-title">Craving</h1>
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