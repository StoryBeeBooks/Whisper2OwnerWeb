import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Didot', 'Bodoni MT', 'Georgia', 'serif'],
        body: ['Josefin Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'luxury-black': '#1a1a1a',
        'luxury-dark': '#2d2d2d',
        'luxury-charcoal': '#3d3d3d',
        'luxury-gray': '#666666',
        'luxury-gray-light': '#999999',
        'warm-white': '#faf9f6',
        'warm-card': '#fdfcfa',
        'warm-cream': '#f5f3ef',
        'warm-linen': '#f0ede8',
        'warm-sand': '#e8e4dc',
        'warm-taupe': '#d4cfc7',
        'accent-gold': '#b8a88a',
        'accent-sage': '#8ab88a',
        'accent-blue': '#8a9db8',
        'accent-rose': '#b88a8a',
      },
      letterSpacing: {
        'tight': '-0.02em',
        'normal': '0.02em',
        'wide': '0.08em',
        'luxury': '0.15em',
      },
      borderRadius: {
        'luxury': '2px',
      },
      boxShadow: {
        'luxury-subtle': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'luxury-default': '0 2px 12px rgba(0, 0, 0, 0.05)',
        'luxury-medium': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'luxury-elevated': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'luxury-high': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'luxury-modal': '0 25px 50px rgba(0, 0, 0, 0.15)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
