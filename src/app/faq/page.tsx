import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'FAQ | Whisper2Owner',
  description: 'Frequently asked questions about Whisper2Owner services and partnerships.',
};

export default function FAQPage() {
  const faqs = [
    {
      question: 'What does Whisper2Owner do?',
      answer: 'We bridge international brands with local Canadian consumers by managing a comprehensive sales network and facilitating market entry strategies.'
    },
    {
      question: 'Which markets do you serve?',
      answer: 'We help international brands enter the Canadian market and facilitate exports to England, Colombia, Argentina, and China.'
    },
    {
      question: 'What types of businesses do you work with?',
      answer: 'We work with manufacturers, brands, and organizations of all sizes looking to expand their presence in Canadian and international markets.'
    },
    {
      question: 'What sales channels are available through your network?',
      answer: 'Our network includes local storefronts, small businesses, boutique gyms, community leaders, supermarket chains, Amazon, Shopify, Etsy, eBay, Groupon, and more.'
    },
    {
      question: 'How do I get started?',
      answer: 'Contact us at support@Whisper2Owner.com to discuss your business needs and explore partnership opportunities.'
    },
  ];

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10 md:mb-16 text-center">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-luxury-black font-light tracking-wide mb-4 md:mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-luxury-gray text-sm md:text-lg font-light">
              Find answers to common questions about our services.
            </p>
          </header>

          <section className="space-y-4 md:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-4 md:p-6 bg-warm-card border border-warm-sand rounded-luxury"
              >
                <h3 className="font-display text-base md:text-lg text-luxury-black font-medium mb-2 md:mb-3">
                  {faq.question}
                </h3>
                <p className="text-luxury-gray text-xs md:text-sm font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-10 md:mt-16 text-center">
            <p className="text-luxury-gray text-xs md:text-sm mb-4">
              Don't see your question here?
            </p>
            <a
              href="mailto:support@Whisper2Owner.com"
              className="btn-secondary inline-block text-xs md:text-sm"
            >
              Contact Support
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
