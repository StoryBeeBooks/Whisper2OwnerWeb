'use client';

import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const VIDEO_URL = 'https://assets.k12path.com/whisper2owner/main2%20delivery.mp4';

export default function SalesNetworkPage() {
  const { t } = useLanguage();

  const salesChannels = [
    { nameKey: 'salesNetwork.channel.amazon', descKey: 'salesNetwork.channel.amazon.desc', icon: '🛒' },
    { nameKey: 'salesNetwork.channel.shopify', descKey: 'salesNetwork.channel.shopify.desc', icon: '🏪' },
    { nameKey: 'salesNetwork.channel.retail', descKey: 'salesNetwork.channel.retail.desc', icon: '🏬' },
    { nameKey: 'salesNetwork.channel.wholesale', descKey: 'salesNetwork.channel.wholesale.desc', icon: '📦' },
    { nameKey: 'salesNetwork.channel.marketplace', descKey: 'salesNetwork.channel.marketplace.desc', icon: '🌐' },
    { nameKey: 'salesNetwork.channel.directSales', descKey: 'salesNetwork.channel.directSales.desc', icon: '🤝' },
  ];

  const capabilities = [
    { titleKey: 'salesNetwork.capability.market', descKey: 'salesNetwork.capability.market.desc' },
    { titleKey: 'salesNetwork.capability.channel', descKey: 'salesNetwork.capability.channel.desc' },
    { titleKey: 'salesNetwork.capability.brand', descKey: 'salesNetwork.capability.brand.desc' },
    { titleKey: 'salesNetwork.capability.operations', descKey: 'salesNetwork.capability.operations.desc' },
  ];

  const industries = [
    'salesNetwork.industry.food',
    'salesNetwork.industry.beauty',
    'salesNetwork.industry.health',
    'salesNetwork.industry.home',
    'salesNetwork.industry.fashion',
    'salesNetwork.industry.electronics',
    'salesNetwork.industry.sports',
    'salesNetwork.industry.pet',
  ];

  return (
    <div className="bg-warm-white">
      <Navigation />
      
      {/* Hero Section with Video Background */}
      <section className="relative h-[calc(100vh-52px)] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% via-black/50 via-70% to-black/80 to-100%" />
        
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
      
      <main className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Value Proposition */}
          <section className="mb-16 md:mb-24 text-center">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-luxury-black font-light tracking-wide mb-6">
              {t('salesNetwork.valueTitle')}
            </h2>
            <p className="text-luxury-gray text-base md:text-lg font-light max-w-3xl mx-auto leading-relaxed">
              {t('salesNetwork.valueDesc')}
            </p>
          </section>

          {/* Core Capabilities */}
          <section className="mb-16 md:mb-24">
            <h2 className="font-display text-lg md:text-2xl text-luxury-black font-medium tracking-wide mb-8 md:mb-12 text-center uppercase">
              {t('salesNetwork.capabilitiesTitle')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {capabilities.map((cap, index) => (
                <div
                  key={cap.titleKey}
                  className="p-6 md:p-8 bg-gradient-to-br from-warm-card to-warm-white border border-warm-sand rounded-luxury"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl md:text-3xl font-display text-luxury-black/20 font-light">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg md:text-xl text-luxury-black font-medium mb-3">
                        {t(cap.titleKey)}
                      </h3>
                      <p className="text-luxury-gray text-sm md:text-base font-light leading-relaxed">
                        {t(cap.descKey)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sales Channels */}
          <section className="mb-16 md:mb-24">
            <h2 className="font-display text-lg md:text-2xl text-luxury-black font-medium tracking-wide mb-8 md:mb-12 text-center uppercase">
              {t('salesNetwork.channelsTitle')}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {salesChannels.map((channel) => (
                <div
                  key={channel.nameKey}
                  className="p-4 md:p-6 bg-warm-card border border-warm-sand rounded-luxury
                             hover:border-luxury-black hover:shadow-luxury transition-all duration-300 text-center"
                >
                  <span className="text-3xl md:text-4xl mb-3 block">{channel.icon}</span>
                  <h3 className="font-display text-sm md:text-base text-luxury-black font-medium mb-1 md:mb-2">
                    {t(channel.nameKey)}
                  </h3>
                  <p className="text-luxury-gray text-xs md:text-sm font-light">
                    {t(channel.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Industries We Serve */}
          <section className="mb-16 md:mb-24 bg-luxury-black rounded-luxury p-8 md:p-12">
            <h2 className="font-display text-lg md:text-2xl text-white font-medium tracking-wide mb-6 md:mb-8 text-center uppercase">
              {t('salesNetwork.industriesTitle')}
            </h2>
            <p className="text-white/70 text-sm md:text-base font-light text-center max-w-2xl mx-auto mb-8">
              {t('salesNetwork.industriesDesc')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-xs md:text-sm font-light"
                >
                  {t(industry)}
                </span>
              ))}
            </div>
          </section>

          {/* Strategic Partners Section */}
          <section className="mb-16 md:mb-24">
            <h2 className="font-display text-lg md:text-2xl text-luxury-black font-medium tracking-wide mb-4 text-center uppercase">
              {t('salesNetwork.partnersTitle')}
            </h2>
            <p className="text-luxury-gray text-sm md:text-base font-light text-center max-w-3xl mx-auto mb-10 md:mb-14">
              {t('salesNetwork.partnersSubtitle')}
            </p>
            
            {/* NRIDL Partner */}
            <div className="mb-10 md:mb-14 p-6 md:p-10 bg-gradient-to-r from-slate-50 to-warm-card border border-warm-sand rounded-luxury">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 items-center">
                <div className="lg:col-span-1 flex justify-center">
                  <a href="https://www.nridl.org" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src="https://www.nridl.org/img/nridl.png"
                        alt="NRIDL - Digital Transformation Consulting"
                        width={200}
                        height={80}
                        className="w-auto h-16 md:h-20 object-contain"
                      />
                    </div>
                  </a>
                </div>
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-display text-xl md:text-2xl text-luxury-black font-medium">
                      {t('salesNetwork.nridl.title')}
                    </h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                      {t('salesNetwork.nridl.type')}
                    </span>
                  </div>
                  <p className="text-luxury-gray text-sm md:text-base font-light leading-relaxed mb-4">
                    {t('salesNetwork.nridl.desc')}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">{t('salesNetwork.nridl.tag1')}</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">{t('salesNetwork.nridl.tag2')}</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">{t('salesNetwork.nridl.tag3')}</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">{t('salesNetwork.nridl.tag4')}</span>
                  </div>
                  <a 
                    href="https://www.nridl.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-luxury-black text-sm font-medium hover:underline inline-flex items-center gap-1"
                  >
                    www.nridl.org
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* WTheory Partner */}
            <div className="p-6 md:p-10 bg-gradient-to-r from-warm-card to-slate-50 border border-warm-sand rounded-luxury">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 items-center">
                <div className="lg:col-span-1 flex justify-center lg:order-last">
                  <a href="https://www.wtheory.com" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src="https://www.wtheory.com/img/logo.png"
                        alt="WTheory - Technology Implementation Partner"
                        width={200}
                        height={80}
                        className="w-auto h-16 md:h-20 object-contain"
                      />
                    </div>
                  </a>
                </div>
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-display text-xl md:text-2xl text-luxury-black font-medium">
                      {t('salesNetwork.wtheory.title')}
                    </h3>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded">
                      {t('salesNetwork.wtheory.type')}
                    </span>
                  </div>
                  <p className="text-luxury-gray text-sm md:text-base font-light leading-relaxed mb-4">
                    {t('salesNetwork.wtheory.desc')}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">{t('salesNetwork.wtheory.tag1')}</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">{t('salesNetwork.wtheory.tag2')}</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">{t('salesNetwork.wtheory.tag3')}</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">{t('salesNetwork.wtheory.tag4')}</span>
                  </div>
                  <a 
                    href="https://www.wtheory.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-luxury-black text-sm font-medium hover:underline inline-flex items-center gap-1"
                  >
                    www.wtheory.com
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16 md:mb-24">
            <h2 className="font-display text-lg md:text-2xl text-luxury-black font-medium tracking-wide mb-8 md:mb-12 text-center uppercase">
              {t('salesNetwork.whyUsTitle')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-luxury-black rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2">
                  {t('salesNetwork.whyUs.results')}
                </h3>
                <p className="text-luxury-gray text-sm font-light">
                  {t('salesNetwork.whyUs.results.desc')}
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-luxury-black rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2">
                  {t('salesNetwork.whyUs.speed')}
                </h3>
                <p className="text-luxury-gray text-sm font-light">
                  {t('salesNetwork.whyUs.speed.desc')}
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-luxury-black rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🌍</span>
                </div>
                <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2">
                  {t('salesNetwork.whyUs.reach')}
                </h3>
                <p className="text-luxury-gray text-sm font-light">
                  {t('salesNetwork.whyUs.reach.desc')}
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-br from-luxury-black to-slate-800 rounded-luxury p-10 md:p-14">
            <h2 className="font-display text-2xl md:text-3xl text-white font-light tracking-wide mb-4">
              {t('salesNetwork.ctaTitle')}
            </h2>
            <p className="text-white/80 text-sm md:text-base font-light max-w-2xl mx-auto mb-8">
              {t('salesNetwork.ctaDesc')}
            </p>
            <a
              href="mailto:support@Whisper2Owner.com"
              className="inline-block px-8 py-3 bg-white text-luxury-black text-sm md:text-base font-medium rounded-luxury
                         hover:bg-warm-sand transition-colors duration-300"
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
