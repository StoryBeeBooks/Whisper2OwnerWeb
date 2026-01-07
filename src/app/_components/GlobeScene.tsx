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
        <meshBasicMaterial color="#1a1a1a" />
      </mesh>
    </group>
  );
}

// Earth globe
function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    // Using a simple earth texture from a CDN
    loader.load(
      'https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg',
      (loadedTexture) => {
        loadedTexture.colorSpace = THREE.SRGBColorSpace;
        setTexture(loadedTexture);
      },
      undefined,
      () => {
        // Fallback: create a simple blue sphere if texture fails
        console.log('Using fallback globe color');
      }
    );
  }, []);
  
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });
  
  return (
    <group ref={globeRef}>
      {/* Earth sphere */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          map={texture}
          color={texture ? undefined : '#2a4a6a'}
          metalness={0.1}
          roughness={0.8}
        />
      </Sphere>
      
      {/* Atmosphere glow */}
      <Sphere args={[2.05, 64, 64]}>
        <meshBasicMaterial
          color="#88ccff"
          transparent
          opacity={0.1}
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
