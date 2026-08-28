import { TrainingProgram, TrainingPackage } from '../types';

export const featuredTrainingData: TrainingProgram[] = [
  {
    id: 'ai-for-everyone',
    title: 'AI FOR EVERYONE',
    title_sw: 'AI KWA KILA MTU',
    category: 'ai',
    audience: 'Students, professionals and beginners',
    audience_sw: 'Wanafunzi, wataalamu na wanaoanza',
    level: 'Beginner',
    format: 'Live Online / Physical',
    format_sw: 'Mtandaoni / Ana kwa ana',
    duration: '1 to 2 Days',
    duration_sw: 'Siku 1 hadi 2',
    description: 'A friendly, non-technical immersion into artificial intelligence. Learn what AI really is, how to use modern AI assistants for daily tasks, and how to write effective prompts without feeling overwhelmed.',
    description_sw: 'Mafunzo rafiki yasiyo ya kiufundi kuhusu akili mnemba (AI). Jifunze AI ni nini hasa, jinsi ya kutumia wasaidizi wa kisasa wa AI kwa kazi za kila siku, na jinsi ya kuandika maelekezo (prompts) yenye ufanisi.',
    highlights: [
      'Zero technical background required',
      'Hands-on prompting exercises with instant feedback',
      'Daily productivity workflows for research and writing',
      'Offered in English & Kiswahili'
    ],
    highlights_sw: [
      'Hauhitaji ujuzi wa awali wa kiufundi',
      'Mazoezi ya vitendo ya uandishi wa maelekezo',
      'Mifumo ya uzalishaji ya kila siku kwa utafiti na uandishi',
      'Inatolewa kwa Kiingereza na Kiswahili'
    ],
    curriculum: [
      'Understanding generative AI vs search engines',
      'ChatGPT, Claude & Gemini: Setting up and navigating safely',
      'The 4-part prompt formula that gets 10x better answers',
      'Summarizing documents, books, and long meeting notes',
      'Brainstorming ideas, outlines, and business proposals'
    ],
    curriculum_sw: [
      'Kuelewa AI zalishi dhidi ya injini za utafutaji',
      'ChatGPT, Claude na Gemini: Kujiunga na kutumia kwa salama',
      'Kanuni ya sehemu 4 ya maelekezo inayopata majibu bora mara 10',
      'Kufupisha nyaraka, vitabu, na kumbukumbu za mikutano',
      'Kupata mawazo, muhtasari, na mapendekezo ya biashara'
    ],
    idealFor: 'Anyone wanting to understand the AI revolution and immediately apply it to their life, studies, or career.',
    idealFor_sw: 'Mtu yeyote anayetaka kuelewa mapinduzi ya AI na kuitumia mara moja katika maisha, masomo, au kazi yake.',
    isPopular: true
  },
  {
    id: 'ai-for-business',
    title: 'AI FOR BUSINESS',
    title_sw: 'AI KWA BIASHARA',
    category: 'ai',
    audience: 'Business teams, managers and professionals',
    audience_sw: 'Timu za biashara, mameneja na wataalamu',
    level: 'Professional',
    format: 'Workshop / Corporate',
    format_sw: 'Warsha / Makampuni',
    duration: 'Half-Day to 2 Days',
    duration_sw: 'Nusu Siku hadi Siku 2',
    description: 'Transform organizational productivity with AI. Learn how to draft client reports in minutes, analyze market data, automate repetitive customer communication, and safeguard proprietary company data.',
    description_sw: 'Badilisha uzalishaji wa shirika kwa AI. Jifunze jinsi ya kuandaa ripoti za wateja kwa dakika chache, kuchambua data za soko, na kulinda data za siri za kampuni.',
    highlights: [
      'Corporate data confidentiality & privacy protocols',
      'Department-specific workflows (Sales, HR, Ops, Marketing)',
      'ROI and efficiency metrics for management',
      'Practical business templates and prompt libraries'
    ],
    highlights_sw: [
      'Itifaki za usiri na faragha ya data za kampuni',
      'Mifumo ya kazi maalum kwa idara (Mauzo, HR, Masoko)',
      'Vipimo vya ufanisi na ROI kwa ajili ya uongozi',
      'Templeti za biashara na maktaba za maelekezo'
    ],
    curriculum: [
      'Enterprise generative AI use-cases & competitive advantage',
      'Drafting executive memos, client pitches, and contracts safely',
      'Financial data synthesis and spreadsheet formula assistance',
      'Designing company-wide AI usage guidelines and risk policies',
      'Hands-on workflow automation case studies'
    ],
    curriculum_sw: [
      'Matumizi ya AI zalishi kwa makampuni na faida za ushindani',
      'Kuandaa memo za uongozi, mawasilisho ya wateja, na mikataba kwa usalama',
      'Uchambuzi wa data za kifedha na usaidizi wa kanuni za lahajedwali',
      'Usanifu wa miongozo ya matumizi ya AI na sera za hatari za kampuni',
      'Tafiti za matukio za otomatishaji wa mifumo ya kazi'
    ],
    idealFor: 'Teams, startups, executives, and department leads seeking measurable productivity gains.',
    idealFor_sw: 'Timu, startups, viongozi, na wakuu wa idara wanaotafuta ongezeko la uzalishaji linalopimika.',
    isPopular: true
  },
  {
    id: 'ai-for-educators',
    title: 'AI FOR EDUCATORS',
    title_sw: 'AI KWA WAALIMU',
    category: 'ai',
    audience: 'Teachers, lecturers, tutors and trainers',
    audience_sw: 'Walimu, wahadhiri, wakufunzi na watoa mafunzo',
    level: 'Educator',
    format: 'Zoom / Physical',
    format_sw: 'Zoom / Ana kwa ana',
    duration: '1 Day Intensive',
    duration_sw: 'Siku 1 ya Mafunzo Makali',
    description: 'Empower educators to leverage AI for lesson planning, differentiated student exercises, assessment generation, and teaching students how to use AI critically and ethically.',
    description_sw: 'Wawezeshe waalimu kutumia AI kwa upangaji wa masomo, mazoezi tofauti kwa wanafunzi, uundaji wa tathmini, na kuwafundisha wanafunzi jinsi ya kutumia AI kwa umakini na kimaadili.',
    highlights: [
      'Cut lesson prep and rubric creation time by 60%',
      'Detecting AI-generated student submissions ethically',
      'Designing assignments that encourage critical thinking over copy-paste',
      'Inclusive teaching techniques for diverse learning paces'
    ],
    highlights_sw: [
      'Punguza muda wa kuandaa masomo na rubriki kwa 60%',
      'Kugundua kazi za wanafunzi zilizozalishwa na AI kimaadili',
      'Usanifu wa kazi zinazohimiza fikra tunduizi badala ya kunakili',
      'Mbinu za ufundishaji shirikishi kwa kasi tofauti za ujifunzaji'
    ],
    curriculum: [
      'AI as a 24/7 teaching assistant & curriculum co-creator',
      'Generating tailored quizzes, tests, and active learning prompts',
      'Navigating academic integrity, plagiarism, and AI policies',
      'Teaching AI literacy and fact-checking to students',
      'Developing bilingual educational aids in English & Kiswahili'
    ],
    curriculum_sw: [
      'AI kama msaidizi wa kufundisha wa 24/7 na msaidizi wa mtaala',
      'Kuzalisha chemsha bongo, mitihani, na maelekezo ya kujifunza',
      'Kudhibiti uadilifu wa kitaaluma, wizi wa maandishi, na sera za AI',
      'Kufundisha ujuzi wa AI na uhakiki wa ukweli kwa wanafunzi',
      'Kutengeneza zana za elimu za lugha mbili (Kiingereza na Kiswahili)'
    ],
    idealFor: 'School headmasters, university faculty, high school teachers, and training institute facilitators.',
    idealFor_sw: 'Wakuu wa shule, wahadhiri wa vyuo vikuu, walimu wa sekondari, na wawezeshaji wa taasisi za mafunzo.',
    isPopular: false
  },
  {
    id: 'ai-safety-deepfakes',
    title: 'AI SAFETY & DEEPFAKES',
    title_sw: 'USALAMA WA AI NA DEEPFAKES',
    category: 'ai',
    audience: 'Everyone (Citizens, media, leaders, students)',
    audience_sw: 'Kila mtu (Raia, vyombo vya habari, viongozi, wanafunzi)',
    level: 'Awareness',
    format: 'Seminar / Webinar',
    format_sw: 'Semina / Webinar',
    duration: '2 to 4 Hours',
    duration_sw: 'Saa 2 hadi 4',
    description: 'Critical digital defense for the era of synthetic media. Learn how voice cloning, manipulated videos, and automated misinformation work, and master forensic verification techniques.',
    description_sw: 'Ulinzi muhimu wa kidijitali kwa enzi ya media zalishi. Jifunze jinsi uigaji wa sauti, video zilizochezewa, na taarifa potofu zinavyofanya kazi.',
    highlights: [
      'Real-world case studies of financial and personal deepfake scams',
      'Step-by-step visual and audio artifact detection checklist',
      'Protecting personal brand, family photos, and executive identity',
      'Emergency verification protocols for financial transactions'
    ],
    highlights_sw: [
      'Tafiti za matukio halisi ya utapeli wa deepfake wa fedha na binafsi',
      'Orodha ya uhakiki ya kugundua ishara za bandia kwenye picha na sauti',
      'Kulinda chapa binafsi, picha za familia, na utambulisho wa uongozi',
      'Itifaki za uhakiki wa dharura kwa miamala ya kifedha'
    ],
    curriculum: [
      'The anatomy of generative deepfakes (voice, face-swap, lip-sync)',
      'How scammers use urgent voice clones in mobile money / wire fraud',
      'Reverse image search and metadata verification tools',
      'Family & organizational "Safe Word" protocols for wire transfers',
      'Ethical and legal boundaries of synthetic content'
    ],
    curriculum_sw: [
      'Muundo wa deepfakes zalishi (sauti, kubadilisha uso, lip-sync)',
      'Jinsi matapeli wanavyotumia sauti bandia kwenye utapeli wa pesa kwa simu',
      'Zana za utafutaji wa picha na uhakiki wa metadata',
      'Itifaki za "Neno la Siri" la familia na shirika kwa uhamishaji wa fedha',
      'Mipaka ya kimaadili na kisheria ya maudhui zalishi'
    ],
    idealFor: 'Media houses, corporate executives, banking clients, and anyone navigating online social media.',
    idealFor_sw: 'Vyombo vya habari, viongozi wa makampuni, wateja wa benki, na mtu yeyote anayetumia mitandao ya kijamii.',
    isPopular: false
  },
  {
    id: 'cybersecurity-awareness',
    title: 'CYBERSECURITY AWARENESS',
    title_sw: 'UELEWA WA USALAMA WA MTANDAO',
    category: 'cybersecurity',
    audience: 'Organizations, teams and communities',
    audience_sw: 'Mashirika, timu na jamii',
    level: 'Awareness',
    format: 'Workshop / In-House',
    format_sw: 'Warsha / Ndani ya Ofisi',
    duration: 'Half-Day to 1 Day',
    duration_sw: 'Nusu Siku hadi Siku 1',
    description: 'Engaging, non-jargon cyber safety training that eliminates human vulnerability. Train your entire team to recognize phishing emails, secure their credentials, and protect institutional secrets.',
    description_sw: 'Mafunzo ya usalama wa mtandao yasiyotumia lugha ngumu ambayo huondoa udhaifu wa kibinadamu. Fundisha timu yako yote kutambua barua pepe za hadaa na kulinda siri za taasisi.',
    highlights: [
      'Simulated phishing and mobile fraud exercises',
      'Password manager and multi-factor authentication setup',
      'Mobile device security & public Wi-Fi defense',
      'Compliance with modern data protection standards'
    ],
    highlights_sw: [
      'Mazoezi ya hadaa (phishing) na utapeli wa simu ya mfano',
      'Usakinishaji wa vidhibiti nywila na uhakiki wa hatua mbili (2FA)',
      'Usalama wa vifaa vya mkononi na ulinzi dhidi ya Wi-Fi ya umma',
      'Uzingatiaji wa viwango vya kisasa vya ulinzi wa data'
    ],
    curriculum: [
      'Why people are the #1 target of modern cybercriminals',
      'Anatomy of deceptive phishing, SMS scams (smishing), and phone fraud',
      'Creating unbreakable passwords without memorizing hundreds of codes',
      'Securing corporate laptops, smartphones, and WhatsApp business accounts',
      'What to do in the first 15 minutes of a suspected breach'
    ],
    curriculum_sw: [
      'Kwa nini watu ni walengwa namba 1 wa wahalifu wa mtandao',
      'Muundo wa hadaa za udanganyifu, utapeli wa SMS, na utapeli wa simu',
      'Kutengeneza nywila zisizovunjika bila kukariri mamia ya namba',
      'Kulinda laptop za kampuni, simu janja, na akaunti za WhatsApp Business',
      'Nini cha kufanya katika dakika 15 za kwanza za shambulio linalohisiwa'
    ],
    idealFor: 'Companies, non-profits, financial institutions, and government bodies needing compliance and security defense.',
    idealFor_sw: 'Makampuni, mashirika yasiyo ya kifaida, taasisi za fedha, na idara za serikali zinazohitaji ulinzi wa usalama.',
    isPopular: true
  },
  {
    id: 'digital-productivity-masterclass',
    title: 'DIGITAL PRODUCTIVITY MASTERCLASS',
    title_sw: 'DARASA LA UZALISHAJI WA KIDIJITALI',
    category: 'digital-skills',
    audience: 'Professionals, administrators and teams',
    audience_sw: 'Wataalamu, watawala na timu',
    level: 'Professional',
    format: 'Online / Physical',
    format_sw: 'Mtandaoni / Ana kwa ana',
    duration: '1 to 3 Days',
    duration_sw: 'Siku 1 hadi 3',
    description: 'Modernize everyday workplace efficiency. Master cloud collaboration across Google Workspace & Microsoft 365, eliminate email chaos, and build streamlined digital task management systems.',
    description_sw: 'Boresha ufanisi wa kila siku mahali pa kazi. Mudu ushirikiano wa wingu kupitia Google Workspace na Microsoft 365, na uondoe machafuko ya barua pepe.',
    highlights: [
      'Streamline administrative workflows and reporting',
      'Master spreadsheet formulas, pivot tables, and automated dashboards',
      'Professional business communication and presentation standards',
      'Hybrid and remote teamwork best practices'
    ],
    highlights_sw: [
      'Boresha mifumo ya utawala na utoaji wa ripoti',
      'Mudu kanuni za lahajedwali, pivot tables, na dashibodi za kiotomatiki',
      'Viwango vya mawasiliano ya kitaalamu ya biashara na uwasilishaji',
      'Mbinu bora za kufanya kazi kwa pamoja kwa mbali na mchanganyiko'
    ],
    curriculum: [
      'Mastering cloud document management, permissions, and co-editing',
      'Applied spreadsheets: formulas, data cleaning, and executive charts',
      'Inbox zero: structured email filters, templates, and rules',
      'Designing compelling presentation slides in half the time',
      'Digital task boards, calendar blocking, and workflow synchronization'
    ],
    curriculum_sw: [
      'Umahiri wa usimamizi wa nyaraka za wingu, ruhusa, na uhariri wa pamoja',
      'Lahajedwali zilizotumika: kanuni, kusafisha data, na chati za uongozi',
      'Inbox Zero: vichungi vya barua pepe, templeti, na sheria',
      'Usanifu wa slaidi za uwasilishaji kwa nusu ya muda wa kawaida',
      'Bodi za kazi za kidijitali, upangaji wa kalenda, na ulandanishi wa kazi'
    ],
    idealFor: 'Administrative staff, project managers, junior officers, and entrepreneurs looking to maximize daily output.',
    idealFor_sw: 'Wafanyakazi wa utawala, mameneja wa miradi, maafisa wadogo, na wajasiriamali wanaotaka kuongeza uzalishaji.',
    isPopular: false
  },
  {
    id: 'ai-for-researchers',
    title: 'AI FOR RESEARCH & REPORTING',
    title_sw: 'AI KWA UTAFITI NA RIPOTI',
    category: 'ai',
    audience: 'Researchers, analysts, students and NGO teams',
    audience_sw: 'Watafiti, wachambuzi, wanafunzi na timu za NGO',
    level: 'Professional',
    format: 'Live Online / Workshop',
    format_sw: 'Mtandaoni / Warsha',
    duration: '1 to 2 Days',
    duration_sw: 'Siku 1 hadi 2',
    description: 'Use AI to plan research, synthesize evidence, draft reports, and improve analysis while keeping sources, privacy, and human judgment at the center.',
    description_sw: 'Tumia AI kupanga utafiti, kuunganisha ushahidi, kuandaa ripoti, na kuboresha uchambuzi huku ukizingatia vyanzo na faragha.',
    highlights: ['Source-aware research workflows', 'Safe document summarization', 'Bilingual report drafting', 'Evidence and accuracy checks'],
    highlights_sw: ['Mifumo ya utafiti inayozingatia vyanzo', 'Ufupisho salama wa nyaraka', 'Uandishi wa ripoti kwa lugha mbili', 'Uhakiki wa ushahidi na usahihi'],
    curriculum: ['Research question and prompt design', 'Comparing sources and checking claims', 'Summarizing long documents safely', 'Turning evidence into clear reports', 'Building a repeatable research workflow'],
    curriculum_sw: ['Usanifu wa maswali ya utafiti na maelekezo', 'Kulinganisha vyanzo na kuhakiki madai', 'Kufupisha nyaraka ndefu kwa usalama', 'Kubadilisha ushahidi kuwa ripoti zilizo wazi', 'Kujenga mfumo wa utafiti unaoweza kujirudia'],
    idealFor: 'Researchers, university students, programme officers, and teams producing regular reports.',
    idealFor_sw: 'Watafiti, wanafunzi wa chuo kikuu, maafisa wa programu, na timu zinazotoa ripoti mara kwa mara.',
    isPopular: false
  },
  {
    id: 'ai-for-content-creators',
    title: 'AI FOR CONTENT CREATORS',
    title_sw: 'AI KWA WABUNIFU WA MAUDHUI',
    category: 'ai',
    audience: 'Creators, marketers, communicators and founders',
    audience_sw: 'Wabunifu, wauzaji, wawasiliani na waanzilishi',
    level: 'Professional',
    format: 'Live Online / Physical',
    format_sw: 'Mtandaoni / Ana kwa ana',
    duration: '1 Day Intensive',
    duration_sw: 'Siku 1 ya Mafunzo Makali',
    description: 'Build a faster content system for planning, writing, editing, repurposing, and publishing without losing your voice or audience trust.',
    description_sw: 'Jenga mfumo wa maudhui wa haraka kwa ajili ya kupanga, kuandika, kuhariri, na kuchapisha bila kupoteza sauti yako au uaminifu wa hadhira.',
    highlights: ['Content planning systems', 'Brand voice prompt library', 'Multi-channel repurposing', 'Human review and originality'],
    highlights_sw: ['Mifumo ya upangaji wa maudhui', 'Maktaba ya maelekezo ya sauti ya chapa', 'Kubadilisha maudhui kwa njia nyingi', 'Ukaguzi wa kibinadamu na uhalisi'],
    curriculum: ['Audience and content positioning', 'Prompting for outlines and first drafts', 'Editing for clarity and voice', 'Repurposing one idea across channels', 'Measuring useful content outcomes'],
    curriculum_sw: ['Hadhira na nafasi ya maudhui', 'Uandishi wa maagizo kwa ajili ya muhtasari na rasimu za kwanza', 'Kuhariri kwa ajili ya uwazi na sauti', 'Kubadilisha wazo moja kwa njia tofauti', 'Kupima matokeo muhimu ya maudhui'],
    idealFor: 'Marketing teams, creators, social media managers, and small business owners.',
    idealFor_sw: 'Timu za masoko, wabunifu, mameneja wa mitandao ya kijamii, na wamiliki wa biashara ndogo.',
    isPopular: false
  },
  {
    id: 'cybersecurity-for-smes',
    title: 'CYBERSECURITY FOR SMALL BUSINESS',
    title_sw: 'USALAMA WA MTANDAO KWA BIASHARA NDOGO',
    category: 'cybersecurity',
    audience: 'SME owners, managers and operational teams',
    audience_sw: 'Wamiliki wa SME, mameneja na timu za uendeshaji',
    level: 'Professional',
    format: 'Workshop / In-House',
    format_sw: 'Warsha / Ndani ya Ofisi',
    duration: 'Half-Day to 1 Day',
    duration_sw: 'Nusu Siku hadi Siku 1',
    description: 'Create an affordable security baseline for the accounts, devices, people, and customer data your small business depends on.',
    description_sw: 'Tengeneza msingi wa usalama wa gharama nafuu kwa ajili ya akaunti, vifaa, watu, na data za wateja ambazo biashara yako inazitegemea.',
    highlights: ['Prioritized risk checklist', 'Account and device hardening', 'Mobile money fraud prevention', 'Simple incident response plan'],
    highlights_sw: ['Orodha ya uhakiki ya hatari iliyopewa kipaumbele', 'Kuimarisha akaunti na vifaa', 'Kuzuia utapeli wa pesa kwa simu', 'Mpango rahisi wa majibu ya matukio'],
    curriculum: ['Mapping business assets and risks', 'Protecting email, cloud, and payment accounts', 'Staff awareness and access control', 'Backup and recovery essentials', 'Writing a small-business security plan'],
    curriculum_sw: ['Ramani ya rasilimali na hatari za biashara', 'Kulinda barua pepe, wingu, na akaunti za malipo', 'Uelewa wa wafanyakazi na udhibiti wa ufikiaji', 'Misingi ya nakala na urejeshaji', 'Kuandika mpango wa usalama wa biashara ndogo'],
    idealFor: 'Retailers, service businesses, startups, and growing teams without a dedicated security department.',
    idealFor_sw: 'Wafanyabiashara, biashara za huduma, startups, na timu zinazokua bila idara maalum ya usalama.',
    isPopular: false
  },
  {
    id: 'digital-marketing-foundations',
    title: 'DIGITAL MARKETING FOUNDATIONS',
    title_sw: 'MISINGI YA MASOKO YA KIDIJITALI',
    category: 'digital-skills',
    audience: 'Entrepreneurs, marketers and community organizations',
    audience_sw: 'Wajasiriamali, wauzaji na mashirika ya jamii',
    level: 'Beginner',
    format: 'Live Online / Physical',
    format_sw: 'Mtandaoni / Ana kwa ana',
    duration: '1 to 2 Days',
    duration_sw: 'Siku 1 hadi 2',
    description: 'Learn the practical foundations of online visibility, content planning, customer journeys, and simple performance measurement.',
    description_sw: 'Jifunze misingi ya vitendo ya kuonekana mtandaoni, upangaji wa maudhui, safari za wateja, na kipimo rahisi cha utendaji.',
    highlights: ['Audience and offer clarity', 'Content calendar creation', 'Social and search fundamentals', 'Simple campaign reporting'],
    highlights_sw: ['Uwazi wa hadhira na ofa', 'Uundaji wa kalenda ya maudhui', 'Misingi ya kijamii na utafutaji', 'Utoaji wa ripoti rahisi za kampeni'],
    curriculum: ['Digital customer journeys', 'Writing useful online content', 'Social media planning', 'Landing pages and calls to action', 'Reading basic campaign metrics'],
    curriculum_sw: ['Safari za wateja wa kidijitali', 'Kuandika maudhui muhimu ya mtandaoni', 'Upangaji wa mitandao ya kijamii', 'Kurasa za kutua na wito wa kuchukua hatua', 'Kusoma vipimo vya msingi vya kampeni'],
    idealFor: 'Small businesses, freelancers, NGOs, and teams responsible for digital outreach.',
    idealFor_sw: 'Biashara ndogo, freelancers, NGOs, na timu zinazohusika na mawasiliano ya kidijitali.',
    isPopular: false
  },
  {
    id: 'web-development-foundations',
    title: 'WEB DEVELOPMENT FOUNDATIONS',
    title_sw: 'MISINGI YA UJENZI WA WAVUTI',
    category: 'digital-skills',
    audience: 'Students, graduates and aspiring web builders',
    audience_sw: 'Wanafunzi, wahitimu na wanaotamani kujenga wavuti',
    level: 'Beginner',
    format: 'Live Online / Computer Lab',
    format_sw: 'Mtandaoni / Maabara ya Kompyuta',
    duration: '2 to 4 Days',
    duration_sw: 'Siku 2 hadi 4',
    description: 'Build a strong foundation in HTML, CSS, responsive layouts, accessibility, and the workflow used to publish useful websites.',
    description_sw: 'Jenga msingi imara katika HTML, CSS, miundo inayohimili vifaa tofauti, ufikiaji, na mfumo wa kazi wa kuchapisha tovuti muhimu.',
    highlights: ['No-code to code transition', 'Responsive page building', 'Accessible interface basics', 'Portfolio-ready website project'],
    highlights_sw: ['Mpito kutoka bila kodi hadi kodi', 'Ujenzi wa kurasa zinazohimili vifaa tofauti', 'Misingi ya miundo inayofikika', 'Mradi wa tovuti tayari kwa portfolio'],
    curriculum: ['How the web works', 'Semantic HTML and page structure', 'CSS layout and responsive design', 'Forms, accessibility, and usability', 'Publishing and presenting a portfolio site'],
    curriculum_sw: ['Jinsi wavuti inavyofanya kazi', 'HTML ya maana na muundo wa ukurasa', 'Usanifu wa CSS na miundo inayohimili', 'Fomu, ufikiaji, na utumiaji', 'Kuchapisha na kuwasilisha tovuti ya portfolio'],
    idealFor: 'Beginners who want to build websites confidently and prepare for deeper coding study.',
    idealFor_sw: 'Wanaoanza wanaotaka kujenga tovuti kwa kujiamini na kujiandaa kwa masomo ya kina ya kodi.',
    isPopular: true
  },
  {
    id: 'data-literacy-for-teams',
    title: 'DATA LITERACY FOR TEAMS',
    title_sw: 'UJUZI WA DATA KWA TIMU',
    category: 'digital-skills',
    audience: 'Managers, programme teams and operations staff',
    audience_sw: 'Mameneja, timu za programu na wafanyakazi wa uendeshaji',
    level: 'Professional',
    format: 'Workshop / Corporate',
    format_sw: 'Warsha / Makampuni',
    duration: '1 to 2 Days',
    duration_sw: 'Siku 1 hadi 2',
    description: 'Turn everyday operational data into clearer decisions through clean spreadsheets, simple analysis, and confident communication.',
    description_sw: 'Badilisha data za kila siku za uendeshaji kuwa maamuzi yaliyo wazi kupitia lahajedwali safi, uchambuzi rahisi, na mawasiliano ya kujiamini.',
    highlights: ['Data cleaning habits', 'Decision-ready summaries', 'Practical spreadsheet analysis', 'Clear charts and reporting'],
    highlights_sw: ['Tabia za kusafisha data', 'Muhtasari tayari kwa maamuzi', 'Uchambuzi wa vitendo wa lahajedwali', 'Chati na ripoti zilizo wazi'],
    curriculum: ['Data quality and structure', 'Formulas, filters, and validation', 'Summaries and pivot tables', 'Charts that explain a decision', 'Building a repeatable reporting template'],
    curriculum_sw: ['Ubora na muundo wa data', 'Kanuni, vichungi, na uhakiki', 'Muhtasari na pivot tables', 'Chati zinazoelezea maamuzi', 'Kujenga templeti ya ripoti inayoweza kujirudia'],
    idealFor: 'Operations, finance, programme, monitoring, and management teams.',
    idealFor_sw: 'Timu za uendeshaji, fedha, programu, ufuatiliaji, na uongozi.',
    isPopular: false
  }
];

