import { ResourceItem } from '../types';

export const resourcesData: ResourceItem[] = [
  {
    id: 'ai-prompt-starter-pack',
    title: 'AI Prompt Starter Pack',
    category: 'AI Productivity',
    format: 'Cheat Sheet',
    description: 'A curated collection of 50+ tested, high-yield prompt templates for daily writing, research synthesis, email responses, and brainstorming.',
    readingTime: '5 min read',
    level: 'Beginner',
    targetAudience: 'Students, professionals, writers & team leads',
    keyHighlights: [
      'Role-Context-Task-Constraint prompt blueprint',
      'Templates for executive summaries & reports',
      'Bilingual prompts for English & Kiswahili translations',
      'Iterative refinement cheat sheet'
    ],
    useCases: [
      'Drafting polished client emails in under a minute',
      'Summarizing long reports into clear action points',
      'Brainstorming campaign or lesson ideas',
      'Translating technical English into plain Kiswahili'
    ],
    previewContent: [
      'Prompt Pattern 1: The Executive Synthesizer - "Act as an executive chief of staff. Review the following notes and extract 3 key decisions, 5 action items with owners, and 2 open risks..."',
      'Prompt Pattern 2: Socratic Problem Solver - "Act as a senior business consultant. Ask me 3 probing questions about my project before suggesting a strategy..."',
      'Prompt Pattern 3: Kiswahili-English Cultural Bridge - "Translate the following technical English concept into natural, conversational Kiswahili suitable for a general audience..."'
    ],
    downloadName: 'CS_Academy_AI_Prompt_Starter_Pack.pdf'
  },
  {
    id: 'deepfake-awareness-guide',
    title: 'Deepfake Awareness Guide',
    category: 'Cyber Safety',
    format: 'PDF Guide',
    description: 'An essential field guide on identifying synthetic voice clones, manipulated facial videos, and social engineering scams targeting mobile money and personal security.',
    readingTime: '8 min read',
    level: 'Intermediate',
    targetAudience: 'General public, families, media professionals, corporate staff',
    keyHighlights: [
      '10 optical flaws common in generated video deepfakes',
      'How to spot audio/voice clone artifacts during phone calls',
      'Establishing a family & team financial verbal verification protocol',
      'Immediate steps to take if your likeness is used without consent'
    ],
    useCases: [
      'Training staff to recognize voice-clone fraud',
      'Protecting family remittance and mobile-money transfers',
      'Building a media-literacy workshop for communities',
      'Responding to a suspected impersonation incident'
    ],
    previewContent: [
      'Section 1: The New Wave of Voice Cloning - Modern AI needs only 3 seconds of sample audio to mimic a voice. Learn why urgent calls demanding immediate mobile money transfers should always be verified.',
      'Section 2: The Two-Way Verification Rule - Never execute an unusual fund transfer or password reset without a secondary out-of-band communication check.'
    ],
    downloadName: 'CS_Academy_Deepfake_Awareness_Guide.pdf'
  },
  {
    id: 'cyber-hygiene-checklist',
    title: 'Cyber Hygiene Checklist',
    category: 'Cybersecurity',
    format: 'Checklist',
    description: 'A comprehensive 20-point digital security checklist to audit your smartphones, laptops, email accounts, and online financial transactions.',
    readingTime: '4 min read',
    level: 'Beginner',
    targetAudience: 'Everyone using smartphones, laptops, and internet banking',
    keyHighlights: [
      'Passkey and password manager setup in 10 minutes',
      'Multi-factor authentication (MFA) verification',
      'App permissions & location tracking audit',
      'Public Wi-Fi and VPN defensive practices'
    ],
    useCases: [
      'Running a personal monthly security audit',
      'Onboarding new employees to safe device habits',
      'Preparing devices before travel or public Wi-Fi use',
      'Teaching family members basic online safety'
    ],
    previewContent: [
      '[ ] Enable MFA on primary Google/Microsoft, WhatsApp, and banking portals.',
      '[ ] Disable automatic Bluetooth and Wi-Fi connection in public spaces.',
      '[ ] Audit third-party app permissions connected to your Google/Apple accounts.',
      '[ ] Activate remote device wiping for lost smartphones and laptops.'
    ],
    downloadName: 'CS_Academy_Cyber_Hygiene_Checklist.pdf'
  },
  {
    id: 'ai-tools-for-students',
    title: 'AI Tools for Students Guide',
    category: 'Education',
    format: 'PDF Guide',
    description: 'How to ethically and effectively use artificial intelligence for academic research, concept revision, foreign language practice, and exam preparation.',
    readingTime: '6 min read',
    level: 'Beginner',
    targetAudience: 'High school & university students, academic tutors',
    keyHighlights: [
      'Using AI as an interactive 24/7 tutor rather than an answer cheat',
      'Generating custom practice quizzes and flashcard decks',
      'Proper citation and transparency in academic writing',
      'Avoiding hallucinations in academic research papers'
    ],
    useCases: [
      'Creating personalized revision quizzes',
      'Explaining difficult concepts at your level',
      'Drafting study plans for exams',
      'Practicing a foreign language through dialogue'
    ],
    previewContent: [
      'Principle 1: Active Ingestion vs Passive Copying - Ask the AI to test your understanding through quizzes rather than asking it to write your homework.',
      'Principle 2: Source Verification - Always verify textbook citations and primary source documents.'
    ],
    downloadName: 'CS_Academy_AI_Tools_For_Students.pdf'
  },
  {
    id: 'ai-safety-checklist',
    title: 'AI Safety Checklist for Workplaces',
    category: 'AI Governance',
    format: 'Checklist',
    description: 'A practical framework for employees and managers to safely use public and enterprise AI tools without leaking confidential customer or company data.',
    readingTime: '5 min read',
    level: 'Intermediate',
    targetAudience: 'Business owners, HR managers, operational staff, IT teams',
    keyHighlights: [
      'Identifying restricted vs public data tiers for AI prompts',
      'Turning off model training data collection in settings',
      'Reviewing terms of service for generative web apps',
      'Drafting a one-page internal acceptable use policy'
    ],
    useCases: [
      'Creating an internal AI acceptable-use policy',
      'Briefing teams before adopting ChatGPT/Claude/Copilot',
      'Classifying data before pasting into public tools',
      'Auditing existing AI tool integrations'
    ],
    previewContent: [
      '[ ] Redact all customer names, phone numbers, and financial figures before pasting text into public AI tools.',
      '[ ] Review "Data Controls" settings to opt out of model training on user queries.',
      '[ ] Mandate human-in-the-loop review for all external customer communications.'
    ],
    downloadName: 'CS_Academy_AI_Safety_Checklist.pdf'
  },
  {
    id: 'digital-privacy-checklist',
    title: 'Digital Privacy Checklist',
    category: 'Privacy',
    format: 'Checklist',
    description: 'Step-by-step instructions to minimize digital tracking, audit your social media privacy settings, and protect personal communication channels.',
    readingTime: '4 min read',
    level: 'Beginner',
    targetAudience: 'Digital citizens, journalists, professionals, youth',
    keyHighlights: [
      'WhatsApp privacy & two-step verification settings',
      'Browser privacy extensions and cookie management',
      'Social media profile lockdown & search visibility',
      'Encrypted messaging standards'
    ],
    useCases: [
      'Locking down personal social media profiles',
      'Enabling two-step verification on messaging apps',
      'Reducing ad tracking in browsers',
      'Protecting sources as a journalist or researcher'
    ],
    previewContent: [
      '[ ] Set WhatsApp "Last Seen", "Profile Photo", and "About" to My Contacts only.',
      '[ ] Enable WhatsApp 6-digit two-step verification PIN.',
      '[ ] Check search engine results for your full name and remove exposed telephone records.'
    ],
    downloadName: 'CS_Academy_Digital_Privacy_Checklist.pdf'
  },
  {
    id: 'ai-for-educators-guide',
    title: 'AI for Educators Guide',
    category: 'Education',
    format: 'PDF Guide',
    description: 'Practical strategies for African teachers and lecturers to save preparation time, design engaging lesson plans, and foster critical thinking.',
    readingTime: '7 min read',
    level: 'Intermediate',
    targetAudience: 'Teachers, lecturers, school administrators, tutors',
    keyHighlights: [
      'Prompt templates for differentiated learning plans',
      'Creating interactive classroom discussion prompts',
      'Managing academic integrity constructively',
      'Local language learning aids for bilingual classrooms'
    ],
    useCases: [
      'Generating differentiated lesson materials',
      'Designing classroom debate and discussion prompts',
      'Explaining concepts at multiple reading levels',
      'Building a fair AI-use policy for assignments'
    ],
    previewContent: [
      'Module 1: Reclaiming Teaching Time - Automate routine rubric drafting and formatting so you can dedicate more energy to 1-on-1 student mentorship.',
      'Module 2: Differentiated Pedagogy - Prompting AI to explain complex concepts at 3 different reading levels for diverse student cohorts.'
    ],
    downloadName: 'CS_Academy_AI_For_Educators_Guide.pdf'
  },
  {
    id: 'ai-productivity-starter-guide',
    title: 'AI Productivity Starter Guide',
    category: 'AI Productivity',
    format: 'Toolkit',
    description: 'A foundational handbook for busy professionals to integrate AI into daily email management, document drafting, scheduling, and market research.',
    readingTime: '6 min read',
    level: 'Beginner',
    targetAudience: 'Entrepreneurs, corporate staff, consultants, managers',
    keyHighlights: [
      'Daily 15-minute AI productivity routine',
      'Email drafting & tone calibration shortcuts',
      'Spreadsheet formula generation cheat codes',
      'Meeting transcript summarization framework'
    ],
    useCases: [
      'Clearing a backlog of emails quickly',
      'Drafting proposals with consistent tone',
      'Generating spreadsheet formulas without errors',
      'Summarizing meeting recordings into minutes'
    ],
    previewContent: [
      'Strategy 1: The Context Pyramid - How to feed AI the right background context in 3 short bullet points.',
      'Strategy 2: The Fast Edit Workflow - Use AI for raw drafting, apply human polish for tone and truth.'
    ],
    downloadName: 'CS_Academy_AI_Productivity_Starter_Guide.pdf'
  },
  {
    id: 'mpesa-business-safety',
    title: 'M-Pesa & Mobile Money Business Safety',
    category: 'Business',
    format: 'PDF Guide',
    description: 'A practical guide for SMEs and business owners to protect mobile-money collections, reconcile payments, and avoid sim-swap and fraud losses.',
    readingTime: '6 min read',
    level: 'Beginner',
    targetAudience: 'Small business owners, shopkeepers, finance clerks',
    keyHighlights: [
      'Securing the business paybill & till number',
      'Daily reconciliation of M-Pesa vs sales records',
      'Recognizing sim-swap and callback fraud',
      'Staff handling money transfer safely'
    ],
    useCases: [
      'Training cashiers on safe M-Pesa handling',
      'Building a daily payment reconciliation habit',
      'Responding to suspicious balance alerts',
      'Protecting the business till number from hijack'
    ],
    previewContent: [
      'Checklist: Register a dedicated business line, enable transaction SMS alerts, and limit who holds the SIM and PIN.',
      'Rule: Never share the M-Pesa PIN, even with staff or "bank" callers requesting verification.'
    ],
    downloadName: 'CS_Academy_Mpesa_Business_Safety.pdf'
  },
  {
    id: 'remote-work-security',
    title: 'Remote & Hybrid Work Security Checklist',
    category: 'Cybersecurity',
    format: 'Checklist',
    description: 'Harden laptops, home networks, and cloud accounts for employees working outside the office, without expensive enterprise tools.',
    readingTime: '5 min read',
    level: 'Intermediate',
    targetAudience: 'Remote staff, team leads, IT support',
    keyHighlights: [
      'Home Wi-Fi and router hardening steps',
      'VPN and zero-trust access basics',
      'Separating work and personal devices',
      'Secure file sharing and backup routines'
    ],
    useCases: [
      'Setting up a safe home office',
      'Onboarding remote contractors securely',
      'Auditing shared cloud folders',
      'Backing up work data automatically'
    ],
    previewContent: [
      '[ ] Change the default router admin password and update firmware.',
      '[ ] Use a company VPN or secured channel for internal systems.',
      '[ ] Enable automatic encrypted backups for work devices.'
    ],
    downloadName: 'CS_Academy_Remote_Work_Security.pdf'
  },
  {
    id: 'ai-presentation-toolkit',
    title: 'AI Presentation & Content Toolkit',
    category: 'AI Productivity',
    format: 'Toolkit',
    description: 'Prompt packs and templates to design clear slides, social media posts, and marketing copy with a consistent brand voice.',
    readingTime: '6 min read',
    level: 'Beginner',
    targetAudience: 'Marketers, founders, students, trainers',
    keyHighlights: [
      'Slide outline generators for any topic',
      'Brand-voice social post templates',
      'Storytelling frameworks for pitches',
      'Localized Kiswahili copy prompts'
    ],
    useCases: [
      'Building a pitch deck in an afternoon',
      'Producing a month of social posts',
      'Turning a report into a visual story',
      'Writing consistent multilingual copy'
    ],
    previewContent: [
      'Prompt: "Create a 10-slide outline for a fintech pitch to East African investors, with a clear problem, solution, and traction slide."',
      'Prompt: "Write 5 Instagram captions in Kiswahili for a tailoring business, friendly tone, with a call to action to DM for orders."'
    ],
    downloadName: 'CS_Academy_AI_Presentation_Toolkit.pdf'
  },
  {
    id: 'data-privacy-ngos',
    title: 'Data Privacy for NGOs & Field Teams',
    category: 'Privacy',
    format: 'PDF Guide',
    description: 'A field-friendly guide for non-profits handling beneficiary data, donor records, and sensitive community information responsibly.',
    readingTime: '7 min read',
    level: 'Intermediate',
    targetAudience: 'NGO staff, field officers, grant managers',
    keyHighlights: [
      'Collecting only necessary beneficiary data',
      'Consent and anonymization practices',
      'Secure sharing with donors and partners',
      'Offline-first data collection safety'
    ],
    useCases: [
      'Designing a consent form for surveys',
      'Anonymizing case studies for reports',
      'Briefing field officers on data care',
      'Sharing monitoring data with donors safely'
    ],
    previewContent: [
      'Principle: Collect the minimum data needed for the program outcome, and store it separately from identifiers.',
      'Practice: Use coded IDs instead of names when sharing progress data externally.'
    ],
    downloadName: 'CS_Academy_Data_Privacy_NGOs.pdf'
  }
];
