'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PoliciesContent } from './_components/PoliciesContent';
import { useLanguage } from '@/context/LanguageContext';

export default function PoliciesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8 md:mb-12 text-center">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-luxury-black font-light tracking-wide uppercase mb-2 md:mb-3">
              {t('policies.title')}
            </h1>
          </header>

          {/* Tabbed Content */}
          <PoliciesContent />
        </div>
      </main>

      <Footer />
    </div>
  );
}
