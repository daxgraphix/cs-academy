export type Theme = 'dark' | 'light';
export type Currency = 'TSH' | 'KES' | 'USD';

export interface SectionBadgeTitle {
  badge: string;
  title: string;
  subtitle: string;
}

export interface Translations {
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
    vibeCoding: string;
    newBadge: string;
    mpesaBadge: string;
    corporateBadge: string;
    waQuickMessage: string;
    waUs: string;
    aiAcademyMobile: string;
    cyberAcademyMobile: string;
    digitalAcademyMobile: string;
  };
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
  programsSection: {
    badge: string;
    title: string;
    subtitle: string;
    viewAllCourses: string;
  };
  swahiliAi: {
    badge: string;
    title: string;
    subtitle: string;
    vibeCodingTitle: string;
    vibeCodingDesc: string;
    ctaMasterclass: string;
  };
  organizations: SectionBadgeTitle;
  organizationsSection: {
    badge: string;
    title: string;
    subtitle: string;
    requestProposal: string;
  };
  packages: SectionBadgeTitle;
  process: SectionBadgeTitle;
  whyUs: SectionBadgeTitle;
  socialProof: SectionBadgeTitle;
  resources: SectionBadgeTitle;
  blog: SectionBadgeTitle;
  about: SectionBadgeTitle;
  faq: SectionBadgeTitle;
  pricing: SectionBadgeTitle;
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

export const translations: Translations = {
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
    switchTheme: "Toggle Theme",
    vibeCoding: "Vibe Coding",
    newBadge: "NEW",
    mpesaBadge: "M-Pesa",
    corporateBadge: "Corporate",
    waQuickMessage: "Hello CS Academy, I would like to inquire about training programs.",
    waUs: "WhatsApp Us: {{number}}",
    aiAcademyMobile: "AI & Vibe Coding Academy",
    cyberAcademyMobile: "Cybersecurity Academy",
    digitalAcademyMobile: "Digital Skills & Web Development"
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
    locationNote: "Tanzania  |  Kenya  |  Uganda  |  Rwanda  |  Burundi  |  DRC  |  East Africa"
  }
};

