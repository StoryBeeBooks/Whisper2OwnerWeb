'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WaveScene } from '@/components/three/WaveScene';
import { HeroSection } from '@/components/HeroSection';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Assets to preload
const ASSETS_TO_LOAD = [
  'https://assets.k12path.com/whisper2owner/main1.mp4',
  'https://assets.k12path.com/whisper2owner/main2%20delivery.mp4',
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const section1ContainerRef = useRef<HTMLDivElement>(null);
  const section1DotRef = useRef<HTMLDivElement>(null);
  const section1ContentRef = useRef<HTMLDivElement>(null);
  const section2ContainerRef = useRef<HTMLDivElement>(null);
  const section2ContentRef = useRef<HTMLDivElement>(null);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Setup scroll animations
  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      // Hero section - controls 3D wave zoom
      ScrollTrigger.create({
        trigger: heroContainerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });

      // Section 1 - Dot expansion effect
      if (section1ContainerRef.current && section1DotRef.current && section1ContentRef.current) {
        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: section1ContainerRef.current,
            start: 'top bottom',
            end: 'top top',
            scrub: 1,
          },
        });

        // Expand from dot to full screen
        tl1.fromTo(
          section1DotRef.current,
          { 
            scale: 0,
            borderRadius: '50%',
          },
          { 
            scale: 50,
            borderRadius: '0%',
            ease: 'power2.inOut',
          }
        );

        // Fade in content after expansion
        gsap.fromTo(
          section1ContentRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: section1ContainerRef.current,
              start: 'top 20%',
              end: 'top -10%',
              scrub: 1,
            },
          }
        );

        // Fade out section 1 as user scrolls to section 2
        gsap.to(section1ContentRef.current, {
          opacity: 0,
          scale: 0.95,
          scrollTrigger: {
            trigger: section2ContainerRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          },
        });
      }

      // Section 2 - Fade in effect
      if (section2ContainerRef.current && section2ContentRef.current) {
        gsap.fromTo(
          section2ContentRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: section2ContainerRef.current,
              start: 'top 60%',
              end: 'top 20%',
              scrub: 1,
            },
          }
        );
      }
    }, mainRef);

    return () => ctx.revert();
  }, [isLoading]);

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
        ref={mainRef}
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        {/* Navigation */}
        <Navigation />

        {/* Hero Section with 3D Wave - White Background */}
        <div
          ref={heroContainerRef}
          className="relative h-[250vh]"
        >
          {/* Fixed 3D background */}
          <div className="sticky top-0 h-screen w-full bg-warm-white">
            <WaveScene scrollProgress={scrollProgress} />
            <HeroSection scrollProgress={scrollProgress} />
          </div>
        </div>

        {/* Section 1: International Opportunities - Expanding Dot */}
        <div 
          ref={section1ContainerRef}
          className="relative h-[200vh]"
        >
          <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Expanding dot/circle that becomes full screen */}
            <div
              ref={section1DotRef}
              className="absolute w-[100px] h-[100px] rounded-full overflow-hidden"
              style={{ 
                transform: 'scale(0)',
              }}
            >
              {/* Video Background inside the expanding element */}
              <div className="absolute inset-0 w-[100vw] h-[100vh]" style={{ 
                width: '100vw', 
                height: '100vh',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}>
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
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-luxury-black/60" />
              </div>
            </div>

            {/* Content */}
            <div 
              ref={section1ContentRef}
              className="relative z-10 text-center px-6 max-w-4xl mx-auto"
              style={{ opacity: 0 }}
            >
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white font-light tracking-wide mb-6 leading-tight">
                Global Reach, Local Impact
              </h2>
              <p className="text-white/80 text-base md:text-lg font-light leading-relaxed mb-6 max-w-2xl mx-auto">
                We connect international brands and organizations seeking entry into the Canadian 
                market with established local distribution networks.
              </p>
              <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                Our expertise extends to facilitating exports to key markets including 
                England, Colombia, Argentina, and China — opening doors to global opportunities.
              </p>
              <a
                href="/international-opportunities"
                className="inline-block bg-transparent text-white px-8 py-4 rounded-luxury
                           font-normal text-sm tracking-luxury uppercase
                           border border-white/50 hover:bg-white hover:text-luxury-black
                           transition-all duration-300 hover:-translate-y-0.5 pointer-events-auto"
              >
                Explore International Opportunities
              </a>
            </div>
          </div>
        </div>

        {/* Section 2: Sales Network */}
        <div 
          ref={section2ContainerRef}
          className="relative min-h-screen"
        >
          <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
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
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-luxury-black/65" />
            </div>

            {/* Content */}
            <div 
              ref={section2ContentRef}
              className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20"
            >
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white font-light tracking-wide mb-6 leading-tight">
                A Network Built for Brands
              </h2>
              <p className="text-white/80 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                Our curated sales network connects your products with the right audiences 
                through trusted local partnerships.
              </p>
              
              {/* Network highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
                {[
                  'Local Storefronts',
                  'Small Businesses',
                  'Boutique Gyms',
                  'Community Leaders',
                  'Supermarket Chains',
                  'Amazon Store',
                  'Shopify Store',
                  'Etsy & eBay',
                ].map((item) => (
                  <div
                    key={item}
                    className="px-3 py-2 border border-white/20 rounded-luxury
                               text-white/70 text-xs tracking-wide uppercase"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-white/50 text-sm font-light mb-10">
                Plus Groupon, online marketplaces, and many more distribution channels.
              </p>

              <a
                href="/sales-network"
                className="inline-block bg-transparent text-white px-8 py-4 rounded-luxury
                           font-normal text-sm tracking-luxury uppercase
                           border border-white/50 hover:bg-white hover:text-luxury-black
                           transition-all duration-300 hover:-translate-y-0.5"
              >
                Discover Our Network
              </a>
            </div>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
