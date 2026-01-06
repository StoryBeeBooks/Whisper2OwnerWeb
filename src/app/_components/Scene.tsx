'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

// Procedural animated wave mesh
function WaveMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

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
      <planeGeometry args={[20, 20, 150, 150]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function Scene() {
  const scroll = useScroll();
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    // Zoom happens during the first 25% of scroll
    const zoomProgress = scroll.range(0, 0.25);
    
    // Start at Y=10 (high up, top-down view), End at Y=2 (close up)
    const startY = 10;
    const endY = 2;
    
    camera.position.y = THREE.MathUtils.lerp(startY, endY, zoomProgress);
    camera.lookAt(0, 0, 0);
    
    // Scale down the wave from 25% to 30% scroll
    if (groupRef.current) {
      const scale = THREE.MathUtils.lerp(1, 0, scroll.range(0.25, 0.05));
      groupRef.current.scale.setScalar(Math.max(0.01, scale));
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <WaveMesh />
    </group>
  );
}
