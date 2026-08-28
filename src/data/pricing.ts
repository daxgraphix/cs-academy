import { PricingPlan } from '../types';

export const pricingPlansData: PricingPlan[] = [
  {
    id: 'whatsapp-tier',
    name: 'WhatsApp Micro-Learning',
    name_sw: 'Mafunzo ya WhatsApp',
    deliveryChannel: 'WhatsApp Micro-Learning',
    deliveryChannel_sw: 'Mafunzo ya Kijitali ya WhatsApp',
    deliveryType: 'mobile-first',
    badge: 'DATA SAVER (2G/3G)',
    badge_sw: 'UNAFUU WA DATA (2G/3G)',
    tagline: 'Learn daily technology lessons directly in your WhatsApp inbox.',
    tagline_sw: 'Jifunze masomo ya kila siku ya teknolojia moja kwa moja kwenye WhatsApp yako.',
    priceTsh: '5,000',
    priceKes: '250',
    priceUsd: '2',
    billingPeriod: 'per month',
    billingPeriod_sw: 'kwa mwezi',
    bandwidthRequirement: 'Ultra-Low Data (~5MB / day)',
    bandwidthRequirement_sw: 'Data Kidogo Sana (~5MB / siku)',
    popular: false,
    features: [
      'Daily 5-minute Swahili audio lessons & summaries',
      'Downloadable PDF prompt cards & code cheat-sheets',
      'Private WhatsApp study cohort group discussions',
      'Weekly voice note Q&A with instructors',
      'Eligible for Invite & Earn cash referrals'
    ],
    features_sw: [
      'Masomo ya sauti ya dakika 5 ya kila siku na muhtasari kwa Kiswahili',
      'Kadi za amri za PDF zinazopakuliwa na miongozo ya haraka ya msimbo',
      'Mijadala ya kikundi cha masomo ya faragha ya WhatsApp',
      'Maswali na majibu ya kila wiki kwa ujumbe wa sauti na wakufunzi',
      'Unaweza kushiriki katika mpango wa Alika na Upate pesa'
    ],
    notIncluded: [
      'Full HD video streaming course library',
      'Interactive graded module quizzes',
      'Verifiable QR PDF Certificate',
      'Live Zoom/Google Meet video screen-sharing'
    ],
    notIncluded_sw: [
      'Maktaba kamili ya kozi za video za HD',
      'Maswali ya moduli yanayokadiriwa ya mwingiliano',
      'Cheti cha PDF cha QR kinachothibitika',
      'Ushiriki wa skrini wa video wa Zoom/Google Meet moja kwa moja'
    ],
    ctaText: 'Join WhatsApp Cohort',
    ctaText_sw: 'Jiunge na Kikundi cha WhatsApp',
    highlightNote: 'Zero internet friction  |  Pay with M-Pesa / Tigo Pesa',
    highlightNote_sw: 'Hakuna kikwazo cha mtandao | Lipa kwa M-Pesa / Tigo Pesa'
  },
  {
    id: 'self-paced-platform',
    name: 'Self-Paced Video Platform',
    name_sw: 'Jukwaa la Video la Kujisomea',
    deliveryChannel: 'On-Demand Web & Mobile App',
    deliveryChannel_sw: 'Tovuti na Programu ya Simu',
    deliveryType: 'self-paced',
    badge: 'FLEXIBLE SCHEDULE',
    badge_sw: 'RATIBA INAYOBADILIKA',
    tagline: 'Learn at your own pace with full access to all Swahili video tracks.',
    tagline_sw: 'Jifunze kwa kasi yako mwenyewe kwa ufikiaji kamili wa video zote za Kiswahili.',
    priceTsh: '15,000',
    priceKes: '800',
    priceUsd: '6',
    billingPeriod: 'per month',
    billingPeriod_sw: 'kwa mwezi',
    bandwidthRequirement: 'Standard 3G/4G/WiFi',
    bandwidthRequirement_sw: 'Kawaida 3G/4G/WiFi',
    popular: false,
    features: [
      'Unlimited access to ALL video tracks (Web, AI, Design, Cyber)',
      'Scored quizzes & interactive module knowledge tests',
      'Official PDF Certificate with tamper-proof QR verification',
      'Full Digital Shop access (Ebooks, UI Kits & Prompt Packs)',
      'Course project files, assets & source code downloads',
      'Instant Mobile Money activation (M-Pesa, Tigo, Airtel)'
    ],
    features_sw: [
      'Ufikiaji usio na kikomo wa video zote (Tovuti, AI, Ubunifu, Usalama)',
      'Maswali ya kupima uelewa na majaribio ya moduli ya mwingiliano',
      'Cheti rasmi cha PDF chenye uthibitisho wa QR usioingilika',
      'Ufikiaji kamili wa Duka la Kidijitali (Vitabu, Zana za UI na Vifurushi vya Amri)',
      'Faili za mradi wa kozi, nyenzo na upakuaji wa msimbo wa chanzo',
      'Uanzishaji wa papo hapo kwa Pesa za Simu (M-Pesa, Tigo, Airtel)'
    ],
    notIncluded: [
      'Weekly live interactive Zoom/Meet coaching',
      '1-on-1 personalized portfolio review'
    ],
    notIncluded_sw: [
      'Mafunzo ya kila wiki ya Zoom/Meet ya mwingiliano wa moja kwa moja',
      'Ukaguzi wa kazi zako (portfolio) binafsi wa 1-kwa-1'
    ],
    ctaText: 'Start On-Demand Video',
    ctaText_sw: 'Anza Video za Kujisomea',
    highlightNote: 'Study anytime, anywhere on any device',
    highlightNote_sw: 'Soma wakati wowote, mahali popote kwenye kifaa chochote'
  },
  {
    id: 'zoom-live-cohort',
    name: 'Zoom & Meet Live Cohorts',
    name_sw: 'Vikundi vya Zoom na Meet vya Moja kwa Moja',
    deliveryChannel: 'Zoom & Google Meet Live Virtual',
    deliveryChannel_sw: 'Zoom na Google Meet za Moja kwa Moja',
    deliveryType: 'virtual-live',
    badge: 'MOST POPULAR  |  LIVE INTERACTION',
    badge_sw: 'MAARUFU ZAIDI | MWINGILIANO WA MOJA KWA MOJA',
    tagline: 'Live interactive classes with real-time screen sharing and Vibe Coding.',
    tagline_sw: 'Madarasa ya mwingiliano ya moja kwa moja na ushiriki wa skrini na Vibe Coding.',
    priceTsh: '35,000',
    priceKes: '1,900',
    priceUsd: '14',
    billingPeriod: 'per month',
    billingPeriod_sw: 'kwa mwezi',
    bandwidthRequirement: 'Broadband / 4G Live Stream',
    bandwidthRequirement_sw: 'Broadband / 4G Utiririshaji wa Moja kwa Moja',
    popular: true,
    features: [
      'Everything in Self-Paced Video Platform included',
      '2x Weekly live interactive sessions on Zoom & Google Meet',
      'Live screen sharing, live prompt critiques & Vibe Coding',
      'Breakout rooms for hands-on collaborative exercises',
      'Lifetime access to all HD session recordings',
      'Direct WhatsApp Mentor line with instructor Alex Rweyemamu',
      'Verifiable QR PDF Certificate upon cohort completion'
    ],
    features_sw: [
      'Kila kitu kwenye Jukwaa la Video la Kujisomea kimejumuishwa',
      'Vipindi 2 vya kila wiki vya mwingiliano wa moja kwa moja kwenye Zoom & Google Meet',
      'Ushiriki wa skrini moja kwa moja, uhakiki wa amri na Vibe Coding',
      'Vyumba vya majadiliano kwa mazoezi ya ushirikiano ya vitendo',
      'Ufikiaji wa maisha wa rekodi zote za vipindi za HD',
      'Njia ya moja kwa moja ya Mshauri ya WhatsApp na mkufunzi Alex Rweyemamu',
      'Cheti cha PDF cha QR kinachothibitika baada ya kumaliza kikundi'
    ],
    ctaText: 'Enroll in Live Cohort',
    ctaText_sw: 'Jiunge na Kikundi cha Moja kwa Moja',
    highlightNote: 'Live Q&A and instant instructor feedback',
    highlightNote_sw: 'Maswali na Majibu ya moja kwa moja na maoni ya papo hapo ya mkufunzi'
  },
  {
    id: 'annual-all-access',
    name: 'VIP Annual Pass (All Channels)',
    name_sw: 'VIP Annual Pass (Njia Zote)',
    deliveryChannel: 'All Delivery Channels Included',
    deliveryChannel_sw: 'Njia Zote za Mafunzo Zimejumuishwa',
    deliveryType: 'self-paced',
    badge: 'BEST VALUE (2 MONTHS FREE)',
    badge_sw: 'THAMANI BORA (MIEZI 2 BURE)',
    tagline: 'The complete 360° technology immersion across all delivery formats.',
    tagline_sw: 'Mafunzo kamili ya teknolojia ya 360° katika miundo yote ya mafunzo.',
    priceTsh: '120,000',
    priceKes: '6,400',
    priceUsd: '48',
    billingPeriod: 'per year',
    billingPeriod_sw: 'kwa mwaka',
    bandwidthRequirement: 'Adaptive to any connection',
    bandwidthRequirement_sw: 'Inaendana na muunganisho wowote',
    popular: false,
    features: [
      'Full 12-month access to Video Platform & WhatsApp Micro-learning',
      'Free seat in all upcoming Zoom & Google Meet live cohorts',
      'Priority 1-on-1 portfolio and CV review by lead instructors',
      'VIP Digital Shop pass (all current and future templates free)',
      'Early access to new courses before public release',
      'Direct WhatsApp instructor mentor channel'
    ],
    features_sw: [
      'Ufikiaji kamili wa miezi 12 wa Jukwaa la Video na Mafunzo ya WhatsApp',
      'Nafasi ya bure katika vikundi vyote vijavyo vya Zoom & Google Meet vya moja kwa moja',
      'Ukaguzi wa kipaumbele wa kazi (portfolio) na CV wa 1-kwa-1 na wakufunzi wakuu',
      'Pasi ya VIP ya Duka la Kidijitali (violezo vyote vya sasa na zijazo ni bure)',
      'Ufikiaji wa mapema wa kozi mpya kabla ya kutolewa kwa umma',
      'Njia ya moja kwa moja ya mshauri wa mkufunzi ya WhatsApp'
    ],
    ctaText: 'Get VIP 1-Year Pass',
    ctaText_sw: 'Pata Pasi ya VIP ya Mwaka 1',
    highlightNote: 'Save 60,000 Tsh  |  Complete Career Transformation',
    highlightNote_sw: 'Okoa Tsh 60,000 | Mabadiliko Kamili ya Kazi'
  },
  {
    id: 'workshops-delivery',
    name: 'Workshops & Seminars',
    name_sw: 'Warsha na Semina',
    deliveryChannel: 'Workshops & Seminars (Half/Full Day)',
    deliveryChannel_sw: 'Warsha na Semina (Nusu/Siku Nzima)',
    deliveryType: 'in-person-workshop',
    badge: 'INSTITUTIONAL / HYBRID',
    badge_sw: 'KITAASISI / MSETO',
    tagline: 'Action-oriented deep dives producing concrete deliverables for teams.',
    tagline_sw: 'Mafunzo ya kina yanayolenga vitendo yanayozalisha matokeo thabiti kwa timu.',
    priceTsh: '450,000',
    priceKes: '24,000',
    priceUsd: '180',
    billingPeriod: 'per workshop session (up to 30 participants)',
    billingPeriod_sw: 'kwa kila kipindi cha warsha (hadi washiriki 30)',
    bandwidthRequirement: 'In-Person Venue or Hybrid Zoom/Meet',
    bandwidthRequirement_sw: 'Eneo la Mafunzo au Mseto wa Zoom/Meet',
    popular: false,
    features: [
      'Half-day or full-day intensive hands-on practical workshop',
      'Customized workbook and curated prompt library for participants',
      'Tailored case studies solving client/institutional challenges',
      'Printed and QR-verifiable Digital Certificate of Attendance',
      'Post-workshop recorded recap and implementation roadmap',
      'Invoice payment, LPO, or Mobile Money billing available'
    ],
    features_sw: [
      'Warsha kubwa ya vitendo ya nusu siku au siku nzima',
      'Kitabu cha kazi kilichobinafsishwa na maktaba ya amri kwa washiriki',
      'Mifano ya utafiti iliyolengwa kutatua changamoto za mteja/taasisi',
      'Cheti cha Mahudhurio cha Kidijitali kilichochapishwa na chenye QR',
      'Muhtasari wa rekodi baada ya warsha na ramani ya utekelezaji',
      'Malipo ya ankara, LPO, au Pesa za Simu yanapatikana'
    ],
    ctaText: 'Book Team Workshop',
    ctaText_sw: 'Weka Nafasi ya Warsha ya Timu',
    highlightNote: 'Ideal for departments, teacher associations & incubators',
    highlightNote_sw: 'Inafaa kwa idara, vyama vya walimu na vituo vya ubunifu'
  },
  {
    id: 'corporate-physical',
    name: 'Physical Training (On-Site)',
    name_sw: 'Mafunzo ya Ana kwa Ana (Ofisini)',
    deliveryChannel: 'Physical On-Site Training',
    deliveryChannel_sw: 'Mafunzo ya Ana kwa Ana Mahali pa Kazi',
    deliveryType: 'corporate-onsite',
    badge: 'ENTERPRISE IMMERSIVE',
    badge_sw: 'KAMPUNI KIKAMILIFU',
    tagline: 'On-site in-person training delivered directly at your venue or campus.',
    tagline_sw: 'Mafunzo ya ana kwa ana yanayotolewa moja kwa moja kwenye eneo lako au chuo.',
    priceTsh: '1,200,000',
    priceKes: '64,000',
    priceUsd: '480',
    billingPeriod: 'per corporate cohort (multi-day package)',
    billingPeriod_sw: 'kwa kila kikundi cha kampuni (kifurushi cha siku nyingi)',
    bandwidthRequirement: 'Zero Internet Required (On-Site Face-to-Face)',
    bandwidthRequirement_sw: 'Hakuna Mtandao Unahitajika (Ana kwa Ana)',
    popular: false,
    features: [
      'Lead instructor on-site at your office, campus, or venue',
      'Desk-by-desk coaching and practical hardware setup',
      'Adapted to your corporate security policies and tool stack',
      'Custom employee assessment and compliance progress reports',
      'Multi-day scheduling (weekdays or intensive weekend bootcamps)',
      'Dedicated account coordinator and formal corporate invoicing'
    ],
    features_sw: [
      'Mkufunzi mkuu kwenye ofisi yako, chuo, au eneo lako',
      'Mafunzo ya mezani na usanidi wa vifaa vya vitendo',
      'Imeoanishwa na sera za usalama za kampuni yako na zana mnazotumia',
      'Tathmini maalum ya mfanyakazi na ripoti za maendeleo ya kufuata sheria',
      'Ratiba ya siku nyingi (siku za kazi au kambi kali za mwishoni mwa wiki)',
      'Mratibu wa akaunti aliyejitolea na ankara rasmi ya kampuni'
    ],
    ctaText: 'Request On-Site Quote',
    ctaText_sw: 'Omba Nukuu ya Mafunzo ya Ofisini',
    highlightNote: 'Maximum retention, deep team collaboration & focus',
    highlightNote_sw: 'Uelewa wa juu, ushirikiano wa kina wa timu na umakini'
  },
  {
    id: 'conferences-keynotes-channel',
    name: 'Conferences & Keynotes',
    name_sw: 'Mikutano na Hotuba Kuu',
    deliveryChannel: 'Conferences & Keynotes',
    deliveryChannel_sw: 'Mikutano na Hotuba Kuu',
    deliveryType: 'keynote',
    badge: 'EXECUTIVE SPEAKING',
    badge_sw: 'UHUTUBIAJI WA KIUTENDAJI',
    tagline: 'Inspiring, authoritative keynote speeches on AI and digital safety.',
    tagline_sw: 'Hotuba kuu za kutia moyo na zenye mamlaka kuhusu AI na usalama wa kidijitali.',
    priceTsh: 'Custom',
    priceKes: 'Custom',
    priceUsd: 'Custom',
    billingPeriod: 'per keynote address',
    billingPeriod_sw: 'kwa kila hotuba kuu',
    bandwidthRequirement: 'Main Stage / Live Auditorium',
    bandwidthRequirement_sw: 'Jukwaa Kuu / Ukumbi wa Moja kwa Moja',
    popular: false,
    features: [
      'High-impact multimedia keynote by Alex Rweyemamu',
      'Context-rich insights on African technology landscape',
      'Engaging live on-stage technology and AI demonstrations',
      'Available in fluent Swahili, English, or bilingual delivery',
      'Panel moderation and executive Q&A facilitation'
    ],
    features_sw: [
      'Hotuba kuu ya media anuwai yenye athari kubwa na Alex Rweyemamu',
      'Maoni yenye muktadha tajiri kuhusu mazingira ya teknolojia ya Afrika',
      'Maonyesho ya teknolojia na AI ya kuvutia moja kwa moja jukwaani',
      'Inapatikana kwa Kiswahili fasaha, Kiingereza, au utoaji wa lugha mbili',
      'Usimamizi wa paneli na uwezeshaji wa Maswali na Majibu kwa watendaji'
    ],
    ctaText: 'Inquire Keynote Availability',
    ctaText_sw: 'Uliza Kuhusu Upatikanaji wa Hotuba',
    highlightNote: 'For Summits, AGMs, Tech Expos & Public Forums',
    highlightNote_sw: 'Kwa Mikutano ya Kilele, AGMs, Maonyesho ya Teknolojia na Majukwaa ya Umma'
  }
];

export const paymentMethods = [
  {
    name: 'M-Pesa',
    country: 'Tanzania & Kenya',
    provider: 'Vodacom / Safaricom',
    badge: 'Instant Activation'
  },
  {
    name: 'Tigo Pesa',
    country: 'Tanzania',
    provider: 'Yas / Tigo',
    badge: 'Instant Activation'
  },
  {
    name: 'Airtel Money',
    country: 'East Africa',
    provider: 'Airtel',
    badge: 'Instant Activation'
  },
  {
    name: 'HaloPesa',
    country: 'Tanzania',
    provider: 'Halotel',
    badge: 'Instant Activation'
  },
  {
    name: 'Debit / Credit Card',
    country: 'International',
    provider: 'Visa / MasterCard',
    badge: 'Global Secure'
  }
];
