'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, Line, Html } from '@react-three/drei';
import * as THREE from 'three';

// City coordinates (lat, lng) for flight paths
const cities = {
  toronto: { lat: 43.65, lng: -79.38, name: 'Toronto' },
  london: { lat: 51.51, lng: -0.13, name: 'London' },
  bogota: { lat: 4.71, lng: -74.07, name: 'Bogotá' },
  buenosAires: { lat: -34.60, lng: -58.38, name: 'Buenos Aires' },
  beijing: { lat: 39.90, lng: 116.41, name: 'Beijing' },
  shanghai: { lat: 31.23, lng: 121.47, name: 'Shanghai' },
  vancouver: { lat: 49.28, lng: -123.12, name: 'Vancouver' },
  montreal: { lat: 45.50, lng: -73.57, name: 'Montreal' },
};

// Flight routes from Canada to other countries
const flightRoutes = [
  { from: cities.toronto, to: cities.london, color: '#8ab88a' },
  { from: cities.toronto, to: cities.bogota, color: '#8a9db8' },
  { from: cities.vancouver, to: cities.shanghai, color: '#b8a88a' },
  { from: cities.montreal, to: cities.buenosAires, color: '#b88a8a' },
  { from: cities.toronto, to: cities.beijing, color: '#8ab88a' },
];

// Convert lat/lng to 3D coordinates
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
}

// Create curved flight path between two points
function createFlightPath(from: { lat: number; lng: number }, to: { lat: number; lng: number }, radius: number): THREE.Vector3[] {
  const start = latLngToVector3(from.lat, from.lng, radius);
  const end = latLngToVector3(to.lat, to.lng, radius);
  
  const points: THREE.Vector3[] = [];
  const segments = 50;
  
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    
    // Spherical interpolation
    const point = new THREE.Vector3().lerpVectors(start, end, t);
    
    // Add arc height based on distance
    const midPoint = new THREE.Vector3().lerpVectors(start, end, 0.5);
    const distance = start.distanceTo(end);
    const arcHeight = distance * 0.3;
    
    // Parabolic height curve
    const heightFactor = 4 * t * (1 - t); // Peaks at t=0.5
    const direction = midPoint.clone().normalize();
    
    point.add(direction.multiplyScalar(arcHeight * heightFactor));
    points.push(point);
  }
  
  return points;
}

