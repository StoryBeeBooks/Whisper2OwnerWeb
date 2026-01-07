'use client';

import { FileText, Search, CheckCircle, Clock, Landmark, Building, MapPin, Shield, Truck, Cpu, HardHat, Stethoscope, GraduationCap, Utensils, ExternalLink, ArrowRight, AlertTriangle, Target, TrendingUp, Users, Lightbulb, Eye, ClipboardCheck, FileCheck, Award, Timer, Layers, Filter, BookOpen, Headphones } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const VIDEO_URL = 'https://assets.k12path.com/whisper2owner/main1.mp4';

export default function TenderOpportunitiesPage() {
  const { t } = useLanguage();

  const stats = [
    { value: '$200B+', labelKey: 'tender.stat.annual' },
    { value: '15,000+', labelKey: 'tender.stat.contracts' },
    { value: '30%', labelKey: 'tender.stat.sme' },
    { value: '45 Days', labelKey: 'tender.stat.avgTime' },
  ];

  const painPoints = [
    { icon: Timer, titleKey: 'tender.pain.time', descKey: 'tender.pain.time.desc' },
    { icon: Layers, titleKey: 'tender.pain.overwhelming', descKey: 'tender.pain.overwhelming.desc' },
    { icon: FileCheck, titleKey: 'tender.pain.complexity', descKey: 'tender.pain.complexity.desc' },
    { icon: Target, titleKey: 'tender.pain.relevance', descKey: 'tender.pain.relevance.desc' },
  ];

  const services = [
    { 
      icon: Eye, 
      titleKey: 'tender.service.monitoring', 
      subtitleKey: 'tender.service.monitoring.subtitle',
      descKey: 'tender.service.monitoring.desc',
      features: ['tender.service.monitoring.f1', 'tender.service.monitoring.f2', 'tender.service.monitoring.f3', 'tender.service.monitoring.f4'],
      painSolvedKey: 'tender.service.monitoring.solve'
    },
    { 
      icon: Filter, 
      titleKey: 'tender.service.matching', 
      subtitleKey: 'tender.service.matching.subtitle',
      descKey: 'tender.service.matching.desc',
      features: ['tender.service.matching.f1', 'tender.service.matching.f2', 'tender.service.matching.f3', 'tender.service.matching.f4'],
      painSolvedKey: 'tender.service.matching.solve'
    },
    { 
      icon: ClipboardCheck, 
      titleKey: 'tender.service.qualification', 
      subtitleKey: 'tender.service.qualification.subtitle',
      descKey: 'tender.service.qualification.desc',
      features: ['tender.service.qualification.f1', 'tender.service.qualification.f2', 'tender.service.qualification.f3', 'tender.service.qualification.f4'],
      painSolvedKey: 'tender.service.qualification.solve'
    },
    { 
      icon: BookOpen, 
      titleKey: 'tender.service.bidprep', 
      subtitleKey: 'tender.service.bidprep.subtitle',
      descKey: 'tender.service.bidprep.desc',
      features: ['tender.service.bidprep.f1', 'tender.service.bidprep.f2', 'tender.service.bidprep.f3', 'tender.service.bidprep.f4'],
      painSolvedKey: 'tender.service.bidprep.solve'
    },
  ];

  const processSteps = [
    { icon: Search, stepKey: 'tender.process.find', descKey: 'tender.process.find.desc' },
    { icon: FileText, stepKey: 'tender.process.qualify', descKey: 'tender.process.qualify.desc' },
    { icon: Clock, stepKey: 'tender.process.prepare', descKey: 'tender.process.prepare.desc' },
    { icon: CheckCircle, stepKey: 'tender.process.submit', descKey: 'tender.process.submit.desc' },
  ];

  const federalSources = [
    { nameKey: 'tender.federal.buyandsell', descKey: 'tender.federal.buyandsell.desc', url: 'buyandsell.gc.ca' },
    { nameKey: 'tender.federal.merx', descKey: 'tender.federal.merx.desc', url: 'merx.com' },
    { nameKey: 'tender.federal.pspc', descKey: 'tender.federal.pspc.desc', url: 'tpsgc-pwgsc.gc.ca' },
    { nameKey: 'tender.federal.sao', descKey: 'tender.federal.sao.desc', url: 'canada.ca/standing-offers' },
  ];

  const provincialSources = [
    { nameKey: 'tender.provincial.ontario', descKey: 'tender.provincial.ontario.desc', region: 'Ontario' },
    { nameKey: 'tender.provincial.bc', descKey: 'tender.provincial.bc.desc', region: 'British Columbia' },
    { nameKey: 'tender.provincial.alberta', descKey: 'tender.provincial.alberta.desc', region: 'Alberta' },
    { nameKey: 'tender.provincial.quebec', descKey: 'tender.provincial.quebec.desc', region: 'Quebec' },
    { nameKey: 'tender.provincial.manitoba', descKey: 'tender.provincial.manitoba.desc', region: 'Manitoba' },
    { nameKey: 'tender.provincial.saskatchewan', descKey: 'tender.provincial.saskatchewan.desc', region: 'Saskatchewan' },
  ];

  const municipalSources = [
    { nameKey: 'tender.municipal.toronto', descKey: 'tender.municipal.toronto.desc', city: 'Toronto' },
    { nameKey: 'tender.municipal.vancouver', descKey: 'tender.municipal.vancouver.desc', city: 'Vancouver' },
    { nameKey: 'tender.municipal.calgary', descKey: 'tender.municipal.calgary.desc', city: 'Calgary' },
    { nameKey: 'tender.municipal.ottawa', descKey: 'tender.municipal.ottawa.desc', city: 'Ottawa' },
    { nameKey: 'tender.municipal.montreal', descKey: 'tender.municipal.montreal.desc', city: 'Montreal' },
    { nameKey: 'tender.municipal.edmonton', descKey: 'tender.municipal.edmonton.desc', city: 'Edmonton' },
  ];

  const tenderCategories = [
    { icon: Cpu, nameKey: 'tender.category.it', descKey: 'tender.category.it.desc' },
    { icon: HardHat, nameKey: 'tender.category.construction', descKey: 'tender.category.construction.desc' },
    { icon: Stethoscope, nameKey: 'tender.category.health', descKey: 'tender.category.health.desc' },
    { icon: Shield, nameKey: 'tender.category.security', descKey: 'tender.category.security.desc' },
    { icon: Truck, nameKey: 'tender.category.logistics', descKey: 'tender.category.logistics.desc' },
    { icon: GraduationCap, nameKey: 'tender.category.professional', descKey: 'tender.category.professional.desc' },
    { icon: Utensils, nameKey: 'tender.category.food', descKey: 'tender.category.food.desc' },
    { icon: Building, nameKey: 'tender.category.facilities', descKey: 'tender.category.facilities.desc' },
  ];

  const tenderTypes = [
    { nameKey: 'tender.type.open', descKey: 'tender.type.open.desc' },
    { nameKey: 'tender.type.selective', descKey: 'tender.type.selective.desc' },
    { nameKey: 'tender.type.limited', descKey: 'tender.type.limited.desc' },
    { nameKey: 'tender.type.standing', descKey: 'tender.type.standing.desc' },
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
              {t('tenderOpportunities.title')}
            </h1>
            <p 
              className="text-white/90 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
            >
              {t('tenderOpportunities.subtitle')}
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
                {t('tender.statsTitle')}
              </h2>
              <p className="text-luxury-gray text-base md:text-lg font-light max-w-3xl mx-auto">
                {t('tender.statsDesc')}
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
                {t('tender.painTitle')}
              </h2>
              <p className="text-luxury-gray text-sm md:text-base font-light max-w-3xl mx-auto">
                {t('tender.painSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {painPoints.map((pain) => {
                const IconComponent = pain.icon;
                return (
                  <div
                    key={pain.titleKey}
                    className="p-6 md:p-8 bg-gradient-to-br from-red-50/30 to-warm-card border border-red-100/50 rounded-luxury"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent strokeWidth={1} className="w-6 h-6 text-red-700" />
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
                {t('tender.servicesTitle')}
              </h2>
              <p className="text-luxury-gray text-sm md:text-base font-light max-w-3xl mx-auto">
                {t('tender.servicesSubtitle')}
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
                              {t('tender.service.label')} {index + 1}
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
                          {t('tender.service.whatWeDeliver')}
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
                            {t('tender.service.howItHelps')}
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

          {/* Value Proposition Banner */}
          <section className="mb-16 md:mb-24 bg-gradient-to-r from-luxury-black to-slate-800 rounded-luxury p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="font-display text-2xl md:text-3xl text-white font-light tracking-wide mb-4">
                  {t('tender.valueTitle')}
                </h2>
                <p className="text-white/80 text-sm md:text-base font-light leading-relaxed">
                  {t('tender.valueDesc')}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Award strokeWidth={1} className="w-8 h-8 text-amber-400" />
                  <div>
                    <div className="text-white font-medium">{t('tender.value.winrate')}</div>
                    <div className="text-white/60 text-sm">{t('tender.value.winrate.desc')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock strokeWidth={1} className="w-8 h-8 text-emerald-400" />
                  <div>
                    <div className="text-white font-medium">{t('tender.value.timesaved')}</div>
                    <div className="text-white/60 text-sm">{t('tender.value.timesaved.desc')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Headphones strokeWidth={1} className="w-8 h-8 text-blue-400" />
                  <div>
                    <div className="text-white font-medium">{t('tender.value.support')}</div>
                    <div className="text-white/60 text-sm">{t('tender.value.support.desc')}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What is Government Tendering */}
          <section className="mb-16 md:mb-24">
            <div className="bg-gradient-to-br from-slate-50 to-warm-card border border-warm-sand rounded-luxury p-8 md:p-12">
              <h2 className="font-display text-xl md:text-2xl text-luxury-black font-medium tracking-wide mb-6 text-center">
                {t('tender.whatIsTitle')}
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-luxury-gray text-sm md:text-base font-light leading-relaxed mb-6">
                  {t('tender.whatIsDesc1')}
                </p>
                <p className="text-luxury-gray text-sm md:text-base font-light leading-relaxed">
                  {t('tender.whatIsDesc2')}
                </p>
              </div>
            </div>
          </section>

          {/* Tender Types */}
          <section className="mb-16 md:mb-24">
            <h2 className="font-display text-lg md:text-2xl text-luxury-black font-medium tracking-wide mb-8 md:mb-10 text-center uppercase">
              {t('tender.typesTitle')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {tenderTypes.map((type, index) => (
                <div
                  key={type.nameKey}
                  className="p-5 md:p-6 bg-warm-card border border-warm-sand rounded-luxury"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl md:text-3xl font-display text-luxury-black/20 font-light">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2">
                        {t(type.nameKey)}
                      </h3>
                      <p className="text-luxury-gray text-sm font-light leading-relaxed">
                        {t(type.descKey)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Procurement Process */}
          <section className="mb-16 md:mb-24">
            <h2 className="font-display text-lg md:text-2xl text-luxury-black font-medium tracking-wide mb-8 md:mb-10 text-center uppercase">
              {t('tender.processTitle')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.stepKey} className="relative">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-luxury-black rounded-full flex items-center justify-center">
                        <IconComponent strokeWidth={1} className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-xs text-luxury-gray/50 uppercase tracking-wider mb-2">
                        {t('tender.step')} {index + 1}
                      </div>
                      <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2">
                        {t(step.stepKey)}
                      </h3>
                      <p className="text-luxury-gray text-sm font-light">
                        {t(step.descKey)}
                      </p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-[60%] w-[80%]">
                        <ArrowRight strokeWidth={1} className="w-6 h-6 text-luxury-black/20" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Federal Sources */}
          <section className="mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                <Landmark strokeWidth={1} className="w-6 h-6 text-red-700" />
              </div>
              <div>
                <h2 className="font-display text-xl md:text-2xl text-luxury-black font-medium">
                  {t('tender.federal.title')}
                </h2>
                <p className="text-luxury-gray text-sm font-light">{t('tender.federal.subtitle')}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {federalSources.map((source) => (
                <div
                  key={source.nameKey}
                  className="p-5 md:p-6 bg-gradient-to-br from-red-50/50 to-warm-card border border-warm-sand rounded-luxury
                             hover:border-red-200 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2">
                    {t(source.nameKey)}
                  </h3>
                  <p className="text-luxury-gray text-sm font-light leading-relaxed mb-3">
                    {t(source.descKey)}
                  </p>
                  <div className="flex items-center gap-1 text-red-700 text-sm">
                    <ExternalLink strokeWidth={1.5} className="w-4 h-4" />
                    <span className="font-medium">{source.url}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Provincial Sources */}
          <section className="mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Building strokeWidth={1} className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h2 className="font-display text-xl md:text-2xl text-luxury-black font-medium">
                  {t('tender.provincial.title')}
                </h2>
                <p className="text-luxury-gray text-sm font-light">{t('tender.provincial.subtitle')}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {provincialSources.map((source) => (
                <div
                  key={source.nameKey}
                  className="p-5 md:p-6 bg-gradient-to-br from-blue-50/50 to-warm-card border border-warm-sand rounded-luxury
                             hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                      {source.region}
                    </span>
                  </div>
                  <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2">
                    {t(source.nameKey)}
                  </h3>
                  <p className="text-luxury-gray text-sm font-light leading-relaxed">
                    {t(source.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Municipal Sources */}
          <section className="mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                <MapPin strokeWidth={1} className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <h2 className="font-display text-xl md:text-2xl text-luxury-black font-medium">
                  {t('tender.municipal.title')}
                </h2>
                <p className="text-luxury-gray text-sm font-light">{t('tender.municipal.subtitle')}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {municipalSources.map((source) => (
                <div
                  key={source.nameKey}
                  className="p-5 md:p-6 bg-gradient-to-br from-emerald-50/50 to-warm-card border border-warm-sand rounded-luxury
                             hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin strokeWidth={1.5} className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 text-sm font-medium">
                      {source.city}
                    </span>
                  </div>
                  <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2">
                    {t(source.nameKey)}
                  </h3>
                  <p className="text-luxury-gray text-sm font-light leading-relaxed">
                    {t(source.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Tender Categories */}
          <section className="mb-16 md:mb-24">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-display text-xl md:text-2xl text-luxury-black font-medium tracking-wide mb-4 uppercase">
                {t('tender.categoriesTitle')}
              </h2>
              <p className="text-luxury-gray text-sm md:text-base font-light max-w-2xl mx-auto">
                {t('tender.categoriesDesc')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {tenderCategories.map((category) => {
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
                      {t(category.descKey)}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Key Requirements */}
          <section className="mb-16 md:mb-24 bg-luxury-black rounded-luxury p-8 md:p-12">
            <h2 className="font-display text-xl md:text-2xl text-white font-medium tracking-wide mb-8 text-center uppercase">
              {t('tender.requirementsTitle')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div>
                <h3 className="text-white font-medium mb-3">{t('tender.req.registration')}</h3>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  {t('tender.req.registration.desc')}
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-3">{t('tender.req.security')}</h3>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  {t('tender.req.security.desc')}
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-3">{t('tender.req.insurance')}</h3>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  {t('tender.req.insurance.desc')}
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-3">{t('tender.req.financial')}</h3>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  {t('tender.req.financial.desc')}
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-3">{t('tender.req.experience')}</h3>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  {t('tender.req.experience.desc')}
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-3">{t('tender.req.compliance')}</h3>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  {t('tender.req.compliance.desc')}
                </p>
              </div>
            </div>
          </section>

          {/* How We Help */}
          <section className="mb-16 md:mb-24 bg-slate-50 rounded-luxury p-8 md:p-12">
            <h2 className="font-display text-xl md:text-2xl text-luxury-black font-medium tracking-wide mb-8 text-center uppercase">
              {t('tender.helpTitle')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-luxury-black rounded-full flex items-center justify-center text-white font-display text-xl">
                  1
                </div>
                <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2">
                  {t('tender.help.monitor')}
                </h3>
                <p className="text-luxury-gray text-sm font-light">
                  {t('tender.help.monitor.desc')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-luxury-black rounded-full flex items-center justify-center text-white font-display text-xl">
                  2
                </div>
                <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2">
                  {t('tender.help.qualify')}
                </h3>
                <p className="text-luxury-gray text-sm font-light">
                  {t('tender.help.qualify.desc')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-luxury-black rounded-full flex items-center justify-center text-white font-display text-xl">
                  3
                </div>
                <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2">
                  {t('tender.help.bid')}
                </h3>
                <p className="text-luxury-gray text-sm font-light">
                  {t('tender.help.bid.desc')}
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-br from-luxury-black to-slate-800 rounded-luxury p-10 md:p-14">
            <FileText strokeWidth={1} className="w-12 h-12 text-white/80 mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl text-white font-light tracking-wide mb-4">
              {t('tender.ctaTitle')}
            </h2>
            <p className="text-white/80 text-sm md:text-base font-light max-w-2xl mx-auto mb-8">
              {t('tender.ctaDesc')}
            </p>
            <a
              href="mailto:support@Whisper2Owner.com"
              className="inline-block px-8 py-3 bg-white text-luxury-black text-sm md:text-base font-medium rounded-luxury
                         hover:bg-warm-sand transition-colors duration-300"
            >
              {t('tender.ctaButton')}
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
