import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Zap, 
  Globe2, 
  Languages, 
  Award, 
  MonitorSmartphone, 
  Sparkles, 
  ShieldCheck, 
  Sliders, 
  Building2, 
  Users
} from 'lucide-react';

export const WhyCSAcademy: React.FC = () => {
  const { language, theme, t } = useApp();

  const benefits = [
    { 
      title: language === 'sw' ? 'Mafunzo ya Vitendo' : 'Practical Learning', 
      desc: language === 'sw' ? 'Hakuna nadharia tupu. Unatengeneza kazi halisi, kuandika maelekezo ya AI na kufanya ukaguzi wa mifumo kuanzia siku ya kwanza.' : 'No abstract theory. You build functional prompts, audit security settings, and create deliverables on day one.', 
      icon: Zap 
    },
    { 
      title: language === 'sw' ? 'Muktadha wa Kiafrika' : 'Africa-Focused Context', 
      desc: language === 'sw' ? 'Mifano na mazingira halisi ya biashara za Kitanzania na Afrika Mashariki.' : 'Case studies, workflows, and economic realities rooted in the East & Central African business ecosystem.', 
      icon: Globe2 
    },
    { 
      title: language === 'sw' ? 'Kiswahili & Kiingereza' : 'English & Kiswahili', 
      desc: language === 'sw' ? 'Lugha si kikwazo tena. Jifunze teknolojia tata kwa lugha inayoeleweka na kuzungumzwa na mamilioni.' : 'Bilingual accessibility ensuring language is never an obstacle to mastering high-impact technologies.', 
      icon: Languages 
    },
    { 
      title: language === 'sw' ? 'Wakufunzi Waliobobea' : 'Expert-Led Sessions', 
      desc: language === 'sw' ? 'Mafunzo yanaongozwa na wataalamu wenye uzoefu wa vitendo katika usalama na AI.' : 'Instruction delivered by seasoned cybersecurity professionals, tech educators, and AI practitioners.', 
      icon: Award 
    },
    { 
      title: language === 'sw' ? 'Mtandaoni na Ana kwa Ana' : 'Online & Physical Delivery', 
      desc: language === 'sw' ? 'Urahisi wa kuchagua kati ya vipindi vya Zoom, WhatsApp micro-learning, au madarasa ya ana kwa ana.' : 'Seamless choice between live Zoom/Meet classes, WhatsApp micro-learning, and on-site physical workshops.', 
      icon: MonitorSmartphone 
    },
    { 
      title: language === 'sw' ? 'Matokeo Yanayoonekana' : 'Real-World Deliverables', 
      desc: language === 'sw' ? 'Fanya kazi kwenye nyaraka zako halisi, ripoti za ofisi, au miradi ya wateja.' : 'Work directly on your team\'s actual documents, reports, proposals, and security policies.', 
      icon: Sparkles 
    },
    { 
      title: language === 'sw' ? 'Usalama wa Data & AI' : 'AI Safety Built In', 
      desc: language === 'sw' ? 'Ulinzi wa siri, utambuzi wa taarifa za uongo (deepfakes) na maadili vimejumuishwa katika kila kozi.' : 'Data privacy, hallucination verification, and deepfake defense are baked into every module.', 
      icon: ShieldCheck 
    },
    { 
      title: language === 'sw' ? 'Ratiba Rahisi' : 'Flexible Formats', 
      desc: language === 'sw' ? 'Kuanzia vipindi fupi vya masaa machache hadi mafunzo marefu ya wiki kadhaa.' : 'From 90-minute executive briefings to multi-week cohort intensives that fit your demanding schedule.', 
      icon: Sliders 
    },
    { 
      title: language === 'sw' ? 'Mafunzo Maalum ya Taasisi' : 'Custom Corporate Training', 
      desc: language === 'sw' ? 'Mitaala maalum inayoundwa kulingana na malengo ya kampuni, chuo au shirika lako.' : 'Tailored curricula co-designed for universities, banks, NGOs, and government ministries.', 
      icon: Building2 
    },
    { 
      title: language === 'sw' ? 'Jumuiya Endelevu ya CyberSwahili' : 'Community-Driven Learning', 
      desc: language === 'sw' ? 'Msaada wa kila siku, majadiliano ya kiteknolojia na fursa za kazi kupitia jamii yetu.' : 'Continuous alumni support, daily resource drops, and ongoing mentorship via CyberSwahili communities.', 
      icon: Users 
    }
  ];

  return (
    <section 
      id="why-cs-academy-section" 
      className={`py-24 border-y transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#121212] text-white border-neutral-800' : 'bg-neutral-50 text-neutral-900 border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-[#DC2626] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.whyUs.badge}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-neutral-950'
          }`}>
            {t.whyUs.title}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
          }`}>
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 10 Benefits Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-3xl border transition-all duration-200 hover:-translate-y-1 space-y-2.5 flex flex-col justify-between shadow-sm ${
                  theme === 'dark'
                    ? 'bg-[#0B0B0B] border-neutral-800 hover:border-neutral-700'
                    : 'bg-white border-neutral-200 hover:border-red-200 hover:shadow-md'
                }`}
              >
                <div className="space-y-2">
                  <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center text-[#DC2626] ${
                    theme === 'dark' ? 'bg-[#171717] border-neutral-800' : 'bg-red-50 border-red-100'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className={`text-sm font-extrabold tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>{item.title}</h3>
                  <p className={`text-xs leading-relaxed ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
