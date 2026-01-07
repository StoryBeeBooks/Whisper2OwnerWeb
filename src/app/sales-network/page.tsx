'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const VIDEO_URL = 'https://assets.k12path.com/whisper2owner/main2%20delivery.mp4';

export default function SalesNetworkPage() {
  const { t } = useLanguage();

  const partners = [
    { nameKey: 'salesNetwork.partner.localStorefronts', descKey: 'salesNetwork.partner.localStorefronts.desc' },
    { nameKey: 'salesNetwork.partner.smallBusinesses', descKey: 'salesNetwork.partner.smallBusinesses.desc' },
    { nameKey: 'salesNetwork.partner.boutiqueGyms', descKey: 'salesNetwork.partner.boutiqueGyms.desc' },
    { nameKey: 'salesNetwork.partner.communityLeaders', descKey: 'salesNetwork.partner.communityLeaders.desc' },
    { nameKey: 'salesNetwork.partner.supermarketChains', descKey: 'salesNetwork.partner.supermarketChains.desc' },
    { nameKey: 'salesNetwork.partner.amazonStore', descKey: 'salesNetwork.partner.amazonStore.desc' },
    { nameKey: 'salesNetwork.partner.shopifyStores', descKey: 'salesNetwork.partner.shopifyStores.desc' },
    { nameKey: 'salesNetwork.partner.etsyEbay', descKey: 'salesNetwork.partner.etsyEbay.desc' },
    { nameKey: 'salesNetwork.partner.groupon', descKey: 'salesNetwork.partner.groupon.desc' },
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
              {t('salesNetwork.title')}
            </h1>
            <p 
              className="text-white/90 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
            >
              {t('salesNetwork.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      <main className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <section className="mb-10 md:mb-16">
            <h2 className="font-display text-lg md:text-2xl text-luxury-black font-medium tracking-wide mb-6 md:mb-8 text-center uppercase">
              {t('salesNetwork.partnersTitle')}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {partners.map((partner) => (
                <div
                  key={partner.nameKey}
                  className="p-4 md:p-6 bg-warm-card border border-warm-sand rounded-luxury
                             hover:border-luxury-black hover:translate-x-1 transition-all duration-200"
                >
                  <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-1 md:mb-2">
                    {t(partner.nameKey)}
                  </h3>
                  <p className="text-luxury-gray text-xs md:text-sm font-light">
                    {t(partner.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <p className="text-luxury-gray-light text-xs md:text-sm mb-4 md:mb-6">
              {t('salesNetwork.cta')}
            </p>
            <a
              href="mailto:support@Whisper2Owner.com"
              className="btn-primary inline-block text-xs md:text-sm"
            >
              {t('salesNetwork.contactUs')}
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
