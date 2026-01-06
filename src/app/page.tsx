'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Hero3D } from '@/components/three/Hero3D';

// Assets to preload
const ASSETS_TO_LOAD = [
  'https://assets.k12path.com/whisper2owner/main1.mp4',
  'https://assets.k12path.com/whisper2owner/main2%20delivery.mp4',
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  // Track scroll for dot expansion (using window scroll for sections below Canvas)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Dot expansion: starts at 30% scroll, completes at 45%
  const dotScale = useTransform(scrollYProgress, [0.28, 0.45], [0, 60]);
  const dotOpacity = useTransform(scrollYProgress, [0.28, 0.32], [0, 1]);

  // Section 2 content fade in: 45% to 55%
  const section2ContentOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const section2ContentY = useTransform(scrollYProgress, [0.45, 0.55], [50, 0]);

  // Section 2 fade out / Section 3 fade in: 65% to 80%
  const section2FadeOut = useTransform(scrollYProgress, [0.65, 0.75], [1, 0]);
  const section3FadeIn = useTransform(scrollYProgress, [0.70, 0.85], [0, 1]);
  const section3ContentY = useTransform(scrollYProgress, [0.70, 0.85], [50, 0]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen
          assets={ASSETS_TO_LOAD}
          onLoadingComplete={handleLoadingComplete}
        />
      )}

      {/* Main Content */}
      <div
        ref={containerRef}
        className={`relative transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        {/* Navigation - Fixed */}
        <Navigation />

        {/* 3D Hero Scene - Fixed background with ScrollControls */}
        <Hero3D onScrollProgress={setScrollProgress} />

        {/* Scroll spacer for 3D section (matches ScrollControls pages) */}
        <div className="relative h-[500vh]">
          {/* This creates scroll space for the 3D scene */}
        </div>

        {/* Section 2: International Opportunities - Expanding Dot */}
        <div 
          ref={section2Ref}
          className="relative h-[200vh]"
        >
          <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Expanding dot that reveals video */}
            <motion.div
              className="absolute rounded-full overflow-hidden"
              style={{
                width: 100,
                height: 100,
                scale: dotScale,
                opacity: dotOpacity,
              }}
            >
              {/* Video container - positioned to fill viewport when scaled */}
              <div 
                className="absolute"
                style={{ 
                  width: '100vw', 
                  height: '100vh',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source 
                    src="https://assets.k12path.com/whisper2owner/main1.mp4" 
                    type="video/mp4" 
                  />
                </video>
                {/* Dark overlay - 50% opacity */}
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="relative z-10 text-center px-6 max-w-4xl mx-auto"
              style={{
                opacity: section2ContentOpacity,
                y: section2ContentY,
              }}
            >
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white font-light tracking-wide mb-6 leading-tight">
                Global Reach, Local Impact
              </h2>
              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                We connect international brands and organizations seeking entry into the Canadian 
                market with established local distribution networks. Our expertise extends to 
                facilitating exports to key markets including England, Colombia, Argentina, 
                and China  opening doors to global opportunities.
              </p>
              <a
                href="/international-opportunities"
                className="inline-block bg-transparent text-white px-8 py-4 rounded-luxury
                           font-normal text-sm tracking-luxury uppercase
                           border border-white hover:bg-white hover:text-luxury-black
                           transition-all duration-300"
              >
                Explore International Opportunities
              </a>
            </motion.div>
          </div>
        </div>

        {/* Section 3: Sales Network - Cross-dissolve transition */}
        <div 
          ref={section3Ref}
          className="relative min-h-screen"
        >
          <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <motion.div 
              className="absolute inset-0 z-0"
              style={{ opacity: section3FadeIn }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source 
                  src="https://assets.k12path.com/whisper2owner/main2%20delivery.mp4" 
                  type="video/mp4" 
                />
              </video>
              {/* Dark overlay - 50% opacity */}
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>

            {/* Content */}
            <motion.div 
              className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20"
              style={{
                opacity: section3FadeIn,
                y: section3ContentY,
              }}
            >
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white font-light tracking-wide mb-6 leading-tight">
                A Network Built for Brands
              </h2>
              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                We manage a local sales network including small businesses, storefronts, 
                boutique gyms, community leaders, supermarket chains, and online platforms 
                like Amazon, Shopify, Etsy, eBay, and Groupon.
              </p>
              <a
                href="/sales-network"
                className="inline-block bg-transparent text-white px-8 py-4 rounded-luxury
                           font-normal text-sm tracking-luxury uppercase
                           border border-white hover:bg-white hover:text-luxury-black
                           transition-all duration-300"
              >
                View Sales Network
              </a>
            </motion.div>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
