'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Main', href: '/' },
  { label: 'Sales Network', href: '/sales-network' },
  { label: 'Canada Funding', href: '/canada-funding' },
  { label: 'Tender Opportunities', href: '/tender-opportunities' },
  { label: 'International Opportunities', href: '/international-opportunities' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';

      // Animate overlay
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });

      // Animate menu panel
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.4,
        ease: 'power3.out'
      });

      // Animate nav items
      if (navItemsRef.current) {
        gsap.fromTo(
          navItemsRef.current.children,
          { opacity: 0, x: 20 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.4, 
            stagger: 0.08,
            delay: 0.2,
            ease: 'power2.out'
          }
        );
      }
    } else {
      // Enable body scroll
      document.body.style.overflow = '';

      // Animate out
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      });

      gsap.to(menuRef.current, {
        x: '100%',
        duration: 0.3,
        ease: 'power3.in'
      });
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button - Fixed Position */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-[100] w-12 h-12 flex items-center justify-center
                   bg-warm-white/90 backdrop-blur-sm border border-warm-sand rounded-luxury
                   shadow-luxury-default hover:shadow-luxury-elevated
                   transition-all duration-300 hover:-translate-y-0.5
                   group"
        aria-label="Open navigation menu"
      >
        <Menu className="w-5 h-5 text-luxury-black group-hover:scale-105 transition-transform" />
      </button>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-luxury-black/50 z-[150] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        style={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
      />

      {/* Side Panel Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-warm-white z-[200]
                   shadow-luxury-modal overflow-hidden"
        style={{ transform: 'translateX(100%)' }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center
                     border border-warm-taupe rounded-luxury
                     hover:bg-luxury-black hover:text-white hover:border-luxury-black
                     transition-all duration-200"
          aria-label="Close navigation menu"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand */}
        <div className="pt-24 px-8 mb-12">
          <h2 className="font-display text-2xl font-medium tracking-wide text-luxury-black">
            Whisper2Owner
          </h2>
          <p className="text-luxury-gray text-xs tracking-luxury uppercase mt-2">
            Navigation
          </p>
        </div>

        {/* Nav Items */}
        <nav ref={navItemsRef} className="px-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-4 border-b border-warm-sand
                         text-luxury-black font-display text-lg tracking-wide
                         hover:pl-2 hover:text-luxury-charcoal
                         transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer info in menu */}
        <div className="absolute bottom-8 left-8 right-8">
          <p className="text-luxury-gray-light text-xs tracking-wide">
            support@Whisper2Owner.com
          </p>
          <p className="text-luxury-gray-light text-xs tracking-wide mt-1">
            © 2026 Whisper2Owner.com
          </p>
        </div>
      </div>
    </>
  );
}
