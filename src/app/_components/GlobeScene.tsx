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
  const position = useMemo(() => latLngToVector3(lat, lng, 2.025), [lat, lng]);
  
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

// Generate dense continent dots programmatically
function generateContinentDots(): { lat: number; lng: number }[] {
  const dots: { lat: number; lng: number }[] = [];
  
  // Helper to add dots in a region with density
  const addRegion = (latMin: number, latMax: number, lngMin: number, lngMax: number, density: number = 3) => {
    for (let lat = latMin; lat <= latMax; lat += density) {
      for (let lng = lngMin; lng <= lngMax; lng += density) {
        // Add some randomness for natural look
        const jitterLat = (Math.random() - 0.5) * 1.5;
        const jitterLng = (Math.random() - 0.5) * 1.5;
        dots.push({ lat: lat + jitterLat, lng: lng + jitterLng });
      }
    }
  };
  
  // North America - dense coverage
  addRegion(25, 50, -130, -65, 3);  // USA
  addRegion(50, 72, -140, -55, 4);  // Canada
  addRegion(60, 72, -170, -140, 5); // Alaska
  addRegion(15, 25, -105, -85, 3);  // Mexico
  addRegion(8, 15, -92, -77, 4);    // Central America
  
  // South America
  addRegion(-5, 12, -80, -60, 3);   // Northern SA
  addRegion(-25, -5, -75, -35, 3);  // Brazil/Central
  addRegion(-40, -25, -72, -55, 4); // Argentina/Chile
  addRegion(-55, -40, -75, -65, 5); // Patagonia
  
  // Europe
  addRegion(36, 45, -10, 30, 2.5);  // Southern Europe
  addRegion(45, 55, -5, 25, 2.5);   // Central Europe
  addRegion(55, 62, -5, 30, 3);     // Northern Europe
  addRegion(62, 72, 5, 30, 4);      // Scandinavia
  addRegion(50, 60, 25, 45, 3);     // Eastern Europe
  
  // British Isles
  addRegion(50, 59, -10, 2, 2);
  
  // Iceland
  addRegion(63, 66, -24, -13, 3);
  
  // Africa
  addRegion(25, 37, -15, 35, 4);    // North Africa
  addRegion(10, 25, -20, 40, 4);    // Sahel
  addRegion(-5, 10, -15, 45, 4);    // Central Africa
  addRegion(-20, -5, 10, 45, 4);    // Southern Central
  addRegion(-35, -20, 15, 35, 4);   // South Africa
  
  // Middle East
  addRegion(28, 40, 35, 55, 4);
  addRegion(12, 28, 40, 55, 5);     // Arabian Peninsula
  
  // Russia/Northern Asia
  addRegion(50, 75, 40, 180, 6);
  addRegion(50, 65, 40, 60, 4);
  
  // Central Asia
  addRegion(35, 50, 50, 90, 5);
  
  // South Asia (India, etc)
  addRegion(8, 35, 68, 95, 3);
  
  // East Asia
  addRegion(20, 45, 100, 125, 3);   // China
  addRegion(33, 45, 125, 145, 3);   // Japan/Korea
  
  // Southeast Asia
  addRegion(-10, 20, 95, 120, 3);
  addRegion(-8, 5, 95, 140, 4);     // Indonesia
  
  // Australia
  addRegion(-40, -12, 112, 155, 4);
  
  // New Zealand
  addRegion(-47, -34, 166, 178, 3);
  
  // Greenland
  addRegion(60, 83, -55, -20, 5);
  
  return dots;
}

const continentDots = generateContinentDots();

// Flashing dot component - smaller size
function ContinentDot({ lat, lng, delay }: { lat: number; lng: number; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const position = useMemo(() => latLngToVector3(lat, lng, 2.008), [lat, lng]);
  
  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.MeshBasicMaterial;
      // Create twinkling effect with varying frequencies
      const twinkle = Math.sin(state.clock.elapsedTime * 3 + delay) * 0.5 + 0.5;
      const pulse = Math.sin(state.clock.elapsedTime * 0.8 + delay * 0.2) * 0.3 + 0.7;
      material.opacity = twinkle * pulse * 0.7 + 0.3;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.008, 4, 4]} />
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
          delay={index * 0.02}
        />
      ))}
    </group>
  );
}

// Earth globe with dot-based continents and gradient blue sphere
function Globe() {
  const globeRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });
  
  return (
    <group ref={globeRef}>
      {/* Ocean base - deep blue */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#0066cc"
          metalness={0.2}
          roughness={0.8}
        />
      </Sphere>
      
      {/* Mid-layer gradient - lighter blue */}
      <Sphere args={[2.001, 64, 64]}>
        <meshBasicMaterial
          color="#3388dd"
          transparent
          opacity={0.5}
        />
      </Sphere>
      
      {/* Top gradient highlight */}
      <Sphere args={[2.002, 64, 64]}>
        <meshBasicMaterial
          color="#55aaff"
          transparent
          opacity={0.25}
        />
      </Sphere>
      
      {/* Continent dots */}
      <ContinentDots />
      
      {/* Atmosphere glow - soft blue */}
      <Sphere args={[2.1, 64, 64]}>
        <meshBasicMaterial
          color="#66bbff"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* Outer atmosphere haze */}
      <Sphere args={[2.2, 64, 64]}>
        <meshBasicMaterial
          color="#aaddff"
          transparent
          opacity={0.05}
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
    <section className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
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
