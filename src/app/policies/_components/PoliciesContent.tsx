'use client';

import { useState } from 'react';
import { FileText, Shield, AlertTriangle, Accessibility, Cookie } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

type PolicyTab = 'terms' | 'privacy' | 'disclaimers' | 'accessibility' | 'cookies';

const tabs: { id: PolicyTab; labelKey: string; icon: React.ReactNode }[] = [
  { id: 'terms', labelKey: 'policies.termsOfUse', icon: <FileText className="w-4 h-4" /> },
  { id: 'privacy', labelKey: 'policies.privacyPolicy', icon: <Shield className="w-4 h-4" /> },
  { id: 'disclaimers', labelKey: 'policies.disclaimers', icon: <AlertTriangle className="w-4 h-4" /> },
  { id: 'accessibility', labelKey: 'policies.accessibility', icon: <Accessibility className="w-4 h-4" /> },
  { id: 'cookies', labelKey: 'policies.cookiesPolicy', icon: <Cookie className="w-4 h-4" /> },
];

export function PoliciesContent() {
  const [activeTab, setActiveTab] = useState<PolicyTab>('terms');
  const { t } = useLanguage();

  return (
    <div>
      {/* Tab Navigation - Icons only on mobile, full labels on md+ */}
      <nav className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-8 md:mb-12 border-b border-warm-sand pb-4 md:pb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex items-center justify-center gap-1 sm:gap-2 
              px-2 sm:px-3 md:px-4 py-2 
              text-[10px] sm:text-xs tracking-wide uppercase
              border border-warm-taupe rounded-sm transition-all duration-200
              min-w-[44px] sm:min-w-0
              ${activeTab === tab.id 
                ? 'bg-luxury-black text-white border-luxury-black' 
                : 'bg-transparent text-luxury-gray hover:bg-luxury-black hover:text-white hover:border-luxury-black'
              }
            `}
          >
            {tab.icon}
            <span className="hidden sm:inline">{t(tab.labelKey)}</span>
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <div className="bg-warm-white border border-warm-sand rounded-sm p-4 sm:p-6 md:p-12">
        {activeTab === 'terms' && <TermsOfUse />}
        {activeTab === 'privacy' && <PrivacyPolicy />}
        {activeTab === 'disclaimers' && <Disclaimers />}
        {activeTab === 'accessibility' && <AccessibilityPolicy />}
        {activeTab === 'cookies' && <CookiesPolicy />}
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl text-luxury-black font-light tracking-wide mb-6 italic">
      {children}
    </h2>
  );
}

function ImportantNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-cream border-l-2 border-warm-taupe p-6 mb-8">
      <p className="text-xs tracking-luxury uppercase text-luxury-gray font-medium mb-2">
        Important Notice: Dispute Resolution and Arbitration
      </p>
      <p className="text-sm text-luxury-gray font-light leading-relaxed">
        {children}
      </p>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-luxury-black tracking-wide mb-3">
        {title}
      </h3>
      <div className="text-sm text-luxury-gray font-light leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

function TermsOfUse() {
  return (
    <div>
      <SectionTitle>Terms of Use</SectionTitle>
      
      <ImportantNotice>
        PLEASE READ THESE TERMS CAREFULLY. THEY CONTAIN A MANDATORY ARBITRATION PROVISION AND CLASS ACTION WAIVER
        THAT AFFECT YOUR RIGHTS TO RESOLVE DISPUTES WITH WHISPER2OWNER. BY ACCESSING OR USING OUR SERVICES, YOU AGREE TO BE
        BOUND BY THESE TERMS.
      </ImportantNotice>

      <SubSection title="1. Acceptance of Terms">
        <p>
          These Terms of Use (&quot;Terms&quot;) constitute a legally binding agreement between you and Whisper2Owner (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;). By accessing, registering for, or using the Whisper2Owner platform, website, and applications (collectively, the
          &quot;Services&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do
          not agree to these Terms, you must immediately cease all use of the Services.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="2. Eligibility and Account Registration">
        <p>
          <strong>2.1 Age Requirement:</strong> You must be at least 18 years of age to create an account and purchase subscriptions.
          Users under 18 (&quot;Students&quot;) may only use the Services through an account created and managed by a parent or
          legal guardian.
        </p>
        <p>
          <strong>2.2 Account Security:</strong> You are solely responsible for maintaining the security of the accounts used for
          authentication. Any activity occurring through your authenticated session is your responsibility. We are not liable
          for any loss or damage arising from unauthorized access to your accounts.
        </p>
        <p>
          <strong>2.3 Account Information:</strong> You agree to provide accurate, current, and complete information during registration.
          You acknowledge that your email address and account details are permanently locked upon registration and cannot be
          changed, as they serve as unique identifiers within our system.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="3. Services and Billing">
        <p>
          <strong>3.1 Service Description:</strong> Whisper2Owner provides business consulting and market connection services
          for international brands seeking to enter the Canadian market.
        </p>
        <p>
          <strong>3.2 Payment Terms:</strong> All fees are quoted in Canadian dollars unless otherwise specified. Payment terms
          will be established in individual service agreements.
        </p>
        <p>
          <strong>3.3 Refunds:</strong> Refund policies are determined on a case-by-case basis and outlined in individual service agreements.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="4. Intellectual Property">
        <p>
          All content, trademarks, and intellectual property on this website are owned by Whisper2Owner or its licensors.
          You may not reproduce, distribute, or create derivative works without express written permission.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="5. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Whisper2Owner shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising from your use of our services.
        </p>
      </SubSection>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div>
      <SectionTitle>Privacy Policy</SectionTitle>
      
      <SubSection title="1. Information We Collect">
        <p>
          <strong>1.1 Personal Information:</strong> We collect information you provide directly, including name, email address,
          company information, and any other details you submit through our contact forms or service agreements.
        </p>
        <p>
          <strong>1.2 Usage Data:</strong> We automatically collect certain information about your device and how you interact
          with our website, including IP address, browser type, pages visited, and time spent on pages.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="2. How We Use Your Information">
        <p>We use collected information to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Provide and improve our services</li>
          <li>Communicate with you about services and opportunities</li>
          <li>Analyze website usage and optimize user experience</li>
          <li>Comply with legal obligations</li>
        </ul>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="3. Information Sharing">
        <p>
          We do not sell your personal information. We may share information with trusted service providers who assist
          in operating our website and conducting our business, subject to confidentiality agreements.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="4. Data Security">
        <p>
          We implement appropriate technical and organizational measures to protect your personal information against
          unauthorized access, alteration, disclosure, or destruction.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="5. Your Rights">
        <p>
          You have the right to access, correct, or delete your personal information. To exercise these rights,
          please contact us at support@Whisper2Owner.com.
        </p>
      </SubSection>
    </div>
  );
}

function Disclaimers() {
  return (
    <div>
      <SectionTitle>Disclaimers</SectionTitle>
      
      <SubSection title="1. General Disclaimer">
        <p>
          The information provided on this website is for general informational purposes only. While we strive to keep
          the information up to date and accurate, we make no representations or warranties of any kind, express or implied,
          about the completeness, accuracy, reliability, suitability, or availability of the information.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="2. Professional Advice">
        <p>
          Nothing on this website constitutes professional legal, financial, or business advice. You should consult with
          appropriate professionals before making any business decisions based on information found on this website.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="3. External Links">
        <p>
          This website may contain links to external websites. We have no control over the content and nature of these
          sites and are not responsible for their content or privacy practices.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="4. Results Disclaimer">
        <p>
          Any examples of past results or testimonials are not guarantees of future performance. Individual results may vary
          based on numerous factors including market conditions, business circumstances, and other variables.
        </p>
      </SubSection>
    </div>
  );
}

function AccessibilityPolicy() {
  return (
    <div>
      <SectionTitle>Accessibility</SectionTitle>
      
      <SubSection title="Our Commitment">
        <p>
          Whisper2Owner is committed to ensuring digital accessibility for people with disabilities. We are continually
          improving the user experience for everyone and applying the relevant accessibility standards.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="Conformance Status">
        <p>
          We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain
          how to make web content more accessible for people with disabilities.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="Accessibility Features">
        <p>Our website includes the following accessibility features:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Clear and consistent navigation</li>
          <li>Text alternatives for images</li>
          <li>Sufficient color contrast</li>
          <li>Keyboard-accessible functionality</li>
          <li>Resizable text support</li>
        </ul>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="Feedback">
        <p>
          We welcome your feedback on the accessibility of our website. Please contact us at support@Whisper2Owner.com
          if you encounter any accessibility barriers or have suggestions for improvement.
        </p>
      </SubSection>
    </div>
  );
}

function CookiesPolicy() {
  return (
    <div>
      <SectionTitle>Cookies Policy</SectionTitle>
      
      <SubSection title="What Are Cookies">
        <p>
          Cookies are small text files that are placed on your device when you visit a website. They are widely used
          to make websites work more efficiently and provide information to the website owners.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="How We Use Cookies">
        <p>We use cookies for the following purposes:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
          <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
        </ul>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="Managing Cookies">
        <p>
          Most web browsers allow you to control cookies through their settings. You can set your browser to refuse
          cookies or delete certain cookies. However, if you block or delete cookies, some features of our website
          may not function properly.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="Third-Party Cookies">
        <p>
          We may use third-party services that set their own cookies, such as analytics providers. These cookies
          are governed by the respective third parties&apos; privacy policies.
        </p>
      </SubSection>
    </div>
  );
}
