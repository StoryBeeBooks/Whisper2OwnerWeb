'use client';

import React, { forwardRef } from 'react';

interface HeroSectionProps {
  scrollProgress: number;
}

export const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  function HeroSection({ scrollProgress }, ref) {
    const opacity = Math.max(0, 1 - scrollProgress * 3);

    return (
      <div
        ref={ref}
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        style={{ opacity }}
      >
        <div className="text-center px-6 max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-luxury-black font-light tracking-wide mb-8 leading-tight">
            Whisper2Owner
          </h1>
          
          {/* Tagline */}
          <p className="text-luxury-gray text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-4">
            Bridging international brands with local Canadian consumers.
          </p>
          
          {/* Sub-tagline */}
          <p className="text-luxury-gray-light text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            We strategize your revenue by connecting you with the right customer segments 
            through our localized network of partners and distribution channels.
          </p>

          {/* Scroll hint */}
          <div className="mt-16">
            <div className="flex flex-col items-center gap-3 text-luxury-gray-light">
              <span className="text-xs tracking-luxury uppercase">Discover More</span>
              <div className="w-px h-12 bg-warm-taupe relative overflow-hidden">
                <div 
                  className="absolute top-0 left-0 w-full h-1/3 bg-luxury-black"
                  style={{ animation: 'scrollPulse 2s ease-in-out infinite' }}
                />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scrollPulse {
            0%, 100% { transform: translateY(-100%); opacity: 0; }
            50% { transform: translateY(200%); opacity: 1; }
          }
        `}</style>
      </div>
    );
  }
);
