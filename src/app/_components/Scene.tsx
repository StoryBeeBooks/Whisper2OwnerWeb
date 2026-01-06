'use client';

import { useRef, useLayoutEffect, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function Scene() {
  const scroll = useScroll();
  const { camera, viewport } = useThree();
  
  // Load the GLB model from Cloudflare R2
  const { scene } = useGLTF('https://assets.k12path.com/whisper2owner/wave_animation.glb');
  const groupRef = useRef<THREE.Group>(null);

  // Initial setup: Position camera for top-down view
  useLayoutEffect(() => {
    camera.position.set(0, 5, 0);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  // Scale model to fill viewport
  useEffect(() => {
    if (scene) {
      // Calculate bounding box to scale appropriately
      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.z);
      // Scale to fill viewport
      const scaleFactor = maxDim > 0 ? (viewport.width * 2) / maxDim : 5;
      scene.scale.setScalar(scaleFactor);
    }
  }, [scene, viewport]);

  useFrame(() => {
    // Zoom happens during the first 25% of scroll
    const zoomProgress = scroll.range(0, 0.25);
    
    // Start at Y=5 (looking down at wave), End at Y=1.5 (close up)
    const startY = 5;
    const endY = 1.5;
    
    camera.position.y = THREE.MathUtils.lerp(startY, endY, zoomProgress);
    camera.lookAt(0, 0, 0);
    
    // Fade out the wave from 25% to 30% scroll
    if (groupRef.current) {
      const opacity = 1 - scroll.range(0.25, 0.05);
      groupRef.current.visible = opacity > 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <primitive 
        object={scene}
        position={[0, 0, 0]}
      />
    </group>
  );
}

// Preload the model
useGLTF.preload('https://assets.k12path.com/whisper2owner/wave_animation.glb');
