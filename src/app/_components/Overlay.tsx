'use client';

import { useScroll, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Overlay() {
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
    <Html
      fullscreen
      className="pointer-events-none"
    >
      {/* Hero Text Overlay - visible during wave zoom */}
      <div 
        ref={heroRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-luxury-black font-light tracking-wide mb-6 leading-tight max-w-4xl">
          Whisper2Owner
        </h1>
        <p className="text-luxury-charcoal text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
          Bridging International Brands with Local Canadian Consumers.
          We optimize revenue strategies by connecting you with the right customer segments.
        </p>
      </div>
    </Html>
  );
}
