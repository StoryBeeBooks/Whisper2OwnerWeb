'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  useGLTF, 
  Environment, 
  Html,
  Loader,
  OrbitControls 
} from '@react-three/drei';
import * as THREE from 'three';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

// Configuration
const SHIP_URL = 'https://assets.k12path.com/whisper2owner/ship.glb';
const SHIP_SCALE = 50;
const OCEAN_COLOR = '#001e36'; // Deep navy blue - matches gradient bottom

// Ship with Code-Driven Floating Animation (Responsive)
function Ship() {
  const { scene } = useGLTF(SHIP_URL);
  const shipRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  // Responsive scale: shrinks on mobile, maxes out at 1x on desktop
  const scaleFactor = Math.min(viewport.width / 10, 1);
  const responsiveScale = SHIP_SCALE * scaleFactor;

  // Floating animation parameters
  const bobAmplitude = 2;
  const bobFrequency = 0.8;
  const rockAmplitude = 0.03;
  const rockFrequency = 0.5;

  useFrame((state) => {
    if (shipRef.current) {
      const time = state.clock.elapsedTime;
      
      // Bob up and down using sine wave
      shipRef.current.position.y = -33 + Math.sin(time * bobFrequency) * bobAmplitude;
      
      // Rock back and forth (rotation on Z axis)
      shipRef.current.rotation.z = Math.sin(time * rockFrequency) * rockAmplitude;
      
      // Slight pitch forward/backward (rotation on X axis)
      shipRef.current.rotation.x = Math.sin(time * rockFrequency * 0.7) * (rockAmplitude * 0.5);
    }
  });

  return (
    <group ref={shipRef} position={[0, -33, 0]}>
      <primitive 
        object={scene} 
        scale={responsiveScale}
      />
    </group>
  );
}

// Text Overlay - positioned lower, mobile optimized
function Overlay() {
  return (
    <Html fullscreen className="pointer-events-none">
      <div className="absolute top-[30%] sm:top-[35%] left-0 w-full text-center px-4 sm:px-6 z-10 transform -translate-y-1/2">
        <h1 
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide mb-3 sm:mb-4 leading-tight"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)' }}
        >
          Whisper2Owner
        </h1>
        <p 
          className="text-white/90 text-[10px] sm:text-xs md:text-sm tracking-wider sm:tracking-luxury uppercase font-light leading-relaxed max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-4 sm:mb-6"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.5)' }}
        >
          Bridging International Brands with Local Canadian Consumers
        </p>
        <p 
          className="text-white/70 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xs sm:max-w-md md:max-w-xl mx-auto hidden sm:block"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
        >
          We optimize revenue strategies by connecting you with the right customer segments.
        </p>
      </div>
    </Html>
  );
}

// Main Scene Content
function SceneContent() {
  return (
    <>
      {/* Strong Lighting */}
      <ambientLight intensity={2} />
      <directionalLight 
        position={[10, 20, 10]} 
        intensity={3} 
        castShadow
      />
      <directionalLight 
        position={[-10, 10, -10]} 
        intensity={2} 
      />
      <directionalLight 
        position={[0, 10, -20]} 
        intensity={1.5} 
      />
      
      {/* Environment for realistic reflections and IBL lighting */}
      <Environment preset="sunset" background={false} environmentIntensity={1.5} />
      
      {/* Ship */}
      <Ship />
      
      {/* OrbitControls for debugging */}
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
      />
      
      {/* Text Overlay */}
      <Overlay />
    </>
  );
}

// Main OceanScene Component
export default function OceanScene() {
  return (
    <>
      {/* Navigation hamburger menu */}
      <Navigation />
      
      <main className="h-screen w-full relative bg-gradient-to-b from-white from-0% via-sky-200 via-70% to-[#001e36] to-100%">
        <Canvas
          camera={{ position: [0, 5, 35], fov: 45 }}
          className="absolute inset-0 z-0"
          shadows
          gl={{ alpha: true }}
        >
          <Suspense fallback={null}>
            <SceneContent />
          </Suspense>
        </Canvas>
        
        {/* Loading indicator */}
        <Loader
          containerStyles={{
            background: 'linear-gradient(to bottom, white, #7dd3fc, #001e36)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          innerStyles={{
            background: '#1a3a5c',
            width: '300px',
            height: '3px',
          }}
          barStyles={{
            background: 'linear-gradient(90deg, #4a9eff, #87ceeb)',
            height: '3px',
          }}
          dataStyles={{
            color: '#001e36',
            fontFamily: 'Josefin Sans, sans-serif',
            fontSize: '12px',
            letterSpacing: '0.15em',
          }}
        />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

// Preload ship model only
useGLTF.preload(SHIP_URL);
