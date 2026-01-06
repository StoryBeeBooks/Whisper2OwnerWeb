'use client';

import React, { Suspense, useEffect, useState, useMemo } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { Wave } from './Wave';

interface WaveSceneProps {
  scrollProgress: number;
}

function CameraController({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();
  
  useEffect(() => {
    // Start looking down at the wave surface, then zoom in as user scrolls
    const startY = 6;
    const endY = 1.5;
    const startZ = 4;
    const endZ = 0.5;
    
    camera.position.y = startY - (startY - endY) * scrollProgress;
    camera.position.z = startZ - (startZ - endZ) * scrollProgress;
    camera.lookAt(0, 0, 0);
  }, [camera, scrollProgress]);
  
  return null;
}

function SceneContent({ scrollProgress }: WaveSceneProps) {
  return (
    <>
      <CameraController scrollProgress={scrollProgress} />
      
      {/* Soft ambient lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={0.5} />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} />
      
      {/* Wave mesh */}
      <Wave scrollProgress={scrollProgress} />
      
      <Preload all />
    </>
  );
}

export function WaveScene({ scrollProgress }: WaveSceneProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-warm-white flex items-center justify-center">
        <div className="text-luxury-gray-light text-sm tracking-luxury uppercase">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <Canvas
      camera={{ 
        position: [0, 6, 4], 
        fov: 60,
        near: 0.1,
        far: 100 
      }}
      gl={{ 
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      }}
      dpr={[1, 2]}
      style={{ background: '#faf9f6' }}
    >
      <Suspense fallback={null}>
        <SceneContent scrollProgress={scrollProgress} />
      </Suspense>
    </Canvas>
  );
}
