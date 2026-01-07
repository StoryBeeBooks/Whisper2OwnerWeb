'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function CanadaFundingPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10 md:mb-16 text-center">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-luxury-black font-light tracking-wide mb-4 md:mb-6">
              {t('canadaFunding.title')}
            </h1>
            <p className="text-luxury-gray text-sm md:text-lg font-light max-w-2xl mx-auto">
              {t('canadaFunding.subtitle')}
            </p>
          </header>

          <section className="mb-10 md:mb-16">
            <div className="bg-warm-card border border-warm-sand rounded-luxury p-6 md:p-8 lg:p-12 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center bg-warm-linen rounded-luxury">
                <span className="text-xl md:text-2xl">🍁</span>
              </div>
              <h2 className="font-display text-xl md:text-2xl text-luxury-black font-medium tracking-wide mb-3 md:mb-4">
                {t('canadaFunding.comingSoon')}
              </h2>
              <p className="text-luxury-gray text-sm md:text-base font-light max-w-lg mx-auto mb-6 md:mb-8">
                {t('canadaFunding.comingSoonDesc')}
              </p>
              <a
                href="mailto:support@Whisper2Owner.com"
                className="text-luxury-black text-xs md:text-sm tracking-wide uppercase border-b border-luxury-black
                           hover:text-luxury-gray hover:border-luxury-gray transition-colors duration-200"
              >
                {t('canadaFunding.getNotified')}
              </a>
            </div>
          </section>

          <section className="text-center">
            <p className="text-luxury-gray-light text-xs md:text-sm">
              {t('canadaFunding.questions')}
            </p>
            <a
              href="mailto:support@Whisper2Owner.com"
              className="text-luxury-black text-xs md:text-sm tracking-wide inline-block mt-2
                         hover:text-luxury-gray transition-colors duration-200"
            >
              support@Whisper2Owner.com
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
