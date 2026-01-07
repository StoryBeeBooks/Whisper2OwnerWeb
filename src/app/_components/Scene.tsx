'use client';

import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

export default function Scene() {
  const scroll = useScroll();
  const { camera, size } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  
  // Load the GLB model with animations
  const { scene, animations } = useGLTF('https://assets.k12path.com/whisper2owner/wave_animation.glb');
  
  // Setup animations
  const { actions, mixer } = useAnimations(animations, scene);
  
  // Play all animations on load
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      // Play all available animations
      Object.values(actions).forEach((action) => {
        if (action) {
          action.reset().play();
          action.setLoop(THREE.LoopRepeat, Infinity);
        }
      });
    }
  }, [actions]);

  // Initial setup: Position camera for top-down view
  useLayoutEffect(() => {
    camera.position.set(0, 8, 0);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  // Scale model to fill the entire viewport
  useEffect(() => {
    if (scene && groupRef.current) {
      // Get the bounding box of the model
      const box = new THREE.Box3().setFromObject(scene);
      const modelSize = box.getSize(new THREE.Vector3());
      
      // Calculate aspect ratio of viewport vs model
      const aspect = size.width / size.height;
      
      // Scale to ensure it covers the entire viewport with some overflow
      // Use a large scale factor to fill the screen
      const scaleFactor = 15;
      groupRef.current.scale.setScalar(scaleFactor);
    }
  }, [scene, size]);

  useFrame((state, delta) => {
    // Update animation mixer
    if (mixer) {
      mixer.update(delta);
    }
    
    // Zoom happens during the first 25% of scroll
    const zoomProgress = scroll.range(0, 0.25);
    
    // Start at Y=8 (looking down at wave), End at Y=2 (close up)
    const startY = 8;
    const endY = 2;
    
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
      <ambientLight intensity={3} />
      <directionalLight position={[0, 10, 0]} intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, 5, -5]} intensity={1} />
      <primitive 
        object={scene}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

// Preload the model
useGLTF.preload('https://assets.k12path.com/whisper2owner/wave_animation.glb');
