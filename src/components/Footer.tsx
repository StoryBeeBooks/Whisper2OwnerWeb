import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-warm-white py-6 px-4 md:px-6 border-t border-warm-sand">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: stacked layout, Desktop: horizontal */}
        <nav className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2 text-xs tracking-wide">
          <div className="flex items-center gap-2">
            <Link 
              href="/policies" 
              className="text-luxury-gray-light hover:text-luxury-black transition-colors duration-200 uppercase"
            >
              Policies
            </Link>
            <span className="text-warm-taupe">|</span>
            <Link 
              href="/faq" 
              className="text-luxury-gray-light hover:text-luxury-black transition-colors duration-200 uppercase"
            >
              FAQ
            </Link>
          </div>
          <span className="text-warm-taupe hidden sm:inline">|</span>
          <a 
            href="mailto:support@Whisper2Owner.com" 
            className="text-luxury-gray-light hover:text-luxury-black transition-colors duration-200 uppercase text-center"
          >
            support@Whisper2Owner.com
          </a>
          <span className="text-warm-taupe hidden sm:inline">|</span>
          <span className="text-luxury-gray-light uppercase">
            © 2026 Whisper2Owner.com
          </span>
        </nav>
      </div>
    </footer>
  );
}