export const translations_sw: Translations = {
  nav: {
    home: "Nyumbani",
    features: "Sifa za Jukwaa",
    programs: "Programu na Kozi",
    aiDeepDive: "Akili Mnemba (AI) na Amri",
    cyberDeepDive: "Usalama wa Mtandao na Imani ya Kidijitali",
    digitalDeepDive: "Ujuzi wa Kidijitali na Ujenzi wa Wavuti",
    allPrograms: "Tazama Moduli zote 30+",
    smartFramework: "Mfumo wa SMART",
    formats: "Njia za Mafunzo",
    organizations: "Kwa Mashirika",
    resources: "Rasilimali na Duka la Kidijitali",
    pricing: "Mipango ya Bei",
    blog: "Blogu na Maoni",
    about: "Kuhusu Sisi",
    contact: "Wasiliana Nasi",
    bookTraining: "Jiunge Sasa",
    exploreAcademy: "Chunguza Kozi",
    tagline: "Kuwawezesha Watu wa Afrika Mashariki na Ujuzi wa Kidijitali",
    switchLang: "Badili Lugha",
    switchTheme: "Badili Mandhari",
    vibeCoding: "Vibe Coding",
    newBadge: "MPYA",
    mpesaBadge: "M-Pesa",
    corporateBadge: "Kampuni",
    waQuickMessage: "Habari CS Academy, naomba maelezo kuhusu programu za mafunzo.",
    waUs: "Tuandikie WhatsApp: {{number}}",
    aiAcademyMobile: "Akademia ya AI na Vibe Coding",
    cyberAcademyMobile: "Akademia ya Usalama wa Mtandao",
    digitalAcademyMobile: "Ujuzi wa Kidijitali na Wavuti"
  },
  hero: {
    badge: "JUKWAA KIONGOZI LA MAFUNZO YA TEKNOLOJIA AFRIKA MASHARIKI",
    badgeHighlight: "MPYA: Vibe Coding na AI",
    headlineMain: "GEUZA MAWAZO YAKO KUWA",
    headlineHighlight: "UJUZI WA KIDIJITALI WA VITENDO",
    subheadline: "Jifunze AI, ujenzi wa wavuti, na usalama wa mtandao kupitia miradi ya vitendo inayokusaidia kusonga mbele kazini, katika biashara, na katika maisha ya kila siku.",
    ctaExplore: "Anza Kujifunza Bure",
    ctaEnroll: "Jiunge na Kikundi cha Moja kwa Moja",
    ctaWatchTour: "Angalia Jukwaa Lilivyo",
    stat1Val: "1,200+",
    stat1Label: "Wahitimu",
    stat2Val: "30+",
    stat2Label: "Moduli za Vitendo",
    stat3Val: "100%",
    stat3Label: "Maudhui ya Kiswahili",
    stat4Val: "4.9/5",
    stat4Label: "Ukadiriaji wa Wanafunzi",
    mobileMoneyNotice: "Uanzishaji wa Papo hapo kwa Pesa za Simu (M-Pesa, Tigo Pesa, Airtel Money na Kadi)"
  },
  common: {
    learnMore: "Jifunze Zaidi",
    viewDetails: "Tazama Maelezo",
    enrollNow: "Jiunge na Kozi",
    bookTraining: "Weka Nafasi ya Mafunzo",
    getStarted: "Anza Sasa",
    applyNow: "Omba Sasa",
    inquireNow: "Uliza Kuhusu Mafunzo",
    downloadResource: "Pakua Mwongozo (PDF)",
    readArticle: "Soma Makala Yote",
    share: "Shiriki",
    filterAll: "Zote",
    searchPlaceholder: "Tafuta kozi, miongozo, makala...",
    mostPopular: "MAARUFU ZAIDI",
    perMonth: "kwa mwezi",
    free: "Bure",
    customQuote: "Nukuu Maalum",
    verifiedLearner: "Mwanafunzi Aliyethibitishwa",
    qrVerification: "Cheti cha PDF cha QR kisichoingilika",
    swahiliInstruction: "Maelekezo ya Kiswahili",
    englishInstruction: "Istilahi za Kiufundi za Kiingereza",
    bilingual: "Kiswahili na Kiingereza",
    close: "Funga",
    backToHome: "Rudi Nyumbani",
    contactInstructor: "Wasiliana na Mkufunzi"
  },
  delivery: {
    badge: "NJIA NYUMBULIFU ZA MAFUNZO",
    title: "JIFUNZE POPOTE. JIUNGE KWA NJIA YAKO.",
    subtitle: "Chagua muundo unaofaa jiografia ya timu yako, kasi ya mtandao, na mtindo wa kujifunza. Bei wazi zilizoboreshwa kwa kila njia ya mafunzo.",
    bandwidth: "Mtandao / Usanidi",
    channel: "Njia ya Mafunzo",
    idealFor: "Inafaa Kwa",
    keyFeatures: "Sifa Muhimu",
    investment: "Gharama ya Mafunzo",
    comparisonTitle: "Linganisha Njia zote 6 za Mafunzo",
    comparisonSubtitle: "Pata uwiano bora kati ya kasi ya mtandao na kiwango cha mwingiliano wa moja kwa moja."
  },
  formats: {
    badge: "NJIA 6 ZA MAFUNZO",
    title: "JIFUNZE POPOTE. KWA RATIBA YAKO.",
    subtitle: "Kuanzia masomo ya sauti ya WhatsApp ya gharama nafuu hadi utiririshaji wa video wa kujisomea, kambi za mafunzo za Zoom, na mafunzo ofisini kwako."
  },
  programsSection: {
    badge: "NGUZO KUU",
    title: "UJUZI WA KIDIJITALI WENYE UHITAJI MKUBWA",
    subtitle: "Mitaala iliyoboreshwa kukusaidia kupata kazi za teknolojia, kuanza biashara za kujitegemea, au kuharakisha uzalishaji wa kampuni.",
    viewAllCourses: "Chunguza Mitaala Yote Kamili"
  },
  swahiliAi: {
    badge: "AI KATIKA VITENDO",
    title: "JENGA NA AI KWA LUGHA YAKO",
    subtitle: "Jifunze AI katika muktadha wa Kiswahili ulio wazi, itumie kwa salama, na geuza mawazo ya kila siku kuwa kazi, ripoti, na bidhaa za kidijitali.",
    vibeCodingTitle: "Vibe Coding ni nini?",
    vibeCodingDesc: "Mfumo wa kisasa wa kujenga programu za wavuti na programu kwa kutumia maelekezo ya lugha asilia na wasaidizi wa AI badala ya kuandika msimbo mwingi kwa mikono.",
    ctaMasterclass: "Weka Nafasi ya Masterclass ya Vibe Coding"
  },
  organizations: {
    badge: "KWA MAKAMPUNI NA TAASISI",
    title: "IMARISHA UWEZO WA KIDIJITALI WA WAFANYAKAZI WAKO",
    subtitle: "Mafunzo maalum ya AI, Usalama wa Mtandao, na Teknolojia kwa Benki, Idara za Serikali, Vyuo Vikuu, NGO, na Mashirika."
  },
  organizationsSection: {
    badge: "KWA MAKAMPUNI NA TAASISI",
    title: "IMARISHA UWEZO WA KIDIJITALI WA WAFANYAKAZI WAKO",
    subtitle: "Mafunzo maalum ya AI, Usalama wa Mtandao, na Teknolojia kwa Benki, Idara za Serikali, Vyuo Vikuu, NGO, na Mashirika.",
    requestProposal: "Omba Pendekezo la Mafunzo ya Kampuni"
  },
  packages: {
    badge: "VIFURUSHI VYA MAFUNZO YA KITAALAMU",
    title: "NJIA ZILIZOPANGILIWA KWA AJILI YA MATOKEO YA HARAKA",
    subtitle: "Chagua kifurushi cha ujuzi kilichosanifiwa kwa ajili ya malengo ya kazi na teknolojia ya timu yako."
  },
  process: {
    badge: "RAMANI YA MAFUNZO",
    title: "NJIA YAKO YA HATUA KWA HATUA KUELEKEA UMAHIRI",
    subtitle: "Awamu 4 zilizopangwa kuanzia kujiunga na mazoezi ya vitendo hadi uthibitisho wa QR na utayari wa kazi."
  },
  whyUs: {
    badge: "KWA NINI CS ACADEMY?",
    title: "IMEJENGWA MAALUM KWA AJILI YA WAAFRIKA MASHARIKI",
    subtitle: "Kuziba pengo kati ya teknolojia ya kiwango cha juu na muktadha wa asili wa Kiswahili bila vikwazo."
  },
  socialProof: {
    badge: "USHAHIDI WA MAENDELEO YA VITENDO",
    title: "UJUZI UNAOZALISHA MATOKEO HALISI",
    subtitle: "Ona jinsi wanafunzi, walimu, wataalamu, na timu kote Afrika Mashariki wanavyogeuza mafunzo ya vitendo kuwa kazi bora na fursa mpya."
  },
  resources: {
    badge: "VIFURUSHI VYA RATIBA BURE",
    title: "MIONGOZO YA VITENDO NA TEMPLETI ZA AMRI",
    subtitle: "Pakua miongozo ya amri zenye athari kubwa, orodha za uhakiki za usalama wa mtandao, na templeti za mitaala bila gharama."
  },
  blog: {
    badge: "MAKALA NA MAONI YA VITENDO",
    title: "UCHAMBUZI WA KINA WA TEKNOLOJIA, AI NA USALAMA",
    subtitle: "Soma maoni ya wataalamu kuhusu mabadiliko ya kidijitali Afrika Mashariki, AI ya kimaadili, na ulinzi wa mtandao."
  },
  about: {
    badge: "KUHUSU CS ACADEMY",
    title: "KUIWEZESHA AFRIKA MASHARIKI NA UMAHIRI WA KIDIJITALI",
    subtitle: "Dhamira yetu ni kuondoa vikwazo vya lugha na gharama ili kila mtu aweze kushiriki katika uchumi wa kidijitali."
  },
  faq: {
    badge: "MASWALI YANAYOULIZWA MARA KWA MARA",
    title: "UNA MASWALI? TUNA MAJIBU",
    subtitle: "Maelezo ya wazi kuhusu mifumo ya kozi, malipo ya pesa kwa simu, vyeti, na kujiunga kwa timu."
  },
  pricing: {
    badge: "MIPANGO YA BEI NA UANACHAMA",
    title: "GHARAMA WAZI ZA MAFUNZO KWA KILA MWANAFUNZI",
    subtitle: "Mipango rahisi bila ada zilizofichwa. Lipa kwa urahisi kwa M-Pesa, Tigo Pesa, Airtel Money, au kadi ya benki."
  },
  footer: {
    about: "CS Academy ni jukwaa kiongozi Afrika Mashariki linalotoa mafunzo ya teknolojia ya vitendo na ustahimilivu wa usalama wa mtandao kwa Kiswahili.",
    quickLinks: "Viungo vya Haraka",
    programs: "Programu Zetu",
    delivery: "Njia za Mafunzo",
    contactUs: "Wasiliana Nasi",
    rights: "Haki zote zimehifadhiwa.",
    locationNote: "Tanzania | Kenya | Uganda | Rwanda | Burundi | DRC | Afrika Mashariki"
  }
};

