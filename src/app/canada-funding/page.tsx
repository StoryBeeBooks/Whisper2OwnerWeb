'use client';

import { DollarSign, Building, Landmark, MapPin, Factory, Cpu, Leaf, ShoppingBag, Briefcase, GraduationCap, Heart, Truck, ExternalLink } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const VIDEO_URL = 'https://assets.k12path.com/whisper2owner/wheat%20field.mp4';

export default function CanadaFundingPage() {
  const { t } = useLanguage();

  const stats = [
    { value: '$5B+', labelKey: 'funding.stat.annual' },
    { value: '1,500+', labelKey: 'funding.stat.programs' },
    { value: '40%', labelKey: 'funding.stat.srnd' },
    { value: '75%', labelKey: 'funding.stat.wage' },
  ];

  const federalPrograms = [
    { nameKey: 'funding.federal.srnd', descKey: 'funding.federal.srnd.desc', amount: '$3B+/year' },
    { nameKey: 'funding.federal.irap', descKey: 'funding.federal.irap.desc', amount: 'Up to $1M' },
    { nameKey: 'funding.federal.canexport', descKey: 'funding.federal.canexport.desc', amount: 'Up to $75K' },
    { nameKey: 'funding.federal.swp', descKey: 'funding.federal.swp.desc', amount: 'Up to $7K/intern' },
    { nameKey: 'funding.federal.futurpreneur', descKey: 'funding.federal.futurpreneur.desc', amount: 'Up to $60K' },
    { nameKey: 'funding.federal.wes', descKey: 'funding.federal.wes.desc', amount: 'Up to $100K' },
  ];

  const provincialPrograms = [
    { nameKey: 'funding.provincial.oitc', descKey: 'funding.provincial.oitc.desc', region: 'Ontario' },
    { nameKey: 'funding.provincial.oidmtc', descKey: 'funding.provincial.oidmtc.desc', region: 'Ontario' },
    { nameKey: 'funding.provincial.bctech', descKey: 'funding.provincial.bctech.desc', region: 'British Columbia' },
    { nameKey: 'funding.provincial.alberta', descKey: 'funding.provincial.alberta.desc', region: 'Alberta' },
    { nameKey: 'funding.provincial.quebec', descKey: 'funding.provincial.quebec.desc', region: 'Quebec' },
    { nameKey: 'funding.provincial.novascotia', descKey: 'funding.provincial.novascotia.desc', region: 'Nova Scotia' },
  ];

  const municipalPrograms = [
    { nameKey: 'funding.municipal.toronto', descKey: 'funding.municipal.toronto.desc', city: 'Toronto' },
    { nameKey: 'funding.municipal.vancouver', descKey: 'funding.municipal.vancouver.desc', city: 'Vancouver' },
    { nameKey: 'funding.municipal.calgary', descKey: 'funding.municipal.calgary.desc', city: 'Calgary' },
    { nameKey: 'funding.municipal.montreal', descKey: 'funding.municipal.montreal.desc', city: 'Montreal' },
  ];

  const industryCategories = [
    { icon: Cpu, nameKey: 'funding.industry.tech', programsKey: 'funding.industry.tech.programs' },
    { icon: Factory, nameKey: 'funding.industry.manufacturing', programsKey: 'funding.industry.manufacturing.programs' },
    { icon: Leaf, nameKey: 'funding.industry.cleantech', programsKey: 'funding.industry.cleantech.programs' },
    { icon: ShoppingBag, nameKey: 'funding.industry.retail', programsKey: 'funding.industry.retail.programs' },
    { icon: Heart, nameKey: 'funding.industry.healthcare', programsKey: 'funding.industry.healthcare.programs' },
    { icon: Truck, nameKey: 'funding.industry.agrifood', programsKey: 'funding.industry.agrifood.programs' },
    { icon: GraduationCap, nameKey: 'funding.industry.education', programsKey: 'funding.industry.education.programs' },
    { icon: Briefcase, nameKey: 'funding.industry.professional', programsKey: 'funding.industry.professional.programs' },
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
              {t('canadaFunding.title')}
            </h1>
            <p 
              className="text-white/90 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
            >
              {t('canadaFunding.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      <main className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Stats Section */}
          <section className="mb-16 md:mb-24">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-luxury-black font-light tracking-wide mb-4">
                {t('funding.statsTitle')}
              </h2>
              <p className="text-luxury-gray text-base md:text-lg font-light max-w-3xl mx-auto">
                {t('funding.statsDesc')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat) => (
                <div key={stat.labelKey} className="bg-luxury-black rounded-luxury p-6 md:p-8 text-center">
                  <div className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-light mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-xs md:text-sm font-light">
                    {t(stat.labelKey)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Federal Programs */}
          <section className="mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                <Landmark strokeWidth={1} className="w-6 h-6 text-red-700" />
              </div>
              <div>
                <h2 className="font-display text-xl md:text-2xl text-luxury-black font-medium">
                  {t('funding.federal.title')}
                </h2>
                <p className="text-luxury-gray text-sm font-light">{t('funding.federal.subtitle')}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {federalPrograms.map((program) => (
                <div
                  key={program.nameKey}
                  className="p-5 md:p-6 bg-gradient-to-br from-red-50/50 to-warm-card border border-warm-sand rounded-luxury
                             hover:border-red-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display text-base md:text-lg text-luxury-black font-medium pr-4">
                      {t(program.nameKey)}
                    </h3>
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded whitespace-nowrap">
                      {program.amount}
                    </span>
                  </div>
                  <p className="text-luxury-gray text-sm font-light leading-relaxed">
                    {t(program.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Provincial Programs */}
          <section className="mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Building strokeWidth={1} className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h2 className="font-display text-xl md:text-2xl text-luxury-black font-medium">
                  {t('funding.provincial.title')}
                </h2>
                <p className="text-luxury-gray text-sm font-light">{t('funding.provincial.subtitle')}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {provincialPrograms.map((program) => (
                <div
                  key={program.nameKey}
                  className="p-5 md:p-6 bg-gradient-to-br from-blue-50/50 to-warm-card border border-warm-sand rounded-luxury
                             hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                      {program.region}
                    </span>
                  </div>
                  <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2">
                    {t(program.nameKey)}
                  </h3>
                  <p className="text-luxury-gray text-sm font-light leading-relaxed">
                    {t(program.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Municipal Programs */}
          <section className="mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                <MapPin strokeWidth={1} className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <h2 className="font-display text-xl md:text-2xl text-luxury-black font-medium">
                  {t('funding.municipal.title')}
                </h2>
                <p className="text-luxury-gray text-sm font-light">{t('funding.municipal.subtitle')}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {municipalPrograms.map((program) => (
                <div
                  key={program.nameKey}
                  className="p-5 md:p-6 bg-gradient-to-br from-emerald-50/50 to-warm-card border border-warm-sand rounded-luxury
                             hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin strokeWidth={1.5} className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 text-sm font-medium">
                      {program.city}
                    </span>
                  </div>
                  <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2">
                    {t(program.nameKey)}
                  </h3>
                  <p className="text-luxury-gray text-sm font-light leading-relaxed">
                    {t(program.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Industry Categories */}
          <section className="mb-16 md:mb-24">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-display text-xl md:text-2xl text-luxury-black font-medium tracking-wide mb-4 uppercase">
                {t('funding.industryTitle')}
              </h2>
              <p className="text-luxury-gray text-sm md:text-base font-light max-w-2xl mx-auto">
                {t('funding.industryDesc')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {industryCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={category.nameKey}
                    className="p-5 md:p-6 bg-warm-card border border-warm-sand rounded-luxury
                               hover:border-luxury-black hover:shadow-luxury transition-all duration-300"
                  >
                    <IconComponent strokeWidth={1} className="w-8 h-8 text-luxury-black/70 mb-4" />
                    <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2">
                      {t(category.nameKey)}
                    </h3>
                    <p className="text-luxury-gray text-xs md:text-sm font-light leading-relaxed">
                      {t(category.programsKey)}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* How We Help */}
          <section className="mb-16 md:mb-24 bg-slate-50 rounded-luxury p-8 md:p-12">
            <h2 className="font-display text-xl md:text-2xl text-luxury-black font-medium tracking-wide mb-8 text-center uppercase">
              {t('funding.helpTitle')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-luxury-black rounded-full flex items-center justify-center text-white font-display text-xl">
                  1
                </div>
                <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2">
                  {t('funding.help.assess')}
                </h3>
                <p className="text-luxury-gray text-sm font-light">
                  {t('funding.help.assess.desc')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-luxury-black rounded-full flex items-center justify-center text-white font-display text-xl">
                  2
                </div>
                <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2">
                  {t('funding.help.match')}
                </h3>
                <p className="text-luxury-gray text-sm font-light">
                  {t('funding.help.match.desc')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-luxury-black rounded-full flex items-center justify-center text-white font-display text-xl">
                  3
                </div>
                <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2">
                  {t('funding.help.apply')}
                </h3>
                <p className="text-luxury-gray text-sm font-light">
                  {t('funding.help.apply.desc')}
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-br from-luxury-black to-slate-800 rounded-luxury p-10 md:p-14">
            <DollarSign strokeWidth={1} className="w-12 h-12 text-white/80 mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl text-white font-light tracking-wide mb-4">
              {t('funding.ctaTitle')}
            </h2>
            <p className="text-white/80 text-sm md:text-base font-light max-w-2xl mx-auto mb-8">
              {t('funding.ctaDesc')}
            </p>
            <a
              href="mailto:support@Whisper2Owner.com"
              className="inline-block px-8 py-3 bg-white text-luxury-black text-sm md:text-base font-medium rounded-luxury
                         hover:bg-warm-sand transition-colors duration-300"
            >
              {t('funding.ctaButton')}
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
