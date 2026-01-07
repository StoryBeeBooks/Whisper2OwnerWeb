'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

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
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10 md:mb-16 text-center">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-luxury-black font-light tracking-wide mb-4 md:mb-6">
              {t('salesNetwork.title')}
            </h1>
            <p className="text-luxury-gray text-sm md:text-lg font-light max-w-2xl mx-auto">
              {t('salesNetwork.subtitle')}
            </p>
          </header>

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
