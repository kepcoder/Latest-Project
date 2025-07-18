import { useGLTF } from '@react-three/drei'
import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'


export default function My3DModel() {
  const modelRef = useRef()
  const { scene } = useGLTF('/images/chocolate.glb')

  const [yPos, setYPos] = useState(-5)


    // Animation useEffect 
  useEffect(() => {
    let animationFrame
    let start = null

    const duration = 1500 
    const fromY = -5
    const toY = -1

    const animate = (timestamp) => {
      if (!start) start = timestamp
      const progress = (timestamp - start) / duration
      const easedProgress = Math.min(progress, 1)


      const easedY = fromY + (toY - fromY) * (1 - Math.pow(1 - easedProgress, 3))
      setYPos(easedY)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [])


  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005
    }
  })

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[.5,2.5,2.5]}
      position={[0, yPos, 0]}
    />
  )
}