export const trainingPackagesData: TrainingPackage[] = [
  {
    id: 'pkg-ai-awareness',
    title: 'AI Awareness Session',
    tagline: 'Inspire your team and demystify generative AI technology.',
    durations: ['2 Hours', 'Half Day'],
    formats: ['Online (Zoom/Meet)', 'Physical On-Site'],
    targetAudience: 'All staff, general membership, leadership teams',
    keyOutcomes: ['Understanding AI landscape', 'Core practical use cases', 'Safe usage principles', 'Q&A with expert'],
    category: 'AI'
  },
  {
    id: 'pkg-ai-productivity',
    title: 'AI Productivity Workshop',
    tagline: 'Practical prompt engineering and daily workflow optimization.',
    durations: ['Half Day', '1 Day'],
    formats: ['Online', 'Physical', 'Hybrid'],
    targetAudience: 'Operations, marketing, sales, research, and admin teams',
    keyOutcomes: ['S.M.A.R.T. prompting mastery', 'Automating emails & reports', 'Document summarization', 'Custom prompt library'],
    category: 'AI'
  },
  {
    id: 'pkg-ai-bootcamp',
    title: 'Comprehensive AI Bootcamp',
    tagline: 'In-depth, hands-on immersive training with project milestones.',
    durations: ['2 Days', '3+ Days Intensive', '4-Week Cohort'],
    formats: ['Physical Bootcamp', 'Hybrid Evening/Weekend'],
    targetAudience: 'Tech teams, power users, analysts, ambitious professionals',
    keyOutcomes: ['End-to-end AI workflows', 'Advanced prompting & reasoning', 'Data synthesis', 'Certificate of Completion'],
    category: 'AI'
  },
  {
    id: 'pkg-ai-educators',
    title: 'AI for Educators & Faculty',
    tagline: 'Equip teachers with modern pedagogy and AI-powered prep tools.',
    durations: ['1 Day', '2 Days'],
    formats: ['On-Campus Workshop', 'Live Virtual Training'],
    targetAudience: 'University lecturers, high school teachers, academic leaders',
    keyOutcomes: ['Automated lesson plan generation', 'Assessment design', 'Ethical AI classroom policies', 'Bilingual aids'],
    category: 'Institutional'
  },
  {
    id: 'pkg-ai-business',
    title: 'AI for Business & Management',
    tagline: 'Strategic AI adoption, risk mitigation, and commercial leverage.',
    durations: ['1 Day', '2 Days'],
    formats: ['Executive Offsite', 'Physical Corporate Training'],
    targetAudience: 'C-Suite, Directors, Senior Managers, Business Owners',
    keyOutcomes: ['Organizational AI policy', 'Departmental efficiency plans', 'Data security framework', 'Vendor evaluation'],
    category: 'Executive'
  },
  {
    id: 'pkg-cyber-awareness',
    title: 'Cybersecurity Awareness Workshop',
    tagline: 'Build a human firewall and safeguard institutional assets.',
    durations: ['2 Hours', 'Half Day', '1 Day'],
    formats: ['All Hands Virtual', 'Physical Interactive Workshop'],
    targetAudience: 'All company employees, contractors, board members',
    keyOutcomes: ['Phishing simulation defense', 'Credential & device security', 'Mobile money safety', 'Incident first-aid'],
    category: 'Cybersecurity'
  },
  {
    id: 'pkg-digital-bootcamp',
    title: 'Digital Skills Workplace Bootcamp',
    tagline: 'Accelerate digital literacy across your administrative workforce.',
    durations: ['2 Days', '1 Week'],
    formats: ['Physical Computer Lab', 'Interactive Virtual'],
    targetAudience: 'Administrative assistants, support staff, interns, field staff',
    keyOutcomes: ['Google Workspace / MS 365 mastery', 'Spreadsheets & analysis', 'Digital presentation design', 'Cloud hygiene'],
    category: 'Digital Skills'
  },
  {
    id: 'pkg-exec-briefing',
    title: 'Executive AI & Cyber Briefing',
    tagline: 'High-level strategic briefing tailored for decision-makers.',
    durations: ['90 Minutes', '2 Hours'],
    formats: ['Executive Boardroom', 'Private Video Briefing'],
    targetAudience: 'Boards of Directors, CEOs, Permanent Secretaries, Ministers',
    keyOutcomes: ['Global & African AI trends', 'Cyber governance & regulatory risks', 'Strategic roadmap guidance', 'Direct expert advisory'],
    category: 'Executive'
  },
  {
    id: 'pkg-univ-programme',
    title: 'University & Youth AI Programme',
    tagline: 'Campus-wide technology empowerment and future-of-work readiness.',
    durations: ['Multi-Day', 'Semester Long Modules'],
    formats: ['Auditorium Sessions + Online Cohort'],
    targetAudience: 'Undergraduate & graduate students, student associations',
    keyOutcomes: ['Practical workforce skills', 'Research enhancement with AI', 'Career portfolio development', 'Student community'],
    category: 'Institutional'
  },
  {
    id: 'pkg-custom-institutional',
    title: 'Custom Institutional Programme',
    tagline: 'Fully customized learning track co-designed to your exact goals.',
    durations: ['Custom Duration', 'Retainer / Multi-Phase'],
    formats: ['Tailored Online, Physical, or Hybrid'],
    targetAudience: 'NGOs, Multilateral Agencies, Government Ministries, Banks',
    keyOutcomes: ['Custom curriculum design', 'Pre & post assessments', 'Localized training materials', 'Dedicated trainer assigned'],
    category: 'Institutional'
  },
  {
    id: 'pkg-ai-leadership',
    title: 'AI for Leadership Teams',
    tagline: 'Equip directors and senior managers to lead AI adoption responsibly.',
    durations: ['Half Day', '1 Day'],
    formats: ['Executive Boardroom', 'Private Cohort'],
    targetAudience: 'C-Suite, Directors, Department Heads, Senior Managers',
    keyOutcomes: ['AI strategy frameworks', 'Risk and governance overview', 'Departmental adoption roadmap', 'Decision-making with AI'],
    category: 'AI'
  },
  {
    id: 'pkg-ai-data-analytics',
    title: 'AI for Data & Analytics',
    tagline: 'Apply AI to spreadsheets, reports, and operational data analysis.',
    durations: ['1 Day', '2 Days'],
    formats: ['Live Online Workshop', 'Physical Training'],
    targetAudience: 'Analysts, operations, finance, and programme teams',
    keyOutcomes: ['AI-assisted spreadsheet formulas', 'Data cleaning and validation', 'Report drafting with AI', 'Insight summaries for leaders'],
    category: 'AI'
  },
  {
    id: 'pkg-ai-customer-support',
    title: 'AI for Customer Support Teams',
    tagline: 'Speed up customer replies without losing your brand voice.',
    durations: ['Half Day', '1 Day'],
    formats: ['Live Virtual', 'Physical Workshop'],
    targetAudience: 'Customer support, contact centre, and service desk teams',
    keyOutcomes: ['Reply drafting prompts', 'Tone and brand voice library', 'Escalation rules for AI', 'Quality review checklists'],
    category: 'AI'
  },
  {
    id: 'pkg-ai-marketing-content',
    title: 'AI for Marketing & Content',
    tagline: 'Plan, draft, and repurpose marketing content at scale.',
    durations: ['1 Day', '2 Days'],
    formats: ['Live Online', 'Hybrid Cohort'],
    targetAudience: 'Marketing teams, content creators, founders, and agencies',
    keyOutcomes: ['Content calendar generation', 'Multi-channel repurposing', 'Brand voice prompt library', 'Originality and review workflow'],
    category: 'AI'
  },
  {
    id: 'pkg-cyber-incident-response',
    title: 'Cyber Incident Response Drill',
    tagline: 'Run a live simulation so your team knows exactly what to do during an attack.',
    durations: ['Half Day', '1 Day'],
    formats: ['Tabletop Exercise', 'Live Simulation'],
    targetAudience: 'IT leads, security champions, operations, and executive sponsors',
    keyOutcomes: ['Live breach simulation', 'Decision tree practice', 'Communication protocols', 'Post-incident reporting'],
    category: 'Cybersecurity'
  },
  {
    id: 'pkg-cyber-mobile-money',
    title: 'Mobile Money & Payments Security',
    tagline: 'Protect customer payments and reduce fraud across mobile channels.',
    durations: ['2 Hours', 'Half Day'],
    formats: ['All Hands Virtual', 'On-Site Briefing'],
    targetAudience: 'Finance teams, agents, and any staff handling mobile payments',
    keyOutcomes: ['SIM-swap and OTP fraud defense', 'Customer verification scripts', 'Fraud reporting workflows', 'Refund and dispute handling'],
    category: 'Cybersecurity'
  },
  {
    id: 'pkg-cyber-data-protection',
    title: 'Data Protection & Privacy Workshop',
    tagline: 'Build practical data-handling habits aligned to modern privacy laws.',
    durations: ['Half Day', '1 Day'],
    formats: ['Live Online', 'Physical Workshop'],
    targetAudience: 'Compliance, HR, legal, and operations teams handling personal data',
    keyOutcomes: ['Personal data inventory', 'Consent and retention rules', 'Subject request handling', 'Breach response basics'],
    category: 'Cybersecurity'
  },
  {
    id: 'pkg-cyber-executive',
    title: 'Executive Cyber Risk Briefing',
    tagline: 'Translate cyber threats into a board-ready risk conversation.',
    durations: ['90 Minutes', '2 Hours'],
    formats: ['Private Boardroom', 'Live Virtual'],
    targetAudience: 'Boards, CEOs, audit committees, and risk officers',
    keyOutcomes: ['Top threats facing the sector', 'Cyber risk register primer', 'Investment prioritisation', 'Board-level reporting template'],
    category: 'Cybersecurity'
  },
  {
    id: 'pkg-digital-collaboration',
    title: 'Cloud Collaboration Bootcamp',
    tagline: 'Modernise day-to-day teamwork with cloud documents and shared workflows.',
    durations: ['1 Day', '2 Days'],
    formats: ['Physical Computer Lab', 'Live Virtual'],
    targetAudience: 'Administrative, operations, and programme staff',
    keyOutcomes: ['Google Workspace or Microsoft 365 mastery', 'Shared drives and permissions', 'Real-time co-editing', 'Version control and naming'],
    category: 'Digital Skills'
  },
  {
    id: 'pkg-digital-spreadsheets',
    title: 'Spreadsheets for Decision-Making',
    tagline: 'Go beyond basic formulas to build reliable, decision-ready spreadsheets.',
    durations: ['1 Day', '2 Days'],
    formats: ['Live Online', 'Physical Lab'],
    targetAudience: 'Finance, operations, programme, and reporting teams',
    keyOutcomes: ['Lookup and array formulas', 'Data validation and cleaning', 'Pivot tables and summaries', 'Charts that explain a decision'],
    category: 'Digital Skills'
  },
  {
    id: 'pkg-digital-presentations',
    title: 'Presentation & Storytelling Skills',
    tagline: 'Design clear, professional slides and present with confidence.',
    durations: ['Half Day', '1 Day'],
    formats: ['Live Online', 'In-Person Workshop'],
    targetAudience: 'Managers, sales teams, trainers, and rising leaders',
    keyOutcomes: ['Slide structure frameworks', 'Visual hierarchy and layout', 'Reusable slide templates', 'Delivery and pacing practice'],
    category: 'Digital Skills'
  },
  {
    id: 'pkg-digital-project-management',
    title: 'Project & Task Management Essentials',
    tagline: 'Set up lightweight systems that keep teams aligned and on schedule.',
    durations: ['1 Day', '2 Days'],
    formats: ['Live Virtual', 'Physical Workshop'],
    targetAudience: 'Team leads, project coordinators, and growing organisations',
    keyOutcomes: ['Task board setup', 'Weekly planning rituals', 'Status update templates', 'Risk and blocker tracking'],
    category: 'Digital Skills'
  },
  {
    id: 'pkg-exec-ai-strategy',
    title: 'Executive AI Strategy Retreat',
    tagline: 'A focused offsite to align leadership on AI priorities and investment.',
    durations: ['1 Day', '2 Days'],
    formats: ['Executive Offsite', 'Private Boardroom'],
    targetAudience: 'Boards, C-Suite, and senior leadership teams',
    keyOutcomes: ['Strategic AI positioning', 'Investment prioritisation', 'Talent and change plan', '90-day execution roadmap'],
    category: 'Executive'
  },
  {
    id: 'pkg-exec-cyber-governance',
    title: 'Cyber Governance for Executives',
    tagline: 'Strengthen board-level oversight of cyber and data risk.',
    durations: ['Half Day', '1 Day'],
    formats: ['Private Boardroom', 'Live Virtual'],
    targetAudience: 'Boards, audit and risk committees, CEOs',
    keyOutcomes: ['Cyber governance framework', 'Roles and responsibilities', 'Reporting cadence', 'Third-party risk primer'],
    category: 'Executive'
  },
  {
    id: 'pkg-exec-innovation',
    title: 'Executive Innovation Lab',
    tagline: 'Identify, prioritise, and pilot AI and digital initiatives across the business.',
    durations: ['2 Days', '3 Days'],
    formats: ['Offsite Workshop', 'Hybrid Cohort'],
    targetAudience: 'Senior leaders, innovation heads, and strategy teams',
    keyOutcomes: ['Opportunity mapping', 'Use case prioritisation', 'Pilot design', 'Success metrics and review'],
    category: 'Executive'
  },
  {
    id: 'pkg-exec-leadership-coaching',
    title: 'Leadership Coaching Cohort',
    tagline: 'A small-group coaching programme for senior leaders navigating change.',
    durations: ['6 Weeks', '3 Months'],
    formats: ['Hybrid Cohort', 'Private Coaching'],
    targetAudience: 'Senior managers, directors, and emerging executives',
    keyOutcomes: ['Personal leadership plan', 'Decision-making practice', 'Feedback and communication', 'Peer accountability circle'],
    category: 'Executive'
  },
  {
    id: 'pkg-inst-school-programme',
    title: 'Whole-School Digital Programme',
    tagline: 'Roll out a unified digital and AI curriculum across a school.',
    durations: ['Semester Long', 'Academic Year'],
    formats: ['On-Campus', 'Blended Online'],
    targetAudience: 'Primary and secondary schools, heads of ICT, and deputy heads',
    keyOutcomes: ['Year-long curriculum map', 'Teacher training cohorts', 'Student assessments', 'Parent engagement sessions'],
    category: 'Institutional'
  },
  {
    id: 'pkg-inst-university-elective',
    title: 'University Elective & Certificate',
    tagline: 'Embed a credit-bearing digital skills elective in your university.',
    durations: ['One Semester', '12-Week Module'],
    formats: ['Campus Lectures', 'Online Cohort'],
    targetAudience: 'Universities, deans, faculty, and student affairs teams',
    keyOutcomes: ['Accredited curriculum', 'Faculty co-teaching', 'Student capstone projects', 'Certificate of completion'],
    category: 'Institutional'
  },
  {
    id: 'pkg-inst-ngo-capacity',
    title: 'NGO & Development Capacity Building',
    tagline: 'Strengthen programme teams with practical AI and data skills.',
    durations: ['1 Week', 'Multi-Week'],
    formats: ['In-Country Workshop', 'Remote Cohort'],
    targetAudience: 'NGOs, donor programmes, implementing partners',
    keyOutcomes: ['Programme team enablement', 'Data quality practices', 'Reporting automation', 'Local trainer certification'],
    category: 'Institutional'
  },
  {
    id: 'pkg-inst-government-workforce',
    title: 'Government Workforce Modernisation',
    tagline: 'Modernise civil service workflows with secure, practical digital skills.',
    durations: ['Multi-Week', 'Quarter Long'],
    formats: ['Government Premises', 'Secure Virtual'],
    targetAudience: 'Ministries, departments, civil service training institutes',
    keyOutcomes: ['Workforce baseline assessment', 'Role-based training tracks', 'Security and compliance', 'Change management support'],
    category: 'Institutional'
  }
];
