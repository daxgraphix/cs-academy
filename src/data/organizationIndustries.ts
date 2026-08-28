import { IndustrySolution, CorporateOffering, TrainingProcessStep } from '../types';

export const corporateOfferingsData: CorporateOffering[] = [
  {
    id: 'enterprise',
    badge: 'Enterprise Workforce',
    badge_sw: 'Wafanyakazi wa Kampuni',
    title: 'Corporate AI & Cybersecurity Training',
    title_sw: 'Mafunzo ya AI na Usalama wa Mtandaoni kwa Kampuni',
    description: 'Transform internal operations with hands-on prompt engineering, safe workflow automation, and human firewall defense.',
    description_sw: 'Badilisha operesheni za ndani kwa uandishi wa maagizo ya vitendo, otomatisha kazi kwa usalama, na ulinzi wa binadamu dhidi ya mashambulizi ya kidijitali.',
    points: ['Confidential data privacy guardrails', 'Departmental prompting cheat sheets', 'Simulated phishing and fraud audits'],
    points_sw: ['Miongozo ya faragha ya data za siri', 'Miongozo ya amri kwa idara husika', 'Ukaguzi wa ulaghai wa majaribio']
  },
  {
    id: 'academic',
    badge: 'Academic & Higher Ed',
    badge_sw: 'Taaluma na Elimu ya Juu',
    title: 'University & Youth Programmes',
    title_sw: 'Programu za Chuo Kikuu na Vijana',
    description: 'Empower faculty with AI pedagogy and equip students with job-ready digital capabilities and assessment integrity.',
    description_sw: 'Wawezeshe wahadhiri kwa mbinu za ufundishaji za AI na waandae wanafunzi na uwezo wa kidijitali tayari kwa ajira na uadilifu wa tathmini.',
    points: ['Ethical AI curriculum guidelines', 'Classroom assessment tools', 'Career-ready digital portfolios'],
    points_sw: ['Miongozo ya maadili ya mtaala wa AI', 'Zana za tathmini ya darasani', 'Kazi za kidijitali za kujiandaa na ajira']
  },
  {
    id: 'executive',
    badge: 'Executive & Boardroom',
    badge_sw: 'Watendaji na Bodi',
    title: 'Executive AI Briefings',
    title_sw: 'Maelekezo ya AI kwa Watendaji',
    description: 'High-density, jargon-free briefings for directors and C-suite leaders evaluating AI opportunities, regulatory exposure, and cyber governance.',
    description_sw: 'Maelekezo ya kina, yasiyo na maneno magumu ya kiufundi kwa wakurugenzi na viongozi wakuu wanaotathmini fursa za AI, kanuni, na utawala wa kidijitali.',
    points: ['Strategic technology horizon scan', 'Institutional risk and liability', 'Executive data security best practices'],
    points_sw: ['Uchambuzi wa kimkakati wa teknolojia', 'Hatari na dhima ya kitaasisi', 'Mbinu bora za usalama wa data kwa watendaji']
  },
  {
    id: 'custom',
    badge: 'Custom Institutional',
    badge_sw: 'Kitaasisi Maalum',
    title: 'Customized Organizational Syllabi',
    title_sw: 'Mitaala ya Mashirika Iliyobinafsishwa',
    description: 'Bespoke multi-module training programs co-designed with your L&D leads for NGOs, government ministries, and banks.',
    description_sw: 'Programu za mafunzo ya moduli nyingi zilizoundwa pamoja na viongozi wenu wa mafunzo kwa ajili ya NGO, wizara za serikali, na benki.',
    points: ['Tailored to your software stack', 'Bilingual English & Kiswahili', 'Pre/post impact evaluation reports'],
    points_sw: ['Imeoanishwa na zana zenu za kazi', 'Lugha mbili Kiingereza na Kiswahili', 'Ripoti za tathmini ya athari kabla na baada ya mafunzo']
  }
];

