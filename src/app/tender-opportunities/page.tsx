import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tender Opportunities | Whisper2Owner',
  description: 'Discover government and corporate tender opportunities for suppliers and service providers in the Canadian market.',
};

export default function TenderOpportunitiesPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-16 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-luxury-black font-light tracking-wide mb-6">
              Tender Opportunities
            </h1>
            <p className="text-luxury-gray text-lg font-light max-w-2xl mx-auto">
              Access curated government and corporate tender opportunities, helping you 
              compete for contracts across Canada.
            </p>
          </header>

          <section className="mb-16">
            <div className="bg-warm-card border border-warm-sand rounded-luxury p-8 md:p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-warm-linen rounded-luxury">
                <span className="text-2xl">📋</span>
              </div>
              <h2 className="font-display text-2xl text-luxury-black font-medium tracking-wide mb-4">
                Coming Soon
              </h2>
              <p className="text-luxury-gray text-base font-light max-w-lg mx-auto mb-8">
                We're building a comprehensive database of tender opportunities, procurement 
                notices, and RFP alerts tailored to your business needs.
              </p>
              <a
                href="mailto:support@Whisper2Owner.com"
                className="text-luxury-black text-sm tracking-wide uppercase border-b border-luxury-black
                           hover:text-luxury-gray hover:border-luxury-gray transition-colors duration-200"
              >
                Get Notified When Available
              </a>
            </div>
          </section>

          <section className="text-center">
            <p className="text-luxury-gray-light text-sm">
              Have a tender opportunity to share?
            </p>
            <a
              href="mailto:support@Whisper2Owner.com"
              className="text-luxury-black text-sm tracking-wide inline-block mt-2
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
