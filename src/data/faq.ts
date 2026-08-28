import { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  // 1. Course Access
  {
    id: 'how-to-access-courses',
    question: 'How do I access my course materials after enrolling?',
    question_sw: 'Ninawezaje kupata nyenzo zangu za kozi baada ya kujiunga?',
    answer: 'Immediately upon enrolling and confirming payment, you receive instant access credentials via email and WhatsApp. You can stream HD video lessons via our web platform, join dedicated WhatsApp micro-learning study groups, or download PDF handbooks, starter prompt cheat sheets, and source code repositories directly to your device.',
    answer_sw: 'Mara tu baada ya kujiunga na kuthibitisha malipo, utapokea maelezo ya ufikiaji wa papo hapo kupitia barua pepe na WhatsApp. Unaweza kutazama masomo ya video ya HD kupitia jukwaa letu la wavuti, kujiunga na vikundi maalum vya masomo ya WhatsApp, au kupakua vitabu vya PDF, miongozo ya kuanzia (cheat sheets), na namba za programu (source code) moja kwa moja kwenye kifaa chako.',
    category: 'Course Access'
  },
  {
    id: 'lifetime-access',
    question: 'Do I get lifetime access to the courses and updates?',
    question_sw: 'Je, nitapata ufikiaji wa maisha kwa kozi na maboresho?',
    answer: 'Yes! All self-paced and cohort courses come with lifetime access to recorded video lectures, lesson notes, and future curriculum updates. You can revisit the material anytime at your own pace from your computer, tablet, or smartphone.',
    answer_sw: 'Ndiyo! Kozi zote za kujiendesha na zile za makundi zinakuja na ufikiaji wa maisha kwa rekodi za video za mihadhara, vidokezo vya masomo, na maboresho ya mtaala yajayo. Unaweza kurejea nyenzo wakati wowote kwa kasi yako mwenyewe kutoka kwenye kompyuta, tableti, au simu yako janja.',
    category: 'Course Access'
  },
  {
    id: 'mobile-learning-access',
    question: 'Can I study using just a smartphone without a computer?',
    question_sw: 'Je, naweza kusoma kwa kutumia simu janja pekee bila kompyuta?',
    answer: 'Absolutely! Our mobile-first delivery tier and WhatsApp micro-learning channels are specially optimized for smartphones. You can listen to high-yield audio lessons, view code slides, copy prompt templates, and participate in community discussions directly on your phone with zero heavy software installation.',
    answer_sw: 'Kabisa! Njia yetu ya mafunzo inayolenga simu kwanza na njia za mafunzo mafupi ya WhatsApp zimeboreshwa maalum kwa ajili ya simu janja. Unaweza kusikiliza masomo ya sauti, kutazama slaidi za kodi, kunakili templeti za maelekezo (prompts), na kushiriki katika majadiliano ya jumuiya moja kwa moja kwenye simu yako bila kuhitaji kusakinisha programu nzito.',
    category: 'Course Access'
  },
  {
    id: 'offline-download-materials',
    question: 'Can I download lessons for offline study when I have no internet?',
    question_sw: 'Je, naweza kupakua masomo kwa ajili ya kusoma nje ya mtandao wakati sina intaneti?',
    answer: 'Yes. All course PDF workbooks, prompt toolkits, audio summaries, and cheatsheets are downloadable for offline reading. Video lessons can also be cached or accessed via our bandwidth-friendly audio-first WhatsApp track to save mobile data.',
    answer_sw: 'Ndiyo. Vitabu vyote vya mazoezi vya PDF, vifaa vya maelekezo (prompt toolkits), muhtasari wa sauti, na miongozo (cheatsheets) vinaweza kupakulika kwa ajili ya kusoma nje ya mtandao. Masomo ya video pia yanaweza kuhifadhiwa au kufikiwa kupitia njia yetu ya WhatsApp inayotumia sauti zaidi na data kidogo.',
    category: 'Course Access'
  },

  // 2. Payment Methods
  {
    id: 'mobile-money-payments',
    question: 'What payment methods do you accept? Can I pay via M-Pesa or Tigo Pesa?',
    question_sw: 'Ni njia gani za malipo mnazopokea? Je, naweza kulipa kupitia M-Pesa au Tigo Pesa?',
    answer: 'We support all major East African Mobile Money services including Vodacom M-Pesa, Tigo Pesa, Airtel Money, and Halopesa. We also accept Visa, Mastercard, and direct bank wire transfers. Mobile money payments are activated instantly with automated SMS/email confirmation.',
    answer_sw: 'Tunasaidia huduma zote kuu za Pesa kwa Simu za Afrika Mashariki zikiwemo Vodacom M-Pesa, Tigo Pesa, Airtel Money, na Halopesa. Pia tunapokea Visa, Mastercard, na uhamishaji wa moja kwa moja wa benki. Malipo ya pesa kwa simu yanawashwa papo hapo kwa kuthibitishiwa na SMS/barua pepe ya kiotomatiki.',
    category: 'Payment & Mobile Money'
  },
  {
    id: 'installment-payments',
    question: 'Are installment or split-payment plans available for bootcamps?',
    question_sw: 'Je, kuna mipango ya kulipa kwa awamu kwa ajili ya bootcamps?',
    answer: 'Yes, for multi-week bootcamps and comprehensive masterclasses, we offer flexible two-part installment plans (50% deposit upon registration, and the remaining 50% midway through the cohort) to ensure financial accessibility for all dedicated learners.',
    answer_sw: 'Ndiyo, kwa ajili ya bootcamps za wiki kadhaa na madarasa ya kina (masterclasses), tunatoa mipango rahisi ya malipo ya sehemu mbili (asilimia 50 wakati wa usajili, na asilimia 50 iliyobaki katikati ya mafunzo) ili kuhakikisha ufikiaji wa kifedha kwa wanafunzi wote waliojitolea.',
    category: 'Payment & Mobile Money'
  },
  {
    id: 'currencies-accepted',
    question: 'Which currencies are accepted?',
    question_sw: 'Ni sarafu gani zinakubaliwa?',
    answer: 'Our pricing is transparently listed in Tanzanian Shillings (TZS), Kenyan Shillings (KES), and US Dollars (USD). You can switch between currencies using our currency selector toggle at any time.',
    answer_sw: 'Gharama zetu zimeorodheshwa kwa uwazi katika Shilingi za Kitanzania (TZS), Shilingi za Kikenya (KES), na Dola za Marekani (USD). Unaweza kubadilisha kati ya sarafu hizo ukitumia kitufe chetu cha kuchagua sarafu wakati wowote.',
    category: 'Payment & Mobile Money'
  },
  {
    id: 'corporate-invoicing',
    question: 'Can my company receive an official invoice and tax receipt (EFD/TRA)?',
    question_sw: 'Je, kampuni yangu inaweza kupokea ankara rasmi na risiti ya kodi (EFD/TRA)?',
    answer: 'Yes. For corporate sponsorships, institutional bulk enrollments, and NGO trainings, we generate formal proforma invoices, stamped tax receipts (TRA/EFD compliant in Tanzania, KRA compliant in Kenya), and structured vendor onboarding documentation.',
    answer_sw: 'Ndiyo. Kwa udhamini wa makampuni, usajili wa makundi ya taasisi, na mafunzo ya NGO, tunatengeneza ankara rasmi za proforma, risiti za kodi zilizopigwa muhuri (zinazozingatia TRA/EFD nchini Tanzania, na KRA nchini Kenya), na nyaraka zilizopangwa za usajili wa wauzaji.',
    category: 'Payment & Mobile Money'
  },

  // 3. Technical Support
  {
    id: 'learner-support-helpdesk',
    question: 'What technical support is provided if I get stuck on a coding or AI exercise?',
    question_sw: 'Ni msaada gani wa kiufundi unatolewa nikikwama kwenye mazoezi ya kodingi au AI?',
    answer: 'You are never on your own at CS Academy. Every student gets access to our active WhatsApp learner community and weekly live Q&A office hours where Alex and senior teaching assistants provide hands-on debugging, prompt review, and personalized guidance.',
    answer_sw: 'Haupo peke yako kamwe ukiwa CS Academy. Kila mwanafunzi anapata ufikiaji wa jumuiya yetu hai ya wanafunzi ya WhatsApp na saa za kila wiki za Maswali na Majibu mubashara ambapo Alex na wasaidizi wakuu wa kufundisha wanatoa msaada wa kurekebisha makosa (debugging), uhakiki wa maelekezo (prompts), na mwongozo wa kibinafsi.',
    category: 'Technical Support'
  },
  {
    id: 'system-hardware-requirements',
    question: 'What computer hardware and internet speed do I need?',
    question_sw: 'Nahitaji vifaa gani vya kompyuta na kasi gani ya intaneti?',
    answer: 'You only need a basic laptop or smartphone capable of running a modern web browser (Google Chrome, Edge, Safari, or Firefox) and WhatsApp. Because we utilize cloud-based IDEs and browser-accessible AI interfaces, you do not need an expensive gaming laptop or high-end graphics card.',
    answer_sw: 'Unahitaji tu laptop ya kawaida au simu janja inayoweza kuendesha kivinjari cha kisasa (Google Chrome, Edge, Safari, au Firefox) na WhatsApp. Kwa sababu tunatumia IDE zinazotegemea wingu na mifumo ya AI inayofikiwa na kivinjari, hauhitaji laptop ghali ya michezo au kadi ya picha ya kiwango cha juu.',
    category: 'Technical Support'
  },
  {
    id: 'low-bandwidth-support',
    question: 'What if I have slow or intermittent internet connection?',
    question_sw: 'Vipi ikiwa nina intaneti ya polepole au inayokata?',
    answer: 'CS Academy is engineered specifically for African network realities. Our platform features an ultra-low data mode with compressed video streams, downloadable text-based workbooks, and audio-first WhatsApp modules that consume less than 10MB per lesson.',
    answer_sw: 'CS Academy imeundwa mahususi kwa ajili ya hali halisi ya mitandao ya Afrika. Jukwaa letu lina hali ya data ya chini kabisa yenye video zilizopunguzwa ukubwa, vitabu vya mazoezi vya maandishi vinavyopakulika, na moduli za WhatsApp zinazotumia sauti zaidi ambazo hutumia chini ya 10MB kwa kila somo.',
    category: 'Technical Support'
  },

  // 4. General, Languages & Certificates
  {
    id: 'who-can-join',
    question: 'Who can join CS Academy?',
    question_sw: 'Nani anaweza kujiunga na CS Academy?',
    answer: 'CS Academy welcomes students, university graduates, teachers, lecturers, entrepreneurs, corporate professionals, NGO workers, and leadership teams. Whether you have zero technical background or are an experienced professional looking to modernize your workflow with AI and cybersecurity, our courses are structured into clear, beginner-friendly and advanced professional tiers.',
    answer_sw: 'CS Academy inakaribisha wanafunzi, wahitimu wa vyuo vikuu, walimu, wahadhiri, wajasiriamali, wataalamu wa makampuni, wafanyakazi wa NGO, na timu za uongozi. Iwe hauna ujuzi wowote wa kiufundi au wewe ni mtaalamu mwenye uzoefu unayetafuta kuboresha taratibu zako za kazi kwa AI na usalama wa mtandao, kozi zetu zimepangwa katika ngazi zilizo wazi za wanaoanza na wataalamu waliobobea.',
    category: 'General'
  },
  {
    id: 'certificates-qr',
    question: 'Do you provide verified certificates with QR code verification?',
    question_sw: 'Je, mnatoa vyeti vilivyothibitishwa kwa uhakiki wa kodi ya QR?',
    answer: 'Yes! Upon completing any bootcamp or masterclass track, you receive a tamper-proof digital certificate embedded with a verifiable QR code and unique credential ID that employers, universities, and LinkedIn connections can instantly authenticate online.',
    answer_sw: 'Ndiyo! Baada ya kukamilisha bootcamp yoyote au darasa la masterclass, utapokea cheti cha kidijitali ambacho hakiwezi kuchezewa kikiwa na kodi ya QR inayohakikika na nambari ya utambulisho wa kipekee ambayo waajiri, vyuo vikuu, na marafiki wa LinkedIn wanaweza kuithibitisha papo hapo mtandaoni.',
    category: 'General'
  },
  {
    id: 'teach-in-kiswahili',
    question: 'Do you teach in Kiswahili or English?',
    question_sw: 'Je, mnafundisha kwa Kiswahili au Kiingereza?',
    answer: 'We teach in both Kiswahili and English! Our instructors explain foundational concepts in clear, natural Kiswahili while simultaneously teaching the standard English industry terminologies, ensuring you gain both conceptual mastery and global workplace fluency.',
    answer_sw: 'Tunafundisha kwa Kiswahili na Kiingereza! Wakufunzi wetu wanaelezea dhana za msingi kwa Kiswahili sanifu na rahisi huku wakifundisha istilahi za kawaida za kiwanda za Kiingereza, wakihakikisha unapata umahiri wa dhana na ufasaha wa mahali pa kazi duniani.',
    category: 'General'
  },
  {
    id: 'customized-training',
    question: 'Can organizations request customized private on-site training?',
    question_sw: 'Je, mashirika yanaweza kuomba mafunzo maalum ya ndani ya ofisi?',
    answer: 'Yes, customized institutional training is one of our primary specialties. We collaborate closely with banks, universities, NGOs, financial institutions, and government agencies to design tailored curricula matching your internal software stack, security policies, and team skill levels.',
    answer_sw: 'Ndiyo, mafunzo maalum ya taasisi ni moja ya utaalamu wetu mkuu. Tunashirikiana kwa karibu na benki, vyuo vikuu, NGO, taasisi za kifedha, na idara za serikali kusanifu mitaala iliyoboreshwa inayoendana na programu zenu za ndani, sera za usalama, na ngazi za ujuzi wa timu yenu.',
    category: 'Organizations'
  }
];
