import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'International Opportunities | Whisper2Owner',
  description: 'Connect international brands with Canadian consumers and explore export opportunities to England, Colombia, Argentina, and China.',
};

export default function InternationalOpportunitiesPage() {
  const markets = [
    {
      country: 'Canada',
      flag: '🇨🇦',
      description: 'Entry point for international brands seeking North American market access',
      type: 'Import'
    },
    {
      country: 'England',
      flag: '🇬🇧',
      description: 'Export opportunities to the United Kingdom market',
      type: 'Export'
    },
    {
      country: 'Colombia',
      flag: '🇨🇴',
      description: 'Growing Latin American market with strong consumer demand',
      type: 'Export'
    },
    {
      country: 'Argentina',
      flag: '🇦🇷',
      description: 'Strategic gateway to South American markets',
      type: 'Export'
    },
    {
      country: 'China',
      flag: '🇨🇳',
      description: 'Access to the world\'s largest consumer market',
      type: 'Export'
    },
  ];

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-16 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-luxury-black font-light tracking-wide mb-6">
              International Opportunities
            </h1>
            <p className="text-luxury-gray text-lg font-light max-w-2xl mx-auto">
              We bridge international brands and organizations to source and sell in Canada, 
              while also facilitating exports to key global markets.
            </p>
          </header>

          <section className="mb-16">
            <h2 className="font-display text-2xl text-luxury-black font-medium tracking-wide mb-8 text-center uppercase">
              Markets We Serve
            </h2>
            
            <div className="space-y-4">
              {markets.map((market) => (
                <div
                  key={market.country}
                  className="flex items-center gap-6 p-6 bg-warm-card border border-warm-sand rounded-luxury
                             hover:border-luxury-black hover:translate-x-1 transition-all duration-200"
                >
                  <span className="text-4xl">{market.flag}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display text-xl text-luxury-black font-medium">
                        {market.country}
                      </h3>
                      <span className={`text-xs tracking-luxury uppercase px-2 py-0.5 rounded-luxury
                        ${market.type === 'Import' 
                          ? 'bg-accent-sage/20 text-accent-sage' 
                          : 'bg-accent-blue/20 text-accent-blue'
                        }`}
                      >
                        {market.type}
                      </span>
                    </div>
                    <p className="text-luxury-gray text-sm font-light">
                      {market.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl text-luxury-black font-medium tracking-wide mb-8 text-center uppercase">
              Our Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Market Entry Strategy',
                  desc: 'Tailored plans for entering the Canadian market or expanding internationally'
                },
                {
                  title: 'Distribution Partnerships',
                  desc: 'Connect with established local networks and retail channels'
                },
                {
                  title: 'Regulatory Compliance',
                  desc: 'Navigate import/export regulations and certification requirements'
                },
                {
                  title: 'Brand Localization',
                  desc: 'Adapt your products and messaging for local consumer preferences'
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="p-6 bg-warm-card border border-warm-sand rounded-luxury"
                >
                  <h3 className="font-display text-lg text-luxury-black font-medium mb-2">
                    {service.title}
                  </h3>
                  <p className="text-luxury-gray text-sm font-light">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <p className="text-luxury-gray-light text-sm mb-6">
              Ready to expand your global footprint?
            </p>
            <a
              href="mailto:support@Whisper2Owner.com"
              className="btn-primary inline-block"
            >
              Start the Conversation
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
