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
  },
  {
    id: 'ai-research-synthesis-guide',
    title: 'AI Research & Synthesis Guide',
    category: 'AI Productivity',
    format: 'Toolkit',
    description: 'A research workflow that turns hours of reading into structured briefs, comparison tables, and citation-ready summaries using AI as a thinking partner.',
    readingTime: '9 min read',
    level: 'Intermediate',
    targetAudience: 'Researchers, analysts, consultants, postgraduate students',
    keyHighlights: [
      'Five-stage research funnel: scope, gather, extract, synthesize, verify',
      'Prompt templates for literature reviews and competitive scans',
      'Source triangulation checklist to combat AI hallucinations',
      'Citation-ready output formats (APA, Harvard, Chicago)'
    ],
    useCases: [
      'Producing a market entry brief in two hours',
      'Comparing vendor proposals with a structured matrix',
      'Writing a literature review for a thesis chapter',
      'Synthesizing community survey responses into themes'
    ],
    previewContent: [
      'Stage 1 — Scope: "Act as a research strategist. Ask me 5 clarifying questions about my research question, audience, and decision to be made before I begin searching."',
      'Stage 2 — Gather: "Generate a search string for Google Scholar covering 2019-2026 on [topic], filtering for East Africa and low-bandwidth contexts."',
      'Stage 3 — Extract: "From the 3 sources below, extract 2 unique findings, 1 contradicting view, and 1 unresolved question per source. Cite page numbers."',
      'Stage 4 — Synthesize: "Combine the extracted notes into a 600-word executive brief with sections: Context, Key Findings, Tensions, Recommendations."',
      'Stage 5 — Verify: "Cross-check every quantitative claim in the brief against its source. Flag any statistic you cannot verify with a [VERIFY] tag."'
    ],
    downloadName: 'CS_Academy_AI_Research_Synthesis_Guide.pdf'
  },
  {
    id: 'social-media-scam-protection',
    title: 'Social Media Scam Protection',
    category: 'Cyber Safety',
    format: 'PDF Guide',
    description: 'Identify and avoid the most common social media scams on Facebook, Instagram, WhatsApp, and TikTok, including investment traps, romance fraud, and impersonation.',
    readingTime: '7 min read',
    level: 'Beginner',
    targetAudience: 'General public, parents, small business owners, community leaders',
    keyHighlights: [
      'Red-flag taxonomy of 12 high-frequency scam archetypes',
      'Platform-specific safety settings for Facebook, IG, TikTok, X',
      'Reporting workflow and evidence preservation checklist',
      'How to recover a hijacked account within 24 hours'
    ],
    useCases: [
      'Training community members on WhatsApp investment scams',
      'Recovering a hijacked Facebook business page',
      'Recognizing fake job offers on LinkedIn',
      'Protecting elderly relatives from romance fraud'
    ],
    previewContent: [
      'Pattern 1 — "Too Good To Be True" Investment: Guaranteed 30% weekly returns, urgent recruitment of friends, and pressure to recruit before withdrawing. The withdrawal always fails.',
      'Pattern 2 — Fake Giveaway Impersonation: A cloned celebrity page announces a giveaway, asks you to "verify" by sending a small fee via mobile money.',
      'Pattern 3 — Romance Acceleration: A new contact moves the relationship forward unusually fast, then asks for money for a medical emergency or travel.',
      'Action 1: Stop, Screenshot, Search — Before engaging, screenshot the message, reverse-image-search the profile photo, and search the exact offer text online.',
      'Action 2: Report via official in-app channels and inform your bank or mobile money provider within 1 hour if money has been sent.'
    ],
    downloadName: 'CS_Academy_Social_Media_Scam_Protection.pdf'
  },
  {
    id: 'child-online-safety-guide',
    title: 'Child Online Safety Guide',
    category: 'Cyber Safety',
    format: 'PDF Guide',
    description: 'Practical, age-appropriate guidance for parents, teachers, and guardians to protect children from online predators, cyberbullying, and harmful content.',
    readingTime: '8 min read',
    level: 'Beginner',
    targetAudience: 'Parents, teachers, school counselors, guardians',
    keyHighlights: [
      'Age-appropriate conversation scripts by developmental stage',
      'Parental control setup for Android, iOS, and home Wi-Fi',
      'Recognizing grooming red flags in chats and games',
      'Cyberbullying response protocol for parents and schools'
    ],
    useCases: [
      'Setting up a first smartphone for a 10-year-old',
      'Talking to a teenager about online relationships',
      'Responding to a cyberbullying incident at school',
      'Reviewing a child\'s gaming and chat platforms'
    ],
    previewContent: [
      'The 5-Question Weekly Check-In: "What\'s the funniest thing you saw online? Anything that confused you? Anyone being unkind? Anyone asking you to keep a secret from me? What would you do if something felt wrong?"',
      'Grooming Red Flag Ladder: (1) Random friend request, (2) flattery and gift offers, (3) requests to move to private chat, (4) attempts to isolate, (5) requests for photos or meetings.',
      'Device Setup Checklist: Enable Family Link / Screen Time, disable in-app purchases, set bedtime curfews, and review privacy settings together monthly.',
      'Cyberbullying Response: Document, do not delete, do not retaliate, report to platform, notify school, and check in with the child emotionally before problem-solving.'
    ],
    downloadName: 'CS_Academy_Child_Online_Safety_Guide.pdf'
  },
  {
    id: 'digital-footprint-cleanup',
    title: 'Digital Footprint Cleanup',
    category: 'Cyber Safety',
    format: 'Checklist',
    description: 'Reduce your online exposure by removing old accounts, scrubbing personal data from data brokers, and tightening search engine visibility.',
    readingTime: '6 min read',
    level: 'Intermediate',
    targetAudience: 'Professionals, job seekers, public figures, anyone rebuilding privacy',
    keyHighlights: [
      'Step-by-step process to find and delete old accounts',
      'Data broker opt-out playbook (US, EU, Kenya, Tanzania)',
      'Google and Bing content removal request walkthroughs',
      'Ongoing monitoring with free tools and alerts'
    ],
    useCases: [
      'Cleaning up before a job search or career pivot',
      'Responding to doxxing or identity exposure',
      'Reducing spam calls and phishing attempts',
      'Helping a family member recover from a data leak'
    ],
    previewContent: [
      'Week 1 — Discovery: Search your full name, phone, and email in quotes. Use HaveIBeenPwned to find breached accounts. Export your Google and Facebook data archives.',
      'Week 2 — Deletion: Close 5 old accounts per day. Use JustDeleteMe to find direct deletion links. Unsubscribe from dormant mailing lists.',
      'Week 3 — Broker Opt-Out: Submit removal requests to Spokeo, Whitepages, TrueCaller, and local equivalents. Document each request with a screenshot.',
      'Week 4 — Lockdown: Tighten social media privacy, enable login alerts, and set up Google Alerts for your name to monitor future exposure.',
      'Maintenance: Repeat the 4-week cycle quarterly. A clean digital footprint is a habit, not a one-time project.'
    ],
    downloadName: 'CS_Academy_Digital_Footprint_Cleanup.pdf'
  },
  {
    id: 'small-business-security-audit',
    title: 'Small Business Security Audit',
    category: 'Cybersecurity',
    format: 'Toolkit',
    description: 'A 30-point audit toolkit for SMEs to assess their exposure across devices, networks, cloud apps, payment systems, and staff practices.',
    readingTime: '10 min read',
    level: 'Intermediate',
    targetAudience: 'SME owners, branch managers, IT support for small firms',
    keyHighlights: [
      '30 controls mapped to devices, network, identity, data, payments',
      'Risk scoring rubric (Critical / High / Medium / Low)',
      'Remediation roadmap with effort vs impact matrix',
      'Sample audit report template for stakeholders'
    ],
    useCases: [
      'Quarterly security health check for a 5-50 person business',
      'Pre-contract security due diligence for enterprise clients',
      'Board-level cybersecurity briefing for an SME',
      'Annual compliance preparation for a regulatory visit'
    ],
    previewContent: [
      'Domain 1 — Devices (8 controls): Full-disk encryption, screen lock policy, OS update cadence, MDM enrollment, lost-device wipe, USB restrictions, antivirus baseline, removable media scan.',
      'Domain 2 — Identity (7 controls): MFA on all critical apps, password manager adoption, admin account separation, SSO where feasible, dormant account review, shared account elimination, password rotation policy.',
      'Domain 3 — Data & Network (8 controls): Daily backup with restore test, folder permissions audit, VPN for remote access, guest Wi-Fi separation, DNS filtering, patch SLA, encryption in transit, encryption at rest.',
      'Domain 4 — Payments & People (7 controls): Mobile money dual approval, payment reconciliation cadence, staff phishing drill, contractor access expiry, incident response plan, security training log, exit checklist for leavers.'
    ],
    downloadName: 'CS_Academy_Small_Business_Security_Audit.pdf'
  },
  {
    id: 'phishing-defense-drill',
    title: 'Phishing Defense Drill',
    category: 'Cybersecurity',
    format: 'Toolkit',
    description: 'A repeatable simulation pack to test and train employees against phishing, smishing, vishing, and QR code scams without real-world risk.',
    readingTime: '7 min read',
    level: 'Intermediate',
    targetAudience: 'HR teams, IT security, training managers, business owners',
    keyHighlights: [
      '10 pre-built phishing scenarios (email, SMS, voice, QR)',
      'Quarterly drill calendar with success metrics',
      'No-blame reporting culture and incident response flow',
      'Performance dashboard template for management review'
    ],
    useCases: [
      'Running a safe quarterly phishing simulation',
      'Training new hires in their first 30 days',
      'Building a no-blame reporting culture',
      'Reporting drill results to leadership and auditors'
    ],
    previewContent: [
      'Scenario 1 — The Fake CEO Wire: An email appears to come from the CEO requesting an urgent confidential transfer. Recipient must recognize the out-of-band verification rule.',
      'Scenario 2 — HR DocuSign Lure: A "signed document" link redirects to a credential-harvesting clone. Test recipient\'s habit of verifying sender domains.',
      'Scenario 3 — Mobile Money Reversal: An SMS claims a transaction was reversed and asks the recipient to "confirm" by clicking a link that installs malware.',
      'Debrief Script: "Click only counts. Reporting counts double." Walk through what the recipient should have done at each cue (sender, urgency, link, action).',
      'Metric Set to Track: Click rate, report rate, time-to-first-report, repeat-offender rate, department-level trends.'
    ],
    downloadName: 'CS_Academy_Phishing_Defense_Drill.pdf'
  },
  {
    id: 'ai-literacy-curriculum',
    title: 'AI Literacy Curriculum',
    category: 'Education',
    format: 'Toolkit',
    description: 'A 12-week modular curriculum outline for schools and community programs covering AI concepts, prompting, ethics, and real-world applications.',
    readingTime: '12 min read',
    level: 'Intermediate',
    targetAudience: 'School leaders, curriculum designers, NGO program managers',
    keyHighlights: [
      '12 weekly modules with learning outcomes and assessments',
      'Ready-to-use lesson plans, slides, and student worksheets',
      'Capstone project rubric and example briefs',
      'Adaptable for ages 12, 16, and adult learners'
    ],
    useCases: [
      'Launching an after-school AI club',
      'Integrating AI literacy into existing ICT curriculum',
      'Training community educators in foundational AI',
      'Designing a weekend bootcamp for working adults'
    ],
    previewContent: [
      'Module 1 — What Is AI? (3 hrs): Definitions, narrow vs general AI, everyday examples, history timeline. Assessment: 10-question multiple choice + reflection paragraph.',
      'Module 4 — Prompting Fundamentals (4 hrs): The RCTC framework (Role, Context, Task, Constraint), 5 practice drills, peer review exercise. Output: a personal prompt library of 10 templates.',
      'Module 8 — Ethics, Bias & Privacy (3 hrs): Case studies on hiring bias, deepfakes, and data collection. Group debate format. Output: written policy proposal for a fictional school.',
      'Module 12 — Capstone Project (6 hrs): Students identify a real problem in their community, design an AI-assisted solution, and present a 5-minute pitch to a panel of local professionals.',
      'Adaptation Guide: Each module includes age-band modifications, suggested duration adjustments, and Swahili-language activity supplements.'
    ],
    downloadName: 'CS_Academy_AI_Literacy_Curriculum.pdf'
  },
  {
    id: 'stem-education-ai-tools',
    title: 'STEM Education AI Tools',
    category: 'Education',
    format: 'PDF Guide',
    description: 'Curated AI tools and lesson patterns for science, technology, engineering, and math teachers to deepen conceptual understanding and accelerate practice.',
    readingTime: '8 min read',
    level: 'Intermediate',
    targetAudience: 'STEM teachers, lab instructors, after-school program leads',
    keyHighlights: [
      'Subject-by-subject AI tool comparison (Math, Science, Coding, Engineering)',
      'Lesson pattern library: Explainer, Practice, Lab, Assessment',
      'Prompt recipes for generating word problems and lab scenarios',
      'Anti-cheating design for STEM assessments using AI'
    ],
    useCases: [
      'Building a calculus revision chatbot for Form 4 students',
      'Generating physics word problems in local contexts',
      'Auto-grading coding assignments with explanatory feedback',
      'Designing lab simulations when equipment is limited'
    ],
    previewContent: [
      'Math Tool Stack: Photomath for step-by-step verification, Wolfram Alpha for symbolic computation, ChatGPT for alternate explanations, Desmos AI for visual reasoning.',
      'Science Simulation Prompt: "Generate a step-by-step simulation of a solar water purifier for 50 liters per day in coastal Tanzania, including materials, expected efficiency, and 3 common failure modes."',
      'Coding Tutor Pattern: Use AI to (1) explain a concept with analogy, (2) generate a starter template, (3) review learner code, (4) suggest one focused improvement. Never let AI write the whole solution.',
      'Assessment Design: Build questions where AI use is allowed but obvious. Ask for reasoning chains, diagrams, or local-data integration that pure AI output cannot easily fake.'
    ],
    downloadName: 'CS_Academy_STEM_Education_AI_Tools.pdf'
  },
  {
    id: 'corporate-ai-ethics-policy',
    title: 'Corporate AI Ethics Policy',
    category: 'AI Governance',
    format: 'PDF Guide',
    description: 'A board-ready template and adoption playbook for organizations to govern AI use responsibly, transparently, and in line with emerging regulation.',
    readingTime: '10 min read',
    level: 'Advanced',
    targetAudience: 'Executive leaders, compliance officers, legal teams, board members',
    keyHighlights: [
      'Six-pillar ethics framework: Fairness, Transparency, Accountability, Privacy, Safety, Sustainability',
      'Editable 8-page policy template with approval workflow',
      'Risk-tiered approval matrix for AI projects (Low / Medium / High / Prohibited)',
      'Annual review cycle and board reporting template'
    ],
    useCases: [
      'Drafting a first AI policy for a 100-person company',
      'Updating an existing data policy to cover generative AI',
      'Aligning internal practice with the EU AI Act and African frameworks',
      'Presenting AI governance to the board for sign-off'
    ],
    previewContent: [
      'Pillar 1 — Fairness: We will not deploy AI systems that systematically disadvantage any group based on protected characteristics. We test for bias quarterly using documented datasets.',
      'Pillar 2 — Transparency: Users will be informed when they are interacting with an AI system. AI-generated content published externally will be labeled where required by law.',
      'Pillar 3 — Accountability: Every AI system in production has a named human owner who signs off on releases and incident reports. No "ghost AI" in production.',
      'Pillar 4 — Privacy: Personal data is processed in line with applicable data protection law. We do not input customer personal data into public AI tools without a Data Protection Impact Assessment.',
      'Pillar 5 — Safety: AI systems that influence safety-critical decisions (health, finance, justice, employment) require human-in-the-loop review and a documented override mechanism.',
      'Pillar 6 — Sustainability: We prefer smaller, well-tuned models where feasible, and we report annual compute and energy consumption for transparency.'
    ],
    downloadName: 'CS_Academy_Corporate_AI_Ethics_Policy.pdf'
  },
  {
    id: 'ai-procurement-checklist',
    title: 'AI Procurement Checklist',
    category: 'AI Governance',
    format: 'Checklist',
    description: 'Evaluate and select AI vendors with confidence using this structured 40-point due diligence checklist covering capability, security, ethics, and total cost.',
    readingTime: '8 min read',
    level: 'Advanced',
    targetAudience: 'Procurement teams, IT leaders, vendor management, finance approvers',
    keyHighlights: [
      '40 evaluation criteria across 5 domains: Capability, Security, Compliance, Ethics, Commercial',
      'Weighted scoring template with editable criteria weights',
      'Red flag list of 12 vendor behaviors that warrant immediate disqualification',
      'Reference question bank for vendor due diligence calls'
    ],
    useCases: [
      'Selecting a chatbot vendor for customer support',
      'Procuring a predictive analytics platform for a Sacco',
      'Evaluating AI features inside an enterprise SaaS purchase',
      'Renewing an existing AI contract with new compliance requirements'
    ],
    previewContent: [
      'Domain 1 — Capability (10 criteria): Task fit, accuracy benchmarks, latency, language coverage, customization depth, API quality, documentation, uptime SLA, roadmap transparency, exit portability.',
      'Domain 2 — Security (8 criteria): Data residency, encryption in transit and at rest, access controls, audit logs, incident history, SOC 2 or equivalent, pen test reports, vulnerability disclosure policy.',
      'Domain 3 — Compliance (8 criteria): GDPR, Kenya DPA, Tanzania PDP Act, EU AI Act alignment, sector regulation, DPIA support, data processing agreement, sub-processor list.',
      'Domain 4 — Ethics (7 criteria): Bias testing, model card availability, training data provenance, environmental disclosure, human oversight design, complaint mechanism, transparency report.',
      'Domain 5 — Commercial (7 criteria): Pricing transparency, scaling cost curve, contract length, termination terms, IP ownership, support tier, total cost of ownership over 3 years.',
      'Disqualifying Red Flags: No published security policy, refusal to sign a DPA, opaque training data sources, no human override path, recent undisclosed breach, vague SLAs.'
    ],
    downloadName: 'CS_Academy_AI_Procurement_Checklist.pdf'
  },
  {
    id: 'responsible-ai-principles',
    title: 'Responsible AI Principles',
    category: 'AI Governance',
    format: 'Cheat Sheet',
    description: 'A one-page reference of the 10 core principles every organization should adopt to build, deploy, and supervise AI systems responsibly.',
    readingTime: '4 min read',
    level: 'Beginner',
    targetAudience: 'Anyone building, buying, or using AI in any professional capacity',
    keyHighlights: [
      '10 principles distilled from OECD, EU AI Act, and African Union AI frameworks',
      'One-line summary + red flag + practical test for each principle',
      'Print-ready one-page poster for office walls and onboarding kits',
      'Quarterly self-assessment scorecard for teams'
    ],
    useCases: [
      'Onboarding new engineers to the company\'s AI values',
      'Quick reference during product design reviews',
      'Printing a poster for the office wall or team Slack channel',
      'Quarterly self-assessment for any AI-using team'
    ],
    previewContent: [
      'Principle 1 — Human Oversight: A human must remain meaningfully in control of consequential AI decisions. Red flag: "the model decides."',
      'Principle 2 — Fairness: Test and mitigate bias against protected groups before deployment. Red flag: "we will fix it if it becomes a problem."',
      'Principle 3 — Transparency: Disclose AI involvement to affected users in clear language. Red flag: hidden AI behind a "smart" label.',
      'Principle 4 — Privacy: Minimize, anonymize, and protect personal data at every stage. Red flag: "just paste it in, the tool is private."',
      'Principle 5 — Safety: Design for failure. Build rollback, override, and incident response from day one. Red flag: no documented failure mode.',
      'Principle 6 — Accountability: Name a human owner for every production AI system. Red flag: "AI is responsible" is never an answer.',
      'Principle 7 — Explainability: Choose methods whose decisions can be explained to a non-technical stakeholder. Red flag: "it works, trust it."',
      'Principle 8 — Sustainability: Prefer efficient models and disclose environmental cost. Red flag: largest model by default regardless of need.',
      'Principle 9 — Data Integrity: Source training data ethically and document provenance. Red flag: scraped data with no licensing review.',
      'Principle 10 — Continuous Learning: Review AI systems quarterly against incidents, user feedback, and new regulation. Red flag: deploy and forget.'
    ],
    downloadName: 'CS_Academy_Responsible_AI_Principles.pdf'
  },
  {
    id: 'browser-privacy-hardening',
    title: 'Browser Privacy Hardening',
    category: 'Privacy',
    format: 'Checklist',
    description: 'Practical browser and extension settings to dramatically reduce tracking, fingerprinting, and data leakage during everyday web use.',
    readingTime: '5 min read',
    level: 'Beginner',
    targetAudience: 'Privacy-conscious professionals, journalists, activists, anyone wanting less tracking',
    keyHighlights: [
      'Hardened settings walkthrough for Chrome, Edge, Firefox, and Safari',
      'Recommended privacy extensions: uBlock Origin, Privacy Badger, ClearURLs',
      'DNS-level protection setup (DoH, DoT, NextDNS)',
      'Container and profile strategy for separating work and personal browsing'
    ],
    useCases: [
      'Locking down a browser used on a shared family computer',
      'Separating work and personal browsing on one device',
      'Reducing ad retargeting and creepy personalized ads',
      'Preparing a device for sensitive research or activism work'
    ],
    previewContent: [
      'Step 1 — Browser Choice: Firefox or Brave for maximum control, Chrome or Edge for ecosystem integration with hardened settings, Safari acceptable on Apple devices.',
      'Step 2 — Essential Extensions: uBlock Origin (ad and tracker blocking), Privacy Badger (behavioral blocking), ClearURLs (strip tracking parameters), Decentraleyes (local CDN emulation).',
      'Step 3 — DNS Upgrade: Switch to NextDNS, Control D, or Cloudflare Families. Enable DNS-over-HTTPS in your browser. This alone blocks a huge category of trackers.',
      'Step 4 — Profile Strategy: Use Firefox Multi-Account Containers or Chrome profiles to isolate work, personal, and shopping identities. Cookies and storage never cross.',
      'Step 5 — Maintenance: Audit extensions quarterly, clear site data monthly, and review your browser\'s privacy report weekly for the first month to build the habit.'
    ],
    downloadName: 'CS_Academy_Browser_Privacy_Hardening.pdf'
  },
  {
    id: 'identity-theft-recovery',
    title: 'Identity Theft Recovery',
    category: 'Privacy',
    format: 'PDF Guide',
    description: 'A step-by-step emergency playbook for responding to identity theft, including mobile money fraud, social media hijack, and synthetic identity abuse.',
    readingTime: '8 min read',
    level: 'Intermediate',
    targetAudience: 'Anyone who suspects or has confirmed identity compromise',
    keyHighlights: [
      'Hour-by-hour emergency response timeline (0-72 hours)',
      'Mobile money fraud reversal workflow with operator contacts',
      'SIM swap recovery and carrier lock procedures',
      'Credit bureau and bank dispute letter templates'
    ],
    useCases: [
      'Reacting to a confirmed mobile money theft',
      'Recovering a SIM that was swapped without your knowledge',
      'Disputing fraudulent loans taken in your name',
      'Cleaning up after a social media account takeover'
    ],
    previewContent: [
      'Hour 0-2 — Containment: Call your mobile money provider (Safaricom: 100, Vodacom: 100, Airtel: 100) and request an account freeze. Call your bank and place a temporary hold on outgoing transfers.',
      'Hour 2-24 — Documentation: File a police report and obtain the OB number. Screenshot all suspicious transactions, messages, and account changes. Compile a single evidence folder.',
      'Day 1-3 — Identity Restoration: Visit your mobile operator with the police OB to recover a hijacked SIM. Reset all passwords from a clean device. Enable MFA on every account that still offers it.',
      'Week 1-4 — Long-term Repair: Place a fraud alert or credit freeze at the relevant bureau (e.g., Metropol, CRB Africa). Dispute fraudulent accounts in writing. Monitor your credit report monthly for 12 months.',
      'Ongoing Defense: Set up transaction alerts, enable SIM swap notifications with your carrier, and review your statements weekly for at least six months. Identity theft has a long tail.'
    ],
    downloadName: 'CS_Academy_Identity_Theft_Recovery.pdf'
  },
  {
    id: 'digital-entrepreneur-security',
    title: 'Digital Entrepreneur Security',
    category: 'Business',
    format: 'Toolkit',
    description: 'A founder-focused security playbook covering business accounts, client data, online storefronts, and remote team operations.',
    readingTime: '9 min read',
    level: 'Intermediate',
    targetAudience: 'Solo founders, small agency owners, freelancers, online sellers',
    keyHighlights: [
      'Business account protection (email, social, payments, hosting)',
      'Client data handling rules and contract clauses',
      'Online storefront hardening (Shopify, WooCommerce, custom)',
      'Remote contractor onboarding and offboarding checklists'
    ],
    useCases: [
      'Securing a new e-commerce store before launch',
      'Onboarding a remote contractor safely',
      'Responding to a hacked Instagram business account',
      'Building a client data policy for a freelance consultancy'
    ],
    previewContent: [
      'Account Tier Strategy: Personal accounts use personal email and a personal phone. Business accounts use a dedicated business email and a dedicated business number. Never mix the two.',
      'Client Data Rule: Store client confidential data in an encrypted folder, access it only on a clean device, and delete it within 30 days of project completion. Document the lifecycle.',
      'Storefront Hardening: Enable 2FA on your storefront admin, restrict admin IPs where possible, install a web application firewall, and patch themes and plugins monthly.',
      'Contractor Onboarding Kit: Background check, signed NDA, role-based access to a business password manager, no admin access to core business systems, time-bound access expiry.',
      'Incident Response: When an account is compromised, freeze it, notify clients within 24 hours, document everything, and offer a remediation credit or refund as appropriate.'
    ],
    downloadName: 'CS_Academy_Digital_Entrepreneur_Security.pdf'
  },
  {
    id: 'sme-digital-strategy',
    title: 'SME Digital Strategy Toolkit',
    category: 'Business',
    format: 'Toolkit',
    description: 'A 90-day digital transformation plan for small and medium businesses to adopt cloud tools, AI assistants, and online sales without a large budget.',
    readingTime: '10 min read',
    level: 'Intermediate',
    targetAudience: 'SME owners, operations managers, growth leads',
    keyHighlights: [
      '90-day roadmap: Foundation, Acceleration, Scale',
      'Cloud tool stack recommendations by budget tier',
      'AI assistant integration playbook for sales and support',
      'KPI dashboard template with weekly review cadence'
    ],
    useCases: [
      'Launching an online sales channel for a retail shop',
      'Automating customer follow-up with a low-cost AI assistant',
      'Migrating from paper invoices to a cloud accounting tool',
      'Building a weekly KPI review habit with the leadership team'
    ],
    previewContent: [
      'Phase 1 — Foundation (Days 1-30): Pick one accounting tool, one communication tool, one storage tool. Get every employee using them daily. Stop using personal accounts for business.',
      'Phase 2 — Acceleration (Days 31-60): Add an AI assistant for repetitive tasks (email drafts, customer responses, social captions). Set up basic sales tracking. Train the team for 4 hours total.',
      'Phase 3 — Scale (Days 61-90): Launch or improve your online sales channel. Build a weekly KPI review. Document what is working so it can be repeated. Decide on the next investment.',
      'Budget Tiers: Under $20/month (free tools + one paid AI), $50-100/month (paid stack + 2 AI seats), $200+/month (full SaaS + dedicated AI tools).',
      'KPI Starter Set: Weekly new leads, conversion rate, average transaction value, customer response time, repeat customer rate.'
    ],
    downloadName: 'CS_Academy_SME_Digital_Strategy.pdf'
  },
  {
    id: 'customer-data-handling',
    title: 'Customer Data Handling Playbook',
    category: 'Business',
    format: 'PDF Guide',
    description: 'Operational rules for collecting, storing, sharing, and deleting customer data in compliance with Kenya, Tanzania, and international privacy law.',
    readingTime: '8 min read',
    level: 'Intermediate',
    targetAudience: 'Operations leads, customer service managers, compliance owners at SMEs',
    keyHighlights: [
      'Lawful basis framework for every data type you collect',
      'Data minimization worksheet for forms and sign-ups',
      'Retention schedule by data category with deletion rules',
      'Breach response workflow with regulator notification timeline'
    ],
    useCases: [
      'Auditing the customer data you currently hold',
      'Designing a privacy-first signup form',
      'Responding to a customer data deletion request',
      'Preparing for a data protection regulatory visit'
    ],
    previewContent: [
      'Lawful Basis Decision Tree: (1) Did the customer give specific, informed consent? (2) Is the processing necessary to deliver a service they bought? (3) Is there a legal obligation? If none, do not collect.',
      'Data Minimization Worksheet: For every field on a form, ask: "What specific decision does this field enable?" If you cannot answer in one sentence, remove it.',
      'Retention schedule: Customer transaction records — 7 years (tax law). Marketing consent — until withdrawn. Support tickets — 2 years. Accounting backups — 7 years. Delete the rest.',
      'Breach Response: (1) Contain within 1 hour, (2) assess scope within 24 hours, (3) notify regulator within 72 hours if personal data is at risk, (4) notify affected customers without undue delay.'
    ],
    downloadName: 'CS_Academy_Customer_Data_Handling.pdf'
  }
];
