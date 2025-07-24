import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef, useEffect } from "react";

gsap.registerPlugin(SplitText);

const LandingPage = () => {
  const titleRef = useRef(null);
  const charsRef = useRef([]);
  const subtitleRef = useRef(null);
  const subtitleCharsRef = useRef([]); 

useGSAP(() => {
  // Title split
  const splitTitle = SplitText.create(titleRef.current, {
    type: "chars",
  });
  charsRef.current = splitTitle.chars;

  // Subtitle split
  const splitSubtitle = SplitText.create(subtitleRef.current, {
    type: "chars",
  });
  subtitleCharsRef.current = splitSubtitle.chars;

  const tl = gsap.timeline({ delay: 1 });

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
    )
    .from(
      splitTitle.chars,
      {
        yPercent: 200,
        stagger: 0.02,
        ease: "power2.out",
      },
      "-=0.5"
    )
    .from(
      splitSubtitle.chars,
      {
        yPercent: 200,
        stagger: 0.02,
        ease: "power2.out",
      },
      "-=0.5"
    );

  gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-container",
      start: "1% top",
      end: "bottom top",
      scrub: true,
    },
  }).to(".landing-container", {
    rotate: 7,
    scale: 0.9,
    yPercent: 30,
    ease: "power1.inOut",
  });
}, []);


  const handleHover = () => {
    gsap.to(charsRef.current, {
      y: (i) => Math.sin(i * 0.5) * 20,
      duration: 0.8,
      ease: "sine.inOut",
      stagger: 0.02,
    });
  };

  const handleLeave = () => {
    gsap.to(charsRef.current, {
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.02,
    });
  };


const handleSubtitleHover = () => {
  gsap.to(subtitleCharsRef.current, {
    y: (i) => Math.sin(i * 0.5) * 20,
    duration: 0.8,
    ease: "sine.inOut",
    stagger: 0.02,
  });
};

const handleSubtitleLeave = () => {
  gsap.to(subtitleCharsRef.current, {
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    stagger: 0.02,
  });
};




  return (
    <section className="bg-transparent">
      <div className="landing-container ">
        <video
          src="/videos/landing-page-video.mp4"
          className="video-animate absolute bottom-0 left-0 w-full h-full object-cover object-bottom z-0"
          autoPlay
          muted
        ></video>

        <div className="landing-content opacity-0 text-center max-[600px]:pt-80">
          <div className="overflow-hidden">
            <h1
              ref={titleRef}
              className="landing-title max-[450px]:text-4xl max-[350px]:text-3xl"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              Support cocoa farmers
            </h1>
          </div>
          <div
             ref={subtitleRef}
             onMouseEnter={handleSubtitleHover}
             onMouseLeave={handleSubtitleLeave}
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

export default LandingPage;
