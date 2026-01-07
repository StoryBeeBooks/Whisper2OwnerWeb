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
  Loader,
  OrbitControls 
} from '@react-three/drei';
import * as THREE from 'three';

// Configuration - adjust these as needed
const SEA_URL = 'https://assets.k12path.com/whisper2owner/sea.glb';
const SHIP_URL = 'https://assets.k12path.com/whisper2owner/ship.glb';
const SEA_SCALE = 500;  // Much larger to surround the ship
const SHIP_SCALE = 50;  // Ship scale
const ANIMATION_SPEED = 0.4; // 40% speed (60% slower)
const OCEAN_COLOR = '#001e36'; // Dark ocean blue for background and fog

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
      position={[0, -10, 0]}
      scale={SEA_SCALE}
    />
  );
}

// Ship with Code-Driven Floating Animation
function Ship() {
  const { scene } = useGLTF(SHIP_URL);
  const shipRef = useRef<THREE.Group>(null);

  // Floating animation parameters
  const bobAmplitude = 2; // How much the ship bobs up/down
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

// Text Overlay with better contrast
function Overlay() {
  return (
    <Html fullscreen className="pointer-events-none">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 
          className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-wide mb-6 leading-tight max-w-4xl"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)' }}
        >
          Whisper2Owner
        </h1>
        <p 
          className="text-white/90 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-3xl"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.5)' }}
        >
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
      {/* Fog to blend sea edges into background */}
      <fog attach="fog" args={[OCEAN_COLOR, 100, 800]} />
      
      {/* Strong Lighting for visibility */}
      <ambientLight intensity={2} />
      <directionalLight 
        position={[100, 200, 100]} 
        intensity={3} 
        castShadow
      />
      <directionalLight 
        position={[-100, 100, -100]} 
        intensity={1.5} 
      />
      {/* Light from below to illuminate the sea */}
      <pointLight position={[0, -50, 0]} intensity={2} color="#0066aa" />
      
      {/* Environment for realistic reflections */}
      <Environment preset="sunset" />
      
      {/* Sea and Ship */}
      <Sea />
      <Ship />
      
      {/* OrbitControls for debugging - allows mouse to rotate/zoom */}
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
    <div className="h-screen w-full relative" style={{ background: OCEAN_COLOR }}>
      <Canvas
        camera={{ position: [0, 100, 200], fov: 60 }}
        className="absolute top-0 left-0 w-full h-full"
        shadows
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
        
        {/* Dark ocean blue background - matches fog */}
        <color attach="background" args={[OCEAN_COLOR]} />
      </Canvas>
      
      {/* Loading indicator */}
      <Loader
        containerStyles={{
          background: OCEAN_COLOR,
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
