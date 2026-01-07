'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.main': 'Main',
    'nav.salesNetwork': 'Sales Network',
    'nav.canadaFunding': 'Canada Funding',
    'nav.tenderOpportunities': 'Tender Opportunities',
    'nav.internationalOpportunities': 'International Opportunities',
    'nav.supportEmail': 'support@Whisper2Owner.com',
    'nav.copyright': '2026 Whisper2Owner.com',
    
    // Footer
    'footer.policies': 'Policies',
    'footer.faq': 'FAQ',
    'footer.copyright': '© 2026 Whisper2Owner.com',
    
    // Home Page
    'home.title': 'Whisper2Owner',
    'home.subtitle': 'Bridging International Brands with Local Canadian Consumers',
    'home.cta': 'Explore Opportunities',
    
    // Sales Network Page
    'salesNetwork.title': 'Sales Network',
    'salesNetwork.subtitle': 'A curated ecosystem of local partners, storefronts, and digital channels designed to maximize your brand\'s reach in the Canadian market.',
    'salesNetwork.partnersTitle': 'Our Partners',
    'salesNetwork.partner.localStorefronts': 'Local Storefronts',
    'salesNetwork.partner.localStorefronts.desc': 'Boutique retail locations across Canada',
    'salesNetwork.partner.smallBusinesses': 'Small Businesses',
    'salesNetwork.partner.smallBusinesses.desc': 'Independent retailers and specialty shops',
    'salesNetwork.partner.boutiqueGyms': 'Boutique Gyms',
    'salesNetwork.partner.boutiqueGyms.desc': 'Fitness and wellness establishments',
    'salesNetwork.partner.communityLeaders': 'Community Leaders',
    'salesNetwork.partner.communityLeaders.desc': 'Influencers and local advocates',
    'salesNetwork.partner.supermarketChains': 'Supermarket Chains',
    'salesNetwork.partner.supermarketChains.desc': 'Major grocery and retail chains',
    'salesNetwork.partner.amazonStore': 'Amazon Store',
    'salesNetwork.partner.amazonStore.desc': 'Canada\'s largest online marketplace',
    'salesNetwork.partner.shopifyStores': 'Shopify Stores',
    'salesNetwork.partner.shopifyStores.desc': 'Direct-to-consumer e-commerce',
    'salesNetwork.partner.etsyEbay': 'Etsy & eBay',
    'salesNetwork.partner.etsyEbay.desc': 'Specialty and marketplace selling',
    'salesNetwork.partner.groupon': 'Groupon',
    'salesNetwork.partner.groupon.desc': 'Deal-based customer acquisition',
    'salesNetwork.cta': 'Ready to expand your brand\'s presence in Canada?',
    'salesNetwork.contactUs': 'Contact Us',
    
    // Canada Funding Page
    'canadaFunding.title': 'Canada Funding',
    'canadaFunding.subtitle': 'Navigate Canadian funding programs and government incentives designed to support business growth and market expansion.',
    'canadaFunding.comingSoon': 'Coming Soon',
    'canadaFunding.comingSoonDesc': 'We\'re compiling comprehensive information on funding programs, grants, and incentives available for businesses entering the Canadian market.',
    'canadaFunding.getNotified': 'Get Notified When Available',
    'canadaFunding.questions': 'Have questions about funding opportunities?',
    
    // Tender Opportunities Page
    'tenderOpportunities.title': 'Tender Opportunities',
    'tenderOpportunities.subtitle': 'Access curated government and corporate tender opportunities, helping you compete for contracts across Canada.',
    'tenderOpportunities.comingSoon': 'Coming Soon',
    'tenderOpportunities.comingSoonDesc': 'We\'re building a comprehensive database of tender opportunities, procurement notices, and RFP alerts tailored to your business needs.',
    'tenderOpportunities.getNotified': 'Get Notified When Available',
    'tenderOpportunities.shareTender': 'Have a tender opportunity to share?',
    
    // International Opportunities Page
    'international.title': 'International Opportunities',
    'international.subtitle': 'We bridge international brands and organizations to source and sell in Canada, while also facilitating exports to key global markets.',
    'international.marketsTitle': 'Markets We Serve',
    'international.servicesTitle': 'Our Services',
    'international.canada': 'Canada',
    'international.canada.desc': 'Entry point for international brands seeking North American market access',
    'international.england': 'England',
    'international.england.desc': 'Export opportunities to the United Kingdom market',
    'international.colombia': 'Colombia',
    'international.colombia.desc': 'Growing Latin American market with strong consumer demand',
    'international.argentina': 'Argentina',
    'international.argentina.desc': 'Strategic gateway to South American markets',
    'international.china': 'China',
    'international.china.desc': 'Access to the world\'s largest consumer market',
    'international.import': 'Import',
    'international.export': 'Export',
    'international.service.marketResearch': 'Market Research',
    'international.service.marketResearch.desc': 'Comprehensive analysis of target market trends, consumer behavior, and competitive landscape',
    'international.service.partnerMatching': 'Partner Matching',
    'international.service.partnerMatching.desc': 'Connect with verified distributors, retailers, and business partners',
    'international.service.regulatory': 'Regulatory Guidance',
    'international.service.regulatory.desc': 'Navigate import/export regulations, certifications, and compliance requirements',
    'international.service.logistics': 'Logistics Support',
    'international.service.logistics.desc': 'End-to-end supply chain coordination and fulfillment solutions',
    'international.readyToExpand': 'Ready to expand internationally?',
    'international.startConversation': 'Start a Conversation',
    
    // FAQ Page
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about our services.',
    'faq.q1': 'What does Whisper2Owner do?',
    'faq.a1': 'We bridge international brands with local Canadian consumers by managing a comprehensive sales network and facilitating market entry strategies.',
    'faq.q2': 'Which markets do you serve?',
    'faq.a2': 'We help international brands enter the Canadian market and facilitate exports to England, Colombia, Argentina, and China.',
    'faq.q3': 'What types of businesses do you work with?',
    'faq.a3': 'We work with manufacturers, brands, and organizations of all sizes looking to expand their presence in Canadian and international markets.',
    'faq.q4': 'What sales channels are available through your network?',
    'faq.a4': 'Our network includes local storefronts, small businesses, boutique gyms, community leaders, supermarket chains, Amazon, Shopify, Etsy, eBay, Groupon, and more.',
    'faq.q5': 'How do I get started?',
    'faq.a5': 'Contact us at support@Whisper2Owner.com to discuss your business needs and explore partnership opportunities.',
    'faq.moreQuestions': 'Don\'t see your question here?',
    'faq.contactSupport': 'Contact Support',
    
    // Policies Page
    'policies.title': 'Policies',
    'policies.termsOfUse': 'Terms of Use',
    'policies.privacyPolicy': 'Privacy Policy',
    'policies.disclaimers': 'Disclaimers',
    'policies.accessibility': 'Accessibility',
    'policies.cookiesPolicy': 'Cookies Policy',
  },
  zh: {
    // Navigation
    'nav.main': '首页',
    'nav.salesNetwork': '销售网络',
    'nav.canadaFunding': '政府补助',
    'nav.tenderOpportunities': '政府招标',
    'nav.internationalOpportunities': '国际机会',
    'nav.supportEmail': 'support@Whisper2Owner.com',
    'nav.copyright': '2026 Whisper2Owner.com',
    
    // Footer
    'footer.policies': '政策条款',
    'footer.faq': '常见问题',
    'footer.copyright': '© 2026 Whisper2Owner.com',
    
    // Home Page
    'home.title': 'Whisper2Owner',
    'home.subtitle': '连接国际品牌与加拿大本地消费者',
    'home.cta': '探索机会',
    
    // Sales Network Page
    'salesNetwork.title': '销售网络',
    'salesNetwork.subtitle': '精心打造的本地合作伙伴、店铺和数字渠道生态系统，旨在最大化您的品牌在加拿大市场的覆盖范围。',
    'salesNetwork.partnersTitle': '我们的合作伙伴',
    'salesNetwork.partner.localStorefronts': '本地店铺',
    'salesNetwork.partner.localStorefronts.desc': '遍布加拿大的精品零售店',
    'salesNetwork.partner.smallBusinesses': '小型企业',
    'salesNetwork.partner.smallBusinesses.desc': '独立零售商和专卖店',
    'salesNetwork.partner.boutiqueGyms': '精品健身房',
    'salesNetwork.partner.boutiqueGyms.desc': '健身和健康机构',
    'salesNetwork.partner.communityLeaders': '社区领袖',
    'salesNetwork.partner.communityLeaders.desc': '网红和本地推广者',
    'salesNetwork.partner.supermarketChains': '连锁超市',
    'salesNetwork.partner.supermarketChains.desc': '大型杂货和零售连锁店',
    'salesNetwork.partner.amazonStore': '亚马逊商店',
    'salesNetwork.partner.amazonStore.desc': '加拿大最大的在线市场',
    'salesNetwork.partner.shopifyStores': 'Shopify商店',
    'salesNetwork.partner.shopifyStores.desc': '直接面向消费者的电子商务',
    'salesNetwork.partner.etsyEbay': 'Etsy & eBay',
    'salesNetwork.partner.etsyEbay.desc': '专业和市场销售',
    'salesNetwork.partner.groupon': 'Groupon团购',
    'salesNetwork.partner.groupon.desc': '基于优惠的客户获取',
    'salesNetwork.cta': '准备好在加拿大扩展您的品牌了吗？',
    'salesNetwork.contactUs': '联系我们',
    
    // Canada Funding Page
    'canadaFunding.title': '政府补助',
    'canadaFunding.subtitle': '了解加拿大政府补助计划和激励措施，支持您的业务增长和市场扩张。',
    'canadaFunding.comingSoon': '即将推出',
    'canadaFunding.comingSoonDesc': '我们正在整理有关加拿大政府补助计划、补贴和激励措施的全面信息，助力企业发展。',
    'canadaFunding.getNotified': '获取上线通知',
    'canadaFunding.questions': '对政府补助有疑问？',
    
    // Tender Opportunities Page
    'tenderOpportunities.title': '政府招标',
    'tenderOpportunities.subtitle': '获取精选的政府招标和采购机会，帮助您在加拿大赢得政府合同。',
    'tenderOpportunities.comingSoon': '即将推出',
    'tenderOpportunities.comingSoonDesc': '我们正在建立全面的政府招标数据库、采购公告和定制的投标提醒服务。',
    'tenderOpportunities.getNotified': '获取上线通知',
    'tenderOpportunities.shareTender': '有政府招标信息想分享？',
    
    // International Opportunities Page
    'international.title': '国际机会',
    'international.subtitle': '我们连接国际品牌和组织，在加拿大采购和销售，同时促进向主要全球市场的出口。',
    'international.marketsTitle': '我们服务的市场',
    'international.servicesTitle': '我们的服务',
    'international.canada': '加拿大',
    'international.canada.desc': '寻求北美市场准入的国际品牌入口',
    'international.england': '英国',
    'international.england.desc': '向英国市场的出口机会',
    'international.colombia': '哥伦比亚',
    'international.colombia.desc': '消费需求旺盛的拉丁美洲新兴市场',
    'international.argentina': '阿根廷',
    'international.argentina.desc': '通往南美市场的战略门户',
    'international.china': '中国',
    'international.china.desc': '进入世界最大消费市场',
    'international.import': '进口',
    'international.export': '出口',
    'international.service.marketResearch': '市场研究',
    'international.service.marketResearch.desc': '目标市场趋势、消费者行为和竞争格局的全面分析',
    'international.service.partnerMatching': '合作伙伴匹配',
    'international.service.partnerMatching.desc': '与经过验证的分销商、零售商和商业伙伴建立联系',
    'international.service.regulatory': '法规指导',
    'international.service.regulatory.desc': '帮助您了解进出口法规、认证和合规要求',
    'international.service.logistics': '物流支持',
    'international.service.logistics.desc': '端到端供应链协调和履行解决方案',
    'international.readyToExpand': '准备好进行国际扩展了吗？',
    'international.startConversation': '开始对话',
    
    // FAQ Page
    'faq.title': '常见问题',
    'faq.subtitle': '查找有关我们服务的常见问题解答。',
    'faq.q1': 'Whisper2Owner是做什么的？',
    'faq.a1': '我们通过管理全面的销售网络和促进市场进入策略，将国际品牌与加拿大本地消费者联系起来。',
    'faq.q2': '你们服务哪些市场？',
    'faq.a2': '我们帮助国际品牌进入加拿大市场，并促进向英国、哥伦比亚、阿根廷和中国的出口。',
    'faq.q3': '你们与哪些类型的企业合作？',
    'faq.a3': '我们与各种规模的制造商、品牌和组织合作，帮助他们在加拿大和国际市场扩大业务。',
    'faq.q4': '通过你们的网络有哪些销售渠道？',
    'faq.a4': '我们的网络包括本地店铺、小型企业、精品健身房、社区领袖、连锁超市、亚马逊、Shopify、Etsy、eBay、Groupon等。',
    'faq.q5': '如何开始合作？',
    'faq.a5': '请通过support@Whisper2Owner.com联系我们，讨论您的业务需求并探索合作机会。',
    'faq.moreQuestions': '没有找到您的问题？',
    'faq.contactSupport': '联系客服',
    
    // Policies Page
    'policies.title': '政策条款',
    'policies.termsOfUse': '使用条款',
    'policies.privacyPolicy': '隐私政策',
    'policies.disclaimers': '免责声明',
    'policies.accessibility': '无障碍访问',
    'policies.cookiesPolicy': 'Cookie政策',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load saved language preference
    const saved = localStorage.getItem('whisper2owner-language') as Language;
    if (saved && (saved === 'en' || saved === 'zh')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('whisper2owner-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
