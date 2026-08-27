export type Language = 'sw' | 'en';
export type Theme = 'dark' | 'light';
export type Currency = 'TSH' | 'KES' | 'USD';

export interface SectionBadgeTitle {
  badge: string;
  title: string;
  subtitle: string;
}

export interface Translations {
  // Navigation
  nav: {
    home: string;
    features: string;
    programs: string;
    aiDeepDive: string;
    cyberDeepDive: string;
    digitalDeepDive: string;
    allPrograms: string;
    smartFramework: string;
    formats: string;
    organizations: string;
    resources: string;
    pricing: string;
    blog: string;
    about: string;
    contact: string;
    bookTraining: string;
    exploreAcademy: string;
    tagline: string;
    switchLang: string;
    switchTheme: string;
  };
  // Hero
  hero: {
    badge: string;
    badgeHighlight: string;
    headlineMain: string;
    headlineHighlight: string;
    subheadline: string;
    ctaExplore: string;
    ctaEnroll: string;
    ctaWatchTour: string;
    stat1Label: string;
    stat1Val: string;
    stat2Label: string;
    stat2Val: string;
    stat3Label: string;
    stat3Val: string;
    stat4Label: string;
    stat4Val: string;
    mobileMoneyNotice: string;
  };
  // Common UI
  common: {
    learnMore: string;
    viewDetails: string;
    enrollNow: string;
    bookTraining: string;
    getStarted: string;
    applyNow: string;
    inquireNow: string;
    downloadResource: string;
    readArticle: string;
    share: string;
    filterAll: string;
    searchPlaceholder: string;
    mostPopular: string;
    perMonth: string;
    free: string;
    customQuote: string;
    verifiedLearner: string;
    qrVerification: string;
    swahiliInstruction: string;
    englishInstruction: string;
    bilingual: string;
    close: string;
    backToHome: string;
    contactInstructor: string;
  };
  // Delivery & Formats
  delivery: {
    badge: string;
    title: string;
    subtitle: string;
    bandwidth: string;
    channel: string;
    idealFor: string;
    keyFeatures: string;
    investment: string;
    comparisonTitle: string;
    comparisonSubtitle: string;
  };
  formats: SectionBadgeTitle;
  // Programs & Smart
  programsSection: {
    badge: string;
    title: string;
    subtitle: string;
    viewAllCourses: string;
  };
  // AI & Swahili
  swahiliAi: {
    badge: string;
    title: string;
    subtitle: string;
    vibeCodingTitle: string;
    vibeCodingDesc: string;
    ctaMasterclass: string;
  };
  // Organizations
  organizations: SectionBadgeTitle;
  organizationsSection: {
    badge: string;
    title: string;
    subtitle: string;
    requestProposal: string;
  };
  // Packages & Process
  packages: SectionBadgeTitle;
  process: SectionBadgeTitle;
  whyUs: SectionBadgeTitle;
  socialProof: SectionBadgeTitle;
  resources: SectionBadgeTitle;
  blog: SectionBadgeTitle;
  about: SectionBadgeTitle;
  faq: SectionBadgeTitle;
  pricing: SectionBadgeTitle;
  // Footer
  footer: {
    about: string;
    quickLinks: string;
    programs: string;
    delivery: string;
    contactUs: string;
    rights: string;
    locationNote: string;
  };
}

