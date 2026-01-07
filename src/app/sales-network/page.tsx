import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sales Network | Whisper2Owner',
  description: 'Discover our comprehensive local sales network connecting brands with Canadian consumers through storefronts, online marketplaces, and community partnerships.',
};

export default function SalesNetworkPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10 md:mb-16 text-center">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-luxury-black font-light tracking-wide mb-4 md:mb-6">
              Sales Network
            </h1>
            <p className="text-luxury-gray text-sm md:text-lg font-light max-w-2xl mx-auto">
              A curated ecosystem of local partners, storefronts, and digital channels 
              designed to maximize your brand's reach in the Canadian market.
            </p>
          </header>

          <section className="mb-10 md:mb-16">
            <h2 className="font-display text-lg md:text-2xl text-luxury-black font-medium tracking-wide mb-6 md:mb-8 text-center uppercase">
              Our Partners
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { name: 'Local Storefronts', desc: 'Boutique retail locations across Canada' },
                { name: 'Small Businesses', desc: 'Independent retailers and specialty shops' },
                { name: 'Boutique Gyms', desc: 'Fitness and wellness establishments' },
                { name: 'Community Leaders', desc: 'Influencers and local advocates' },
                { name: 'Supermarket Chains', desc: 'Major grocery and retail chains' },
                { name: 'Amazon Store', desc: 'Canada\'s largest online marketplace' },
                { name: 'Shopify Stores', desc: 'Direct-to-consumer e-commerce' },
                { name: 'Etsy & eBay', desc: 'Specialty and marketplace selling' },
                { name: 'Groupon', desc: 'Deal-based customer acquisition' },
              ].map((partner) => (
                <div
                  key={partner.name}
                  className="p-4 md:p-6 bg-warm-card border border-warm-sand rounded-luxury
                             hover:border-luxury-black hover:translate-x-1 transition-all duration-200"
                >
                  <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-1 md:mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-luxury-gray text-xs md:text-sm font-light">
                    {partner.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <p className="text-luxury-gray-light text-xs md:text-sm mb-4 md:mb-6">
              Ready to expand your brand's presence in Canada?
            </p>
            <a
              href="mailto:support@Whisper2Owner.com"
              className="btn-primary inline-block text-xs md:text-sm"
            >
              Contact Us
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
