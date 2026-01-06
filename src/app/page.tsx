'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WaveScene } from '@/components/three/WaveScene';
import { HeroSection } from '@/components/HeroSection';
import { VideoSection } from '@/components/VideoSection';

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
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Setup scroll animations
  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      // Hero section - controls 3D wave zoom and text fade
      ScrollTrigger.create({
        trigger: heroContainerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });

      // Section 1 - International Opportunities
      if (section1Ref.current) {
        const content1 = section1Ref.current.querySelector('.section-content');
        
        gsap.fromTo(
          content1,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section1Ref.current,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 1,
            },
          }
        );

        // Fade out as user scrolls past
        gsap.to(content1, {
          opacity: 0,
          scrollTrigger: {
            trigger: section1Ref.current,
            start: 'bottom 60%',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Section 2 - Sales Network
      if (section2Ref.current) {
        const content2 = section2Ref.current.querySelector('.section-content');
        
        gsap.fromTo(
          content2,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section2Ref.current,
              start: 'top 80%',
              end: 'top 30%',
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

        {/* Hero Section with 3D Wave */}
        <div
          ref={heroContainerRef}
          className="relative h-[200vh]"
        >
          {/* Fixed 3D background */}
          <div className="sticky top-0 h-screen w-full">
            <WaveScene scrollProgress={scrollProgress} />
            <HeroSection scrollProgress={scrollProgress} />
          </div>
        </div>

        {/* Section 1: International Opportunities */}
        <div ref={section1Ref}>
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
                  src="https://assets.k12path.com/whisper2owner/main1.mp4" 
                  type="video/mp4" 
                />
              </video>
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-luxury-black/65" />
            </div>

            {/* Content */}
            <div className="section-content relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
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
                           transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore International Opportunities
              </a>
            </div>
          </section>
        </div>

        {/* Section 2: Sales Network */}
        <div ref={section2Ref}>
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
            <div className="section-content relative z-10 text-center px-6 max-w-5xl mx-auto py-20">
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
