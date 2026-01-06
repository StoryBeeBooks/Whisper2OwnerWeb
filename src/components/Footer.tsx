import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-luxury-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-light tracking-wide mb-2">
              Whisper2Owner
            </h3>
            <p className="text-white/50 text-xs tracking-wide">
              Bridging International Brands with Canadian Consumers
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-2 text-sm">
            <Link 
              href="/policies" 
              className="text-white/70 hover:text-white transition-colors duration-200 
                         tracking-wide uppercase text-xs px-3 py-1"
            >
              Policies
            </Link>
            <span className="text-white/30">|</span>
            <Link 
              href="/faq" 
              className="text-white/70 hover:text-white transition-colors duration-200 
                         tracking-wide uppercase text-xs px-3 py-1"
            >
              FAQ
            </Link>
            <span className="text-white/30">|</span>
            <a 
              href="mailto:support@Whisper2Owner.com" 
              className="text-white/70 hover:text-white transition-colors duration-200 
                         text-xs px-3 py-1"
            >
              support@Whisper2Owner.com
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/40 text-xs tracking-wide">
            © 2026 Whisper2Owner.com
          </p>
        </div>
      </div>
    </footer>
  );
}
