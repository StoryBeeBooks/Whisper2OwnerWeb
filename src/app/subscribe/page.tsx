'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function SubscribePage() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      
      <main className="bg-warm-white">
      {/* Hero Section */}
      <section className="pt-24 md:pt-28 pb-12 px-4 md:px-6 bg-gradient-to-b from-white to-warm-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-light text-luxury-black mb-6 tracking-tight">
            {t('subscribe.title')}
          </h1>
          <p className="text-base md:text-lg text-luxury-gray leading-relaxed mb-4">
            {t('subscribe.description')}
          </p>
          <p className="text-sm text-luxury-gray-light">
            {t('subscribe.benefits')}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-xl mx-auto">
          {isSuccess ? (
            <div className="bg-white border border-warm-sand rounded-luxury p-8 text-center">
              <div className="text-5xl mb-4">✓</div>
              <h2 className="text-2xl font-light text-luxury-black mb-3">
                {t('subscribe.successTitle')}
              </h2>
              <p className="text-luxury-gray mb-6">
                {t('subscribe.successMessage')}
              </p>
              <Link
                href="/"
                className="btn-primary inline-block"
              >
                {t('subscribe.backHome')}
              </Link>
            </div>
          ) : (
            <div className="bg-white border border-warm-sand rounded-luxury p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input 
                  type="hidden" 
                  name="access_key" 
                  value="e7c7a1b1-5333-4bcf-a01f-d037c904b6dc"
                />

                {/* Name Field */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-luxury-black mb-2 uppercase tracking-wide"
                  >
                    {t('subscribe.nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-warm-sand rounded-luxury bg-warm-white 
                             focus:outline-none focus:border-luxury-gray transition-colors duration-200
                             text-luxury-black placeholder:text-luxury-gray-light"
                    placeholder={t('subscribe.namePlaceholder')}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-luxury-black mb-2 uppercase tracking-wide"
                  >
                    {t('subscribe.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-warm-sand rounded-luxury bg-warm-white 
                             focus:outline-none focus:border-luxury-gray transition-colors duration-200
                             text-luxury-black placeholder:text-luxury-gray-light"
                    placeholder={t('subscribe.emailPlaceholder')}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('subscribe.submitting') : t('subscribe.submitButton')}
                </button>

                {/* Policy Notice */}
                <p className="text-xs text-luxury-gray-light text-center leading-relaxed">
                  {t('subscribe.policyNotice')}{' '}
                  <Link 
                    href="/policies" 
                    className="text-luxury-gray hover:text-luxury-black underline transition-colors"
                  >
                    {t('subscribe.policiesLink')}
                  </Link>
                  .
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 px-4 md:px-6 bg-gradient-to-b from-warm-white to-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light text-luxury-black mb-8 text-center tracking-tight">
            {t('subscribe.whatYouGetTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-warm-sand rounded-luxury p-6">
              <h3 className="text-lg font-medium text-luxury-black mb-3 uppercase tracking-wide">
                {t('subscribe.benefit1Title')}
              </h3>
              <p className="text-sm text-luxury-gray leading-relaxed">
                {t('subscribe.benefit1Desc')}
              </p>
            </div>
            <div className="bg-white border border-warm-sand rounded-luxury p-6">
              <h3 className="text-lg font-medium text-luxury-black mb-3 uppercase tracking-wide">
                {t('subscribe.benefit2Title')}
              </h3>
              <p className="text-sm text-luxury-gray leading-relaxed">
                {t('subscribe.benefit2Desc')}
              </p>
            </div>
            <div className="bg-white border border-warm-sand rounded-luxury p-6">
              <h3 className="text-lg font-medium text-luxury-black mb-3 uppercase tracking-wide">
                {t('subscribe.benefit3Title')}
              </h3>
              <p className="text-sm text-luxury-gray leading-relaxed">
                {t('subscribe.benefit3Desc')}
              </p>
            </div>
            <div className="bg-white border border-warm-sand rounded-luxury p-6">
              <h3 className="text-lg font-medium text-luxury-black mb-3 uppercase tracking-wide">
                {t('subscribe.benefit4Title')}
              </h3>
              <p className="text-sm text-luxury-gray leading-relaxed">
                {t('subscribe.benefit4Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
    </div>
  );
}
