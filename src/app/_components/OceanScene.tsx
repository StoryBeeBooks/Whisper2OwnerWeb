'use client';

import { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  useGLTF, 
  useAnimations, 
  Environment, 
  ScrollControls, 
  useScroll,
  Html,
  Loader 
} from '@react-three/drei';
import * as THREE from 'three';

// Configuration - adjust these as needed
const SEA_URL = 'https://assets.k12path.com/whisper2owner/sea.glb';
const SHIP_URL = 'https://assets.k12path.com/whisper2owner/ship.glb';
const SHIP_SCALE = 0.5;
const ANIMATION_SPEED = 0.4; // 40% speed (60% slower)

// Animated Sea Component
function Sea() {
  const { scene, animations } = useGLTF(SEA_URL);
  const { actions, mixer } = useAnimations(animations, scene);

  // Debug: log animation names
  useEffect(() => {
    console.log('Sea animations:', animations.map(a => a.name));
  }, [animations]);

  // Play all animations on mount
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      Object.values(actions).forEach((action) => {
        if (action) {
          action.reset().play();
          action.setLoop(THREE.LoopRepeat, Infinity);
          action.timeScale = ANIMATION_SPEED;
        }
      });
    }
  }, [actions]);

  // Update mixer every frame
  useFrame((state, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  });

  return (
    <primitive 
      object={scene} 
      position={[0, -2, 0]}
      scale={10}
    />
  );
}

// Ship with Code-Driven Floating Animation
function Ship() {
  const { scene } = useGLTF(SHIP_URL);
  const shipRef = useRef<THREE.Group>(null);

  // Floating animation parameters
  const bobAmplitude = 0.15; // How much the ship bobs up/down
  const bobFrequency = 0.8;  // Speed of bobbing
  const rockAmplitude = 0.03; // How much the ship rocks side to side (radians)
  const rockFrequency = 0.5;  // Speed of rocking

  useFrame((state) => {
    if (shipRef.current) {
      const time = state.clock.elapsedTime;
      
      // Bob up and down using sine wave
      shipRef.current.position.y = Math.sin(time * bobFrequency) * bobAmplitude;
      
      // Rock back and forth (rotation on Z axis)
      shipRef.current.rotation.z = Math.sin(time * rockFrequency) * rockAmplitude;
      
      // Slight pitch forward/backward (rotation on X axis) for more realism
      shipRef.current.rotation.x = Math.sin(time * rockFrequency * 0.7) * (rockAmplitude * 0.5);
    }
  });

  return (
    <group ref={shipRef} position={[0, 0, 0]}>
      <primitive 
        object={scene} 
        scale={SHIP_SCALE}
      />
    </group>
  );
}

// Camera Controller for scroll-based zoom
function CameraController() {
  const scroll = useScroll();
  const { camera } = useFrame.arguments?.[0] || {};

  useFrame(({ camera }) => {
    const zoomProgress = scroll.range(0, 0.25);
    
    // Start zoomed out, zoom in as user scrolls
    const startY = 12;
    const endY = 4;
    const startZ = 15;
    const endZ = 5;
    
    camera.position.y = THREE.MathUtils.lerp(startY, endY, zoomProgress);
    camera.position.z = THREE.MathUtils.lerp(startZ, endZ, zoomProgress);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Text Overlay
function Overlay() {
  const scroll = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);

  useFrame(() => {
    if (heroRef.current) {
      // Fade out hero text as we zoom in (0% to 20% scroll)
      const opacity = 1 - scroll.range(0, 0.20);
      heroRef.current.style.opacity = String(opacity);
    }
  });

  return (
    <Html fullscreen className="pointer-events-none">
      <div 
        ref={heroRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-wide mb-6 leading-tight max-w-4xl drop-shadow-lg">
          Whisper2Owner
        </h1>
        <p className="text-white/80 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-3xl drop-shadow-md">
          Bridging International Brands with Local Canadian Consumers.
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
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 20, 10]} 
        intensity={1.5} 
        castShadow
      />
      
      {/* Environment for realistic reflections */}
      <Environment preset="sunset" />
      
      {/* Sea and Ship */}
      <Sea />
      <Ship />
      
      {/* Camera and Overlay controlled by scroll */}
      <CameraController />
      <Overlay />
    </>
  );
}

// Main OceanScene Component
export default function OceanScene() {
  return (
    <div className="h-screen w-full bg-black relative">
      <Canvas
        camera={{ position: [0, 12, 15], fov: 50 }}
        className="absolute top-0 left-0 w-full h-full"
        shadows
      >
        <Suspense fallback={null}>
          <ScrollControls pages={4} damping={0.2}>
            <SceneContent />
          </ScrollControls>
        </Suspense>
        
        {/* Dark blue gradient background for ocean sky */}
        <color attach="background" args={['#0a1628']} />
      </Canvas>
      
      {/* Loading indicator */}
      <Loader
        containerStyles={{
          background: '#0a1628',
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
          color: '#87ceeb',
          fontFamily: 'Josefin Sans, sans-serif',
          fontSize: '12px',
          letterSpacing: '0.15em',
        }}
      />
    </div>
  );
}

// Preload models
useGLTF.preload(SEA_URL);
useGLTF.preload(SHIP_URL);
