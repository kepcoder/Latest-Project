import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import My3DModel from "../3d components/3DModel";

      <Canvas
        shadows
        camera={{ position: [0, 0, 4], fov: 50 }}
        className="absolute w-full z-30"
      >
        <ambientLight intensity={4} />
        <directionalLight position={[-2, -2, -2]} intensity={12}  castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024}  />
        <directionalLight position={[2, 2, 2]} intensity={14} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <Suspense fallback={null}>
         <My3DModel position={[0, 0, 0]} castShadow />
        </Suspense>

         {/* Ground for shadow*/}
         <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.2, 0]}
        >
        <planeGeometry args={[2, 2]} />
        <shadowMaterial opacity={0.2} />
        </mesh>

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true}/>
      </Canvas>
