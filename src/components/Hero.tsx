import React from 'react';
import { PageRoute } from '../types';
import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
import {
  ArrowRight,
  CheckCircle2,
  Smartphone
} from 'lucide-react';

interface HeroProps {
  setCurrentRoute: (route: PageRoute) => void;
  openBookingModal: (prefill?: { program?: string; format?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({
  setCurrentRoute,
  openBookingModal
}) => {
  const { theme, t } = useApp();
  const contentRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]"
    >
      <div className="absolute inset-0 opacity-90">
        <div className="absolute left-1/2 top-0 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[var(--accent-red)]/10 blur-[120px]" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-[var(--text-primary)]/5 blur-[90px]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_80%_60%_at_45%_40%,#000_55%,transparent_100%)] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] lg:leading-[0.9] font-black tracking-[-0.06em] break-words text-[var(--text-primary)] animate-reveal">
                <span className="text-gradient">
                  {t('hero.headlineMain', { defaultValue: 'Elite tech skills' })}
                </span>
                <span className="text-[var(--accent-red-safe)] block sm:inline">
                  {t('hero.headlineHighlight', { defaultValue: ' simplified' })}
                </span>
                <br className="hidden lg:block" />
                {t('hero.headlineEnd', { defaultValue: ' for work, business, and life.' })}
              </h1>

              <p className="max-w-2xl text-lg sm:text-xl leading-relaxed opacity-90 text-[var(--text-secondary)] animate-reveal-delay-1 text-balance">
                {t('hero.subheadline', { defaultValue: 'Master AI, Cybersecurity, and Web Development with Swahili-first instruction and local payment options like M-Pesa.' })}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-semibold text-[var(--text-muted)] animate-reveal-delay-2">
              <span className="inline-flex items-center gap-1.5 hover-icon-bounce"><CheckCircle2 className="h-3.5 w-3.5 text-[var(--success-safe)]" /> {t('hero.benefit1', { defaultValue: 'No prior experience required' })}</span>
              <span className="inline-flex items-center gap-1.5 hover-icon-bounce"><Smartphone className="h-3.5 w-3.5 text-[var(--accent-red-strong)]" /> {t('hero.benefit2', { defaultValue: 'Learn on phone or computer' })}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-reveal-delay-3">
              <button
                id="hero-primary-cta"
                onClick={() => openBookingModal()}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[var(--accent-red)] text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_18px_40px_rgba(255,59,48,0.35)] hover:-translate-y-0.5 hover:bg-[var(--accent-red-hover)] transition-all duration-200"
              >
                <span>{t('hero.ctaEnroll', { defaultValue: 'Enroll Now' })}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => {
                  setCurrentRoute('programs');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border text-sm font-bold uppercase tracking-[0.14em] transition-all duration-200 hover:-translate-y-0.5 border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"
              >
                <span>{t('hero.ctaExplore', { defaultValue: 'Explore Programs' })}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[var(--border-color)]">
              {[
                { key: 'stat1', defaultVal: '5,000+', defaultLabel: 'Students' },
                { key: 'stat2', defaultVal: '95%', defaultLabel: 'Success Rate' },
                { key: 'stat3', defaultVal: '50+', defaultLabel: 'Courses' },
                { key: 'stat4', defaultVal: '24/7', defaultLabel: 'Support' }
              ].map((item) => (
                <div key={item.key} className="pt-4">
                  <div className="text-2xl font-black tracking-[-0.05em] text-[var(--accent-red-safe)]">
                    {t(`hero.${item.key}Val`, { defaultValue: item.defaultVal })}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    {t(`hero.${item.key}Label`, { defaultValue: item.defaultLabel })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3 text-[var(--text-primary)]">
          {[
            { icon: CheckCircle2, key: 'feature1', text: 'Learn in English, Swahili, and your local language.' },
            { icon: Smartphone, key: 'feature2', text: 'Build real apps, automations, and digital skills fast.' },
            { icon: Smartphone, key: 'feature3', text: 'Work from anywhere with mobile-friendly, practical learning.' }
          ].map(({ icon: Icon, key, text }, idx) => (
            <div
              key={key}
              className={`flex items-start gap-3 rounded-[2rem] border p-5 border-[var(--border-color)] bg-[var(--bg-secondary)]/50 glass-card hover-icon-bounce animate-reveal-delay-${idx+1}`}
            >
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent-red-subtle)] text-[var(--accent-red-strong)] icon-glow">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {t(`hero.bottomFeature.${key}`, { defaultValue: text })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
