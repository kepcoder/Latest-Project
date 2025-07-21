import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import gsap from 'gsap';


function Page3() {

  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current.play();
  };

  const handleMouseLeave = () => {      
    setHovered(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0; // Optional: reset video to start
  };

  const handleMouseMove = (e) => {
    const bounds = containerRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top
    });
  };


 useGSAP(
    () => {
      if (hovered && circleRef.current) {
        gsap.fromTo(
          circleRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: "power2.out" }
        );
      }
    },
    { dependencies: [hovered] }
  );

  return (
    <div className='w-full lg:h-[90vh] flex-col lg:flex-row flex p-6 gap-4'>
       <div className="relative w-full lg:w-[50%]  h-full rounded-2xl bg-milk p-10 flex flex-col items-start justify-between">
          <div className="uppertext z-2">
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[Kanit-Bold]'>IN THE COCOA INDUSTRY</h1>
              <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-[Kanit-Medium]'>Learn what we are doing to move kids out of cocoa fields and into classrooms.</h3>
          </div>
          <div className='Learn-More bg-[#FF2F9F] z-2 text-milk border-3 border-milk font-[nukku3] p-3 uppercase cursor-pointer rounded-lg hover:border-b-8 hover:border-white transition-all'>Learn More About Our Mission</div>
          <div className="lowertxt z-2">
             <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-[Kanit-Medium] mt-4 max-w-[90%] leading-relaxed'>MrBeast Announces Feastables Strategy to Eradicate Child Labor in the Cocoa Industry in West Africa</p>
          </div>
          <div className="gooey sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-50 lg:h-50 xl:w-80 xl:h-80"></div>
       </div>
       <div className="w-full lg:w-[50%] h-full bg-red-400"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave} 
         onMouseMove={handleMouseMove}
         ref={containerRef}>
          <div className="relative w-full h-full bg-cover">
            {hovered && (
               <div
                  ref={circleRef}
                  className="pointer-events-none absolute z-20 border-3 border-milk shadow-[0_35px_60px_rgba(0,0,0,0.6)]"
                  style={{
                    top: cursorPos.y - 25,
                    left: cursorPos.x - 25,
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    overflow: 'hidden',
                  }}
                >
                <img
                  src="/images/mr-beast-learn-img.webp"
                  alt="cursor"
                  className="w-full h-full object-cover"
                />
               </div>
            )}
            <img src="/images/mr-beast-learn-img.webp" alt="" 
              className={`z-10 rounded-2xl absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}/>
            <video 
              ref={videoRef}
              src="/videos/Learn-more-video.mp4"
              className='w-full h-full object-cover'  
              muted loop
            ></video>
          </div>
       </div>
    </div>
  )
}

export default Page3
