import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Globe, 
  ArrowLeftRight, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck, 
  BookOpen, 
  Store, 
  GraduationCap,
  Terminal,
  Play,
  Copy,
  Check
} from 'lucide-react';

interface SwahiliAISectionProps {
  openBookingModal: (prefill?: { program?: string }) => void;
}

export const SwahiliAISection: React.FC<SwahiliAISectionProps> = ({
  openBookingModal
}) => {
  const { language, theme, t } = useApp();
  const [activePromptIdx, setActivePromptIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const samplePrompts = [
    {
      titleSw: "Vibe Coding: Tovuti ya E-commerce",
      titleEn: "Vibe Coding: E-Commerce Storefront",
      prompt: "Andika React component ya kadi ya bidhaa yenye bei kwa TZS, kitufe cha kulipa kwa M-Pesa, na picha ya mtindo wa kisasa wa Kiafrika.",
      responseSw: "Component ya React na Tailwind imetengenezwa ikiwa na 'Lipa kwa M-Pesa' na uhesabuji wa kodi ya TRA kiotomatiki.",
      responseEn: "React + Tailwind component generated with instant M-Pesa checkout button and local currency formatting."
    },
    {
      titleSw: "Usalama wa Data & Phishing",
      titleEn: "Cyber Safety & Phishing Audit",
      prompt: "Changanua ujumbe huu wa SMS: 'Hongera umeshinda Tsh 2,000,000 bofya link hii kuweka PIN yako'. Nieleze kwanini ni utapeli.",
      responseSw: "TAHADHARI YA PHISHING: Ujumbe huu unataka kuiba PIN yako ya huduma ya kifedha. Hakuna kampuni inayoomba PIN kwa SMS.",
      responseEn: "PHISHING ALERT: This SMS uses social engineering to steal mobile banking PINs. Never share PIN credentials via SMS."
    },
    {
      titleSw: "Muhtasari wa Kazi & Ripoti",
      titleEn: "Workplace Executive Summary",
      prompt: "Andika muhtasari wa kurasa 1 wa mapendekezo ya mafunzo ya AI kwa wafanyakazi 50 wa Benki jijini Dar es Salaam.",
      responseSw: "Waraka wa Pendekezo: Mpango wa wiki 4 unaofundisha Prompt Engineering na Ulinzi wa Taarifa za Wateja.",
      responseEn: "Proposal Ready: 4-week executive curriculum covering Prompt Engineering and Customer Data Protection."
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(samplePrompts[activePromptIdx].prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const topics = [
    { label: language === 'sw' ? 'AI kwa Kiswahili' : 'AI in Swahili', icon: Globe },
    { label: language === 'sw' ? 'Vibe Coding' : 'Vibe Coding', icon: Terminal },
    { label: language === 'sw' ? 'Uelewa wa AI (Literacy)' : 'AI Literacy', icon: BookOpen },
    { label: language === 'sw' ? 'Ufanisi Kazini (Productivity)' : 'AI Productivity', icon: Sparkles },
    { label: language === 'sw' ? 'Ulinzi dhidi ya Deepfakes' : 'Deepfake Awareness', icon: ShieldCheck },
    { label: language === 'sw' ? 'AI kwa Wafanyabiashara' : 'AI for SMEs', icon: Store },
    { label: language === 'sw' ? 'AI kwa Walimu & Vyuo' : 'AI for Educators', icon: GraduationCap }
  ];

  return (
    <section 
      id="swahili-ai-section" 
      className={`py-24 border-y transition-colors duration-300 relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-[#0E0E0E] text-white border-neutral-800'
          : 'bg-white text-neutral-900 border-neutral-200'
      }`}
    >
      {/* Background Glow */}
      <div className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] pointer-events-none -z-10 ${
        theme === 'dark' ? 'bg-red-950/25' : 'bg-red-200/40'
      }`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (6 cols on lg) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-800/40 text-[#DC2626] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.swahiliAi.badge}</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-neutral-950'
            }`}>
              {language === 'sw' ? (
                <>KUONDOA KIKWAZO CHA LUGHA KATIKA <span className="text-[#DC2626]">AKILI MNEMBA</span></>
              ) : (
                <>MAKING ARTIFICIAL INTELLIGENCE ACCESSIBLE FOR <span className="text-[#DC2626]">AFRICA</span></>
              )}
            </h2>

            <p className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
            }`}>
              {t.swahiliAi.subtitle}
            </p>

            {/* Language & Context Benefits */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-xl bg-red-950/40 border border-red-800/50 flex items-center justify-center text-[#DC2626] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                    {language === 'sw' ? 'Mifano Halisi ya Mazingira ya Kiafrika' : 'Culturally Grounded Case Studies'}
                  </h4>
                  <p className={`text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {language === 'sw' 
                      ? 'Mitaala inayotumia muktadha wa biashara za Kariakoo, kilimo, elimu, miamala ya simu, na changamoto za eneo letu.'
                      : 'Real-world scenarios rooted in African retail, mobile money ecosystems, education, and regional workflows.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-xl bg-red-950/40 border border-red-800/50 flex items-center justify-center text-[#DC2626] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                    {language === 'sw' ? 'Vibe Coding & Uhandisi wa Maelekezo (Prompts)' : 'Vibe Coding & Bilingual Prompt Engineering'}
                  </h4>
                  <p className={`text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {language === 'sw'
                      ? 'Jifunze kuongoza mifumo ya kisasa ya AI (Gemini, Claude, GPT) kwa Kiswahili na Kiingereza bila kupoteza usahihi wa kiufundi.'
                      : 'Master how to guide state-of-the-art AI models using natural language prompts without foreign jargon friction.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-xl bg-red-950/40 border border-red-800/50 flex items-center justify-center text-[#DC2626] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                    {language === 'sw' ? 'Upatikanaji Rahisi kwa WhatsApp & Video' : 'Grassroots WhatsApp & Multi-Channel Delivery'}
                  </h4>
                  <p className={`text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {language === 'sw'
                      ? 'Mafunzo ya sauti ya kila siku kupitia WhatsApp yanayotumia data kidogo sana, pamoja na madarasa ya moja kwa moja ya Zoom.'
                      : 'Daily audio micro-learning over WhatsApp (low data usage) alongside high-fidelity live Zoom deep dives.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="btn-swahili-ai-learn"
                onClick={() => openBookingModal({ program: 'AI & Vibe Coding Practical Training' })}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-extrabold text-white bg-[#B91C1C] hover:bg-[#DC2626] rounded-2xl shadow-lg hover:shadow-red-900/40 uppercase tracking-wider transition-all"
              >
                <span>{t.swahiliAi.ctaMasterclass}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Prompt & Terminal Visual (6 cols on lg) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Interactive Swahili AI Terminal Box */}
            <div className={`border rounded-3xl p-6 shadow-2xl relative ${
              theme === 'dark' ? 'bg-[#141414] border-neutral-800' : 'bg-neutral-50 border-neutral-200 shadow-neutral-200'
            }`}>
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b pb-3 mb-4 border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-[11px] font-mono font-bold text-neutral-400 ml-2">
                    cs-academy-vibe-terminal ~ prompt-sw
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-red-950/60 text-[#DC2626] text-[10px] font-mono font-bold">
                  <span>LIVE SWAHILI AI</span>
                </div>
              </div>

              {/* Prompt Selector Tabs */}
              <div className="flex gap-1.5 mb-4 overflow-x-auto pb-1">
                {samplePrompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePromptIdx(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      activePromptIdx === idx
                        ? 'bg-[#B91C1C] text-white shadow-sm'
                        : theme === 'dark' ? 'bg-[#1E1E1E] text-neutral-400 hover:text-white' : 'bg-white text-neutral-700 hover:text-neutral-900 border border-neutral-200'
                    }`}
                  >
                    {language === 'sw' ? p.titleSw : p.titleEn}
                  </button>
                ))}
              </div>

              {/* Prompt Code Block */}
              <div className={`p-4 rounded-2xl border font-mono text-xs mb-3 space-y-2 ${
                theme === 'dark' ? 'bg-[#0B0B0B] border-neutral-800 text-neutral-200' : 'bg-white border-neutral-200 text-neutral-900'
              }`}>
                <div className="flex items-center justify-between text-[11px] text-neutral-400 border-b border-neutral-800/60 pb-1.5">
                  <span className="text-[#DC2626] font-bold">User Input (Maelekezo kwa Kiswahili):</span>
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-[10px] hover:text-white text-neutral-400"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <p className="leading-relaxed text-xs">
                  "{samplePrompts[activePromptIdx].prompt}"
                </p>
              </div>

              {/* Simulated AI Output */}
              <div className={`p-4 rounded-2xl border font-mono text-xs space-y-1.5 ${
                theme === 'dark' 
                  ? 'bg-red-950/20 border-red-900/40 text-neutral-200' 
                  : 'bg-red-50 border-red-200 text-neutral-800'
              }`}>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>CS Academy AI Model Output</span>
                </div>
                <p className="text-xs leading-relaxed">
                  {language === 'sw' ? samplePrompts[activePromptIdx].responseSw : samplePrompts[activePromptIdx].responseEn}
                </p>
              </div>

            </div>

            {/* Inclusive Topics Pill Grid */}
            <div className={`border rounded-2xl p-5 ${
              theme === 'dark' ? 'bg-[#141414] border-neutral-800' : 'bg-neutral-50 border-neutral-200'
            }`}>
              <div className={`text-xs font-mono font-bold uppercase mb-3 ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                {language === 'sw' ? 'Nyanja Zinazofundishwa' : 'Core Focus Tracks'}
              </div>
              <div className="flex flex-wrap gap-2">
                {topics.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
                        theme === 'dark'
                          ? 'bg-[#0B0B0B] border-neutral-800 text-neutral-300 hover:text-white'
                          : 'bg-white border-neutral-200 text-neutral-700 hover:text-neutral-900 shadow-sm'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 text-[#DC2626]" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
