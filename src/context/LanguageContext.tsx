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
    'salesNetwork.subtitle': 'End-to-end sales enablement for brands entering and expanding in the Canadian market.',
    
    // Value Proposition
    'salesNetwork.valueTitle': 'Your Strategic Sales Partner in Canada',
    'salesNetwork.valueDesc': 'We don\'t just connect you to channels—we build the infrastructure for sustainable sales growth. From market entry strategy to omnichannel execution, our integrated approach combines world-class consulting with cutting-edge technology to transform your products and services into market success stories.',
    
    // Capabilities
    'salesNetwork.capabilitiesTitle': 'Core Capabilities',
    'salesNetwork.capability.market': 'Market Entry Strategy',
    'salesNetwork.capability.market.desc': 'Comprehensive market analysis, competitive positioning, and go-to-market planning tailored to Canadian consumer behavior and regulatory requirements.',
    'salesNetwork.capability.channel': 'Channel Development',
    'salesNetwork.capability.channel.desc': 'Multi-channel distribution strategy spanning retail, wholesale, e-commerce, and direct-to-consumer models with established partner networks.',
    'salesNetwork.capability.brand': 'Brand Localization',
    'salesNetwork.capability.brand.desc': 'Cultural adaptation, bilingual marketing, and brand positioning that resonates with Canadian audiences across provinces and demographics.',
    'salesNetwork.capability.operations': 'Sales Operations',
    'salesNetwork.capability.operations.desc': 'End-to-end fulfillment, inventory management, customer service infrastructure, and performance analytics for scalable growth.',
    
    // Sales Channels
    'salesNetwork.channelsTitle': 'Sales Channels',
    'salesNetwork.channel.amazon': 'Amazon Canada',
    'salesNetwork.channel.amazon.desc': 'Full-service Amazon presence management, FBA optimization, and marketplace growth',
    'salesNetwork.channel.shopify': 'E-Commerce Stores',
    'salesNetwork.channel.shopify.desc': 'Shopify, WooCommerce, and custom D2C storefronts with integrated marketing',
    'salesNetwork.channel.retail': 'Retail Distribution',
    'salesNetwork.channel.retail.desc': 'National chains, regional retailers, and specialty boutiques across Canada',
    'salesNetwork.channel.wholesale': 'Wholesale Networks',
    'salesNetwork.channel.wholesale.desc': 'B2B distribution, bulk sales, and corporate partnerships',
    'salesNetwork.channel.marketplace': 'Marketplaces',
    'salesNetwork.channel.marketplace.desc': 'Etsy, eBay, Walmart, and emerging platform integration',
    'salesNetwork.channel.directSales': 'Direct Sales',
    'salesNetwork.channel.directSales.desc': 'Community-driven sales, affiliate programs, and influencer partnerships',
    
    // Industries
    'salesNetwork.industriesTitle': 'Industries We Serve',
    'salesNetwork.industriesDesc': 'Our expertise spans diverse sectors, enabling successful market entry for products and services across categories.',
    'salesNetwork.industry.food': 'Food & Beverage',
    'salesNetwork.industry.beauty': 'Beauty & Cosmetics',
    'salesNetwork.industry.health': 'Health & Wellness',
    'salesNetwork.industry.home': 'Home & Living',
    'salesNetwork.industry.fashion': 'Fashion & Apparel',
    'salesNetwork.industry.electronics': 'Electronics & Tech',
    'salesNetwork.industry.sports': 'Sports & Outdoors',
    'salesNetwork.industry.pet': 'Pet Products',
    
    // Strategic Partners
    'salesNetwork.partnersTitle': 'Strategic Partners',
    'salesNetwork.partnersSubtitle': 'We\'ve assembled a world-class ecosystem of partners to deliver comprehensive solutions—from strategic consulting to technical implementation.',
    
    // NRIDL
    'salesNetwork.nridl.title': 'NRIDL',
    'salesNetwork.nridl.type': 'Digital Transformation Consulting',
    'salesNetwork.nridl.desc': 'NRIDL is our strategic consulting partner specializing in digital transformation and business process optimization. As a non-profit organization dedicated to empowering businesses through technology adoption, NRIDL provides the strategic framework and change management expertise that enables organizations to modernize operations, optimize workflows, and achieve sustainable competitive advantages in the digital economy.',
    'salesNetwork.nridl.tag1': 'Digital Strategy',
    'salesNetwork.nridl.tag2': 'Process Optimization',
    'salesNetwork.nridl.tag3': 'Change Management',
    'salesNetwork.nridl.tag4': 'Business Analysis',
    
    // WTheory
    'salesNetwork.wtheory.title': 'WTheory',
    'salesNetwork.wtheory.type': 'Technology Implementation',
    'salesNetwork.wtheory.desc': 'WTheory is our technology implementation partner delivering enterprise-grade solutions for businesses of all sizes. From custom e-commerce platforms and Amazon storefront optimization to workflow automation and system integration, WTheory transforms strategic vision into operational reality with scalable, secure, and high-performance technology solutions.',
    'salesNetwork.wtheory.tag1': 'E-Commerce Development',
    'salesNetwork.wtheory.tag2': 'Amazon Integration',
    'salesNetwork.wtheory.tag3': 'Process Automation',
    'salesNetwork.wtheory.tag4': 'System Integration',
    
    // Why Choose Us
    'salesNetwork.whyUsTitle': 'The Whisper2Owner Advantage',
    'salesNetwork.whyUs.results': 'Results-Driven',
    'salesNetwork.whyUs.results.desc': 'We measure success by your sales growth. Our performance-oriented approach ensures every strategy translates to revenue.',
    'salesNetwork.whyUs.speed': 'Speed to Market',
    'salesNetwork.whyUs.speed.desc': 'Established networks and proven processes mean faster market entry and quicker time to first sale.',
    'salesNetwork.whyUs.reach': 'National Reach',
    'salesNetwork.whyUs.reach.desc': 'Coast-to-coast coverage with localized expertise in key markets across all Canadian provinces.',
    
    // CTA
    'salesNetwork.ctaTitle': 'Ready to Accelerate Your Canadian Sales?',
    'salesNetwork.ctaDesc': 'Let\'s discuss how our integrated approach can transform your market presence and drive sustainable growth in Canada.',
    'salesNetwork.contactUs': 'Start the Conversation',
    
    // Canada Funding Page
    'canadaFunding.title': 'Canada Funding',
    'canadaFunding.subtitle': 'Unlock over $5 billion in annual government funding programs designed to fuel your business growth in Canada.',
    
    // Funding Stats
    'funding.statsTitle': 'Canada Invests in Business Growth',
    'funding.statsDesc': 'The Canadian government offers one of the world\'s most generous business support ecosystems. From R&D tax credits to export grants, these programs are designed to help businesses like yours succeed.',
    'funding.stat.annual': 'Annual Funding Available',
    'funding.stat.programs': 'Active Funding Programs',
    'funding.stat.srnd': 'SR&ED Tax Credit Rate',
    'funding.stat.wage': 'Max Wage Subsidy',
    
    // Federal Programs
    'funding.federal.title': 'Federal Government Programs',
    'funding.federal.subtitle': 'National programs available to businesses across Canada',
    'funding.federal.srnd': 'SR&ED Tax Credit',
    'funding.federal.srnd.desc': 'Scientific Research & Experimental Development tax incentive program—Canada\'s largest R&D support program offering refundable tax credits for innovation activities.',
    'funding.federal.irap': 'NRC-IRAP',
    'funding.federal.irap.desc': 'National Research Council\'s Industrial Research Assistance Program provides funding and advisory services for technology-driven SMEs.',
    'funding.federal.canexport': 'CanExport SMEs',
    'funding.federal.canexport.desc': 'Export development funding for small and medium businesses looking to expand into international markets.',
    'funding.federal.swp': 'Student Work Placement',
    'funding.federal.swp.desc': 'Wage subsidies for employers hiring post-secondary students in work-integrated learning opportunities.',
    'funding.federal.futurpreneur': 'Futurpreneur Canada',
    'funding.federal.futurpreneur.desc': 'Startup loans and mentorship for young entrepreneurs aged 18-39 launching new businesses.',
    'funding.federal.wes': 'Women Entrepreneurship Strategy',
    'funding.federal.wes.desc': 'Dedicated funding stream supporting women-owned and women-led businesses across Canada.',
    
    // Provincial Programs
    'funding.provincial.title': 'Provincial Programs',
    'funding.provincial.subtitle': 'Region-specific incentives and tax credits',
    'funding.provincial.oitc': 'Ontario Innovation Tax Credit',
    'funding.provincial.oitc.desc': 'Refundable tax credit of up to 10% on eligible R&D expenditures for Ontario-based corporations.',
    'funding.provincial.oidmtc': 'Ontario Interactive Digital Media Tax Credit',
    'funding.provincial.oidmtc.desc': 'Up to 40% refundable tax credit for interactive digital media products developed in Ontario.',
    'funding.provincial.bctech': 'BC Tech Fund',
    'funding.provincial.bctech.desc': 'Venture capital and growth funding for technology companies based in British Columbia.',
    'funding.provincial.alberta': 'Alberta Innovates',
    'funding.provincial.alberta.desc': 'Comprehensive innovation funding including grants, vouchers, and investment programs for Alberta businesses.',
    'funding.provincial.quebec': 'Investissement Québec',
    'funding.provincial.quebec.desc': 'Loans, loan guarantees, and equity investments for businesses operating in Quebec.',
    'funding.provincial.novascotia': 'Innovacorp Nova Scotia',
    'funding.provincial.novascotia.desc': 'Early-stage venture capital and incubation services for high-growth startups in Nova Scotia.',
    
    // Municipal Programs
    'funding.municipal.title': 'Municipal Programs',
    'funding.municipal.subtitle': 'City-level grants and incentives',
    'funding.municipal.toronto': 'Toronto Business Development',
    'funding.municipal.toronto.desc': 'Small business grants, property tax incentives, and startup accelerator programs in the GTA.',
    'funding.municipal.vancouver': 'Vancouver Economic Commission',
    'funding.municipal.vancouver.desc': 'Business development grants and green business incentives for Vancouver-based companies.',
    'funding.municipal.calgary': 'Calgary Economic Development',
    'funding.municipal.calgary.desc': 'Startup funding, relocation incentives, and industry-specific grants for Calgary businesses.',
    'funding.municipal.montreal': 'PME MTL',
    'funding.municipal.montreal.desc': 'Business loans, grants, and technical assistance for Montreal entrepreneurs and SMEs.',
    
    // Industry Categories
    'funding.industryTitle': 'Funding by Industry',
    'funding.industryDesc': 'Specialized programs exist for specific sectors. Find the funding streams most relevant to your business.',
    'funding.industry.tech': 'Technology & Software',
    'funding.industry.tech.programs': 'SR&ED, IRAP, OIDMTC, Venture Capital programs',
    'funding.industry.manufacturing': 'Manufacturing',
    'funding.industry.manufacturing.programs': 'CME grants, automation credits, export support',
    'funding.industry.cleantech': 'Clean Technology',
    'funding.industry.cleantech.programs': 'SDTC, Green bonds, carbon credit programs',
    'funding.industry.retail': 'Retail & E-Commerce',
    'funding.industry.retail.programs': 'Digital adoption grants, export programs',
    'funding.industry.healthcare': 'Healthcare & Life Sciences',
    'funding.industry.healthcare.programs': 'CIHR grants, provincial health innovation funds',
    'funding.industry.agrifood': 'Agriculture & Food',
    'funding.industry.agrifood.programs': 'AgriInnovate, food processing grants',
    'funding.industry.education': 'Education & Training',
    'funding.industry.education.programs': 'Skills development grants, EdTech funding',
    'funding.industry.professional': 'Professional Services',
    'funding.industry.professional.programs': 'Export development, digital adoption',
    
    // How We Help
    'funding.helpTitle': 'How We Help You Access Funding',
    'funding.help.assess': 'Eligibility Assessment',
    'funding.help.assess.desc': 'We analyze your business profile, activities, and expenditures to identify all applicable funding programs.',
    'funding.help.match': 'Program Matching',
    'funding.help.match.desc': 'Our experts match your business to the optimal combination of federal, provincial, and municipal programs.',
    'funding.help.apply': 'Application Support',
    'funding.help.apply.desc': 'We guide you through the application process, documentation, and compliance requirements.',
    
    // CTA
    'funding.ctaTitle': 'Discover Your Funding Potential',
    'funding.ctaDesc': 'Most businesses qualify for multiple funding programs but never apply. Let us help you unlock the capital available to grow your business in Canada.',
    'funding.ctaButton': 'Get a Free Assessment',
    
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
    'salesNetwork.subtitle': '为进入和拓展加拿大市场的品牌提供端到端销售赋能服务。',
    
    // Value Proposition
    'salesNetwork.valueTitle': '您在加拿大的战略销售伙伴',
    'salesNetwork.valueDesc': '我们不仅仅是连接渠道——我们构建可持续销售增长的基础设施。从市场进入策略到全渠道执行，我们的整合方法将世界一流的咨询服务与尖端技术相结合，将您的产品和服务转化为市场成功案例。',
    
    // Capabilities
    'salesNetwork.capabilitiesTitle': '核心能力',
    'salesNetwork.capability.market': '市场进入策略',
    'salesNetwork.capability.market.desc': '针对加拿大消费者行为和监管要求量身定制的全面市场分析、竞争定位和市场推广规划。',
    'salesNetwork.capability.channel': '渠道开发',
    'salesNetwork.capability.channel.desc': '涵盖零售、批发、电子商务和直接面向消费者模式的多渠道分销策略，拥有成熟的合作伙伴网络。',
    'salesNetwork.capability.brand': '品牌本地化',
    'salesNetwork.capability.brand.desc': '文化适应、双语营销和品牌定位，与加拿大各省份和人群产生共鸣。',
    'salesNetwork.capability.operations': '销售运营',
    'salesNetwork.capability.operations.desc': '端到端履约、库存管理、客户服务基础设施和绩效分析，实现可扩展增长。',
    
    // Sales Channels
    'salesNetwork.channelsTitle': '销售渠道',
    'salesNetwork.channel.amazon': '亚马逊加拿大',
    'salesNetwork.channel.amazon.desc': '全方位亚马逊运营管理、FBA优化和市场增长',
    'salesNetwork.channel.shopify': '电商店铺',
    'salesNetwork.channel.shopify.desc': 'Shopify、WooCommerce和定制D2C店铺，整合营销',
    'salesNetwork.channel.retail': '零售分销',
    'salesNetwork.channel.retail.desc': '全国连锁、区域零售商和加拿大各地的专卖店',
    'salesNetwork.channel.wholesale': '批发网络',
    'salesNetwork.channel.wholesale.desc': 'B2B分销、批量销售和企业合作',
    'salesNetwork.channel.marketplace': '电商平台',
    'salesNetwork.channel.marketplace.desc': 'Etsy、eBay、Walmart和新兴平台整合',
    'salesNetwork.channel.directSales': '直销',
    'salesNetwork.channel.directSales.desc': '社区驱动销售、联盟计划和网红合作',
    
    // Industries
    'salesNetwork.industriesTitle': '服务行业',
    'salesNetwork.industriesDesc': '我们的专业知识涵盖多个领域，助力各类产品和服务成功进入市场。',
    'salesNetwork.industry.food': '食品饮料',
    'salesNetwork.industry.beauty': '美妆护肤',
    'salesNetwork.industry.health': '健康保健',
    'salesNetwork.industry.home': '家居生活',
    'salesNetwork.industry.fashion': '时尚服饰',
    'salesNetwork.industry.electronics': '电子科技',
    'salesNetwork.industry.sports': '运动户外',
    'salesNetwork.industry.pet': '宠物用品',
    
    // Strategic Partners
    'salesNetwork.partnersTitle': '战略合作伙伴',
    'salesNetwork.partnersSubtitle': '我们汇集了世界一流的合作伙伴生态系统，从战略咨询到技术实施，提供全面解决方案。',
    
    // NRIDL
    'salesNetwork.nridl.title': 'NRIDL',
    'salesNetwork.nridl.type': '数字化转型咨询',
    'salesNetwork.nridl.desc': 'NRIDL是我们专注于数字化转型和业务流程优化的战略咨询合作伙伴。作为一家致力于通过技术赋能企业的非营利组织，NRIDL提供战略框架和变革管理专业知识，帮助组织实现运营现代化、优化工作流程，并在数字经济中获得可持续的竞争优势。',
    'salesNetwork.nridl.tag1': '数字战略',
    'salesNetwork.nridl.tag2': '流程优化',
    'salesNetwork.nridl.tag3': '变革管理',
    'salesNetwork.nridl.tag4': '业务分析',
    
    // WTheory
    'salesNetwork.wtheory.title': 'WTheory',
    'salesNetwork.wtheory.type': '技术实施',
    'salesNetwork.wtheory.desc': 'WTheory是我们的技术实施合作伙伴，为各种规模的企业提供企业级解决方案。从定制电商平台和亚马逊店铺优化，到工作流程自动化和系统集成，WTheory以可扩展、安全和高性能的技术解决方案将战略愿景转化为运营现实。',
    'salesNetwork.wtheory.tag1': '电商开发',
    'salesNetwork.wtheory.tag2': '亚马逊整合',
    'salesNetwork.wtheory.tag3': '流程自动化',
    'salesNetwork.wtheory.tag4': '系统集成',
    
    // Why Choose Us
    'salesNetwork.whyUsTitle': 'Whisper2Owner优势',
    'salesNetwork.whyUs.results': '结果导向',
    'salesNetwork.whyUs.results.desc': '我们以您的销售增长来衡量成功。我们的绩效导向方法确保每一项策略都能转化为收入。',
    'salesNetwork.whyUs.speed': '快速上市',
    'salesNetwork.whyUs.speed.desc': '成熟的网络和经过验证的流程意味着更快的市场进入和更短的首次销售时间。',
    'salesNetwork.whyUs.reach': '全国覆盖',
    'salesNetwork.whyUs.reach.desc': '覆盖加拿大全境，在各省主要市场拥有本地化专业知识。',
    
    // CTA
    'salesNetwork.ctaTitle': '准备好加速您的加拿大销售了吗？',
    'salesNetwork.ctaDesc': '让我们讨论我们的整合方法如何转变您的市场地位，并在加拿大推动可持续增长。',
    'salesNetwork.contactUs': '开始对话',
    
    // Canada Funding Page
    'canadaFunding.title': '政府补助',
    'canadaFunding.subtitle': '解锁每年超过50亿加元的政府资助计划，助力您在加拿大的业务增长。',
    
    // Funding Stats
    'funding.statsTitle': '加拿大投资企业发展',
    'funding.statsDesc': '加拿大政府提供世界上最慷慨的企业支持生态系统之一。从研发税收抵免到出口补助，这些计划旨在帮助像您这样的企业取得成功。',
    'funding.stat.annual': '年度可用资金',
    'funding.stat.programs': '活跃资助计划',
    'funding.stat.srnd': 'SR&ED税收抵免率',
    'funding.stat.wage': '最高工资补贴',
    
    // Federal Programs
    'funding.federal.title': '联邦政府计划',
    'funding.federal.subtitle': '适用于加拿大全国企业的国家级计划',
    'funding.federal.srnd': 'SR&ED税收抵免',
    'funding.federal.srnd.desc': '科学研究与实验开发税收激励计划——加拿大最大的研发支持计划，为创新活动提供可退还的税收抵免。',
    'funding.federal.irap': 'NRC-IRAP',
    'funding.federal.irap.desc': '国家研究委员会工业研究援助计划，为技术驱动型中小企业提供资金和咨询服务。',
    'funding.federal.canexport': 'CanExport中小企业',
    'funding.federal.canexport.desc': '为希望拓展国际市场的中小企业提供出口发展资金。',
    'funding.federal.swp': '学生工作实习计划',
    'funding.federal.swp.desc': '为雇用高等院校学生参与工学结合学习的雇主提供工资补贴。',
    'funding.federal.futurpreneur': 'Futurpreneur Canada',
    'funding.federal.futurpreneur.desc': '为18-39岁创业青年提供创业贷款和导师指导。',
    'funding.federal.wes': '女性创业战略',
    'funding.federal.wes.desc': '专门支持加拿大女性拥有和女性领导企业的资助渠道。',
    
    // Provincial Programs
    'funding.provincial.title': '省级计划',
    'funding.provincial.subtitle': '特定地区的激励措施和税收抵免',
    'funding.provincial.oitc': '安大略创新税收抵免',
    'funding.provincial.oitc.desc': '安大略省企业符合条件的研发支出可获得高达10%的可退还税收抵免。',
    'funding.provincial.oidmtc': '安大略互动数字媒体税收抵免',
    'funding.provincial.oidmtc.desc': '在安大略省开发的互动数字媒体产品可获得高达40%的可退还税收抵免。',
    'funding.provincial.bctech': 'BC科技基金',
    'funding.provincial.bctech.desc': '为不列颠哥伦比亚省的科技公司提供风险投资和成长资金。',
    'funding.provincial.alberta': 'Alberta Innovates',
    'funding.provincial.alberta.desc': '为阿尔伯塔省企业提供全面的创新资金，包括补助金、代金券和投资计划。',
    'funding.provincial.quebec': 'Investissement Québec',
    'funding.provincial.quebec.desc': '为在魁北克省运营的企业提供贷款、贷款担保和股权投资。',
    'funding.provincial.novascotia': 'Innovacorp Nova Scotia',
    'funding.provincial.novascotia.desc': '为新斯科舍省高成长初创企业提供早期风险投资和孵化服务。',
    
    // Municipal Programs
    'funding.municipal.title': '市级计划',
    'funding.municipal.subtitle': '城市级补助金和激励措施',
    'funding.municipal.toronto': '多伦多商业发展',
    'funding.municipal.toronto.desc': '大多伦多地区的小企业补助金、房产税优惠和创业加速器计划。',
    'funding.municipal.vancouver': '温哥华经济委员会',
    'funding.municipal.vancouver.desc': '为温哥华企业提供商业发展补助金和绿色企业激励措施。',
    'funding.municipal.calgary': '卡尔加里经济发展',
    'funding.municipal.calgary.desc': '为卡尔加里企业提供创业资金、迁移激励和行业特定补助。',
    'funding.municipal.montreal': 'PME MTL',
    'funding.municipal.montreal.desc': '为蒙特利尔企业家和中小企业提供商业贷款、补助金和技术援助。',
    
    // Industry Categories
    'funding.industryTitle': '按行业分类的资助',
    'funding.industryDesc': '特定行业有专门的计划。找到与您业务最相关的资助渠道。',
    'funding.industry.tech': '技术与软件',
    'funding.industry.tech.programs': 'SR&ED、IRAP、OIDMTC、风险投资计划',
    'funding.industry.manufacturing': '制造业',
    'funding.industry.manufacturing.programs': 'CME补助、自动化抵免、出口支持',
    'funding.industry.cleantech': '清洁技术',
    'funding.industry.cleantech.programs': 'SDTC、绿色债券、碳信用计划',
    'funding.industry.retail': '零售与电子商务',
    'funding.industry.retail.programs': '数字化采用补助、出口计划',
    'funding.industry.healthcare': '医疗保健与生命科学',
    'funding.industry.healthcare.programs': 'CIHR补助、省级健康创新基金',
    'funding.industry.agrifood': '农业与食品',
    'funding.industry.agrifood.programs': 'AgriInnovate、食品加工补助',
    'funding.industry.education': '教育与培训',
    'funding.industry.education.programs': '技能发展补助、教育科技资金',
    'funding.industry.professional': '专业服务',
    'funding.industry.professional.programs': '出口发展、数字化采用',
    
    // How We Help
    'funding.helpTitle': '我们如何帮助您获得资助',
    'funding.help.assess': '资格评估',
    'funding.help.assess.desc': '我们分析您的企业概况、活动和支出，以确定所有适用的资助计划。',
    'funding.help.match': '计划匹配',
    'funding.help.match.desc': '我们的专家将您的企业与联邦、省级和市级计划的最佳组合进行匹配。',
    'funding.help.apply': '申请支持',
    'funding.help.apply.desc': '我们指导您完成申请流程、文件准备和合规要求。',
    
    // CTA
    'funding.ctaTitle': '发现您的资助潜力',
    'funding.ctaDesc': '大多数企业符合多个资助计划的条件，但从未申请过。让我们帮助您解锁可用于在加拿大发展业务的资金。',
    'funding.ctaButton': '获取免费评估',
    
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