export const translations: Record<Language, Translations> = {
  sw: {
    nav: {
      home: "Nyumbani",
      features: "Vipengele vya Jukwaa",
      programs: "Programu & Kozi",
      aiDeepDive: "Akili Mnemba (AI) & Uhandisi wa Maelekezo",
      cyberDeepDive: "Usalama Mtandaoni & Ulinzi wa Dijitali",
      digitalDeepDive: "Ujuzi wa Dijitali & Uundaji wa Wavuti",
      allPrograms: "Tazama Kozi Zote (30+)",
      smartFramework: "Mfumo wa SMART",
      formats: "Njia za Kujifunza",
      organizations: "Mashirika & Makampuni",
      resources: "Maktaba & Duka la Dijitali",
      pricing: "Mipango ya Bei",
      blog: "Makala & Maarifa",
      about: "Kuhusu Sisi",
      contact: "Mawasiliano",
      bookTraining: "Jiunge Sasa",
      exploreAcademy: "Gundua Mafunzo",
      tagline: "Kujenga Uwezo wa Kidijitali Afrika Mashariki",
      switchLang: "Badili Lugha",
      switchTheme: "Badili Muonekano"
    },
    hero: {
      badge: "JUKWAA LA KISASA LA KISWAHILI LA TEKNOLOJIA",
      badgeHighlight: "MPYA: Vibe Coding & AI",
      headlineMain: "GEUZA MAWAZO YAKO KUWA",
      headlineHighlight: "UJUZI WA DIJITALI",
      subheadline: "Jifunze AI, uundaji wa wavuti na usalama mtandaoni kwa miradi ya vitendo inayokusaidia kazini, kwenye biashara na kwenye maisha ya kila siku.",
      ctaExplore: "Anza Kujifunza Bure",
      ctaEnroll: "Jiunge na Darasa la Moja kwa Moja",
      ctaWatchTour: "Tazama Mwongozo wa Jukwaa",
      stat1Val: "1,200+",
      stat1Label: "Wanafunzi Waliohitimu",
      stat2Val: "30+",
      stat2Label: "Moduli za Vitendo",
      stat3Val: "100%",
      stat3Label: "Maudhui kwa Kiswahili",
      stat4Val: "4.9/5",
      stat4Label: "Kiwango cha Ubora",
      mobileMoneyNotice: "Malipo ya Papo Hapo kupitia M-Pesa, Tigo Pesa, Airtel Money & Kadi"
    },
    common: {
      learnMore: "Fahamu Zaidi",
      viewDetails: "Tazama Maelezo",
      enrollNow: "Jiunge na Kozi",
      bookTraining: "Omba Mafunzo",
      getStarted: "Anza Sasa",
      applyNow: "Tuma Maombi",
      inquireNow: "Uliza Kuhusu Mafunzo Haya",
      downloadResource: "Pakua Mwongozo (PDF)",
      readArticle: "Soma Makala Kamili",
      share: "Shiriki",
      filterAll: "Yote",
      searchPlaceholder: "Tafuta kozi, makala, au mwongozo...",
      mostPopular: "INAPENDELEWA ZAIDI",
      perMonth: "kwa mwezi",
      free: "Bure",
      customQuote: "Bei ya Makubaliano",
      verifiedLearner: "Mwanafunzi Aliyethibitishwa",
      qrVerification: "Cheti cha PDF Chenye Msimbo wa QR",
      swahiliInstruction: "Mafunzo kwa Kiswahili",
      englishInstruction: "Tafsiri & Istilahi za Kiingereza",
      bilingual: "Kiswahili & Kiingereza",
      close: "Funga",
      backToHome: "Rudi Nyumbani",
      contactInstructor: "Wasiliana na Mkufunzi"
    },
    delivery: {
      badge: "NJIA BONYE ZA MAFUNZO",
      title: "JIFUNZE POPOTE. UNGANIKA KWA NJIA YAKO.",
      subtitle: "Chagua muundo unaolingana na bajeti yako, upatikanaji wa intaneti, na ratiba ya kazi yako au shirika lako.",
      bandwidth: "Kiwango cha Data / Mtandao",
      channel: "Njia ya Mafunzo",
      idealFor: "Inamfaa Zaidi",
      keyFeatures: "Vipengele Muhimu",
      investment: "Gharama ya Mafunzo",
      comparisonTitle: "Linganisha Njia Zote 6 za Mafunzo",
      comparisonSubtitle: "Pata mchanganyiko sahihi wa muunganisho wa data na maingiliano ya moja kwa moja."
    },
    formats: {
      badge: "NJIA 6 ZA MAFUNZO",
      title: "JIFUNZE POPOTE. KWA RATIBA YAKO.",
      subtitle: "Kuanzia video za mtandaoni, mafunzo ya WhatsApp yasiyotumia data nyingi, hadi madarasa ya ana kwa ana na warsha za mashirika."
    },
    programsSection: {
      badge: "NGAZO ZA MAFUNZO",
      title: "TAALUMA ZINAZOTAFUTWA KWENYE SOKO LA KAZI",
      subtitle: "Mitaala iliyosanifiwa kukuwezesha kupata kazi, kuanzisha biashara binafsi ya kidijitali, au kuongeza ufanisi kazini.",
      viewAllCourses: "Tazama Mitaala Yote Kamili"
    },
    swahiliAi: {
      badge: "AI KWA MATUMIZI HALISI",
      title: "JENGA NA AI KWA KISWAHILI",
      subtitle: "Elewa AI kwa Kiswahili, tumia zana zake kwa usalama, na geuza mawazo yako kuwa kazi, ripoti na programu zenye matumizi halisi.",
      vibeCodingTitle: "Vibe Coding ni Nini?",
      vibeCodingDesc: "Mfumo mpya wa kutengeneza mifumo ya kompyuta na wavuti kwa kutumia maelekezo ya kawaida (Prompts) na AI badala ya kuandika maelfu ya mistari ya kodi kwa mikono.",
      ctaMasterclass: "Weka Nafasi ya Vibe Coding Masterclass"
    },
    organizations: {
      badge: "KWA MAKAMPUNI & TAASISI",
      title: "INUA UWEZO WA KIDIJITALI WA TIMU YAKO",
      subtitle: "Mafunzo maalum ya AI, Ulinzi wa Data, na Teknolojia kwa mabenki, serikali, vyuo vikuu, NGOs na wafanyabiashara."
    },
    organizationsSection: {
      badge: "KWA MAKAMPUNI & TAASISI",
      title: "INUA UWEZO WA KIDIJITALI WA TIMU YAKO",
      subtitle: "Mafunzo maalum ya AI, Ulinzi wa Data, na Teknolojia kwa mabenki, serikali, vyuo vikuu, NGOs na wafanyabiashara.",
      requestProposal: "Omba Pendekezo la Mafunzo ya Kampuni"
    },
    packages: {
      badge: "VIFURUSHI VYA MAFUNZO YA KITAALAMU",
      title: "MITAALA ILIYOSANIFIWA KWA MATOKEO YA HARAKA",
      subtitle: "Chagua kifurushi kilichoratibiwa mahususi kulingana na kiwango chako cha uzoefu na malengo yako ya kitaaluma."
    },
    process: {
      badge: "MCHAKATO WA KUJIFUNZA",
      title: "NJIA YAKO YA MAFANIKIO YA KIDIITALI",
      subtitle: "Hatua 4 rahisi kutoka kujiandikisha hadi kupokea cheti chako chenye msimbo wa QR na kuanza kazi."
    },
    whyUs: {
      badge: "KWANINI CS ACADEMY?",
      title: "JUKWAA LILILOJENGWA KWA AJILI YAKO",
      subtitle: "Tunaelewa changamoto za teknolojia Afrika Mashariki na tumejenga suluhu inayoweka lugha yako na mazingira yako mbele."
    },
    socialProof: {
      badge: "USHUHUDA WA WANAFUNZI NA TAASISI",
      title: "UJUZI UNAOBADILISHA MATOKEO",
      subtitle: "Kutoka portfolio ya kwanza hadi timu yenye ujasiri wa kutumia AI na kujilinda mtandaoni, haya ni matokeo ya kujifunza kwa vitendo."
    },
    resources: {
      badge: "MAKTABA YA VIFAA VYA BURE",
      title: "MIONGOZO YA KUPAKUA & VIOLEZO VYA AI",
      subtitle: "Pakua vitabu pepe, orodha za ukaguzi wa usalama, na miongozo ya kivitendo ili kuanza mara moja bila gharama."
    },
    blog: {
      badge: "MAKALA & MAARIFA YA KISASA",
      title: "UFAHAMU WA KINA KUHUSU TEKNOLOJIA & USALAMA",
      subtitle: "Soma makala za kitaalamu, uchambuzi wa AI barani Afrika, na mbinu za kujilinda mtandaoni."
    },
    about: {
      badge: "KUHUSU CS ACADEMY",
      title: "KUIWEZESHA AFRIKA MASHARIKI KWA UJUZI WA KIDIITALI",
      subtitle: "Dhamira yetu ni kuondoa vizuizi vya lugha na teknolojia ili kila mtu aweze kushiriki katika uchumi wa kidijitali."
    },
    faq: {
      badge: "MASWALI YANAYOULIZWA MARA KWA MARA",
      title: "UNA MASWALI? TUNA MAJIBU",
      subtitle: "Majibu ya kina kwa maswali ya kawaida kuhusu uandikishaji, malipo ya simu, vyeti, na muundo wa masomo."
    },
    pricing: {
      badge: "MIPANGO YA BEI & USAJILI",
      title: "CHAGUA MPANGO UNAOFAA BAJETI YAKO",
      subtitle: "Mipango ya wazi bila ada zilizojificha. Lipa kwa urahisi kupitia M-Pesa, Tigo Pesa, Airtel Money, au kadi."
    },
    footer: {
      about: "CS Academy ni jukwaa nambari moja Afrika Mashariki linalotoa mafunzo ya vitendo ya kiteknolojia na ulinzi mtandaoni kwa lugha ya Kiswahili.",
      quickLinks: "Viungo vya Haraka",
      programs: "Taaluma Zetu",
      delivery: "Njia za Kujifunza",
      contactUs: "Wasiliana Nasi",
      rights: "Haki Zote Zimehifadhiwa.",
      locationNote: "Tanzania • Kenya • Uganda • Rwanda • Burundi • DRC • Afrika Mashariki"
    }
  },
  en: {
    nav: {
      home: "Home",
      features: "Platform Features",
      programs: "Programs & Courses",
      aiDeepDive: "Artificial Intelligence & Prompt Engineering",
      cyberDeepDive: "Cybersecurity & Digital Trust",
      digitalDeepDive: "Digital Skills & Web Development",
      allPrograms: "View All 30+ Modules",
      smartFramework: "SMART Framework",
      formats: "Delivery Formats",
      organizations: "For Organizations",
      resources: "Resources & Digital Shop",
      pricing: "Pricing Plans",
      blog: "Blog & Insights",
      about: "About Us",
      contact: "Contact",
      bookTraining: "Enroll Now",
      exploreAcademy: "Explore Courses",
      tagline: "Empowering East Africa with Digital Skills",
      switchLang: "Switch Language",
      switchTheme: "Toggle Theme"
    },
    hero: {
      badge: "EAST AFRICA'S PREMIER TECH LEARNING PLATFORM",
      badgeHighlight: "NEW: Vibe Coding & AI",
      headlineMain: "TURN YOUR IDEAS INTO",
      headlineHighlight: "PRACTICAL DIGITAL SKILLS",
      subheadline: "Learn AI, web development, and cybersecurity through hands-on projects that help you move forward at work, in business, and in everyday life.",
      ctaExplore: "Start Free Learning",
      ctaEnroll: "Join Live Cohort",
      ctaWatchTour: "Explore Platform Tour",
      stat1Val: "1,200+",
      stat1Label: "Graduated Learners",
      stat2Val: "30+",
      stat2Label: "Hands-On Modules",
      stat3Val: "100%",
      stat3Label: "Swahili-First Content",
      stat4Val: "4.9/5",
      stat4Label: "Learner Rating",
      mobileMoneyNotice: "Instant Mobile Money Activation (M-Pesa, Tigo Pesa, Airtel Money & Card)"
    },
    common: {
      learnMore: "Learn More",
      viewDetails: "View Details",
      enrollNow: "Enroll in Course",
      bookTraining: "Book Training",
      getStarted: "Get Started",
      applyNow: "Apply Now",
      inquireNow: "Inquire About Training",
      downloadResource: "Download Guide (PDF)",
      readArticle: "Read Full Article",
      share: "Share",
      filterAll: "All",
      searchPlaceholder: "Search courses, guides, articles...",
      mostPopular: "MOST POPULAR",
      perMonth: "per month",
      free: "Free",
      customQuote: "Custom Quote",
      verifiedLearner: "Verified Learner",
      qrVerification: "Tamper-Proof QR PDF Certificate",
      swahiliInstruction: "Swahili Instruction",
      englishInstruction: "English Tech Terms & Glossary",
      bilingual: "Swahili & English",
      close: "Close",
      backToHome: "Back to Home",
      contactInstructor: "Contact Instructor"
    },
    delivery: {
      badge: "FLEXIBLE DELIVERY CHANNELS",
      title: "LEARN ANYWHERE. CONNECT YOUR WAY.",
      subtitle: "Choose the format that fits your team's geography, bandwidth, and learning style. Transparent pricing tailored to each delivery channel.",
      bandwidth: "Bandwidth / Setup",
      channel: "Delivery Channel",
      idealFor: "Ideal For",
      keyFeatures: "Key Features",
      investment: "Delivery Investment",
      comparisonTitle: "Compare All 6 Delivery Channels Side-by-Side",
      comparisonSubtitle: "Find the optimal balance between internet bandwidth and live interaction level."
    },
    formats: {
      badge: "6 DELIVERY CHANNELS",
      title: "LEARN ANYWHERE. ON YOUR SCHEDULE.",
      subtitle: "From low-bandwidth WhatsApp audio lessons to self-paced video streaming, live Zoom cohort bootcamps, and corporate retreats."
    },
    programsSection: {
      badge: "CORE PILLARS",
      title: "HIGH-DEMAND DIGITAL SKILLS FOR MODERN CAREERS",
      subtitle: "Curricula tailored to help you land tech jobs, start freelance businesses, or accelerate corporate productivity.",
      viewAllCourses: "Explore All Comprehensive Curricula"
    },
    swahiliAi: {
      badge: "AI IN PRACTICE",
      title: "BUILD WITH AI IN YOUR LANGUAGE",
      subtitle: "Learn AI in a clear Swahili-first context, use it safely, and turn everyday ideas into useful work, reports, and digital products.",
      vibeCodingTitle: "What is Vibe Coding?",
      vibeCodingDesc: "The modern paradigm of building full-stack web applications and software using natural language prompts and AI agents rather than manual boilerplate coding.",
      ctaMasterclass: "Reserve Vibe Coding Masterclass Seat"
    },
    organizations: {
      badge: "FOR CORPORATES & INSTITUTIONS",
      title: "ELEVATE YOUR WORKFORCE'S DIGITAL CAPABILITIES",
      subtitle: "Tailored AI, Cyber Safety, and Technology upskilling for Banks, Government bodies, Universities, NGOs, and Enterprises."
    },
    organizationsSection: {
      badge: "FOR CORPORATES & INSTITUTIONS",
      title: "ELEVATE YOUR WORKFORCE'S DIGITAL CAPABILITIES",
      subtitle: "Tailored AI, Cyber Safety, and Technology upskilling for Banks, Government bodies, Universities, NGOs, and Enterprises.",
      requestProposal: "Request Corporate Proposal"
    },
    packages: {
      badge: "PROFESSIONAL TRAINING PACKAGES",
      title: "CURATED TRACKS DESIGNED FOR RAPID IMPACT",
      subtitle: "Select a standardized skill package engineered for your team's exact career and technology milestones."
    },
    process: {
      badge: "LEARNING ROADMAP",
      title: "YOUR STEP-BY-STEP PATH TO MASTERY",
      subtitle: "4 structured phases from enrollment and hands-on practice to QR verification and career readiness."
    },
    whyUs: {
      badge: "WHY CS ACADEMY?",
      title: "BUILT SPECIFICALLY FOR EAST AFRICAN MINDS",
      subtitle: "Bridging the gap between world-class technology and native Swahili context with zero friction."
    },
    socialProof: {
      badge: "PROOF OF PRACTICAL PROGRESS",
      title: "SKILLS THAT CREATE REAL OUTCOMES",
      subtitle: "See how students, educators, professionals, and teams across East Africa turn practical learning into stronger work and new opportunities."
    },
    resources: {
      badge: "FREE OPEN TOOLKITS",
      title: "PRACTICAL GUIDES & PROMPT TEMPLATES",
      subtitle: "Download high-impact prompt guides, cybersecurity checklists, and curriculum starter templates at no cost."
    },
    blog: {
      badge: "ESSAYS & PRACTICAL INSIGHTS",
      title: "DEEP DIVES INTO TECH, AI & SECURITY",
      subtitle: "Read expert perspectives on East African digital transformation, ethical AI, and cyber defense."
    },
    about: {
      badge: "ABOUT CS ACADEMY",
      title: "EMPOWERING EAST AFRICA WITH DIGITAL MASTERY",
      subtitle: "Our mission is to eliminate language and cost barriers so everyone can participate in the digital economy."
    },
    faq: {
      badge: "FREQUENTLY ASKED QUESTIONS",
      title: "HAVE QUESTIONS? WE HAVE ANSWERS",
      subtitle: "Clear explanations regarding course formats, mobile money payment, certification, and team onboarding."
    },
    pricing: {
      badge: "PRICING & MEMBERSHIP PLANS",
      title: "TRANSPARENT TUITION FOR EVERY LEARNER",
      subtitle: "Simple, flexible plans with zero hidden fees. Pay seamlessly with M-Pesa, Tigo Pesa, Airtel Money, or credit card."
    },
    footer: {
      about: "CS Academy is East Africa's leading platform delivering practical technology education and cybersecurity resilience in Swahili.",
      quickLinks: "Quick Links",
      programs: "Our Programs",
      delivery: "Delivery Channels",
      contactUs: "Contact Us",
      rights: "All Rights Reserved.",
      locationNote: "Tanzania • Kenya • Uganda • Rwanda • Burundi • DRC • East Africa"
    }
  }
};
