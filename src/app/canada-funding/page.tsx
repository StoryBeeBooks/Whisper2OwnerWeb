'use client';

import { DollarSign, Building, Landmark, MapPin, Factory, Cpu, Leaf, ShoppingBag, Briefcase, GraduationCap, Heart, Truck, ExternalLink, Timer, FileQuestion, Layers, Target, Search, CheckCircle, FileText, Lightbulb, Award, Clock, Handshake, TrendingUp, Users } from 'lucide-react';
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

  const painPoints = [
    { icon: Timer, titleKey: 'funding.pain.time', descKey: 'funding.pain.time.desc' },
    { icon: Layers, titleKey: 'funding.pain.complexity', descKey: 'funding.pain.complexity.desc' },
    { icon: FileQuestion, titleKey: 'funding.pain.eligibility', descKey: 'funding.pain.eligibility.desc' },
    { icon: Target, titleKey: 'funding.pain.opportunity', descKey: 'funding.pain.opportunity.desc' },
  ];

  const services = [
    { 
      icon: Search, 
      titleKey: 'funding.service.discovery', 
      subtitleKey: 'funding.service.discovery.subtitle',
      descKey: 'funding.service.discovery.desc',
      features: ['funding.service.discovery.f1', 'funding.service.discovery.f2', 'funding.service.discovery.f3', 'funding.service.discovery.f4'],
      painSolvedKey: 'funding.service.discovery.solve'
    },
    { 
      icon: CheckCircle, 
      titleKey: 'funding.service.eligibility', 
      subtitleKey: 'funding.service.eligibility.subtitle',
      descKey: 'funding.service.eligibility.desc',
      features: ['funding.service.eligibility.f1', 'funding.service.eligibility.f2', 'funding.service.eligibility.f3', 'funding.service.eligibility.f4'],
      painSolvedKey: 'funding.service.eligibility.solve'
    },
    { 
      icon: FileText, 
      titleKey: 'funding.service.application', 
      subtitleKey: 'funding.service.application.subtitle',
      descKey: 'funding.service.application.desc',
      features: ['funding.service.application.f1', 'funding.service.application.f2', 'funding.service.application.f3', 'funding.service.application.f4'],
      painSolvedKey: 'funding.service.application.solve'
    },
    { 
      icon: TrendingUp, 
      titleKey: 'funding.service.ongoing', 
      subtitleKey: 'funding.service.ongoing.subtitle',
      descKey: 'funding.service.ongoing.desc',
      features: ['funding.service.ongoing.f1', 'funding.service.ongoing.f2', 'funding.service.ongoing.f3', 'funding.service.ongoing.f4'],
      painSolvedKey: 'funding.service.ongoing.solve'
    },
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

          {/* Pain Points Section - The Reality for Small Businesses */}
          <section className="mb-16 md:mb-24">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-luxury-black font-light tracking-wide mb-4">
                {t('funding.painTitle')}
              </h2>
              <p className="text-luxury-gray text-sm md:text-base font-light max-w-3xl mx-auto">
                {t('funding.painSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {painPoints.map((pain) => {
                const IconComponent = pain.icon;
                return (
                  <div
                    key={pain.titleKey}
                    className="p-6 md:p-8 bg-gradient-to-br from-amber-50/30 to-warm-card border border-amber-100/50 rounded-luxury"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent strokeWidth={1} className="w-6 h-6 text-amber-700" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg md:text-xl text-luxury-black font-medium mb-2">
                          {t(pain.titleKey)}
                        </h3>
                        <p className="text-luxury-gray text-sm md:text-base font-light leading-relaxed">
                          {t(pain.descKey)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Our Services - Detailed Solutions */}
          <section className="mb-16 md:mb-24">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-luxury-black font-light tracking-wide mb-4 uppercase">
                {t('funding.servicesTitle')}
              </h2>
              <p className="text-luxury-gray text-sm md:text-base font-light max-w-3xl mx-auto">
                {t('funding.servicesSubtitle')}
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={service.titleKey}
                    className={`p-6 md:p-10 bg-gradient-to-br ${isEven ? 'from-emerald-50/50 to-warm-card' : 'from-blue-50/50 to-warm-card'} border border-warm-sand rounded-luxury`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
                      {/* Service Header */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-14 h-14 ${isEven ? 'bg-emerald-100' : 'bg-blue-100'} rounded-full flex items-center justify-center`}>
                            <IconComponent strokeWidth={1} className={`w-7 h-7 ${isEven ? 'text-emerald-700' : 'text-blue-700'}`} />
                          </div>
                          <div>
                            <span className={`text-xs font-medium ${isEven ? 'text-emerald-600' : 'text-blue-600'} uppercase tracking-wider`}>
                              {t('funding.service.label')} {index + 1}
                            </span>
                          </div>
                        </div>
                        <h3 className="font-display text-xl md:text-2xl text-luxury-black font-medium mb-2">
                          {t(service.titleKey)}
                        </h3>
                        <p className={`text-sm ${isEven ? 'text-emerald-700' : 'text-blue-700'} font-medium mb-4`}>
                          {t(service.subtitleKey)}
                        </p>
                        <p className="text-luxury-gray text-sm md:text-base font-light leading-relaxed">
                          {t(service.descKey)}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="lg:col-span-1">
                        <h4 className="text-sm font-medium text-luxury-black uppercase tracking-wider mb-4">
                          {t('funding.service.whatWeDeliver')}
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <CheckCircle strokeWidth={1.5} className={`w-5 h-5 ${isEven ? 'text-emerald-600' : 'text-blue-600'} flex-shrink-0 mt-0.5`} />
                              <span className="text-luxury-gray text-sm font-light">{t(feature)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pain Solved */}
                      <div className="lg:col-span-1">
                        <div className={`p-5 ${isEven ? 'bg-emerald-100/50' : 'bg-blue-100/50'} rounded-lg`}>
                          <h4 className="text-sm font-medium text-luxury-black uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Lightbulb strokeWidth={1.5} className="w-4 h-4" />
                            {t('funding.service.howItHelps')}
                          </h4>
                          <p className={`text-sm ${isEven ? 'text-emerald-800' : 'text-blue-800'} font-light leading-relaxed`}>
                            {t(service.painSolvedKey)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Partnership Model Banner */}
          <section className="mb-16 md:mb-24 bg-gradient-to-r from-luxury-black to-slate-800 rounded-luxury p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="font-display text-2xl md:text-3xl text-white font-light tracking-wide mb-4">
                  {t('funding.partnerTitle')}
                </h2>
                <p className="text-white/80 text-sm md:text-base font-light leading-relaxed mb-4">
                  {t('funding.partnerDesc')}
                </p>
                <p className="text-white/80 text-sm md:text-base font-light leading-relaxed">
                  {t('funding.partnerDesc2')}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Handshake strokeWidth={1} className="w-8 h-8 text-emerald-400" />
                  <div>
                    <div className="text-white font-medium">{t('funding.partner.shared')}</div>
                    <div className="text-white/60 text-sm">{t('funding.partner.shared.desc')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award strokeWidth={1} className="w-8 h-8 text-amber-400" />
                  <div>
                    <div className="text-white font-medium">{t('funding.partner.success')}</div>
                    <div className="text-white/60 text-sm">{t('funding.partner.success.desc')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users strokeWidth={1} className="w-8 h-8 text-blue-400" />
                  <div>
                    <div className="text-white font-medium">{t('funding.partner.dedicated')}</div>
                    <div className="text-white/60 text-sm">{t('funding.partner.dedicated.desc')}</div>
                  </div>
                </div>
              </div>
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
              href="mailto:mario.xu@wtheory.com"
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
