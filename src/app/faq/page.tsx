'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function FAQPage() {
  const { t } = useLanguage();

  const faqs = [
    { questionKey: 'faq.q1', answerKey: 'faq.a1' },
    { questionKey: 'faq.q2', answerKey: 'faq.a2' },
    { questionKey: 'faq.q3', answerKey: 'faq.a3' },
    { questionKey: 'faq.q4', answerKey: 'faq.a4' },
    { questionKey: 'faq.q5', answerKey: 'faq.a5' },
  ];

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10 md:mb-16 text-center">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-luxury-black font-light tracking-wide mb-4 md:mb-6">
              {t('faq.title')}
            </h1>
            <p className="text-luxury-gray text-sm md:text-lg font-light">
              {t('faq.subtitle')}
            </p>
          </header>

          <section className="space-y-4 md:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-4 md:p-6 bg-warm-card border border-warm-sand rounded-luxury"
              >
                <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2 md:mb-3">
                  {t(faq.questionKey)}
                </h3>
                <p className="text-luxury-gray text-xs md:text-sm font-light leading-relaxed">
                  {t(faq.answerKey)}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-10 md:mt-16 text-center">
            <p className="text-luxury-gray text-xs md:text-sm mb-4">
              {t('faq.moreQuestions')}
            </p>
            <a
              href="mailto:support@Whisper2Owner.com"
              className="btn-secondary inline-block text-xs md:text-sm"
            >
              {t('faq.contactSupport')}
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
