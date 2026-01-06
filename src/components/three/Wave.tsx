'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WaveProps {
  scrollProgress?: number;
}

export function Wave({ scrollProgress = 0 }: WaveProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Shader uniforms - elegant colors for white background
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uScrollProgress: { value: 0 },
    uColor1: { value: new THREE.Color('#d4cfc7') }, // warm taupe
    uColor2: { value: new THREE.Color('#b8a88a') }, // champagne gold
    uColor3: { value: new THREE.Color('#e8e4dc') }, // warm sand
    uColor4: { value: new THREE.Color('#c4bfb6') }, // lighter taupe
  }), []);

  // Vertex shader - creates wave distortion with zoom effect
  const vertexShader = `
    uniform float uTime;
    uniform float uScrollProgress;
    varying vec2 vUv;
    varying float vElevation;
    
    void main() {
      vUv = uv;
      
      // Wave parameters - gentler waves
      float frequency = 1.5;
      float amplitude = 0.4;
      
      // Create multiple wave layers
      float wave1 = sin(position.x * frequency + uTime * 0.4) * amplitude;
      float wave2 = sin(position.y * frequency * 0.7 + uTime * 0.25) * amplitude * 0.6;
      float wave3 = sin((position.x + position.y) * frequency * 0.4 + uTime * 0.3) * amplitude * 0.4;
      
      float elevation = wave1 + wave2 + wave3;
      vElevation = elevation;
      
      vec3 newPosition = position;
      newPosition.z += elevation;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `;

  // Fragment shader - elegant gradient for white background
  const fragmentShader = `
    uniform float uTime;
    uniform float uScrollProgress;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform vec3 uColor4;
    varying vec2 vUv;
    varying float vElevation;
    
    void main() {
      // Dynamic color mixing based on position and time
      float mixFactor1 = sin(vUv.x * 3.14159 + uTime * 0.15) * 0.5 + 0.5;
      float mixFactor2 = sin(vUv.y * 3.14159 + uTime * 0.1) * 0.5 + 0.5;
      
      vec3 color1 = mix(uColor1, uColor2, mixFactor1);
      vec3 color2 = mix(uColor3, uColor4, mixFactor2);
      vec3 finalColor = mix(color1, color2, vElevation * 0.5 + 0.5);
      
      // Add subtle brightness variation based on elevation
      finalColor += vElevation * 0.08;
      
      // Subtle darkening as we zoom in
      finalColor = mix(finalColor, finalColor * 0.85, uScrollProgress * 0.5);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

  // Animation loop
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.uScrollProgress.value = scrollProgress;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI * 0.5, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[20, 20, 150, 150]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