export const industrySolutionsData: IndustrySolution[] = [
  {
    id: 'education',
    name: 'Education & Universities',
    name_sw: 'Elimu na Vyuo Vikuu',
    description: 'Empower faculty, administrative staff, and student bodies with AI-powered curriculum design, ethical assessment standards, and digital research fluency.',
    description_sw: 'Wawezeshe wahadhiri, wafanyakazi wa utawala, na wanafunzi kwa ubunifu wa mtaala unaowezeshwa na AI, viwango vya tathmini vya maadili, na ufasaha wa utafiti wa kidijitali.',
    criticalNeeds: ['Academic integrity frameworks', 'AI-assisted lesson planning', 'Campus digital hygiene', 'Student career readiness'],
    criticalNeeds_sw: ['Mifumo ya uadilifu wa kitaaluma', 'Upangaji wa masomo kwa msaada wa AI', 'Usafi wa kidijitali wa chuo', 'Utayari wa kazi kwa wanafunzi'],
    recommendedPrograms: ['AI for Educators', 'University AI & Youth Programme', 'Digital Skills Lab'],
    recommendedPrograms_sw: ['AI kwa Waelimishaji', 'Programu ya AI ya Chuo Kikuu na Vijana', 'Maabara ya Stadi za Kidijitali'],
    icon: 'GraduationCap'
  },
  {
    id: 'financial',
    name: 'Financial Services & Banking',
    name_sw: 'Huduma za Kifedha na Benki',
    description: 'Arm customer service, credit analysts, and operations personnel with deepfake detection, phishing resistance, and secure generative data synthesis.',
    description_sw: 'Wape wafanyakazi wa huduma kwa wateja, wachambuzi wa mikopo, na wafanyakazi wa operesheni uwezo wa kutambua deepfake, kuzuia phishing, na uchambuzi salama wa data.',
    criticalNeeds: ['Deepfake voice fraud defense', 'Confidential customer data protection', 'Regulatory compliance', 'Phishing awareness'],
    criticalNeeds_sw: ['Ulinzi dhidi ya ulaghai wa sauti wa deepfake', 'Ulinzi wa data za siri za wateja', 'Uzingatiaji wa kanuni', 'Uelewa wa phishing'],
    recommendedPrograms: ['Cybersecurity Awareness Workshop', 'Executive AI Briefing', 'AI Safety & Deepfakes'],
    recommendedPrograms_sw: ['Warsha ya Uelewa wa Usalama wa Mtandaoni', 'Maelekezo ya AI kwa Watendaji', 'Usalama wa AI na Deepfakes'],
    icon: 'Landmark'
  },
  {
    id: 'ngos',
    name: 'NGOs & Development Agencies',
    name_sw: 'NGO na Mashirika ya Maendeleo',
    description: 'Accelerate donor reporting, grant writing, field survey data analysis, and cross-cultural community communication with AI and cloud collaboration.',
    description_sw: 'Harahisha ripoti za wafadhili, uandishi wa ruzuku, uchambuzi wa data za utafiti wa nyanjani, na mawasiliano ya jamii kwa AI na ushirikiano wa wingu.',
    criticalNeeds: ['Rapid grant proposal drafting', 'Field survey data cleanup', 'Multilingual community messaging', 'Remote team coordination'],
    criticalNeeds_sw: ['Uandaaji wa haraka wa mapendekezo ya ruzuku', 'Usafishaji wa data za utafiti wa nyanjani', 'Ujumbe wa jamii wa lugha nyingi', 'Uratibu wa timu za mbali'],
    recommendedPrograms: ['AI Productivity Workshop', 'Digital Productivity Masterclass', 'Cyber Hygiene Training'],
    recommendedPrograms_sw: ['Warsha ya Uzalishaji wa AI', 'Mafunzo ya Uzalishaji wa Kidijitali', 'Mafunzo ya Usafi wa Mtandaoni'],
    icon: 'HeartHandshake'
  },
  {
    id: 'government',
    name: 'Government & Public Sector',
    name_sw: 'Serikali na Sekta ya Umma',
    description: 'Build institutional capability for civil servants, policy analysts, and department heads to understand AI ethics, digital sovereignty, and cyber defense.',
    description_sw: 'Jenga uwezo wa kitaasisi kwa watumishi wa umma, wachambuzi wa sera, na wakuu wa idara kuelewa maadili ya AI, mamlaka ya kidijitali, na ulinzi wa mtandaoni.',
    criticalNeeds: ['Public sector AI policy awareness', 'Data sovereignty & security', 'Citizen-facing communication', 'Legacy process modernization'],
    criticalNeeds_sw: ['Uelewa wa sera ya AI katika sekta ya umma', 'Mamlaka na usalama wa data', 'Mawasiliano na wananchi', 'Uboreshaji wa mifumo ya zamani'],
    recommendedPrograms: ['Executive AI Briefing', 'Custom Institutional Programme', 'Cybersecurity Awareness'],
    recommendedPrograms_sw: ['Maelekezo ya AI kwa Watendaji', 'Programu Maalum ya Kitaasisi', 'Uelewa wa Usalama wa Mtandaoni'],
    icon: 'Building2'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Medical Institutes',
    name_sw: 'Huduma za Afya na Taasisi za Matibabu',
    description: 'Streamline administrative documentation, patient communication, and medical research synthesis while safeguarding patient privacy and HIPAA/data ethics.',
    description_sw: 'Rahisisha nyaraka za utawala, mawasiliano na wagonjwa, na muhtasari wa utafiti wa matibabu huku ukilinda faragha ya wagonjwa na maadili ya data.',
    criticalNeeds: ['Patient confidentiality & privacy', 'Medical literature summarization', 'Administrative efficiency', 'Device & portal security'],
    criticalNeeds_sw: ['Usiri na faragha ya mgonjwa', 'Muhtasari wa machapisho ya matibabu', 'Ufanisi wa utawala', 'Usalama wa vifaa na mifumo'],
    recommendedPrograms: ['AI Productivity Starter Guide', 'Cyber Hygiene Checklist Training', 'Digital Skills Lab'],
    recommendedPrograms_sw: ['Mwongozo wa Kuanzia Uzalishaji wa AI', 'Mafunzo ya Orodha ya Usafi wa Mtandaoni', 'Maabara ya Stadi za Kidijitali'],
    icon: 'ShieldCheck'
  },
  {
    id: 'smes',
    name: 'SMEs & Growing Enterprises',
    name_sw: 'SMEs na Biashara Zinazokua',
    description: 'Help small business owners, sales teams, and marketers leverage free/low-cost AI tools to scale customer acquisition, marketing, and operations.',
    description_sw: 'Saidia wamiliki wa biashara ndogondogo, timu za mauzo, na wauzaji kutumia zana za AI za bei nafuu au bure ili kukuza upatikanaji wa wateja, masoko, na operesheni.',
    criticalNeeds: ['Zero-budget marketing automation', '24/7 customer support templates', 'Financial spreadsheet tracking', 'Mobile money safety'],
    criticalNeeds_sw: ['Otomatisha masoko bila gharama', 'Violezo vya huduma kwa wateja 24/7', 'Ufuatiliaji wa lahajedwali za fedha', 'Usalama wa pesa za simu'],
    recommendedPrograms: ['AI for Business Workshop', 'AI for Everyone', 'Cybersecurity for Small Businesses'],
    recommendedPrograms_sw: ['Warsha ya AI kwa Biashara', 'AI kwa Kila Mtu', 'Usalama wa Mtandaoni kwa Biashara Ndogo'],
    icon: 'Store'
  }
];

