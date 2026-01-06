'use client';

import { useRef, useLayoutEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function Scene() {
  const scroll = useScroll();
  const { camera } = useThree();
  
  // Load the GLB model from Cloudflare R2
  const { scene } = useGLTF('https://assets.k12path.com/whisper2owner/Wave.glb');
  const modelRef = useRef<THREE.Group>(null);

  // Initial setup: Look down at the model
  useLayoutEffect(() => {
    camera.lookAt(0, 0, 0);
  }, [camera]);

  useFrame(() => {
    // scroll.range(start, distance) returns 0-1 based on scroll position
    // Zoom happens during the first 25% of scroll (Page 1)
    const zoomProgress = scroll.range(0, 0.25);
    
    // Smoothly interpolate camera position
    // Start at Y=10 (high up, top-down view), End at Y=3 (close up)
    const startY = 10;
    const endY = 3;
    
    camera.position.y = THREE.MathUtils.lerp(startY, endY, zoomProgress);
    camera.lookAt(0, 0, 0); // Keep looking at center
    
    // Fade out the model as the video section takes over
    if (modelRef.current) {
      // Scale down from 25% to 30% scroll to hide the wave
      const scale = THREE.MathUtils.lerp(1, 0, scroll.range(0.25, 0.05));
      modelRef.current.scale.setScalar(scale * 1.5); // 1.5 is the base scale
    }
  });

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 10, 5]} intensity={2} />
      <primitive 
        object={scene} 
        ref={modelRef} 
        scale={1.5}
        position={[0, 0, 0]}
      />
    </>
  );
}

// Preload the model
useGLTF.preload('https://assets.k12path.com/whisper2owner/Wave.glb');
