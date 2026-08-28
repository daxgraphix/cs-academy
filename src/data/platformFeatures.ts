import { PlatformFeature } from '../types';

export const platformFeaturesData: PlatformFeature[] = [
  {
    id: 'quizzes-assessment',
    title: 'Quizzes & Assessment',
    title_sw: 'Mazoezi na Tathmini',
    shortDescription: 'Test your understanding with scored quizzes after each module.',
    shortDescription_sw: 'Pima uelewa wako kwa mazoezi yenye alama baada ya kila moduli.',
    fullDescription: 'Track your scores and revisit topics to master every concept. Interactive quizzes test key knowledge checkpoints, reinforce memory retention, and confirm practical comprehension before advancing to the next unit.',
    fullDescription_sw: 'Fuatilia alama zako na urudie mada ili kumudu kila dhana. Mazoezi shirikishi yanapima vituo muhimu vya maarifa, yanaimarisha kumbukumbu, na kuthibitisha uelewa wa vitendo kabla ya kuendelea na kitengo kinachofuata.',
    icon: 'CheckSquare',
    badge: 'Instant Auto-Grading',
    badge_sw: 'Sahihisho la Papo Hapo',
    points: [
      'Interactive end-of-module quizzes with instant feedback',
      'Comprehensive explanations for correct and incorrect answers',
      'Personal learning progress dashboard and score tracking',
      'Unlimited retakes to ensure 100% conceptual mastery'
    ],
    points_sw: [
      'Mazoezi shirikishi ya mwisho wa moduli yenye mrejesho wa papo hapo',
      'Maelezo ya kina kwa majibu sahihi na yasiyo sahihi',
      'Dashibodi ya maendeleo ya kibinafsi na ufuatiliaji wa alama',
      'Kurudia bila kikomo ili kuhakikisha unamudu dhana kwa 100%'
    ],
    swahiliNote: 'Mazoezi na mitihani ya kupima uelewa wako na kukuwezesha kukariri ujuzi.'
  },
  {
    id: 'pdf-certificates',
    title: 'PDF Certificates',
    title_sw: 'Vyeti vya PDF',
    shortDescription: 'Earn professional PDF certificates with QR code verification upon completing any course.',
    shortDescription_sw: 'Jipatie vyeti vya kitaalamu vya PDF vyenye uhakiki wa QR kodi unapomaliza kozi yoyote.',
    fullDescription: 'Share your achievements with employers, clients, and your professional network on LinkedIn. Each certificate contains a tamper-proof QR code that instantly validates your graduation status and coursework authenticity.',
    fullDescription_sw: 'Shiriki mafanikio yako na waajiri, wateja, na mtandao wako wa kitaalamu kwenye LinkedIn. Kila cheti kina QR kodi isiyoweza kuchezewa ambayo inathibitisha papo hapo hali yako ya kuhitimu na ukweli wa masomo yako.',
    icon: 'Award',
    badge: 'QR Code Verifiable',
    badge_sw: 'Uhakiki wa QR Kodi',
    points: [
      'Official downloadable high-resolution PDF certificate',
      'Tamper-proof QR code linking to your online verification page',
      'Instant 1-click sharing to LinkedIn, CVs, and client proposals',
      'Recognized credential across East African tech employers'
    ],
    points_sw: [
      'Cheti rasmi cha PDF cha azimio la juu kinachoweza kupakuliwa',
      'QR kodi isiyoweza kuchezewa inayounganishwa na ukurasa wako wa uhakiki wa mtandaoni',
      'Ushiriki wa papo hapo kwa mbofyo 1 kwenye LinkedIn, CV, na mapendekezo ya wateja',
      'Kitambulisho kinachotambulika na waajiri wa teknolojia wa Afrika Mashariki'
    ],
    swahiliNote: 'Vyeti rasmi vya kidijitali vyenye QR code inayoweza kuhakikiwa na waajiri popote.'
  },
  {
    id: 'digital-shop',
    title: 'Digital Shop',
    title_sw: 'Duka la Kidijitali',
    shortDescription: 'Download premium ebooks, templates, and ready to use skills from the shop.',
    shortDescription_sw: 'Pakua vitabu vya kielektroniki vya malipo, kiolezo (templates), na ujuzi ulio tayari kutumika kutoka dukani.',
    fullDescription: 'Unlock products with Premium, or invite friends to unlock more. Access our curated library of prompt packs, web templates, design assets, and cheat sheets designed to give you an unfair advantage in your projects.',
    fullDescription_sw: 'Fungua bidhaa kwa Premium, au alika marafiki kufungua zaidi. Fikia maktaba yetu iliyochaguliwa ya vifurushi vya maagizo (prompts), kiolezo cha wavuti, rasilimali za usanifu, na kurasa za marejeo zilizoundwa kukupa faida ya kipekee katika miradi yako.',
    icon: 'ShoppingBag',
    badge: 'Templates & Ebooks',
    badge_sw: 'Kiolezo na Vitabu',
    points: [
      'Curated library of tech ebooks, UI kits, and starter templates',
      'AI Prompt Starter Packs and business workflow blueprints',
      'Included FREE for Premium members',
      'Unlock individual products or the entire shop via friend invites'
    ],
    points_sw: [
      'Maktaba iliyochaguliwa ya vitabu vya teknolojia, vifaa vya UI, na kiolezo cha kuanzia',
      'Vifurushi vya kuanzia vya AI Prompt na ramani za kazi za biashara',
      'Imejumuishwa BURE kwa wanachama wa Premium',
      'Fungua bidhaa binafsi au duka zima kupitia mialiko ya marafiki'
    ],
    swahiliNote: 'Pakua vitabu, templates za tovuti, na mifumo iliyo tayari kutumika.'
  },
  {
    id: 'live-meetings',
    title: 'Live Meetings',
    title_sw: 'Mikutano Mubashara',
    shortDescription: 'Join live sessions like Vibe Coding. Learn in real time with the host, ask questions, and book your seat inside the app.',
    shortDescription_sw: 'Jiunge na vipindi mubashara kama Vibe Coding. Jifunze kwa muda halisi na mwenyeji, uliza maswali, na weka nafasi yako ndani ya programu.',
    fullDescription: 'Experience collaborative real-time learning. Attend weekly "Vibe Coding" live streams, ask questions during interactive Q&As, review real projects with mentors, and easily reserve your seat directly inside the web app.',
    fullDescription_sw: 'Pata uzoefu wa mafunzo shirikishi ya muda halisi. Hudhuria matangazo ya kila wiki ya "Vibe Coding", uliza maswali wakati wa maswali na majibu shirikishi, kagua miradi halisi na washauri, na uhifadhi nafasi yako kwa urahisi ndani ya programu ya wavuti.',
    icon: 'Radio',
    badge: 'Live Interactive Sessions',
    badge_sw: 'Vipindi Mubashara Shirikishi',
    points: [
      'Weekly live "Vibe Coding" sessions and live build challenges',
      'Real-time Q&A with experienced lead tech instructors',
      'Live code reviews and portfolio critique clinics',
      '1-click seat booking with calendar reminders inside the platform'
    ],
    points_sw: [
      'Vipindi vya kila wiki vya mubashara vya "Vibe Coding" na changamoto za kujenga mubashara',
      'Maswali na majibu ya muda halisi na wakufunzi wakuu wa teknolojia wenye uzoefu',
      'Uhakiki wa kodi mubashara na kliniki za uhakiki wa kazio (portfolio)',
      'Uhifadhi wa nafasi kwa mbofyo 1 na vikumbusho vya kalenda ndani ya jukwaa'
    ],
    swahiliNote: 'Mikutano ya moja kwa moja (Live Sessions) kujifunza pamoja na kuuliza maswali.'
  },
  {
    id: 'invite-and-earn',
    title: 'Invite and Earn',
    title_sw: 'Alika na Ujisahilie',
    shortDescription: 'Share your referral code with friends. Unlock shop items, lifetime access, and earn 3,000 Tsh cash per friend.',
    shortDescription_sw: 'Shiriki nambari yako ya mwaliko na marafiki. Fungua bidhaa za duka, ufikiaji wa maisha, na ujipatie TSH 3,000 taslimu kwa kila rafiki.',
    fullDescription: 'Share your personal referral code with friends. Invite 1 friend to open 1 digital product, 5 friends to unlock the entire digital shop, 10 friends for full Lifetime Access, then earn 3,000 Tsh cash directly via mobile money for every friend after that once they join Premium.',
    fullDescription_sw: 'Shiriki nambari yako ya mwaliko na marafiki. Alika rafiki 1 kufungua bidhaa 1 ya kidijitali, marafiki 5 kufungua duka zima la kidijitali, marafiki 10 kupata Ufikiaji kamili wa Maisha, kisha ujipatie TSH 3,000 taslimu moja kwa moja kupitia pesa ya mtandao kwa kila rafiki baada ya hapo pindi wanapojiunga na Premium.',
    icon: 'Gift',
    badge: 'Cash Rewards & Unlocks',
    badge_sw: 'Zawadi za Pesa na Ufunguzi',
    points: [
      '1 Friend: Unlock 1 Premium Digital Product from the shop',
      '5 Friends: Unlock the ENTIRE Digital Shop library forever',
      '10 Friends: Get 100% FREE Lifetime Access to all courses',
      '11+ Friends: Earn 3,000 Tsh cash reward per friend paid via Mobile Money'
    ],
    points_sw: [
      'Rafiki 1: Fungua Bidhaa 1 ya Malipo ya Kidijitali kutoka dukani',
      'Marafiki 5: Fungua maktaba ZIMA ya Duka la Kidijitali milele',
      'Marafiki 10: Pata Ufikiaji wa BURE wa 100% wa Maisha kwa kozi zote',
      'Marafiki 11+: Jipatie zawadi ya TSH 3,000 taslimu kwa kila rafiki inayolipwa kupitia Pesa ya Mtandao'
    ],
    swahiliNote: 'Alika marafiki: fungua bidhaa, pata uanachama wa maisha, na jipatie 3,000 Tsh taslimu!'
  },
  {
    id: 'mentor-support',
    title: 'Mentor Support',
    title_sw: 'Usaidizi wa Mshauri',
    shortDescription: 'Get practical guidance from instructors and teaching assistants throughout your learning journey.',
    shortDescription_sw: 'Pata mwongozo wa vitendo kutoka kwa wakufunzi na wasaidizi wa kufundishia katika safari yako yote ya mafunzo.',
    fullDescription: 'Ask focused questions, share your work, and receive guidance that helps you move past real blockers. Support is available through agreed WhatsApp groups, live sessions, and programme check-ins.',
    fullDescription_sw: 'Uliza maswali mahususi, shiriki kazi yako, na upokee mwongozo unaokusaidia kuvuka vizuizi vya kweli. Usaidizi unapatikana kupitia vikundi vilivyokubaliwa vya WhatsApp, vipindi mubashara, na ukaguzi wa programu.',
    icon: 'Users',
    badge: 'Human Guidance',
    badge_sw: 'Mwongozo wa Kibinadamu',
    points: ['Instructor and teaching assistant guidance', 'Practical feedback on exercises and projects', 'Clear escalation for difficult blockers', 'Support designed for beginner confidence'],
    points_sw: [
      'Mwongozo wa mkufunzi na msaidizi wa kufundishia',
      'Mrejesho wa vitendo juu ya mazoezi na miradi',
      'Uvukaji wazi wa vizuizi vigumu',
      'Usaidizi ulioundwa kwa ajili ya kujiamini kwa mwanzoni'
    ],
    swahiliNote: 'Pata mwongozo wa vitendo kutoka kwa wakufunzi na wasaidizi wa masomo.'
  },
  {
    id: 'low-bandwidth-learning',
    title: 'Low-Bandwidth Learning',
    title_sw: 'Mafunzo ya Bandwidth Ndogo',
    shortDescription: 'Practical materials and delivery options designed for real East African connectivity.',
    shortDescription_sw: 'Nyenzo za vitendo na chaguzi za utoaji zilizoundwa kwa ajili ya muunganisho halisi wa Afrika Mashariki.',
    fullDescription: 'Choose learning formats that work with your connection, device, and schedule. We prioritize lightweight resources, clear downloads, and communication channels that keep learning accessible.',
    fullDescription_sw: 'Chagua mifumo ya mafunzo inayofanya kazi na muunganisho wako, kifaa, na ratiba yako. Tunatoa kipaumbele kwa rasilimali nyepesi, upakuaji wazi, na njia za mawasiliano zinazofanya mafunzo yafikike.',
    icon: 'Video',
    badge: 'Mobile Ready',
    badge_sw: 'Tayari kwa Simu',
    points: ['Lightweight reading and audio resources', 'Mobile-friendly lesson materials', 'Flexible WhatsApp learning options', 'Downloadable references for later use'],
    points_sw: [
      'Rasilimali nyepesi za kusoma na sauti',
      'Nyenzo za masomo zinazofaa simu',
      'Chaguzi rahisi za mafunzo ya WhatsApp',
      'Marejeleo yanayoweza kupakuliwa kwa matumizi ya baadaye'
    ],
    swahiliNote: 'Jifunze kwa kutumia data kidogo na kifaa ulicho nacho.'
  },
  {
    id: 'project-briefs',
    title: 'Real-World Project Briefs',
    title_sw: 'Maelezo ya Miradi ya Ulimwengu Halisi',
    shortDescription: 'Turn every major concept into a useful deliverable for work, study, or business.',
    shortDescription_sw: 'Badilisha kila dhana kuu kuwa tokeo muhimu kwa kazi, masomo, au biashara.',
    fullDescription: 'Project briefs connect lessons to real outcomes. Build a portfolio of useful work while learning how to define a problem, choose an approach, and explain your result.',
    fullDescription_sw: 'Maelezo ya miradi yanaunganisha masomo na matokeo halisi. Jenga kazio (portfolio) ya kazi muhimu huku ukijifunza jinsi ya kufafanua tatizo, kuchagua mbinu, na kueleza matokeo yako.',
    icon: 'CheckSquare',
    badge: 'Portfolio Building',
    badge_sw: 'Ujenzi wa Kazio (Portfolio)',
    points: ['Projects grounded in African use cases', 'Clear briefs and completion criteria', 'Practical review checkpoints', 'Evidence you can discuss with employers or clients'],
    points_sw: [
      'Miradi inayozingatia matumizi ya Afrika',
      'Maelezo wazi na vigezo vya kukamilisha',
      'Vituo vya ukaguzi vya vitendo',
      'Ushahidi unaoweza kujadili na waajiri au wateja'
    ],
    swahiliNote: 'Jenga miradi halisi inayoweza kuonekana kwenye portfolio yako.'
  },
  {
    id: 'cohort-community',
    title: 'Cohort Community',
    title_sw: 'Jumuiya ya Kikundi',
    shortDescription: 'Learn with peers through focused group discussion and shared progress.',
    shortDescription_sw: 'Jifunze na wenzako kupitia mjadala wa kikundi na maendeleo ya pamoja.',
    fullDescription: 'Cohort learning creates momentum and accountability. Meet people working on similar goals, exchange practical ideas, and learn in a community that understands the regional context.',
    fullDescription_sw: 'Mafunzo ya kikundi yanaunda kasi na uwajibikaji. Kutana na watu wanaofanya kazi kwenye malengo sawa, badilishana mawazo ya vitendo, na ujifunze katika jumuiya inayoelewa muktadha wa kikanda.',
    icon: 'Users',
    badge: 'Peer Learning',
    badge_sw: 'Mafunzo ya Wenzako',
    points: ['Focused cohort discussion groups', 'Peer examples and accountability', 'Shared Q&A and learning prompts', 'East African professional context'],
    points_sw: [
      'Vikundi vya majadiliano vya kikundi vilivyolenga',
      'Mifano ya wenzako na uwajibikaji',
      'Maswali na Majibu ya pamoja na maagizo ya mafunzo',
      'Muktadha wa kitaalamu wa Afrika Mashariki'
    ],
    swahiliNote: 'Jifunze pamoja na jamii ya wanafunzi kutoka Afrika Mashariki.'
  },
  {
    id: 'corporate-customization',
    title: 'Custom Team Programmes',
    title_sw: 'Programu za Timu Maalum',
    shortDescription: 'Adapt workshops and briefings to your organization’s people, tools, and priorities.',
    shortDescription_sw: 'Badilisha warsha na maelezo kulingana na watu, zana, na vipaumbele vya shirika lako.',
    fullDescription: 'Organizations can request a focused programme shaped around their workflow, risk profile, team level, and desired outcomes. We help turn a broad need into a practical training plan.',
    fullDescription_sw: 'Mashirika yanaweza kuomba programu iliyolenga inayoundwa kulingana na mtiririko wao wa kazi, wasifu wa hatari, kiwango cha timu, na matokeo yanayohitajika. Tunasaidia kugeuza mahitaji mapana kuwa mpango wa mafunzo wa vitendo.',
    icon: 'Building2',
    badge: 'For Organizations',
    badge_sw: 'Kwa Mashirika',
    points: ['Needs discovery and programme scoping', 'Role-specific examples and exercises', 'Flexible online or on-site delivery', 'Outcome-focused recommendations'],
    points_sw: [
      'Ugunduzi wa mahitaji na upeo wa programu',
      'Mifano na mazoezi maalum kwa jukumu',
      'Utoaji rahisi wa mtandaoni au ana kwa ana',
      'Mapendekezo yanayolenga matokeo'
    ],
    swahiliNote: 'Pata mafunzo yanayolingana na mahitaji ya timu na taasisi yako.'
  },
  {
    id: 'bilingual-teaching',
    title: 'Bilingual Teaching',
    title_sw: 'Ufundishaji wa Lugha Mbili',
    shortDescription: 'Understand complex technology in clear Kiswahili with the English terms used at work.',
    shortDescription_sw: 'Elewa teknolojia tata kwa Kiswahili wazi ukiwa na maneno ya Kiingereza yanayotumika kazini.',
    fullDescription: 'Our language approach makes advanced ideas easier to grasp without isolating learners from global technology practice. Key terms are explained in context and connected to practical use.',
    fullDescription_sw: 'Njia yetu ya lugha inafanya mawazo ya hali ya juu kuwa rahisi kueleweka bila kuwatenga wanafunzi kutoka kwa mazoea ya teknolojia ya ulimwengu. Maneno muhimu yanafafanuliwa katika muktadha na kuunganishwa na matumizi ya vitendo.',
    icon: 'Sparkles',
    badge: 'Kiswahili First',
    badge_sw: 'Kiswahili Kwanza',
    points: ['Clear Kiswahili explanations', 'English industry vocabulary in context', 'Examples adapted for local audiences', 'Better confidence asking technical questions'],
    points_sw: [
      'Maelezo wazi ya Kiswahili',
      'Msamiati wa sekta ya Kiingereza katika muktadha',
      'Mifano iliyorekebishwa kwa watazamaji wa ndani',
      'Kujiamini bora kuuliza maswali ya kiufundi'
    ],
    swahiliNote: 'Elewa teknolojia kwa Kiswahili huku ukijenga istilahi za kazi kwa Kiingereza.'
  },
  {
    id: 'career-pathways',
    title: 'Career Pathways',
    title_sw: 'Njia za Kazi',
    shortDescription: 'Move from curiosity to a focused next step with practical skills and evidence of work.',
    shortDescription_sw: 'Toka kwenye udadisi hadi hatua inayofuata iliyolenga na ujuzi wa vitendo na ushahidi wa kazi.',
    fullDescription: 'Each learning path helps you identify what to learn next, what to build, and how to communicate your new capability to an employer, client, school, or organization.',
    fullDescription_sw: 'Kila njia ya kujifunza inakusaidia kutambua nini cha kujifunza baadaye, nini cha kujenga, na jinsi ya kuwasiliana na uwezo wako mpya kwa mwajiri, mteja, shule, au shirika.',
    icon: 'Award',
    badge: 'Outcome Focused',
    badge_sw: 'Lengo la Matokeo',
    points: ['Beginner-to-professional pathways', 'Portfolio and CV guidance', 'Skills mapped to real roles', 'Practical next-step recommendations'],
    points_sw: [
      'Njia za kuanzia mwanzoni hadi kitaaluma',
      'Mwongozo wa kazio (portfolio) na CV',
      'Ujuzi uliopangwa kulingana na majukumu halisi',
      'Mapendekezo ya hatua inayofuata ya vitendo'
    ],
    swahiliNote: 'Jenga njia ya kazi kwa ujuzi na ushahidi wa kazi uliofanya.'
  },
  {
    id: 'safe-ai-practice',
    title: 'Safe AI Practice',
    title_sw: 'Mazoea Salama ya AI',
    shortDescription: 'Use AI productively while protecting privacy, accuracy, people, and organizational trust.',
    shortDescription_sw: 'Tumia AI kwa tija huku ukilinda faragha, usahihi, watu, na uaminifu wa shirika.',
    fullDescription: 'Every AI learning path includes verification, privacy, and responsible-use habits so learners can apply tools with judgment instead of blindly trusting generated output.',
    fullDescription_sw: 'Kila njia ya kujifunza ya AI inajumuisha uhakiki, faragha, na tabia za matumizi ya kuwajibika ili wanafunzi waweze kutumia zana kwa busara badala ya kuamini matokeo yaliyozalishwa bila upofu.',
    icon: 'ShieldCheck',
    badge: 'Responsible AI',
    badge_sw: 'AI Inayowajibika',
    points: ['Privacy-aware prompting habits', 'Verification before sharing or acting', 'Human review in important workflows', 'Practical AI safety guidance'],
    points_sw: [
      'Tabia za kuagiza (prompting) zinazozingatia faragha',
      'Uhakiki kabla ya kushiriki au kuchukua hatua',
      'Mapitio ya kibinadamu katika mtiririko muhimu wa kazi',
      'Mwongozo wa usalama wa vitendo wa AI'
    ],
    swahiliNote: 'Tumia AI kwa tija huku ukilinda faragha, usahihi na uaminifu.'
  },
  {
    id: 'learning-roadmaps',
    title: 'Learning Roadmaps',
    title_sw: 'Ramani za Mafunzo',
    shortDescription: 'See the sequence of skills, practice, and projects needed for your chosen goal.',
    shortDescription_sw: 'Angalia mlolongo wa ujuzi, mazoezi, na miradi inayohitajika kwa lengo lako ulilochagua.',
    fullDescription: 'A clear roadmap reduces overwhelm. We help learners connect foundational ideas to the next practical skill and a project that proves progress.',
    fullDescription_sw: 'Ramani wazi inapunguza kuzidiwa. Tunasaidia wanafunzi kuunganisha mawazo ya kimsingi na ujuzi wa vitendo unaofuata na mradi unaothibitisha maendeleo.',
    icon: 'Layers',
    badge: 'Clear Direction',
    badge_sw: 'Mwelekeo Wazi',
    points: ['Structured skill progression', 'Recommended practice milestones', 'Project checkpoints', 'Guidance for choosing the next module'],
    points_sw: [
      'Maendeleo ya ujuzi yaliyopangwa',
      'Hatua muhimu za mazoezi zinazopendekezwa',
      'Vituo vya ukaguzi vya miradi',
      'Mwongozo wa kuchagua moduli inayofuata'
    ],
    swahiliNote: 'Fuata mpangilio wazi wa ujuzi, mazoezi na miradi.'
  },
  {
    id: 'workshop-outcomes',
    title: 'Workshop Outcomes',
    title_sw: 'Matokeo ya Warsha',
    shortDescription: 'Leave every engagement with a clearer plan, stronger capability, and something useful to apply.',
    shortDescription_sw: 'Ondoka katika kila ushiriki ukiwa na mpango wazi zaidi, uwezo mkubwa zaidi, na kitu muhimu cha kutumia.',
    fullDescription: 'Our workshops are designed around decisions and deliverables. Before delivery, we clarify what participants should be able to do and how teams will apply the learning afterward.',
    fullDescription_sw: 'Warsha zetu zimeundwa kulingana na maamuzi na matokeo. Kabla ya utoaji, tunafafanua washiriki wanapaswa kuwa na uwezo wa kufanya nini na jinsi timu zitakavyotumia mafunzo baada ya hapo.',
    icon: 'CheckSquare',
    badge: 'Actionable Results',
    badge_sw: 'Matokeo Yanayotekelezeka',
    points: ['Defined outcomes before delivery', 'Exercises tied to participant roles', 'Practical take-home resources', 'Post-session action planning'],
    points_sw: [
      'Matokeo yaliyoainishwa kabla ya utoaji',
      'Mazoezi yaliyounganishwa na majukumu ya washiriki',
      'Rasilimali za vitendo za kuchukua nyumbani',
      'Upangaji wa hatua baada ya kipindi'
    ],
    swahiliNote: 'Maliza warsha ukiwa na mpango na matokeo ya kutumia mara moja.'
  }
];

export const inviteTiers = [
  {
    invites: '1 Friend',
    title: 'Unlock 1 Product',
    reward: 'Unlock 1 premium digital ebook or template from the Digital Shop.',
    statusBadge: 'Tier 1'
  },
  {
    invites: '5 Friends',
    title: 'Unlock Entire Shop',
    reward: 'Get complete, permanent access to every item in the Digital Shop.',
    statusBadge: 'Tier 2'
  },
  {
    invites: '10 Friends',
    title: 'Lifetime Premium Access',
    reward: '100% Free Lifetime Premium membership across all courses & future updates.',
    statusBadge: 'Tier 3 (VIP)'
  },
  {
    invites: '11+ Friends',
    title: '3,000 TSH Cash Payout',
    reward: 'Earn 3,000 Tsh cash per friend directly paid out to your M-Pesa / Tigo Pesa!',
    statusBadge: 'Cash Machine'
  }
];
