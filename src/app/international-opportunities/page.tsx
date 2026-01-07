'use client';

import dynamic from 'next/dynamic';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

// Dynamically import GlobeScene to avoid SSR issues with Three.js
const GlobeScene = dynamic(() => import('@/app/_components/GlobeScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-b from-slate-900 via-slate-800 to-luxury-black flex items-center justify-center">
      <div className="text-white/50 text-sm font-light">Loading globe...</div>
    </div>
  ),
});

const VIDEO_URL = 'https://assets.k12path.com/whisper2owner/barley.mp4';

export default function InternationalOpportunitiesPage() {
  const { t } = useLanguage();

  const markets = [
    {
      countryKey: 'international.canada',
      flag: '🇨🇦',
      descKey: 'international.canada.desc',
      typeKey: 'international.import'
    },
    {
      countryKey: 'international.england',
      flag: '🇬🇧',
      descKey: 'international.england.desc',
      typeKey: 'international.export'
    },
    {
      countryKey: 'international.colombia',
      flag: '🇨🇴',
      descKey: 'international.colombia.desc',
      typeKey: 'international.export'
    },
    {
      countryKey: 'international.argentina',
      flag: '🇦🇷',
      descKey: 'international.argentina.desc',
      typeKey: 'international.export'
    },
    {
      countryKey: 'international.china',
      flag: '🇨🇳',
      descKey: 'international.china.desc',
      typeKey: 'international.export'
    },
  ];

  const services = [
    { titleKey: 'international.service.marketResearch', descKey: 'international.service.marketResearch.desc' },
    { titleKey: 'international.service.partnerMatching', descKey: 'international.service.partnerMatching.desc' },
    { titleKey: 'international.service.regulatory', descKey: 'international.service.regulatory.desc' },
    { titleKey: 'international.service.logistics', descKey: 'international.service.logistics.desc' },
  ];

  return (
    <div className="bg-warm-white">
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
              {t('international.title')}
            </h1>
            <p 
              className="text-white/90 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
            >
              {t('international.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      <main className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <section className="mb-10 md:mb-16">
            <h2 className="font-display text-lg md:text-2xl text-luxury-black font-medium tracking-wide mb-6 md:mb-8 text-center uppercase">
              {t('international.marketsTitle')}
            </h2>
            
            <div className="space-y-3 md:space-y-4">
              {markets.map((market) => (
                <div
                  key={market.countryKey}
                  className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-warm-card border border-warm-sand rounded-luxury
                             hover:border-luxury-black hover:translate-x-1 transition-all duration-200"
                >
                  <span className="text-2xl md:text-4xl">{market.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1">
                      <h3 className="font-display text-base md:text-xl text-luxury-black font-medium">
                        {t(market.countryKey)}
                      </h3>
                      <span className={`text-[10px] md:text-xs tracking-luxury uppercase px-2 py-0.5 rounded-luxury
                        ${market.typeKey === 'international.import' 
                          ? 'bg-accent-sage/20 text-accent-sage' 
                          : 'bg-accent-blue/20 text-accent-blue'
                        }`}
                      >
                        {t(market.typeKey)}
                      </span>
                    </div>
                    <p className="text-luxury-gray text-xs md:text-sm font-light">
                      {t(market.descKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Globe Section */}
          <section className="mb-10 md:mb-16 -mx-4 md:-mx-6">
            <GlobeScene />
          </section>

          <section className="mb-10 md:mb-16">
            <h2 className="font-display text-lg md:text-2xl text-luxury-black font-medium tracking-wide mb-6 md:mb-8 text-center uppercase">
              {t('international.servicesTitle')}
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {services.map((service) => (
                <div
                  key={service.titleKey}
                  className="p-4 md:p-6 bg-warm-card border border-warm-sand rounded-luxury"
                >
                  <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-1 md:mb-2">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-luxury-gray text-xs md:text-sm font-light">
                    {t(service.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <p className="text-luxury-gray-light text-xs md:text-sm mb-4 md:mb-6">
              {t('international.readyToExpand')}
            </p>
            <a
              href="mailto:mario.xu@wtheory.com"
              className="btn-primary inline-block text-xs md:text-sm"
            >
              {t('international.startConversation')}
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
