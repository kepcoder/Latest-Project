import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
// import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  // const isMobile = useMediaQuery({
  //   query: "(max-width: 768px)",
  // });

  // const isTablet = useMediaQuery({
  //   query: "(max-width: 1024px)",
  // });

  useGSAP(() => {
    const titleSplit = SplitText.create(".landing-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".landing-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".landing-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      ).from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".landing-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".landing-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-transparent">
      <div className="landing-container">
        <img
          src="/images/bgimage.jpg"
          className="absolute bottom-0 left-0 w-full h-full object-cover object-bottom z-0"
        />

        <div className="landing-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="landing-title max-[450px]:text-4xl max-[350px]:text-3xl">Support cocoa farmers</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="landing-text-scroll"
          >
            <div className="landing-subtitle">
              <h1> with Every Bite</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
