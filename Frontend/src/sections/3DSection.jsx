import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import My3DModel from '../3d components/3DModel';
import { useEffect, useState } from 'react';
import gsap from 'gsap';


const ResponsiveCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

    gsap.to(".text-reveal", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".canvas-section",
        start: "top 10%",
      },
    });

  return (
    <div className=" canvas-section relative w-full min-h-screen p-10">  

      {/* For Desktop & Tablet: absolute overlapping */}
      {!isMobile && (
        <div className="canvas absolute text-center top-25 left-5 w-[55%] h-[550px] z-20 max-[950px]:h-[450px] max-[950px]:top-15 max-[850px]:h-[400px]">
           <img src="/images/float-choco2.avif" alt="" 
        className='floating absolute top-[4rem] left-[5%] w-[100px] z-10 -rotate-6 '/>

           <img src="/images/float-choco3.avif" alt="" 
        className='floating absolute top-[3rem] right-[5%] w-[120px] rotate-12 z-10'/>  

           <img src="/images/floating-choco.avif" alt="" 
        className='floating absolute bottom-10 right-[40%] w-[130px]  rotate-6 z-10 max-[950px]:bottom-30 '/> 

          <Canvas
            shadows
            camera={{ position: [0, 0, 4], fov: 50 }}
            className="w-full h-full"
          >
            <ambientLight intensity={4} />
            <directionalLight
              position={[-2, -2, -2]}
              intensity={12}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <directionalLight
              position={[2, 2, 2]}
              intensity={14}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <Suspense fallback={null}>
              <My3DModel position={[0, 0, 0]} castShadow />
            </Suspense>

            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -1.2, 0]}
            >
              <planeGeometry args={[2, 2]} />
              <shadowMaterial opacity={0.2} />
            </mesh>

            <OrbitControls enableZoom={false} enablePan={false} enableRotate />
          </Canvas>
        </div>
      )}

      {/* On Mobile View */}
      {isMobile && (
        <div className="canvas text-milk text-2xl w-full h-[300px] mb-5 text-center font-[Kanit-bold]">
            <h1 className='text-reveal bg-mid-brown text-scroll p-2 rounded-4xl'>Mr Beast Feastables</h1>
          <Canvas
            shadows
            camera={{ position: [0, 0, 4], fov: 50 }}
            className="w-full h-full"
          >
            <ambientLight intensity={4} />
            <directionalLight
              position={[-2, -2, -2]}
              intensity={12}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <directionalLight
              position={[2, 2, 2]}
              intensity={14}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <Suspense fallback={null}>
              <My3DModel position={[0, 0, 0]} castShadow />
            </Suspense>

            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -1.2, 0]}
            >
              <planeGeometry args={[2, 2]} />
              <shadowMaterial opacity={0.2} />
            </mesh>

            <OrbitControls enableZoom={false} enablePan={false} enableRotate />
          </Canvas>
        </div>
      )}

      {/* Image Section dynamic */}
      <div className="image w-full overflow-hidden border-4 border-black">
        <img
          src={
            isMobile
              ? '/images/thumbnail-mrbeast-mobile.webp'
              : '/images/thumbnail-mrbeast.webp'
          }
          alt="Thumbnail"
          className="w-full h-auto object-cover max-h-[90vh]"
        />
      </div>
    </div>
  );
};

export default ResponsiveCanvas;
