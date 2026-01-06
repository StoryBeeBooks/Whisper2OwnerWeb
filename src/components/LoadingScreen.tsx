'use client';

import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  assets: string[];
}

export function LoadingScreen({ onLoadingComplete, assets }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate text entrance
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15,
          ease: 'power2.out'
        }
      );
    }

    // Load assets
    const loadAsset = async (url: string): Promise<void> => {
      return new Promise((resolve) => {
        if (url.endsWith('.mp4') || url.endsWith('.webm')) {
          const video = document.createElement('video');
          video.preload = 'auto';
          video.oncanplaythrough = () => resolve();
          video.onerror = () => resolve(); // Continue even on error
          video.src = url;
        } else if (url.endsWith('.glb') || url.endsWith('.gltf')) {
          fetch(url)
            .then(res => res.blob())
            .then(() => resolve())
            .catch(() => resolve());
        } else {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = url;
        }
      });
    };

    const loadAllAssets = async () => {
      let loaded = 0;
      
      // Simulate minimum loading time for smooth experience
      const minLoadTime = 2000;
      const startTime = Date.now();
      
      for (const asset of assets) {
        await loadAsset(asset);
        loaded++;
        setLoadedCount(loaded);
        const newProgress = (loaded / assets.length) * 100;
        setProgress(newProgress);
      }

      // Ensure minimum loading time for visual effect
      const elapsed = Date.now() - startTime;
      if (elapsed < minLoadTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadTime - elapsed));
      }

      // Animate out
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: onLoadingComplete
        });
      }
    };

    loadAllAssets();
  }, [assets, onLoadingComplete]);

  // Animate progress bar
  useEffect(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: `${progress}%`,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  }, [progress]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-luxury-black"
    >
      {/* Logo / Brand */}
      <div ref={textRef} className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-5xl text-white font-light tracking-wide mb-4">
          Whisper2Owner
        </h1>
        <p className="text-white/60 text-sm tracking-luxury uppercase">
          Bridging Brands to Consumers
        </p>
      </div>

      {/* Colorful Progress Bar */}
      <div className="w-80 md:w-96">
        {/* Progress bar background */}
        <div className="h-1 bg-white/10 rounded-luxury overflow-hidden relative">
          {/* Animated colorful gradient fill */}
          <div 
            ref={progressBarRef}
            className="h-full rounded-luxury relative"
            style={{
              width: '0%',
              background: 'linear-gradient(90deg, #b8a88a, #8ab88a, #8a9db8, #b88a8a, #b8a88a)',
              backgroundSize: '200% 100%',
              animation: 'shimmer-gradient 2s linear infinite'
            }}
          >
            {/* Glow effect */}
            <div 
              className="absolute inset-0 blur-sm opacity-60"
              style={{
                background: 'linear-gradient(90deg, #b8a88a, #8ab88a, #8a9db8, #b88a8a, #b8a88a)',
                backgroundSize: '200% 100%',
                animation: 'shimmer-gradient 2s linear infinite'
              }}
            />
          </div>
        </div>

        {/* Progress text */}
        <div className="flex justify-between mt-4 text-white/40 text-xs tracking-wide uppercase">
          <span>Loading Experience</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Loading indicator dots */}
      <div className="flex gap-2 mt-12">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-white/30"
            style={{
              animation: `pulse-glow 1.5s ease-in-out ${i * 0.2}s infinite`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer-gradient {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}
