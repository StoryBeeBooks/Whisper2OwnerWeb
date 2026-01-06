'use client';

import { useRef, useLayoutEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function Scene() {
  const scroll = useScroll();
  const { camera } = useThree();
  
  // Load the GLB model from Cloudflare R2
  const { scene } = useGLTF('https://assets.k12path.com/whisper2owner/wave_animation.glb');
  const groupRef = useRef<THREE.Group>(null);

  // Initial setup: Look down at the model
  useLayoutEffect(() => {
    camera.lookAt(0, 0, 0);
  }, [camera]);

  useFrame(() => {
    // Zoom happens during the first 25% of scroll
    const zoomProgress = scroll.range(0, 0.25);
    
    // Start at Y=10 (high up, top-down view), End at Y=2 (close up)
    const startY = 10;
    const endY = 2;
    
    camera.position.y = THREE.MathUtils.lerp(startY, endY, zoomProgress);
    camera.lookAt(0, 0, 0);
    
    // Scale down the wave from 25% to 30% scroll
    if (groupRef.current) {
      const scale = THREE.MathUtils.lerp(1, 0, scroll.range(0.25, 0.05));
      groupRef.current.scale.setScalar(Math.max(0.01, scale) * 1.5);
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 10, 5]} intensity={2} />
      <primitive 
        object={scene} 
        scale={1.5}
        position={[0, 0, 0]}
      />
    </group>
  );
}

// Preload the model
useGLTF.preload('https://assets.k12path.com/whisper2owner/wave_animation.glb');