// Animated airplane along path
function FlightPlane({ path, color, delay }: { path: THREE.Vector3[]; color: string; delay: number }) {
  const planeRef = useRef<THREE.Mesh>(null);
  const [progress, setProgress] = useState(0);
  
  useFrame((state) => {
    const time = (state.clock.elapsedTime + delay) * 0.15;
    const t = (time % 1); // Loop 0-1
    setProgress(t);
    
    if (planeRef.current && path.length > 1) {
      const index = Math.floor(t * (path.length - 1));
      const nextIndex = Math.min(index + 1, path.length - 1);
      const localT = (t * (path.length - 1)) % 1;
      
      const position = new THREE.Vector3().lerpVectors(path[index], path[nextIndex], localT);
      planeRef.current.position.copy(position);
      
      // Orient plane to face direction of travel
      if (nextIndex < path.length - 1) {
        planeRef.current.lookAt(path[nextIndex]);
      }
    }
  });
  
  return (
    <mesh ref={planeRef}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

// Flight path line with animation
function FlightPath({ from, to, color, delay }: { 
  from: { lat: number; lng: number }; 
  to: { lat: number; lng: number }; 
  color: string;
  delay: number;
}) {
  const path = useMemo(() => createFlightPath(from, to, 2), [from, to]);
  
  return (
    <group>
      <Line
        points={path}
        color={color}
        lineWidth={1.5}
        opacity={0.6}
        transparent
      />
      <FlightPlane path={path} color={color} delay={delay} />
    </group>
  );
}

// City marker
function CityMarker({ lat, lng, name }: { lat: number; lng: number; name: string }) {
  const position = useMemo(() => latLngToVector3(lat, lng, 2.02), [lat, lng]);
  
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.025, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

// Continent dot coordinates (simplified world map as lat/lng points)
const continentDots: { lat: number; lng: number }[] = [
  // North America
  { lat: 71, lng: -156 }, { lat: 70, lng: -145 }, { lat: 68, lng: -135 }, { lat: 65, lng: -168 },
  { lat: 64, lng: -150 }, { lat: 62, lng: -140 }, { lat: 60, lng: -165 }, { lat: 60, lng: -130 },
  { lat: 58, lng: -155 }, { lat: 55, lng: -130 }, { lat: 55, lng: -120 }, { lat: 52, lng: -125 },
  { lat: 50, lng: -120 }, { lat: 49, lng: -125 }, { lat: 48, lng: -90 }, { lat: 47, lng: -70 },
  { lat: 45, lng: -75 }, { lat: 45, lng: -85 }, { lat: 45, lng: -95 }, { lat: 45, lng: -110 },
  { lat: 43, lng: -80 }, { lat: 42, lng: -73 }, { lat: 42, lng: -88 }, { lat: 40, lng: -75 },
  { lat: 40, lng: -100 }, { lat: 40, lng: -120 }, { lat: 38, lng: -77 }, { lat: 37, lng: -122 },
  { lat: 35, lng: -80 }, { lat: 35, lng: -90 }, { lat: 35, lng: -105 }, { lat: 35, lng: -118 },
  { lat: 33, lng: -85 }, { lat: 33, lng: -112 }, { lat: 30, lng: -90 }, { lat: 30, lng: -97 },
  { lat: 29, lng: -95 }, { lat: 26, lng: -80 }, { lat: 25, lng: -100 }, { lat: 32, lng: -117 },
  // Mexico & Central America
  { lat: 23, lng: -102 }, { lat: 20, lng: -99 }, { lat: 19, lng: -96 }, { lat: 17, lng: -92 },
  { lat: 15, lng: -90 }, { lat: 13, lng: -87 }, { lat: 12, lng: -85 }, { lat: 10, lng: -84 },
  { lat: 9, lng: -80 }, { lat: 8, lng: -77 },
  // South America
  { lat: 10, lng: -67 }, { lat: 7, lng: -73 }, { lat: 5, lng: -75 }, { lat: 4, lng: -70 },
  { lat: 0, lng: -78 }, { lat: -2, lng: -80 }, { lat: -5, lng: -75 }, { lat: -5, lng: -60 },
  { lat: -8, lng: -35 }, { lat: -10, lng: -50 }, { lat: -10, lng: -67 }, { lat: -12, lng: -77 },
  { lat: -15, lng: -70 }, { lat: -15, lng: -47 }, { lat: -18, lng: -65 }, { lat: -20, lng: -44 },
  { lat: -23, lng: -43 }, { lat: -23, lng: -70 }, { lat: -25, lng: -57 }, { lat: -27, lng: -65 },
  { lat: -30, lng: -70 }, { lat: -33, lng: -71 }, { lat: -35, lng: -58 }, { lat: -38, lng: -72 },
  { lat: -40, lng: -63 }, { lat: -42, lng: -73 }, { lat: -45, lng: -70 }, { lat: -50, lng: -72 },
  { lat: -53, lng: -68 }, { lat: -55, lng: -67 },
  // Europe
  { lat: 70, lng: 25 }, { lat: 68, lng: 18 }, { lat: 65, lng: 12 }, { lat: 64, lng: -20 },
  { lat: 62, lng: 6 }, { lat: 60, lng: 10 }, { lat: 60, lng: 25 }, { lat: 58, lng: -4 },
  { lat: 56, lng: 10 }, { lat: 55, lng: -3 }, { lat: 54, lng: 10 }, { lat: 53, lng: 0 },
  { lat: 52, lng: 5 }, { lat: 52, lng: 13 }, { lat: 52, lng: 21 }, { lat: 50, lng: 14 },
  { lat: 50, lng: 2 }, { lat: 49, lng: 2 }, { lat: 48, lng: 16 }, { lat: 48, lng: 11 },
  { lat: 47, lng: 8 }, { lat: 46, lng: 14 }, { lat: 45, lng: 9 }, { lat: 44, lng: 12 },
  { lat: 43, lng: 5 }, { lat: 42, lng: 3 }, { lat: 42, lng: 12 }, { lat: 41, lng: -4 },
  { lat: 40, lng: -8 }, { lat: 40, lng: 23 }, { lat: 38, lng: -9 }, { lat: 38, lng: 23 },
  { lat: 37, lng: -6 }, { lat: 36, lng: -5 }, { lat: 35, lng: 25 },
  // Africa
  { lat: 35, lng: -5 }, { lat: 34, lng: 10 }, { lat: 32, lng: 0 }, { lat: 30, lng: 31 },
  { lat: 27, lng: -13 }, { lat: 25, lng: 33 }, { lat: 22, lng: -17 }, { lat: 20, lng: 30 },
  { lat: 15, lng: -17 }, { lat: 15, lng: 32 }, { lat: 12, lng: -15 }, { lat: 10, lng: 40 },
  { lat: 8, lng: -12 }, { lat: 5, lng: -5 }, { lat: 5, lng: 10 }, { lat: 5, lng: 38 },
  { lat: 0, lng: 10 }, { lat: 0, lng: 35 }, { lat: -5, lng: 12 }, { lat: -5, lng: 40 },
  { lat: -10, lng: 15 }, { lat: -10, lng: 35 }, { lat: -15, lng: 15 }, { lat: -15, lng: 35 },
  { lat: -20, lng: 18 }, { lat: -20, lng: 45 }, { lat: -22, lng: 15 }, { lat: -25, lng: 30 },
  { lat: -28, lng: 25 }, { lat: -30, lng: 27 }, { lat: -33, lng: 18 }, { lat: -34, lng: 25 },
  // Asia
  { lat: 70, lng: 70 }, { lat: 68, lng: 90 }, { lat: 68, lng: 120 }, { lat: 65, lng: 50 },
  { lat: 65, lng: 90 }, { lat: 65, lng: 140 }, { lat: 62, lng: 75 }, { lat: 60, lng: 60 },
  { lat: 60, lng: 100 }, { lat: 60, lng: 130 }, { lat: 58, lng: 160 }, { lat: 55, lng: 40 },
  { lat: 55, lng: 85 }, { lat: 55, lng: 130 }, { lat: 52, lng: 105 }, { lat: 50, lng: 80 },
  { lat: 50, lng: 127 }, { lat: 48, lng: 135 }, { lat: 45, lng: 40 }, { lat: 45, lng: 90 },
  { lat: 43, lng: 130 }, { lat: 40, lng: 45 }, { lat: 40, lng: 70 }, { lat: 40, lng: 116 },
  { lat: 38, lng: 127 }, { lat: 37, lng: 140 }, { lat: 35, lng: 52 }, { lat: 35, lng: 105 },
  { lat: 35, lng: 139 }, { lat: 32, lng: 75 }, { lat: 30, lng: 120 }, { lat: 28, lng: 77 },
  { lat: 25, lng: 85 }, { lat: 25, lng: 121 }, { lat: 23, lng: 90 }, { lat: 22, lng: 114 },
  { lat: 20, lng: 79 }, { lat: 18, lng: 100 }, { lat: 15, lng: 75 }, { lat: 15, lng: 100 },
  { lat: 13, lng: 80 }, { lat: 12, lng: 105 }, { lat: 10, lng: 77 }, { lat: 8, lng: 80 },
  { lat: 5, lng: 100 }, { lat: 3, lng: 102 }, { lat: 0, lng: 110 }, { lat: -6, lng: 107 },
  { lat: -8, lng: 115 }, { lat: -5, lng: 120 }, { lat: -2, lng: 140 },
  // Australia
  { lat: -12, lng: 130 }, { lat: -15, lng: 125 }, { lat: -15, lng: 145 }, { lat: -18, lng: 122 },
  { lat: -20, lng: 118 }, { lat: -20, lng: 140 }, { lat: -20, lng: 148 }, { lat: -23, lng: 135 },
  { lat: -25, lng: 115 }, { lat: -25, lng: 152 }, { lat: -28, lng: 114 }, { lat: -28, lng: 153 },
  { lat: -30, lng: 130 }, { lat: -32, lng: 116 }, { lat: -32, lng: 152 }, { lat: -34, lng: 138 },
  { lat: -35, lng: 117 }, { lat: -35, lng: 150 }, { lat: -37, lng: 145 }, { lat: -38, lng: 145 },
  { lat: -42, lng: 147 }, { lat: -43, lng: 147 },
  // New Zealand
  { lat: -37, lng: 175 }, { lat: -40, lng: 175 }, { lat: -42, lng: 173 }, { lat: -45, lng: 170 },
  // Russia Far East
  { lat: 65, lng: 170 }, { lat: 62, lng: 165 }, { lat: 55, lng: 160 }, { lat: 50, lng: 155 },
  { lat: 48, lng: 142 }, { lat: 45, lng: 145 },
];

// Flashing dot component
function ContinentDot({ lat, lng, delay }: { lat: number; lng: number; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const position = useMemo(() => latLngToVector3(lat, lng, 2.01), [lat, lng]);
  
  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.MeshBasicMaterial;
      // Create twinkling effect with varying frequencies
      const twinkle = Math.sin(state.clock.elapsedTime * 2 + delay) * 0.5 + 0.5;
      const pulse = Math.sin(state.clock.elapsedTime * 0.5 + delay * 0.3) * 0.3 + 0.7;
      material.opacity = twinkle * pulse * 0.8 + 0.2;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.018, 6, 6]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
    </mesh>
  );
}

// Continent dots group
function ContinentDots() {
  return (
    <group>
      {continentDots.map((dot, index) => (
        <ContinentDot
          key={index}
          lat={dot.lat}
          lng={dot.lng}
          delay={index * 0.1}
        />
      ))}
    </group>
  );
}

// Earth globe with dot-based continents
function Globe() {
  const globeRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });
  
  return (
    <group ref={globeRef}>
      {/* Dark Earth sphere */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#0a1628"
          metalness={0.3}
          roughness={0.7}
        />
      </Sphere>
      
      {/* Grid lines for globe */}
      <Sphere args={[2.005, 32, 32]}>
        <meshBasicMaterial
          color="#1a3a5c"
          transparent
          opacity={0.15}
          wireframe
        />
      </Sphere>
      
      {/* Continent dots */}
      <ContinentDots />
      
      {/* Atmosphere glow */}
      <Sphere args={[2.08, 64, 64]}>
        <meshBasicMaterial
          color="#4488cc"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

// Main scene content
function GlobeContent() {
  const { viewport } = useThree();
  const scale = Math.min(viewport.width / 8, 1.2);
  
  return (
    <group scale={scale}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 3, 5]} intensity={1.5} />
      <directionalLight position={[-5, -3, -5]} intensity={0.3} />
      
      {/* Globe */}
      <Globe />
      
      {/* City markers */}
      {Object.values(cities).map((city) => (
        <CityMarker key={city.name} lat={city.lat} lng={city.lng} name={city.name} />
      ))}
      
      {/* Flight paths */}
      {flightRoutes.map((route, index) => (
        <FlightPath
          key={index}
          from={route.from}
          to={route.to}
          color={route.color}
          delay={index * 2}
        />
      ))}
    </group>
  );
}

// Exported component
export default function GlobeScene() {
  return (
    <section className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative bg-gradient-to-b from-slate-900 via-slate-800 to-luxury-black overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <GlobeContent />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </section>
  );
}
