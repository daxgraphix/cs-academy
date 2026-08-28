import React from 'react';
import { siteConfig } from '../config/site';
import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Quote,
  GraduationCap,
  MapPin
} from 'lucide-react';

interface AboutSectionProps {
  openBookingModal: (prefill?: { program?: string }) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  openBookingModal
}) => {
  const { theme, t } = useApp();
  const contentRef = useReveal<HTMLDivElement>();
  const statsRef = useReveal<HTMLDivElement>();

  const stats = [
    { value: siteConfig.stats.learnersTrained, label: t('about.stats.learners', { defaultValue: 'Learners Trained' }) },
    { value: siteConfig.stats.institutionsServed, label: t('about.stats.institutions', { defaultValue: 'Institutions Served' }) },
    { value: siteConfig.stats.hoursDelivered, label: t('about.stats.hours', { defaultValue: 'Hours Delivered' }) },
    { value: siteConfig.stats.satisfactionRate, label: t('about.stats.satisfaction', { defaultValue: 'Satisfaction Rate' }) },
  ];

  const values = [
    {
      title: t('about.values.accessibility.title', { defaultValue: 'Accessibility' }),
      description: t('about.values.accessibility.description', { defaultValue: 'Making digital education accessible through Swahili-first curricula, mobile money payments, and low-bandwidth channels.' })
    },
    {
      title: t('about.values.practicalValue.title', { defaultValue: 'Practical Value' }),
      description: t('about.values.practicalValue.description', { defaultValue: 'Focusing on real-world skills and tangible projects that directly improve employability and business outcomes.' })
    },
    {
      title: t('about.values.community.title', { defaultValue: 'Community' }),
      description: t('about.values.community.description', { defaultValue: 'Building an active, supportive network of tech learners and mentors across East Africa.' })
    },
    {
      title: t('about.values.innovation.title', { defaultValue: 'Innovation & Safety' }),
      description: t('about.values.innovation.description', { defaultValue: 'Equipping learners with forward-looking generative AI and cybersecurity tools with deep ethics and privacy built-in.' })
    }
  ];

  return (
    <section
      id="about-section"
      className="py-24 border-y transition-colors duration-300 relative bg-[var(--bg-secondary)] text-[var(--text-primary)] border-[var(--border-color)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,59,48,0.05),transparent_50%)]" />
      <div ref={contentRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20 animate-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-red-subtle)] border border-[var(--accent-red-safe)]/20 text-[var(--accent-red-strong)] text-xs font-mono font-bold uppercase tracking-wider icon-glow">
            <BookOpen className="w-4 h-4" />
            <span>{t('about.badge', { defaultValue: 'ABOUT CS ACADEMY' })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] text-balance">
            {t('about.title', { defaultValue: 'EMPOWERING EAST AFRICA WITH DIGITAL MASTERY' })}
          </h2>
          <div className="h-1 w-20 bg-[var(--accent-red-safe)] mx-auto rounded-full" />
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] max-w-2xl mx-auto opacity-90">
            {t('about.subtitle', { defaultValue: 'Our mission is to eliminate language and cost barriers so everyone can participate in the digital economy.' })}
          </p>
        </div>

        {/* 2-Column Story & Purpose */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">

          {/* Left Text (7 cols) */}
          <div className="lg:col-span-7 space-y-8 animate-reveal-delay-1">
            <div className="space-y-6 text-base leading-relaxed text-[var(--text-secondary)] opacity-90">
              <p>
                {t('about.storyP1', { defaultValue: 'CS Academy was founded to bridge the digital skills gap for learners across East and Central Africa. We believe that technical jargon and foreign languages should never be a barrier to mastering transformative technologies.' })}
              </p>
              <p>
                {t('about.storyP2', { defaultValue: 'We offer structured curricula in AI prompting, vibe coding, defensive cybersecurity, and workplace productivity, all delivered through flexible multi-channel formats.' })}
              </p>
            </div>

            {/* Core Values Badges */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-[1.5rem] border space-y-2 bg-[var(--bg-primary)] border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/30 transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  <div className="flex items-center gap-2 text-xs font-black text-[var(--accent-red-strong)] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-red-strong)] icon-glow" />
                    <span>{val.title}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-[var(--text-secondary)] font-medium opacity-80">{val.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                id="btn-work-with-academy"
                onClick={() => openBookingModal({ program: 'Web Development & Digital Skills Cohort' })}
                className="inline-flex items-center gap-3 px-10 py-5 text-xs font-black text-white bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] active:scale-[0.98] rounded-2xl shadow-xl shadow-[var(--accent-red-subtle)] uppercase tracking-widest transition-all group"
              >
                <span>{t('about.cta', { defaultValue: 'JOIN NEXT COHORT' })}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </button>
            </div>
          </div>

          {/* Right: Vision & Accessibility Card (5 cols) */}
          <div className="lg:col-span-5 border rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-2xl space-y-8 bg-[var(--bg-primary)] border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/40 transition-all duration-500 glass-card animate-reveal-delay-2">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent-red-strong)] to-[var(--bg-tertiary)] p-[1.5px] shadow-lg flex items-center justify-center overflow-hidden icon-glow group-hover:scale-110 transition-transform">
                <div className="w-full h-full rounded-[14px] flex items-center justify-center font-black text-lg bg-[var(--bg-primary)] text-[var(--text-primary)]">
                  <span className="text-[var(--accent-red-strong)]">C</span>S
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black text-[var(--text-primary)] tracking-tight">{siteConfig.shortName}</h3>
                <p className="text-[10px] font-bold font-mono text-[var(--text-muted)] tracking-widest uppercase opacity-70">{siteConfig.parentOrg} Tech Ecosystem</p>
              </div>
            </div>

            <div className="p-6 rounded-[1.5rem] border space-y-3 bg-[var(--bg-secondary)] border-[var(--border-color)] relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-red-subtle)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <span className="text-[10px] font-mono uppercase font-black text-[var(--accent-red-strong)] tracking-[0.2em]">
                  {t('about.visionLabel', { defaultValue: 'Our Vision' })}
                </span>
                <p className="text-sm leading-relaxed font-bold text-[var(--text-primary)] mt-2">
                  {t('about.visionText', { defaultValue: siteConfig.vision })}
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-2 text-sm text-[var(--text-secondary)] font-bold">
              <div className="flex items-center gap-3 group">
                <div className="w-6 h-6 rounded-full bg-[var(--accent-red-subtle)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-red-strong)]" />
                </div>
                <span className="opacity-90">{t('about.benefits.bilingual', { defaultValue: 'Curricula taught in clear Swahili & English' })}</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-6 h-6 rounded-full bg-[var(--accent-red-subtle)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-red-strong)]" />
                </div>
                <span className="opacity-90">{t('about.benefits.mobileMoney', { defaultValue: 'Instant mobile money integration (M-Pesa & Airtel)' })}</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-6 h-6 rounded-full bg-[var(--accent-red-subtle)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-red-strong)]" />
                </div>
                <span className="opacity-90">{t('about.benefits.community', { defaultValue: 'Active WhatsApp community of 1,200+ tech learners' })}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Impact Stats Row */}
        <div ref={statsRef} className="reveal-stagger grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-8 rounded-[2rem] border text-center bg-[var(--bg-primary)] border-[var(--border-color)] shadow-sm hover:shadow-xl hover:border-[var(--accent-red-safe)]/30 transition-all duration-500 group"
            >
              <div className="text-3xl sm:text-4xl font-black tracking-tighter text-[var(--accent-red-strong)] group-hover:scale-110 transition-transform duration-300 icon-glow">{stat.value}</div>
              <div className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)] opacity-70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Founder Profile */}
        <div className="rounded-[2rem] sm:rounded-[3rem] border p-6 sm:p-14 flex flex-col md:flex-row items-center gap-12 bg-[var(--bg-primary)] border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/40 transition-all duration-500 shadow-2xl glass-card group animate-reveal">
          <div className="shrink-0 relative">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-[var(--accent-red-strong)] to-[var(--bg-tertiary)] p-0.5 shadow-2xl group-hover:rotate-6 transition-transform duration-500">
              <div className="w-full h-full rounded-[1.9rem] sm:rounded-[2.4rem] bg-[var(--bg-tertiary)] flex items-center justify-center text-white text-4xl font-black shadow-inner">
                AR
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-2xl bg-[var(--accent-red-strong)] flex items-center justify-center text-white shadow-lg animate-bounce">
              <Quote className="w-6 h-6" />
            </div>
          </div>
          <div className="flex-1 space-y-5 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 justify-center md:justify-start">
              <h3 className="text-2xl font-black text-[var(--text-primary)] tracking-tight">
                {t('about.founder.name', { defaultValue: siteConfig.founder.name })}
              </h3>
              <span className="inline-flex items-center gap-2 self-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-[var(--accent-red-subtle)] border border-[var(--accent-red-safe)]/20 text-[var(--accent-red-strong)] icon-glow">
                <GraduationCap className="w-4 h-4" />
                {t('about.founder.badge', { defaultValue: 'Founder' })}
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              {siteConfig.founder.titles.map((title, i) => (
                <span key={i} className="px-3 py-1 rounded-full border border-[var(--border-color)] text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] bg-[var(--bg-secondary)]">{title}</span>
              ))}
            </div>
            <p className="text-base leading-relaxed text-[var(--text-secondary)] font-medium opacity-90 max-w-2xl">
              {t('about.founder.bio', { defaultValue: siteConfig.founder.bio })}
            </p>
            <div className="flex items-start gap-4 p-6 rounded-[1.5rem] border bg-[var(--bg-secondary)] border-[var(--border-color)] relative overflow-hidden group/quote">
              <div className="absolute inset-0 bg-[var(--accent-red-subtle)] opacity-0 group-hover/quote:opacity-10 transition-opacity" />
              <Quote className="w-6 h-6 text-[var(--accent-red-strong)] shrink-0 mt-1 opacity-50" />
              <p className="text-sm font-bold italic text-[var(--text-primary)] leading-relaxed">
                "{t('about.founder.quote', { defaultValue: siteConfig.founder.quote })}"
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-black uppercase tracking-widest text-[var(--accent-red-safe)]">
              <MapPin className="w-4 h-4 icon-glow" />
              <span>{siteConfig.location}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
