import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-warm-white py-6 px-6 border-t border-warm-sand">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-center gap-2 text-xs tracking-wide">
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
          <span className="text-warm-taupe">|</span>
          <a 
            href="mailto:support@Whisper2Owner.com" 
            className="text-luxury-gray-light hover:text-luxury-black transition-colors duration-200 uppercase"
          >
            support@Whisper2Owner.com
          </a>
          <span className="text-warm-taupe">|</span>
          <span className="text-luxury-gray-light uppercase">
            © 2026 Whisper2Owner.com
          </span>
        </nav>
      </div>
    </footer>
  );
}
