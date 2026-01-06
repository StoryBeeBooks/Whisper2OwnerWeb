'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ScrollControls, useScroll, Html } from '@react-three/drei';
import * as THREE from 'three';

// Animated wave mesh using shaders (since we don't have an actual .glb)
function WaveMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color('#d4cfc7') }, // Warm taupe
      uColor2: { value: new THREE.Color('#c9b896') }, // Champagne gold
      uColor3: { value: new THREE.Color('#e8e4dc') }, // Warm sand
    }),
    []
  );

  const vertexShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying float vElevation;
    
    void main() {
      vUv = uv;
      vec3 pos = position;
      
      float elevation = sin(pos.x * 2.0 + uTime * 0.5) * 0.3
                      + sin(pos.y * 1.5 + uTime * 0.3) * 0.2
                      + sin((pos.x + pos.y) * 1.0 + uTime * 0.4) * 0.15;
      
      pos.z += elevation;
      vElevation = elevation;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    varying vec2 vUv;
    varying float vElevation;
    
    void main() {
      float mixFactor = (vElevation + 0.5) * 0.8;
      vec3 color = mix(uColor1, uColor2, vUv.x);
      color = mix(color, uColor3, mixFactor);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  useFrame((state) => {
    if (meshRef.current) {
      uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI * 0.5, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[30, 30, 200, 200]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Camera controller that responds to scroll
function CameraController({ onScrollProgress }: { onScrollProgress: (progress: number) => void }) {
  const { camera } = useThree();
  const scroll = useScroll();

  useFrame(() => {
    const scrollProgress = scroll.offset;
    onScrollProgress(scrollProgress);

    // Start: Camera looking down at the surface
    // End: Camera zoomed into the wave
    const startPos = { x: 0, y: 12, z: 0.1 };
    const endPos = { x: 0, y: 1, z: 0.5 };

    // Interpolate camera position based on scroll (first 30% of scroll)
    const zoomProgress = Math.min(scrollProgress / 0.3, 1);
    const eased = 1 - Math.pow(1 - zoomProgress, 3); // Ease out cubic

    camera.position.x = THREE.MathUtils.lerp(startPos.x, endPos.x, eased);
    camera.position.y = THREE.MathUtils.lerp(startPos.y, endPos.y, eased);
    camera.position.z = THREE.MathUtils.lerp(startPos.z, endPos.z, eased);
    
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Hero text overlay
function HeroText() {
  const scroll = useScroll();
  const textRef = useRef<HTMLDivElement>(null);

  useFrame(() => {
    if (textRef.current) {
      const scrollProgress = scroll.offset;
      // Fade out text as we zoom in (between 10% and 25% scroll)
      const opacity = scrollProgress < 0.1 ? 1 : Math.max(0, 1 - (scrollProgress - 0.1) / 0.15);
      textRef.current.style.opacity = String(opacity);
    }
  });

  return (
    <Html center className="pointer-events-none select-none" style={{ width: '100vw' }}>
      <div ref={textRef} className="text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-luxury-black font-light tracking-wide mb-6 leading-tight">
          Whisper2Owner
        </h1>
        <p className="text-luxury-charcoal text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-3xl mx-auto">
          Bridging International Brands with Local Canadian Consumers.
          We optimize revenue strategies by connecting you with the right customer segments.
        </p>
      </div>
    </Html>
  );
}

// Inner scene content
function Scene({ onScrollProgress }: { onScrollProgress: (progress: number) => void }) {
  return (
    <>
      <color attach="background" args={['#faf9f6']} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 10, 5]} intensity={0.5} />
      <WaveMesh />
      <HeroText />
      <CameraController onScrollProgress={onScrollProgress} />
    </>
  );
}

// Main Hero3D component
interface Hero3DProps {
  onScrollProgress: (progress: number) => void;
}

export function Hero3D({ onScrollProgress }: Hero3DProps) {
  return (
    <div className="fixed inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 12, 0.1], fov: 60, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: false }}
      >
        <ScrollControls pages={5} damping={0.3}>
          <Scene onScrollProgress={onScrollProgress} />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
