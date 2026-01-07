import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Whisper2Owner | Bridging International Brands with Canadian Consumers',
  description: 'Whisper2Owner connects international manufacturers directly with local Canadian consumers through strategic partnerships and localized sales networks.',
  keywords: ['international brands', 'Canadian market', 'sales network', 'localization', 'consumer products'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body font-light antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
