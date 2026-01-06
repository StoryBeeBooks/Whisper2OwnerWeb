'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Loader } from '@react-three/drei';
import Scene from './_components/Scene';
import Overlay from './_components/Overlay';

export default function Page() {
  return (
    <main className="h-screen w-full bg-warm-white relative">
      {/* The Canvas covers the entire screen and stays fixed */}
      <Canvas 
        camera={{ position: [0, 10, 0], fov: 50 }} 
        className="absolute top-0 left-0 w-full h-full"
      >
        <Suspense fallback={null}>
          {/* pages=4 means the scrollable area is 4x the screen height */}
          <ScrollControls pages={4} damping={0.2}>
            
            {/* The 3D Scene (Wave model) */}
            <Scene />
            
            {/* The HTML Overlay (Text) */}
            <Overlay />
            
          </ScrollControls>
        </Suspense>
        
        {/* White background */}
        <color attach="background" args={['#faf9f6']} />
      </Canvas>
      
      {/* Loading Screen from drei */}
      <Loader 
        containerStyles={{
          background: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        innerStyles={{
          background: '#faf9f6',
          width: '300px',
          height: '3px',
        }}
        barStyles={{
          background: 'linear-gradient(90deg, #b8a88a, #8ab88a, #8a9db8, #b88a8a)',
          height: '3px',
        }}
        dataStyles={{
          color: '#faf9f6',
          fontFamily: 'Josefin Sans, sans-serif',
          fontSize: '12px',
          letterSpacing: '0.15em',
        }}
      />
    </main>
  );
}
