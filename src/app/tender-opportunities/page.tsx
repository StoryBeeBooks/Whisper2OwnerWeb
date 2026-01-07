'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const VIDEO_URL = 'https://assets.k12path.com/whisper2owner/main1.mp4';

export default function TenderOpportunitiesPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      <Navigation />
      
      {/* Hero Section with Video Background */}
      <section className="relative h-[calc(100vh-52px)] w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        
        {/* Dark overlay - gradient from transparent to dark in bottom half */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% via-black/50 via-70% to-black/80 to-100%" />
        
        {/* Content - positioned in bottom half */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide mb-4 md:mb-6"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
            >
              {t('tenderOpportunities.title')}
            </h1>
            <p 
              className="text-white/90 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto mb-6 md:mb-8"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
            >
              {t('tenderOpportunities.subtitle')}
            </p>
            <a
              href="mailto:support@Whisper2Owner.com"
              className="inline-block px-6 py-3 border border-white text-white text-xs sm:text-sm tracking-wide uppercase
                         hover:bg-white hover:text-luxury-black transition-all duration-300"
            >
              {t('tenderOpportunities.getNotified')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