export const trainingProcessSteps: TrainingProcessStep[] = [
  {
    id: 'discover',
    step: '01',
    name: 'DISCOVER',
    name_sw: 'GUNDUA',
    title: 'Discover & Assess',
    title_sw: 'Gundua na Tathmini',
    description: 'We consult with your leadership to understand your team\'s current tech fluency, unique operational bottlenecks, compliance mandates, and key goals.',
    description_sw: 'Tunashauriana na uongozi wako ili kuelewa ufasaha wa sasa wa teknolojia wa timu yako, vikwazo vya kipekee vya operesheni, mahitaji ya kisheria, na malengo makuu.'
  },
  {
    id: 'design',
    step: '02',
    name: 'DESIGN',
    name_sw: 'BUNI',
    title: 'Design & Customize',
    title_sw: 'Buni na Boresha',
    description: 'We tailor curriculum modules, real-world case studies, and proprietary prompt templates to your exact organizational workflow and industry context.',
    description_sw: 'Tunaboresha moduli za mtaala, mifano ya maisha halisi, na violezo vya amri kwa ajili ya mchakato wako wa kazi wa shirika na mazingira ya sekta yako.'
  },
  {
    id: 'deliver',
    step: '03',
    name: 'DELIVER',
    name_sw: 'TOA',
    title: 'Deliver & Engage',
    title_sw: 'Toa na Shirikisha',
    description: 'Our expert facilitators lead highly interactive live sessions, online via Zoom/Meet, on-site at your offices, or through blended hybrid formats.',
    description_sw: 'Wawezeshaji wetu wataalam huongoza vipindi vya mwingiliano wa hali ya juu, mtandaoni kupitia Zoom/Meet, ofisini kwako, au kupitia mifumo ya mseto.'
  },
  {
    id: 'reinforce',
    step: '04',
    name: 'REINFORCE',
    name_sw: 'IMARISHA',
    title: 'Reinforce & Practice',
    title_sw: 'Imarisha na Fanya Mazoezi',
    description: 'Participants receive downloadable toolkits, prompt cheat sheets, WhatsApp cohort support, and practical post-training challenge exercises.',
    description_sw: 'Washiriki hupokea zana za kupakuliwa, miongozo ya amri ya haraka, msaada wa kikundi cha WhatsApp, na mazoezi ya vitendo baada ya mafunzo.'
  },
  {
    id: 'measure',
    step: '05',
    name: 'MEASURE',
    name_sw: 'PIMA',
    title: 'Measure & Evaluate',
    title_sw: 'Pima na Tathmini',
    description: 'We provide post-training evaluation reports, competency assessments, and institutional feedback to verify tangible productivity and safety impact.',
    description_sw: 'Tunatoa ripoti za tathmini baada ya mafunzo, tathmini za uwezo, na maoni ya kitaasisi ili kuthibitisha tija inayoonekana na athari za usalama.'
  }
];
