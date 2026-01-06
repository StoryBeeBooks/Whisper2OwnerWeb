import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Policies | Whisper2Owner',
  description: 'Privacy policy and terms of service for Whisper2Owner.',
};

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <header className="mb-16 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-luxury-black font-light tracking-wide mb-6">
              Policies
            </h1>
          </header>

          <section className="mb-12">
            <h2 className="font-display text-2xl text-luxury-black font-medium tracking-wide mb-6">
              Privacy Policy
            </h2>
            <div className="prose prose-gray max-w-none text-luxury-gray font-light">
              <p className="mb-4">
                At Whisper2Owner, we are committed to protecting your privacy and ensuring 
                the security of your personal information.
              </p>
              <p className="mb-4">
                This policy outlines how we collect, use, and protect information when you 
                visit our website or use our services.
              </p>
              <p className="text-sm text-luxury-gray-light">
                For detailed inquiries, please contact us at support@Whisper2Owner.com
              </p>
            </div>
          </section>

          <div className="h-px bg-warm-sand mb-12" />

          <section className="mb-12">
            <h2 className="font-display text-2xl text-luxury-black font-medium tracking-wide mb-6">
              Terms of Service
            </h2>
            <div className="prose prose-gray max-w-none text-luxury-gray font-light">
              <p className="mb-4">
                By accessing and using Whisper2Owner services, you agree to be bound by 
                these terms and conditions.
              </p>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. Continued use of 
                our services constitutes acceptance of any changes.
              </p>
              <p className="text-sm text-luxury-gray-light">
                Last updated: January 2026
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
