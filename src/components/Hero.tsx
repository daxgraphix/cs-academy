import React from 'react';
import { PageRoute } from '../types';
import { useApp } from '../context/AppContext';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Terminal,
  Star,
  MessageSquareText
} from 'lucide-react';

interface HeroProps {
  setCurrentRoute: (route: PageRoute) => void;
  openBookingModal: (prefill?: { program?: string; format?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({
  setCurrentRoute,
  openBookingModal
}) => {
  const { language, theme, t } = useApp();

  const steps = language === 'sw'
    ? [
      { number: '01', title: 'Eleza wazo', text: 'Eleza unachotaka kwa lugha rahisi.' },
      { number: '02', title: 'Jenga kwa AI', text: 'Tengeneza mwonekano, mantiki na mtiririko.' },
      { number: '03', title: 'Anza kutumia', text: 'Jenga ujuzi na bidhaa za matumizi halisi.' }
    ]
    : [
      { number: '01', title: 'Describe it', text: 'Explain your idea in plain language.' },
      { number: '02', title: 'Build with AI', text: 'Create the UI, logic, and product flow.' },
      { number: '03', title: 'Put it to work', text: 'Ship real apps and skills with confidence.' }
    ];

  return (
    <section
      id="hero-section"
      className={`relative pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#090909] text-white' : 'bg-[#f7f4ee] text-neutral-900'
      }`}
    >
      <div className="absolute inset-0 opacity-90">
        <div className="absolute left-1/2 top-0 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[#ff3b30]/10 blur-[120px]" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-white/5 blur-[90px]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_80%_60%_at_45%_40%,#000_55%,transparent_100%)] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-neutral-300'
                : 'bg-white/80 border-neutral-200 text-neutral-700'
            }`}>
              <span className="h-2 w-2 rounded-full bg-[#ff3b30]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]">{t.hero.badgeHighlight}</span>
            </div>

            <div className="space-y-5">
              <h1 className={`text-4xl sm:text-6xl lg:text-[5.2rem] lg:leading-[0.94] font-black tracking-[-0.06em] break-words ${
                theme === 'dark' ? 'text-white' : 'text-neutral-950'
              }`}>
                {t.hero.headlineMain}{' '}
                <span className="text-[#ff3b30]">{t.hero.headlineHighlight}</span>
                <br className="hidden sm:block" />
                {language === 'sw' ? 'kwa kazi, biashara na maisha.' : 'for work, business, and life.'}
              </h1>

              <p className={`max-w-xl text-lg leading-relaxed ${
                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                {t.hero.subheadline}
              </p>
            </div>

            <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-semibold ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> {language === 'sw' ? 'Huhitaji uzoefu wa awali' : 'No prior experience required'}</span>
              <span className="inline-flex items-center gap-1.5"><Smartphone className="h-3.5 w-3.5 text-[#ff3b30]" /> {language === 'sw' ? 'Jifunze kwa simu au kompyuta' : 'Learn on phone or computer'}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-primary-cta"
                onClick={() => openBookingModal()}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#ff3b30] text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_18px_40px_rgba(255,59,48,0.35)] hover:-translate-y-0.5 hover:bg-[#ff564d] transition-all duration-200"
              >
                <span>{t.hero.ctaEnroll}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => {
                  setCurrentRoute('programs');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border text-sm font-bold uppercase tracking-[0.14em] transition-all duration-200 hover:-translate-y-0.5 ${
                  theme === 'dark'
                    ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                    : 'border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                <span>{t.hero.ctaExplore}</span>
              </button>
            </div>

            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 ${
              theme === 'dark' ? 'border-t border-white/10' : 'border-t border-neutral-200'
            }`}>
              {[
                { value: t.hero.stat1Val, label: t.hero.stat1Label },
                { value: t.hero.stat2Val, label: t.hero.stat2Label },
                { value: t.hero.stat3Val, label: t.hero.stat3Label },
                { value: t.hero.stat4Val, label: t.hero.stat4Label }
              ].map((item) => (
                <div key={item.label} className="pt-4">
                  <div className="text-2xl font-black tracking-[-0.05em] text-[#ff3b30]">{item.value}</div>
                  <div className={`mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className={`relative w-full max-w-[520px] rounded-[2rem] border p-4 sm:p-5 shadow-[0_25px_80px_rgba(0,0,0,0.45)] ${
              theme === 'dark'
                ? 'bg-[#111111] border-white/10 text-white'
                : 'bg-[#fffdfb] border-neutral-200 text-neutral-900'
            }`}>
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(255,59,48,0.14),transparent_38%)]" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-300">
                    <Terminal className="h-3.5 w-3.5 text-[#ff3b30]" />
                    Speak.AI
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-[#ff3b30]/30 bg-[#ff3b30]/10 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff9e95]">
                    <span className="h-2 w-2 rounded-full bg-[#ff3b30] animate-pulse" />
                    Live
                  </div>
                </div>

                <div className={`rounded-[1.5rem] border p-4 shadow-inner ${
                  theme === 'dark' ? 'border-white/10 bg-[#0c0c0c]' : 'border-neutral-200 bg-neutral-100'
                }`}>
                  <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                    <MessageSquareText className="h-3.5 w-3.5 text-[#ff3b30]" />
                    Prompt
                  </div>

                  <div className={`rounded-2xl border border-[#ff3b30]/30 p-4 text-sm ${
                    theme === 'dark' ? 'bg-[#151515] text-neutral-200' : 'bg-white text-neutral-700'
                  }`}>
                    {language === 'sw' ? 'Nataka programu ya kufuatilia mauzo na bidhaa za duka langu la matunda.' : 'I want an app for my fruit stall to track sales and inventory.'}
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                      <span>{language === 'sw' ? 'Programu iliyojengwa' : 'Generated app'}</span>
                      <span>09:41</span>
                    </div>

                    <div className={`rounded-2xl border p-3 ${
                      theme === 'dark' ? 'border-white/10 bg-[#151515]' : 'border-neutral-200 bg-white'
                    }`}>
                      <div className={`mb-3 flex items-center gap-2 text-xs ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}`}>
                        <span className="h-2 w-2 rounded-full bg-[#ff3b30]" />
                        Fresh Market
                      </div>
                      <div className="space-y-2 text-xs text-neutral-400">
                        <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                          <span>{language === 'sw' ? 'Tikiti maji' : 'Watermelon'}</span>
                          <span>TZS 25/kg</span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                          <span>{language === 'sw' ? 'Machungwa' : 'Oranges'}</span>
                          <span>TZS 8/kg</span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                          <span>{language === 'sw' ? 'Maembe' : 'Mangoes'}</span>
                          <span>TZS 12/kg</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {steps.map((step) => (
                    <div key={step.number} className={`rounded-2xl border p-3 ${
                      theme === 'dark'
                        ? 'border-white/10 bg-white/5'
                        : 'border-neutral-200 bg-neutral-50'
                    }`}>
                      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff3b30]">{step.number}</div>
                      <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/90' : 'text-neutral-900'}`}>{step.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`mt-4 max-w-[220px] rounded-2xl border p-3 shadow-2xl sm:absolute sm:-left-4 sm:bottom-6 sm:mt-0 ${
              theme === 'dark'
                ? 'border-[#ff3b30]/30 bg-[#171515] text-white'
                : 'border-red-200 bg-white text-neutral-900'
            }`}>
              <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff3b30]">
                <ShieldCheck className="h-3.5 w-3.5" />
                AI + Safety
              </div>
              <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {language === 'sw' ? 'Mitaala yenye ulinzi wa data na matumizi salama.' : 'Built with safety and practical outcomes.'}
              </p>
            </div>
          </div>
        </div>

        <div className={`mt-14 grid gap-4 md:grid-cols-3 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
          {[
            { icon: CheckCircle2, text: 'Learn in English, Swahili, and your local language.' },
            { icon: Sparkles, text: 'Build real apps, automations, and digital skills fast.' },
            { icon: Smartphone, text: 'Work from anywhere with mobile-friendly, practical learning.' }
          ].map(({ icon: Icon, text }) => (
            <div key={text} className={`flex items-start gap-3 rounded-3xl border p-4 ${
              theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-neutral-200 bg-white/80'
            }`}>
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ff3b30]/10 text-[#ff3b30]">
                <Icon className="h-5 w-5" />
              </div>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-neutral-200' : 'text-neutral-700'}`}>{language === 'sw' ? text.replace('Learn in English, Swahili, and your local language.', 'Jifunze kwa Kiswahili, Kiingereza na lugha yako ya karibu.').replace('Build real apps, automations, and digital skills fast.', 'Jenga programu, otomatiki na ujuzi wa kidijitali haraka.').replace('Work from anywhere with mobile-friendly, practical learning.', 'Jifunze popote kupitia mafunzo rahisi kwa simu.') : text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
