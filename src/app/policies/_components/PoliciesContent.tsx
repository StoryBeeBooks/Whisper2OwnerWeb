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

      <SubSection title="1. Acceptance and Modification of Terms">
        <p>
          These Terms of Use (&quot;Terms&quot;) constitute a legally binding agreement between you and Whisper2Owner (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;). By accessing, browsing, registering for, or using the Whisper2Owner platform, website, mobile applications, 
          newsletters, and any related services (collectively, the &quot;Services&quot;), you acknowledge that you have read, understood, 
          and agree to be bound by these Terms and all applicable laws and regulations. If you do not agree to these Terms, 
          you must immediately cease all use of the Services.
        </p>
        <p>
          We reserve the right to modify, amend, or update these Terms at any time, in our sole discretion, with or without 
          notice. Your continued use of the Services following any changes constitutes acceptance of those changes. It is your 
          responsibility to review these Terms periodically. The current version will be posted on our website with the effective date.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="2. Eligibility and User Representations">
        <p>
          <strong>2.1 General Eligibility:</strong> You must be at least 18 years of age and have the legal capacity to enter 
          into binding contracts to use our Services. By using the Services, you represent and warrant that you meet these requirements.
        </p>
        <p>
          <strong>2.2 Business Representations:</strong> If you are accessing the Services on behalf of a business entity, you 
          represent and warrant that you have the authority to bind that entity to these Terms and that the entity agrees to 
          indemnify us for any breach of these Terms by you or the entity.
        </p>
        <p>
          <strong>2.3 Compliance:</strong> You agree to comply with all applicable local, national, and international laws, rules, 
          and regulations in connection with your use of the Services. You are solely responsible for ensuring your use of the 
          Services is lawful in your jurisdiction.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="3. Services Provided">
        <p>
          <strong>3.1 General Description:</strong> Whisper2Owner provides information, consultation, facilitation, and connection 
          services related to business development, market entry, government programs, funding opportunities, sales networks, 
          and related business activities. The specific scope, nature, and availability of Services may vary and are subject to 
          change without notice.
        </p>
        <p>
          <strong>3.2 Service Modifications:</strong> We reserve the right to modify, suspend, or discontinue any aspect of the 
          Services at any time, temporarily or permanently, with or without notice. We shall not be liable to you or any third 
          party for any modification, suspension, or discontinuation of the Services.
        </p>
        <p>
          <strong>3.3 No Guarantees:</strong> While we strive to provide accurate and helpful information, we make no representations, 
          warranties, or guarantees regarding the availability, accuracy, completeness, reliability, or results of any information 
          or Services provided. Use of our Services does not guarantee any specific outcomes, approvals, funding, partnerships, 
          or business results.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="4. User Accounts and Security">
        <p>
          <strong>4.1 Account Registration:</strong> Certain features of our Services may require account registration. You agree 
          to provide accurate, current, and complete information during registration and to update such information as necessary. 
          You acknowledge that some account information may be permanent and non-modifiable once set.
        </p>
        <p>
          <strong>4.2 Account Security:</strong> You are solely responsible for maintaining the confidentiality of your account 
          credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized 
          use or security breach. We are not liable for any loss or damage arising from your failure to maintain account security.
        </p>
        <p>
          <strong>4.3 Account Suspension:</strong> We reserve the right to suspend, terminate, or restrict access to your account 
          or the Services at any time, for any reason or no reason, with or without notice, including for violation of these Terms 
          or for conduct we determine to be inappropriate, harmful, or contrary to our interests.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="5. Payment Terms and Financial Obligations">
        <p>
          <strong>5.1 Fees and Charges:</strong> Certain Services may require payment of fees. All fees are stated in the currency 
          specified at the time of transaction and are subject to change. You agree to pay all applicable fees and charges in 
          accordance with the payment terms presented to you.
        </p>
        <p>
          <strong>5.2 Billing Authorization:</strong> By providing payment information, you authorize us to charge the applicable 
          fees to your designated payment method. You represent that you have the legal right to use any payment method provided.
        </p>
        <p>
          <strong>5.3 Refunds:</strong> Refund policies, if any, are determined on a case-by-case basis at our sole discretion. 
          Unless otherwise specified in writing, all fees are non-refundable. We reserve the right to refuse refunds for any reason.
        </p>
        <p>
          <strong>5.4 Additional Costs:</strong> You are responsible for any additional costs, including but not limited to 
          taxes, duties, currency conversion fees, or other charges associated with your use of the Services.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="6. Intellectual Property Rights">
        <p>
          <strong>6.1 Ownership:</strong> All content, materials, information, data, software, graphics, logos, trademarks, 
          service marks, and other intellectual property displayed or made available through the Services are the exclusive 
          property of Whisper2Owner, its licensors, or other third parties. Nothing in these Terms grants you any right, title, 
          or interest in such intellectual property.
        </p>
        <p>
          <strong>6.2 Restrictions:</strong> You may not copy, reproduce, distribute, modify, create derivative works, publicly 
          display, republish, download, store, transmit, or otherwise use any content from the Services except as expressly 
          permitted in these Terms or with our prior written consent. Any unauthorized use may violate copyright, trademark, 
          and other laws.
        </p>
        <p>
          <strong>6.3 User Content:</strong> If you submit, post, or transmit any content through the Services, you grant us 
          a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, 
          modify, adapt, publish, translate, create derivative works from, distribute, and display such content in any form or medium.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="7. Prohibited Conduct">
        <p>You agree not to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Use the Services for any unlawful purpose or in violation of these Terms</li>
          <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
          <li>Attempt to gain unauthorized access to any portion of the Services or any systems or networks</li>
          <li>Use any automated means to access the Services or collect data without our express written consent</li>
          <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
          <li>Transmit any viruses, malware, or other harmful code</li>
          <li>Engage in any conduct that could damage, disable, or impair the Services</li>
          <li>Use the Services in any manner that could harm, disparage, or negatively affect us or any third party</li>
        </ul>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="8. Disclaimers and Limitations of Liability">
        <p>
          <strong>8.1 &quot;AS IS&quot; Provision:</strong> THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF 
          ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR 
          A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE. WE DO NOT WARRANT THAT THE SERVICES WILL BE 
          UNINTERRUPTED, SECURE, OR ERROR-FREE.
        </p>
        <p>
          <strong>8.2 Information Disclaimer:</strong> We make no representations or warranties regarding the accuracy, completeness, 
          reliability, or timeliness of any information provided through the Services. Any reliance on such information is at 
          your own risk.
        </p>
        <p>
          <strong>8.3 Limitation of Liability:</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, WHISPER2OWNER AND ITS AFFILIATES, 
          OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR 
          USE OF THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED 
          OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
        <p>
          <strong>8.4 Liability Cap:</strong> OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR 
          THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US, IF ANY, IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE 
          TO LIABILITY, OR ONE HUNDRED CANADIAN DOLLARS ($100 CAD), WHICHEVER IS LESS.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="9. Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless Whisper2Owner and its affiliates, officers, directors, employees, 
          agents, licensors, and service providers from and against any claims, liabilities, damages, losses, costs, expenses, 
          or fees (including reasonable attorneys&apos; fees) arising out of or related to: (a) your use of the Services; (b) your 
          violation of these Terms; (c) your violation of any rights of another party; or (d) any content you submit or transmit 
          through the Services. We reserve the right to assume exclusive defense and control of any matter subject to indemnification 
          by you, and you agree to cooperate with our defense of such claims.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="10. Dispute Resolution and Arbitration">
        <p>
          <strong>10.1 Informal Resolution:</strong> Before initiating any formal dispute resolution, you agree to first contact us 
          to attempt to resolve any dispute informally for at least thirty (30) days.
        </p>
        <p>
          <strong>10.2 Binding Arbitration:</strong> Any dispute, claim, or controversy arising out of or relating to these Terms 
          or the Services that cannot be resolved informally shall be resolved by binding arbitration in accordance with applicable 
          arbitration rules. The arbitration shall be conducted in a location determined by the arbitrator, and judgment on the 
          award may be entered in any court having jurisdiction.
        </p>
        <p>
          <strong>10.3 Class Action Waiver:</strong> YOU AGREE THAT ANY ARBITRATION OR PROCEEDING SHALL BE LIMITED TO THE DISPUTE 
          BETWEEN YOU AND US INDIVIDUALLY. YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION, REPRESENTATIVE ACTION, OR 
          CONSOLIDATED PROCEEDING. TO THE EXTENT PERMISSIBLE BY LAW, THERE SHALL BE NO RIGHT OR AUTHORITY FOR ANY CLAIMS TO BE 
          ARBITRATED OR LITIGATED ON A CLASS ACTION OR CONSOLIDATED BASIS.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="11. Governing Law and Jurisdiction">
        <p>
          These Terms shall be governed by and construed in accordance with the laws applicable in the jurisdiction where 
          Whisper2Owner operates, without regard to conflict of law principles. You consent to the exclusive jurisdiction 
          and venue of courts in that jurisdiction for any matters not subject to arbitration.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="12. Third-Party Services and Links">
        <p>
          The Services may contain links to third-party websites, services, or resources. We are not responsible for and do 
          not endorse the content, products, services, or practices of any third parties. Your interactions with third-party 
          services are solely between you and the third party. You acknowledge and agree that we shall not be liable for any 
          damages or losses arising from your use of third-party services.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="13. Privacy and Data">
        <p>
          Your use of the Services is also governed by our Privacy Policy. By using the Services, you consent to the collection, 
          use, and sharing of your information as described in our Privacy Policy. We reserve the right to use data in aggregate 
          or anonymized form for any purpose.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="14. Communications">
        <p>
          By using the Services or providing your contact information, you consent to receive communications from us, including 
          emails, newsletters, marketing materials, and other notices. You may opt out of certain communications by following 
          the unsubscribe instructions provided, but you may not opt out of non-promotional, administrative, or legal communications.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="15. Severability and Waiver">
        <p>
          If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated 
          to the minimum extent necessary, and the remaining provisions shall remain in full force and effect. Our failure to 
          enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="16. Assignment">
        <p>
          We may assign or transfer these Terms or our rights and obligations hereunder, in whole or in part, without notice 
          or obtaining your consent. You may not assign or transfer these Terms or any rights or obligations hereunder without 
          our prior written consent, and any attempted assignment without such consent shall be void.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="17. Entire Agreement">
        <p>
          These Terms, together with our Privacy Policy and any other legal notices or agreements published by us, constitute 
          the entire agreement between you and Whisper2Owner regarding the Services and supersede all prior or contemporaneous 
          understandings and agreements, whether written or oral.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <SubSection title="18. Contact Information">
        <p>
          If you have questions about these Terms, please contact us at mario.xu@wtheory.com. Any notices to you may be sent 
          to the email address you provided or posted on our website.
        </p>
      </SubSection>

      <div className="h-px bg-warm-sand my-8" />

      <p className="text-xs text-luxury-gray-light italic">
        Last Updated: January 7, 2026
      </p>
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
          please contact us at mario.xu@wtheory.com.
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
          We welcome your feedback on the accessibility of our website. Please contact us at mario.xu@wtheory.com
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
