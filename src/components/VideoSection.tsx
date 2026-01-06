'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

interface VideoSectionProps {
  videoUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  sectionId: string;
}

export function VideoSection({ 
  videoUrl, 
  title, 
  subtitle, 
  buttonText, 
  buttonLink,
  sectionId 
}: VideoSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's okay
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-luxury-black/60" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white font-light tracking-wide mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-white/80 text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link
          href={buttonLink}
          className="inline-block bg-transparent text-white px-8 py-4 rounded-luxury
                     font-normal text-sm tracking-luxury uppercase
                     border border-white/50 hover:bg-white hover:text-luxury-black
                     transition-all duration-300 hover:-translate-y-0.5"
        >
          {buttonText}
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-luxury uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/30 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
              style={{ animation: 'scrollIndicator 1.5s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollIndicator {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
