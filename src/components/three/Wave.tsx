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

  // Shader uniforms
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uScrollProgress: { value: 0 },
    uColor1: { value: new THREE.Color('#1a1a1a') },
    uColor2: { value: new THREE.Color('#b8a88a') },
    uColor3: { value: new THREE.Color('#8ab88a') },
    uColor4: { value: new THREE.Color('#8a9db8') },
  }), []);

  // Vertex shader - creates wave distortion
  const vertexShader = `
    uniform float uTime;
    uniform float uScrollProgress;
    varying vec2 vUv;
    varying float vElevation;
    
    void main() {
      vUv = uv;
      
      // Wave parameters
      float frequency = 2.0;
      float amplitude = 0.3 + uScrollProgress * 0.2;
      
      // Create multiple wave layers
      float wave1 = sin(position.x * frequency + uTime * 0.5) * amplitude;
      float wave2 = sin(position.y * frequency * 0.8 + uTime * 0.3) * amplitude * 0.5;
      float wave3 = sin((position.x + position.y) * frequency * 0.5 + uTime * 0.4) * amplitude * 0.3;
      
      float elevation = wave1 + wave2 + wave3;
      vElevation = elevation;
      
      vec3 newPosition = position;
      newPosition.z += elevation;
      
      // Camera zoom effect based on scroll
      float zoomFactor = 1.0 + uScrollProgress * 2.0;
      newPosition.z -= uScrollProgress * 3.0;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `;

  // Fragment shader - creates gradient coloring
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
      float mixFactor1 = sin(vUv.x * 3.14159 + uTime * 0.2) * 0.5 + 0.5;
      float mixFactor2 = sin(vUv.y * 3.14159 + uTime * 0.15) * 0.5 + 0.5;
      
      vec3 color1 = mix(uColor1, uColor2, mixFactor1);
      vec3 color2 = mix(uColor3, uColor4, mixFactor2);
      vec3 finalColor = mix(color1, color2, vElevation * 0.5 + 0.5);
      
      // Add subtle brightness based on elevation
      finalColor += vElevation * 0.1;
      
      // Fade to black as user scrolls
      finalColor = mix(finalColor, vec3(0.0), uScrollProgress * 0.3);
      
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
    <mesh ref={meshRef} rotation={[-Math.PI * 0.35, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[15, 15, 128, 128]} />
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
