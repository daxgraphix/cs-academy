import { TrainingProgram, TrainingPackage } from '../types';

export const featuredTrainingData: TrainingProgram[] = [
  {
    id: 'ai-for-everyone',
    title: 'AI FOR EVERYONE',
    category: 'ai',
    audience: 'Students, professionals and beginners',
    level: 'Beginner',
    format: 'Live Online / Physical',
    duration: '1 to 2 Days',
    description: 'A friendly, non-technical immersion into artificial intelligence. Learn what AI really is, how to use modern AI assistants for daily tasks, and how to write effective prompts without feeling overwhelmed.',
    highlights: [
      'Zero technical background required',
      'Hands-on prompting exercises with instant feedback',
      'Daily productivity workflows for research and writing',
      'Offered in English & Kiswahili'
    ],
    curriculum: [
      'Understanding generative AI vs search engines',
      'ChatGPT, Claude & Gemini: Setting up and navigating safely',
      'The 4-part prompt formula that gets 10x better answers',
      'Summarizing documents, books, and long meeting notes',
      'Brainstorming ideas, outlines, and business proposals'
    ],
    idealFor: 'Anyone wanting to understand the AI revolution and immediately apply it to their life, studies, or career.',
    isPopular: true
  },
  {
    id: 'ai-for-business',
    title: 'AI FOR BUSINESS',
    category: 'ai',
    audience: 'Business teams, managers and professionals',
    level: 'Professional',
    format: 'Workshop / Corporate',
    duration: 'Half-Day to 2 Days',
    description: 'Transform organizational productivity with AI. Learn how to draft client reports in minutes, analyze market data, automate repetitive customer communication, and safeguard proprietary company data.',
    highlights: [
      'Corporate data confidentiality & privacy protocols',
      'Department-specific workflows (Sales, HR, Ops, Marketing)',
      'ROI and efficiency metrics for management',
      'Practical business templates and prompt libraries'
    ],
    curriculum: [
      'Enterprise generative AI use-cases & competitive advantage',
      'Drafting executive memos, client pitches, and contracts safely',
      'Financial data synthesis and spreadsheet formula assistance',
      'Designing company-wide AI usage guidelines and risk policies',
      'Hands-on workflow automation case studies'
    ],
    idealFor: 'Teams, startups, executives, and department leads seeking measurable productivity gains.',
    isPopular: true
  },
  {
    id: 'ai-for-educators',
    title: 'AI FOR EDUCATORS',
    category: 'ai',
    audience: 'Teachers, lecturers, tutors and trainers',
    level: 'Educator',
    format: 'Zoom / Physical',
    duration: '1 Day Intensive',
    description: 'Empower educators to leverage AI for lesson planning, differentiated student exercises, assessment generation, and teaching students how to use AI critically and ethically.',
    highlights: [
      'Cut lesson prep and rubric creation time by 60%',
      'Detecting AI-generated student submissions ethically',
      'Designing assignments that encourage critical thinking over copy-paste',
      'Inclusive teaching techniques for diverse learning paces'
    ],
    curriculum: [
      'AI as a 24/7 teaching assistant & curriculum co-creator',
      'Generating tailored quizzes, tests, and active learning prompts',
      'Navigating academic integrity, plagiarism, and AI policies',
      'Teaching AI literacy and fact-checking to students',
      'Developing bilingual educational aids in English & Kiswahili'
    ],
    idealFor: 'School headmasters, university faculty, high school teachers, and training institute facilitators.',
    isPopular: false
  },
  {
    id: 'ai-safety-deepfakes',
    title: 'AI SAFETY & DEEPFAKES',
    category: 'ai',
    audience: 'Everyone (Citizens, media, leaders, students)',
    level: 'Awareness',
    format: 'Seminar / Webinar',
    duration: '2 to 4 Hours',
    description: 'Critical digital defense for the era of synthetic media. Learn how voice cloning, manipulated videos, and automated misinformation work, and master forensic verification techniques.',
    highlights: [
      'Real-world case studies of financial and personal deepfake scams',
      'Step-by-step visual and audio artifact detection checklist',
      'Protecting personal brand, family photos, and executive identity',
      'Emergency verification protocols for financial transactions'
    ],
    curriculum: [
      'The anatomy of generative deepfakes (voice, face-swap, lip-sync)',
      'How scammers use urgent voice clones in mobile money / wire fraud',
      'Reverse image search and metadata verification tools',
      'Family & organizational "Safe Word" protocols for wire transfers',
      'Ethical and legal boundaries of synthetic content'
    ],
    idealFor: 'Media houses, corporate executives, banking clients, and anyone navigating online social media.',
    isPopular: false
  },
  {
    id: 'cybersecurity-awareness',
    title: 'CYBERSECURITY AWARENESS',
    category: 'cybersecurity',
    audience: 'Organizations, teams and communities',
    level: 'Awareness',
    format: 'Workshop / In-House',
    duration: 'Half-Day to 1 Day',
    description: 'Engaging, non-jargon cyber safety training that eliminates human vulnerability. Train your entire team to recognize phishing emails, secure their credentials, and protect institutional secrets.',
    highlights: [
      'Simulated phishing and mobile fraud exercises',
      'Password manager and multi-factor authentication setup',
      'Mobile device security & public Wi-Fi defense',
      'Compliance with modern data protection standards'
    ],
    curriculum: [
      'Why people are the #1 target of modern cybercriminals',
      'Anatomy of deceptive phishing, SMS scams (smishing), and phone fraud',
      'Creating unbreakable passwords without memorizing hundreds of codes',
      'Securing corporate laptops, smartphones, and WhatsApp business accounts',
      'What to do in the first 15 minutes of a suspected breach'
    ],
    idealFor: 'Companies, non-profits, financial institutions, and government bodies needing compliance and security defense.',
    isPopular: true
  },
  {
    id: 'digital-productivity-masterclass',
    title: 'DIGITAL PRODUCTIVITY MASTERCLASS',
    category: 'digital-skills',
    audience: 'Professionals, administrators and teams',
    level: 'Professional',
    format: 'Online / Physical',
    duration: '1 to 3 Days',
    description: 'Modernize everyday workplace efficiency. Master cloud collaboration across Google Workspace & Microsoft 365, eliminate email chaos, and build streamlined digital task management systems.',
    highlights: [
      'Streamline administrative workflows and reporting',
      'Master spreadsheet formulas, pivot tables, and automated dashboards',
      'Professional business communication and presentation standards',
      'Hybrid and remote teamwork best practices'
    ],
    curriculum: [
      'Mastering cloud document management, permissions, and co-editing',
      'Applied spreadsheets: formulas, data cleaning, and executive charts',
      'Inbox zero: structured email filters, templates, and rules',
      'Designing compelling presentation slides in half the time',
      'Digital task boards, calendar blocking, and workflow synchronization'
    ],
    idealFor: 'Administrative staff, project managers, junior officers, and entrepreneurs looking to maximize daily output.',
    isPopular: false
  },
  {
    id: 'ai-for-researchers',
    title: 'AI FOR RESEARCH & REPORTING',
    category: 'ai',
    audience: 'Researchers, analysts, students and NGO teams',
    level: 'Professional',
    format: 'Live Online / Workshop',
    duration: '1 to 2 Days',
    description: 'Use AI to plan research, synthesize evidence, draft reports, and improve analysis while keeping sources, privacy, and human judgment at the center.',
    highlights: ['Source-aware research workflows', 'Safe document summarization', 'Bilingual report drafting', 'Evidence and accuracy checks'],
    curriculum: ['Research question and prompt design', 'Comparing sources and checking claims', 'Summarizing long documents safely', 'Turning evidence into clear reports', 'Building a repeatable research workflow'],
    idealFor: 'Researchers, university students, programme officers, and teams producing regular reports.',
    isPopular: false
  },
  {
    id: 'ai-for-content-creators',
    title: 'AI FOR CONTENT CREATORS',
    category: 'ai',
    audience: 'Creators, marketers, communicators and founders',
    level: 'Professional',
    format: 'Live Online / Physical',
    duration: '1 Day Intensive',
    description: 'Build a faster content system for planning, writing, editing, repurposing, and publishing without losing your voice or audience trust.',
    highlights: ['Content planning systems', 'Brand voice prompt library', 'Multi-channel repurposing', 'Human review and originality'],
    curriculum: ['Audience and content positioning', 'Prompting for outlines and first drafts', 'Editing for clarity and voice', 'Repurposing one idea across channels', 'Measuring useful content outcomes'],
    idealFor: 'Marketing teams, creators, social media managers, and small business owners.',
    isPopular: false
  },
  {
    id: 'cybersecurity-for-smes',
    title: 'CYBERSECURITY FOR SMALL BUSINESS',
    category: 'cybersecurity',
    audience: 'SME owners, managers and operational teams',
    level: 'Professional',
    format: 'Workshop / In-House',
    duration: 'Half-Day to 1 Day',
    description: 'Create an affordable security baseline for the accounts, devices, people, and customer data your small business depends on.',
    highlights: ['Prioritized risk checklist', 'Account and device hardening', 'Mobile money fraud prevention', 'Simple incident response plan'],
    curriculum: ['Mapping business assets and risks', 'Protecting email, cloud, and payment accounts', 'Staff awareness and access control', 'Backup and recovery essentials', 'Writing a small-business security plan'],
    idealFor: 'Retailers, service businesses, startups, and growing teams without a dedicated security department.',
    isPopular: false
  },
  {
    id: 'digital-marketing-foundations',
    title: 'DIGITAL MARKETING FOUNDATIONS',
    category: 'digital-skills',
    audience: 'Entrepreneurs, marketers and community organizations',
    level: 'Beginner',
    format: 'Live Online / Physical',
    duration: '1 to 2 Days',
    description: 'Learn the practical foundations of online visibility, content planning, customer journeys, and simple performance measurement.',
    highlights: ['Audience and offer clarity', 'Content calendar creation', 'Social and search fundamentals', 'Simple campaign reporting'],
    curriculum: ['Digital customer journeys', 'Writing useful online content', 'Social media planning', 'Landing pages and calls to action', 'Reading basic campaign metrics'],
    idealFor: 'Small businesses, freelancers, NGOs, and teams responsible for digital outreach.',
    isPopular: false
  },
  {
    id: 'web-development-foundations',
    title: 'WEB DEVELOPMENT FOUNDATIONS',
    category: 'digital-skills',
    audience: 'Students, graduates and aspiring web builders',
    level: 'Beginner',
    format: 'Live Online / Computer Lab',
    duration: '2 to 4 Days',
    description: 'Build a strong foundation in HTML, CSS, responsive layouts, accessibility, and the workflow used to publish useful websites.',
    highlights: ['No-code to code transition', 'Responsive page building', 'Accessible interface basics', 'Portfolio-ready website project'],
    curriculum: ['How the web works', 'Semantic HTML and page structure', 'CSS layout and responsive design', 'Forms, accessibility, and usability', 'Publishing and presenting a portfolio site'],
    idealFor: 'Beginners who want to build websites confidently and prepare for deeper coding study.',
    isPopular: true
  },
  {
    id: 'data-literacy-for-teams',
    title: 'DATA LITERACY FOR TEAMS',
    category: 'digital-skills',
    audience: 'Managers, programme teams and operations staff',
    level: 'Professional',
    format: 'Workshop / Corporate',
    duration: '1 to 2 Days',
    description: 'Turn everyday operational data into clearer decisions through clean spreadsheets, simple analysis, and confident communication.',
    highlights: ['Data cleaning habits', 'Decision-ready summaries', 'Practical spreadsheet analysis', 'Clear charts and reporting'],
    curriculum: ['Data quality and structure', 'Formulas, filters, and validation', 'Summaries and pivot tables', 'Charts that explain a decision', 'Building a repeatable reporting template'],
    idealFor: 'Operations, finance, programme, monitoring, and management teams.',
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
  }
];
