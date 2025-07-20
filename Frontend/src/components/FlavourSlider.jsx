import { useGSAP } from "@gsap/react";
import {flavorData} from "../data/flavourData"
import gsap from "gsap";
import {useRef} from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef();
const drinkRefs = useRef([]);
const elemRefs = useRef([]);

 
const handleMouseMove = (e, index) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left; 
  const y = e.clientY - rect.top;  

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const moveX = (centerX - x) / 20;
  const moveY = (centerY - y) / 20;


  const drink = drinkRefs.current[index];
  const elem = elemRefs.current[index];

  if (drink && elem) {
    drink.style.transform = `translate(${moveX}px, ${moveY}px)`;
    elem.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
};

const handleMouseLeave = (index) => {
  const drink = drinkRefs.current[index];
  const elem = elemRefs.current[index];
  if (drink && elem) {
    drink.style.transform = `translate(0px, 0px)`;
    elem.style.transform = `translate(0px, 0px)`;
  }
};

const handleMouseEnter = (index) => {
  const drink = drinkRefs.current[index];
  const elem = elemRefs.current[index];
  if (drink && elem) {
    drink.style.transition = 'transform 0.2s ease';
    elem.style.transition = 'transform 0.2s ease';
  }
};




  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "-5% top",
          end: `+=${scrollAmount + 1000}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + 840}px`,
        ease: "power1.inOut",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -8,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors p-3">
        {flavorData.map((flavor,index) => (
          <div
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={() => handleMouseLeave(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          key={flavor.name}
          className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={flavor.bgUrl}
              alt="bg"
              className={`absolute inset-0 bg-cover ${flavor.width} ${flavor.height} bottom-0 rounded-4xl shadow-[0_35px_60px_rgba(0,0,0,0.6)]`}
            />

            <img
              ref={(el) => (drinkRefs.current[index] = el)}
              src={flavor.url}
              alt=""
              className="drinks"
            />
            <img
              ref={(el) => (elemRefs.current[index] = el)}
              src={flavor.elemUrl}
              alt=""
              className="elements"
            />
            <h1 className={`${flavor.color}`}>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
