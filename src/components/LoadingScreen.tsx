'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  assets: string[];
}

export function LoadingScreen({ onLoadingComplete, assets }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Load assets
    const loadAsset = async (url: string): Promise<void> => {
      return new Promise((resolve) => {
        if (url.endsWith('.mp4') || url.endsWith('.webm')) {
          const video = document.createElement('video');
          video.preload = 'auto';
          video.oncanplaythrough = () => resolve();
          video.onerror = () => resolve();
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
      const minLoadTime = 2000;
      const startTime = Date.now();
      
      for (const asset of assets) {
        await loadAsset(asset);
        loaded++;
        const newProgress = (loaded / assets.length) * 100;
        setProgress(newProgress);
      }

      const elapsed = Date.now() - startTime;
      if (elapsed < minLoadTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadTime - elapsed));
      }

      setIsComplete(true);
      setTimeout(onLoadingComplete, 500);
    };

    loadAllAssets();
  }, [assets, onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div 
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-luxury-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo / Brand */}
          <div className="text-center mb-16">
            <motion.h1 
              className="font-display text-4xl md:text-5xl text-white font-light tracking-wide mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0 }}
            >
              Whisper2Owner
            </motion.h1>
            <motion.p 
              className="text-white/60 text-sm tracking-luxury uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Bridging Brands to Consumers
            </motion.p>
          </div>

          {/* Colorful Progress Bar */}
          <motion.div 
            className="w-80 md:w-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="h-1 bg-white/10 rounded-luxury overflow-hidden relative">
              <motion.div 
                className="h-full rounded-luxury relative"
                style={{
                  background: 'linear-gradient(90deg, #b8a88a, #8ab88a, #8a9db8, #b88a8a, #b8a88a)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer-gradient 2s linear infinite'
                }}
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div 
                  className="absolute inset-0 blur-sm opacity-60"
                  style={{
                    background: 'linear-gradient(90deg, #b8a88a, #8ab88a, #8a9db8, #b88a8a, #b8a88a)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer-gradient 2s linear infinite'
                  }}
                />
              </motion.div>
            </div>

            <div className="flex justify-between mt-4 text-white/40 text-xs tracking-wide uppercase">
              <span>Loading Experience</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </motion.div>

          {/* Loading indicator dots */}
          <div className="flex gap-2 mt-12">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-white/30"
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>

          <style jsx>{`
            @keyframes shimmer-gradient {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
