'use client';

import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { Wave } from './Wave';

interface WaveSceneProps {
  scrollProgress: number;
}

function SceneContent({ scrollProgress }: WaveSceneProps) {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      
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
      <div className="w-full h-full bg-luxury-black flex items-center justify-center">
        <div className="text-white/50 text-sm tracking-luxury uppercase">
          Loading 3D Scene...
        </div>
      </div>
    );
  }

  return (
    <Canvas
      camera={{ 
        position: [0, 0, 5], 
        fov: 75,
        near: 0.1,
        far: 100 
      }}
      gl={{ 
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      }}
      dpr={[1, 2]}
      style={{ background: '#1a1a1a' }}
    >
      <Suspense fallback={null}>
        <SceneContent scrollProgress={scrollProgress} />
      </Suspense>
    </Canvas>
  );
}
