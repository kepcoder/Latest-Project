import { useRef } from "react";
import { CravingCards } from "../data/flavourData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CravingSection = () => {
  const vdRef = useRef([]);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

useGSAP(() => {
  if (isMobile) {
    //  gsap for Mobile version 
    const revealTl = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: ".craving-mobile-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".craving-mobile-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".craving-mobile-section .sec-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".craving-mobile-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });

    return; // ✅ done for mobile
  }

//    gsap for desktop & laptop
  gsap.set(".craving-section", {
    marginTop: "-140vh",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".craving-section",
      start: "top bottom",
      end: "200% top",
      scrub: true,
    },
  });

  tl.to(".craving-section .first-title", {
    xPercent: 70,
  })
    .to(
      ".craving-section .sec-title",
      { xPercent: 25 },
      "<"
    )
    .to(
      ".craving-section .third-title",
      { xPercent: -50 },
      "<"
    );

  const pinTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".craving-section",
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
}, []);


  const handlePlay = (index) => {
    const video = vdRef.current[index];
    video.play();
  };

  const handlePause = (index) => {
    const video = vdRef.current[index];
    video.pause();
  };

  const handleMobileToggle = (index) => {
   const video = vdRef.current[index];
   if (video.paused) {
    video.muted = false;
    video.play();
   } else {
    video.pause();
   }
};

  return (
    <section className="w-full">
      {/* For Desktop & Tablet  */}
      {!isMobile && (
       <section className="craving-section">
         <div className="absolute size-full flex flex-col items-center pt-[5vw]">
             <h1 className="text-black first-title">A falvor</h1>
             <h1 className="text-pink-400 sec-title">for every</h1>
             <h1 className="text-light-brown third-title">craving</h1>
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
      )}

      {/* for Mobile Version */}
      {isMobile && (
        <div className="craving-mobile-section">
          <h1 className="first-title text-black bg-milk p-4 rotate-3"
               style={{
               clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
               borderColor:"#222123",
               }}>A flavor</h1>
          <h1 className="sec-title text-pink-400 bg-[#1a1a1a] p-4 -rotate-4"
              style={{
               clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
               borderColor:"#222123",
               }}>For every </h1>
          <h1 className="third-title text-milk bg-light-brown p-5 -rotate-1"
              style={{
               clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
               borderColor:"#222123",
               }}>craving</h1>

               
          {CravingCards.map((card, index) => (
            <div key={index} 
                 className="w-full rounded-xl overflow-hidden shadow-md"
                 onClick={() => handleMobileToggle(index)} >
              <video
                ref={(el) => (vdRef.current[index] = el)}
                src={card.src}
                playsInline
                mute
                loop
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      )}

    </section>
  );
};

export default CravingSection;
