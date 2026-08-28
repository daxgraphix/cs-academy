import { LearningFormat } from '../types';

export const learningFormatsData: LearningFormat[] = [
  {
    id: 'whatsapp-learning',
    number: '01',
    title: 'WHATSAPP LEARNING',
    title_sw: 'MAFUNZO KUPITIA WHATSAPP',
    channelName: 'WhatsApp Micro-Learning & Audio Notes',
    channelName_sw: 'Mafunzo Madogo na Ujumbe wa Sauti wa WhatsApp',
    category: 'mobile',
    description: 'Micro-learning communities, daily prompt challenges, audio voice notes, downloadable cheat-sheets, and ongoing peer support on low data bundles.',
    description_sw: 'Jumuiya za mafunzo madogo, changamoto za kila siku za maagizo (prompts), ujumbe wa sauti, kurasa za marejeo za kupakuliwa, na usaidizi wa kila mara wa wenzako kupitia vifurushi vidogo vya data.',
    bestFor: 'Mobile-first learners, university students, and busy professionals needing bite-sized daily knowledge.',
    bestFor_sw: 'Wanafunzi wanaotumia simu zaidi, wanafunzi wa chuo kikuu, na wataalamu wenye shughuli nyingi wanaohitaji maarifa madogo ya kila siku.',
    priceStartingTsh: '5,000',
    priceStartingKes: '250',
    priceStartingUsd: '2',
    pricingLabel: 'per month  |  Data Saver',
    pricingLabel_sw: 'kwa mwezi | Okoa Data',
    bandwidthLevel: 'Ultra-Low Data (Works on 2G/3G/4G)',
    bandwidthLevel_sw: 'Data Kidogo Sana (Inafanya kazi kwenye 2G/3G/4G)',
    features: [
      'Zero-barrier mobile access via WhatsApp',
      'Daily 5-minute practical challenges in Swahili',
      'Voice note explanations & downloadable PDFs',
      'Active peer study group & instant instructor feedback'
    ],
    features_sw: [
      'Ufikiaji wa simu bila vikwazo kupitia WhatsApp',
      'Changamoto za vitendo za dakika 5 kila siku kwa Kiswahili',
      'Maelezo ya ujumbe wa sauti na PDF za kupakuliwa',
      'Kikundi cha masomo cha wenzako na mrejesho wa papo hapo kutoka kwa mkufunzi'
    ],
    icon: 'MessageSquare'
  },
  {
    id: 'zoom-live',
    number: '02',
    title: 'ZOOM LIVE CLASSES',
    title_sw: 'DARASA LA MUBASHARA LA ZOOM',
    channelName: 'Interactive Zoom Live Virtual Cohorts',
    channelName_sw: 'Vikundi vya Mtandaoni vya Mubashara vya Zoom',
    category: 'virtual',
    description: 'Interactive instructor-led virtual classrooms with live screensharing, real-time code critiques, Vibe Coding, and interactive Q&A.',
    description_sw: 'Madarasa ya mtandaoni yanayoongozwa na mkufunzi yenye kushiriki skrini mubashara, uhakiki wa kodi wa muda halisi, Vibe Coding, na maswali na majibu shirikishi.',
    bestFor: 'Individual learners, distributed tech teams, and evening cohort participants across African time zones.',
    bestFor_sw: 'Wanafunzi binafsi, timu za teknolojia zilizotawanyika, na washiriki wa vikundi vya jioni katika kanda za saa za Afrika.',
    priceStartingTsh: '35,000',
    priceStartingKes: '1,900',
    priceStartingUsd: '14',
    pricingLabel: 'per month  |  Live Interactive',
    pricingLabel_sw: 'kwa mwezi | Mubashara Shirikishi',
    bandwidthLevel: 'Standard Broadband / 4G (HD Live)',
    bandwidthLevel_sw: 'Broadband ya Kawaida / 4G (HD Mubashara)',
    features: [
      'HD live video walkthroughs & coding demonstrations',
      'Breakout rooms for hands-on team exercises',
      'Lifetime session recordings provided for revision',
      'Real-time Q&A, chat polls & code reviews'
    ],
    features_sw: [
      'Maelezo ya video ya HD mubashara na maonyesho ya kodi',
      'Vyumba vya pembeni kwa ajili ya mazoezi ya timu ya vitendo',
      'Rekodi za vipindi za maisha zilizotolewa kwa ajili ya marudio',
      'Maswali na majibu ya muda halisi, kura za maoni za gumzo na uhakiki wa kodi'
    ],
    icon: 'Video'
  },
  {
    id: 'google-meet',
    number: '03',
    title: 'GOOGLE MEET TRAINING',
    title_sw: 'MAFUNZO YA GOOGLE MEET',
    channelName: 'Google Meet Executive & Team Sessions',
    channelName_sw: 'Vipindi vya Viongozi na Timu vya Google Meet',
    category: 'virtual',
    description: 'Frictionless, lightweight online training and 1-on-1 or small-team executive coaching with direct calendar integration and Google Workspace collaboration.',
    description_sw: 'Mafunzo ya mtandaoni yasiyo na usumbufu, mepesi na ukufunzi wa viongozi wa 1-kwa-1 au timu ndogo yenye ushirikiano wa moja kwa moja wa kalenda na Google Workspace.',
    bestFor: 'Corporate departments, executive briefings, and institutional committee training.',
    bestFor_sw: 'Idara za shirika, mikutano ya viongozi, na mafunzo ya kamati za taasisi.',
    priceStartingTsh: '45,000',
    priceStartingKes: '2,400',
    priceStartingUsd: '18',
    pricingLabel: 'per month / cohort access',
    pricingLabel_sw: 'kwa mwezi / ufikiaji wa kikundi',
    bandwidthLevel: 'Lightweight Browser (Low-Bandwidth Adaptive)',
    bandwidthLevel_sw: 'Kivinjari Chepesi (Inabadilika kulingana na Bandwidth Ndogo)',
    features: [
      'No software installation required (Browser-ready)',
      'High accessibility on low-bandwidth networks',
      'Integrated Google Workspace live document editing',
      'Direct calendar scheduling & 1-on-1 coaching'
    ],
    features_sw: [
      'Hakuna usakinishaji wa programu unaohitajika (Tayari kwenye kivinjari)',
      'Ufikiaji mkubwa kwenye mitandao yenye bandwidth ndogo',
      'Uhariri wa nyaraka mubashara wa Google Workspace uliounganishwa',
      'Ratiba ya moja kwa moja ya kalenda na ukufunzi wa 1-kwa-1'
    ],
    icon: 'MonitorPlay'
  },
  {
    id: 'workshops-seminars',
    number: '04',
    title: 'WORKSHOPS & SEMINARS',
    title_sw: 'WARSHA NA SEMINA',
    channelName: 'Hands-On Intensive Workshops & Seminars',
    channelName_sw: 'Warsha na Semina za Vitendo za Kina',
    category: 'in-person',
    description: 'Action-oriented half-day, full-day, and multi-day deep dives focused on producing concrete deliverables and immediate practical skills.',
    description_sw: 'Vipindi vya nusu siku, siku nzima, na siku nyingi vinavyolenga vitendo na kutoa matokeo yanayoonekana na ujuzi wa vitendo wa papo hapo.',
    bestFor: 'Departmental staff, teacher associations, youth incubators, and professional member associations.',
    bestFor_sw: 'Wafanyakazi wa idara, vyama vya walimu, vituo vya kukuza vijana, na vyama vya wanachama wa kitaalamu.',
    priceStartingTsh: '450,000',
    priceStartingKes: '24,000',
    priceStartingUsd: '180',
    pricingLabel: 'per workshop session (Up to 30 Seats)',
    pricingLabel_sw: 'kwa kila kipindi cha warsha (Mpaka Viti 30)',
    bandwidthLevel: 'In-Person / Hybrid Delivery',
    bandwidthLevel_sw: 'Utoaji wa Ana kwa Ana / Mseto',
    features: [
      'Intensive hands-on practice & group project drills',
      'Customized workbook and prompt library for participants',
      'Real-world problem solving on client data',
      'Printed & Digital Certificate of Attendance provided'
    ],
    features_sw: [
      'Mazoezi ya kina ya vitendo na miradi ya kikundi',
      'Kitabu cha mazoezi kilichoboreshwa na maktaba ya maagizo (prompts) kwa washiriki',
      'Utatuzi wa matatizo ya ulimwengu halisi kwenye data ya mteja',
      'Cheti cha Mahudhurio cha Kuchapishwa na Kidijitali kinatolewa'
    ],
    icon: 'Calendar'
  },
  {
    id: 'physical-training',
    number: '05',
    title: 'PHYSICAL TRAINING',
    title_sw: 'MAFUNZO YA ANA KWA ANA',
    channelName: 'On-Site Corporate & Campus Immersion',
    channelName_sw: 'Mafunzo ya Ndani ya Shirika na Chuo',
    category: 'in-person',
    description: 'On-site, immersive in-person training delivered directly at your company offices, university campuses, school halls, or hotel venues across East Africa.',
    description_sw: 'Mafunzo ya ana kwa ana yanayotolewa moja kwa moja kwenye ofisi za kampuni yako, kampasi za chuo kikuu, kumbi za shule, au kumbi za hoteli kote Afrika Mashariki.',
    bestFor: 'Organizations wanting maximum focus, deep collaboration, and high-retention face-to-face instruction.',
    bestFor_sw: 'Mashirika yanayotaka umakini wa hali ya juu, ushirikiano wa kina, na maelekezo ya ana kwa ana yenye matokeo bora.',
    priceStartingTsh: '1,200,000',
    priceStartingKes: '64,000',
    priceStartingUsd: '480',
    pricingLabel: 'per corporate cohort (Multi-Day Deep Dive)',
    pricingLabel_sw: 'kwa kikundi cha shirika (Mafunzo ya Siku Nyingi)',
    bandwidthLevel: 'Zero Bandwidth Needed (Local / On-Site)',
    bandwidthLevel_sw: 'Hakuna Bandwidth Inayohitajika (Ndani / Eneo la Kazi)',
    features: [
      'In-person lead trainer presence & desk-by-desk support',
      'Adapted to your local IT environment and hardware',
      'High-energy team building and collaborative drills',
      'Flexible scheduling (weekdays or intensive weekends)'
    ],
    features_sw: [
      'Uwepo wa mkufunzi mkuu ana kwa ana na usaidizi wa mezani',
      'Imebadilishwa kulingana na mazingira yako ya IT na vifaa',
      'Ujenzi wa timu wenye nguvu na mazoezi ya ushirikiano',
      'Ratiba inayoweza kubadilika (siku za wiki au wikendi za kina)'
    ],
    icon: 'Building2'
  },
  {
    id: 'conferences-keynotes',
    number: '06',
    title: 'CONFERENCES & KEYNOTES',
    title_sw: 'MIKUTANO NA HOTUBA KUU',
    channelName: 'Keynotes, Tech Summits & Public Forums',
    channelName_sw: 'Hotuba Kuu, Mikutano ya Teknolojia na Majukwaa ya Umma',
    category: 'in-person',
    description: 'Inspiring, authoritative keynote speeches on AI trends, cybersecurity resilience, digital trust, and technology leadership across Africa.',
    description_sw: 'Hotuba kuu za kuhamasisha na zenye mamlaka juu ya mienendo ya AI, ustahimilivu wa usalama wa mtandao, uaminifu wa kidijitali, na uongozi wa teknolojia kote Afrika.',
    bestFor: 'Industry summits, technology conferences, annual general meetings, and public forums.',
    bestFor_sw: 'Mikutano ya sekta, mikutano ya teknolojia, mikutano mikuu ya mwaka, na majukwaa ya umma.',
    priceStartingTsh: 'Custom',
    priceStartingKes: 'Custom',
    priceStartingUsd: 'Custom',
    pricingLabel: 'Keynote Speaker Honorarium',
    pricingLabel_sw: 'Heshima ya Mzungumzaji Mkuu',
    bandwidthLevel: 'Stage Presentation / Live Demonstrations',
    bandwidthLevel_sw: 'Uwasilishaji wa Jukwaani / Maonyesho Mubashara',
    features: [
      'Engaging, high-impact multimedia presentations',
      'Context-rich insights on African technology landscape',
      'Clear, accessible language without dry jargon',
      'Interactive audience live demonstrations'
    ],
    features_sw: [
      'Uwasilishaji wa multimedia unaovutia na wenye matokeo makubwa',
      'Maarifa yenye muktadha tajiri kuhusu mazingira ya teknolojia ya Afrika',
      'Lugha iliyo wazi na inayofikika bila maneno magumu ya kitaalamu',
      'Maonyesho mubashara ya watazamaji shirikishi'
    ],
    icon: 'Mic'
  }
];
