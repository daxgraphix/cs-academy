import { Instructor } from '../types';

export const instructorsData: Instructor[] = [
  {
    id: 'alex-rweyemamu',
    name: 'Alex Rweyemamu',
    role: 'Founder & Lead Instructor',
    role_sw: 'Mwanzilishi na Mkufunzi Mkuu',
    specialtyBadge: 'AI & Cybersecurity Lead',
    specialtyBadge_sw: 'Kiongozi wa AI na Usalama wa Mtandao',
    experience: '10+ Years Experience',
    experience_sw: 'Uzoefu wa Miaka 10+',
    bio: 'Pioneer of Swahili-first technology education, cybersecurity strategist, and AI educator. Alex leads CS Academy curricula, advising regional organizations on AI adoption, digital trust, and practical technological literacy.',
    bio_sw: 'Mwanzilishi wa elimu ya teknolojia kwa Kiswahili, mwanamkakati wa usalama wa mtandao, na mwalimu wa AI. Alex anaongoza mitaala ya CS Academy, akizishauri taasisi za kikanda kuhusu utumiaji wa AI, uaminifu wa kidijitali, na ujuzi wa vitendo wa kiteknolojia.',
    avatarInitials: 'AR',
    avatarGradient: 'from-[#DC2626] to-[#7F1D1D]',
    avatarImage: '/assets/images/ALEX.jpg',
    expertise: [
      'Prompt Engineering',
      'Cybersecurity & OSINT',
      'Vibe Coding Architecture',
      'Swahili Tech Pedagogy',
      'Executive AI Strategy'
    ],
    expertise_sw: [
      'Uandishi wa Maagizo (Prompt Engineering)',
      'Usalama wa Mtandao na OSINT',
      'Usanifu wa Vibe Coding',
      'Mbinu za Kufundishia Teknolojia kwa Kiswahili',
      'Mkakati wa AI kwa Viongozi'
    ],
    coursesCount: 14,
    featuredCourses: [
      'Artificial Intelligence & Prompt Engineering',
      'Cybersecurity & Digital Trust',
      'Vibe Coding Masterclass'
    ],
    featuredCourses_sw: [
      'Akili Mnemba na Uandishi wa Maagizo',
      'Usalama wa Mtandao na Uaminifu wa Kidijitali',
      'Darasa la Vibe Coding'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 'fatma-mrema',
    name: 'Fatma Mrema',
    role: 'Senior Full-Stack & Cloud Facilitator',
    role_sw: 'Muwezeshaji Mkuu wa Full-Stack na Wingu',
    specialtyBadge: 'Web & Cloud Architecture',
    specialtyBadge_sw: 'Usanifu wa Wavuti na Wingu',
    experience: '8+ Years Experience',
    experience_sw: 'Uzoefu wa Miaka 8+',
    bio: 'Software engineer and cloud solutions architect with extensive experience building scalable web applications. Passionate about mentoring upcoming African developers and turning technical jargon into intuitive concepts.',
    bio_sw: 'Mhandisi wa programu na msanifu wa suluhisho za wingu mwenye uzoefu mkubwa wa kujenga programu za wavuti zinazoweza kukua. Ana shauku ya kutoa ushauri kwa watengenezaji wa Kiafrika wanaochipukia na kubadilisha lugha ngumu za kiufundi kuwa dhana rahisi kueleweka.',
    avatarInitials: 'FM',
    avatarGradient: 'from-amber-600 to-red-800',
    expertise: [
      'Full-Stack Web Dev',
      'React & TypeScript',
      'API Integration',
      'Cloud Deployment (AWS/GCP)',
      'Database Architecture'
    ],
    expertise_sw: [
      'Ujenzi wa Wavuti (Full-Stack)',
      'React na TypeScript',
      'Uunganishaji wa API',
      'Usambazaji kwenye Wingu (AWS/GCP)',
      'Usanifu wa Hifadhidata'
    ],
    coursesCount: 8,
    featuredCourses: [
      'Digital Skills & Web Development',
      'Practical Full-Stack Bootcamp',
      'Cloud & Deployment Essentials'
    ],
    featuredCourses_sw: [
      'Ujuzi wa Kidijitali na Ujenzi wa Wavuti',
      'Bootcamp ya Vitendo ya Full-Stack',
      'Misingi ya Wingu na Usambazaji'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    id: 'david-ochieng',
    name: 'David Ochieng',
    role: 'Cybersecurity Specialist & Ethical Hacker',
    role_sw: 'Mtaalamu wa Usalama wa Mtandao na Hacker wa Kimaadili',
    specialtyBadge: 'Defensive Security & Threat Hunting',
    specialtyBadge_sw: 'Usalama wa Kujihami na Uwindaji wa Matishio',
    experience: '7+ Years Experience',
    experience_sw: 'Uzoefu wa Miaka 7+',
    bio: 'Certified ethical hacker and information security analyst. David trains enterprise teams and learners in defense-in-depth, mobile money fraud prevention, phishing resilience, and compliance standards.',
    bio_sw: 'Hacker wa kimaadili aliyethibitishwa na mchambuzi wa usalama wa habari. David anatoa mafunzo kwa timu za makampuni na wanafunzi katika ulinzi wa kina, kuzuia utapeli wa pesa kwa simu, ustahimilivu dhidi ya hadaa, na viwango vya kufuata sheria.',
    avatarInitials: 'DO',
    avatarGradient: 'from-red-700 to-neutral-900',
    expertise: [
      'Ethical Hacking & Pen Testing',
      'Incident Response',
      'Mobile Fraud Prevention',
      'Network Security',
      'ISO 27001 Compliance'
    ],
    expertise_sw: [
      'Hacking ya Kimaadili na Upimaji',
      'Majibu ya Matukio ya Mtandao',
      'Kuzuia Utapeli wa Pesa kwa Simu',
      'Usalama wa Mtandao (Network)',
      'Uzingatiaji wa ISO 27001'
    ],
    coursesCount: 6,
    featuredCourses: [
      'Cybersecurity & Digital Trust',
      'Ethical Hacking Foundations',
      'Mobile Money Security & Scam Shield'
    ],
    featuredCourses_sw: [
      'Usalama wa Mtandao na Uaminifu wa Kidijitali',
      'Misingi ya Hacking ya Kimaadili',
      'Usalama wa Pesa kwa Simu na Kinga ya Utapeli'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 'neema-kimaro',
    name: 'Neema Kimaro',
    role: 'Lead UI/UX & Digital Media Creator',
    role_sw: 'Kiongozi wa UI/UX na Uundaji wa Media za Kidijitali',
    specialtyBadge: 'Design Systems & Creative Tech',
    specialtyBadge_sw: 'Mifumo ya Usanifu na Teknolojia ya Ubunifu',
    experience: '6+ Years Experience',
    experience_sw: 'Uzoefu wa Miaka 6+',
    bio: 'Visual designer, brand strategist, and Figma educator helping African startups and digital creators design intuitive user interfaces and impactful marketing assets using modern design workflows.',
    bio_sw: 'Msanifu wa picha, mwanamkakati wa chapa, na mwalimu wa Figma anayesaidia startups za Afrika na wabunifu wa kidijitali kusanifu mifumo rahisi ya watumiaji na mali za masoko zenye athari kwa kutumia mifumo ya kisasa ya usanifu.',
    avatarInitials: 'NK',
    avatarGradient: 'from-rose-600 to-red-950',
    expertise: [
      'UI/UX Design Systems',
      'Figma & Prototyping',
      'AI Generative Graphics',
      'Brand Identity',
      'Digital Marketing Assets'
    ],
    expertise_sw: [
      'Mifumo ya Usanifu wa UI/UX',
      'Figma na Utengenezaji wa Mifano',
      'Picha Zinazozalishwa na AI',
      'Utambulisho wa Chapa',
      'Mali za Masoko ya Kidijitali'
    ],
    coursesCount: 5,
    featuredCourses: [
      'UI/UX Design Mastery with Figma',
      'Graphic Design for Entrepreneurs',
      'AI-Powered Content & Visuals'
    ],
    featuredCourses_sw: [
      'Umahiri wa Usanifu wa UI/UX kwa Figma',
      'Usanifu wa Picha kwa Wajasiriamali',
      'Maudhui na Picha Zinazowezeshwa na AI'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'baraka-mwita',
    name: 'Eng. Baraka Mwita',
    role: 'AI & Data Solutions Architect',
    role_sw: 'Msanifu wa Suluhisho za AI na Data',
    specialtyBadge: 'Machine Learning & Swahili NLP',
    specialtyBadge_sw: 'Machine Learning na NLP ya Kiswahili',
    experience: '9+ Years Experience',
    experience_sw: 'Uzoefu wa Miaka 9+',
    bio: 'Data scientist and machine learning engineer researching local language NLP models. Baraka teaches practical data analysis, predictive automation, and business intelligence for corporate and academic institutions.',
    bio_sw: 'Mwanasayansi wa data na mhandisi wa machine learning anayetafiti mifano ya NLP ya lugha za ndani. Baraka anafundisha uchambuzi wa data wa vitendo, otomatishaji wa kutabiri, na akili ya biashara kwa taasisi za makampuni na kitaaluma.',
    avatarInitials: 'BM',
    avatarGradient: 'from-red-900 to-amber-900',
    expertise: [
      'Swahili NLP Models',
      'Python for Data Science',
      'Workflow Automation',
      'Business Intelligence',
      'LLM Fine-Tuning'
    ],
    expertise_sw: [
      'Mifano ya NLP ya Kiswahili',
      'Python kwa Sayansi ya Data',
      'Otomatishaji wa Kazi',
      'Akili ya Biashara (BI)',
      'Uboreshaji wa LLM (Fine-Tuning)'
    ],
    coursesCount: 7,
    featuredCourses: [
      'AI Automation for Organizations',
      'Data Analytics with Python',
      'Swahili AI Integration Workshop'
    ],
    featuredCourses_sw: [
      'Otomatishaji wa AI kwa Mashirika',
      'Uchambuzi wa Data kwa Python',
      'Warsha ya Uunganishaji wa AI ya Kiswahili'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  }
];
