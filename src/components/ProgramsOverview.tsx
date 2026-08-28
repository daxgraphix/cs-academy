import React from 'react';
import { PageRoute, ProgramPillar } from '../types';
import { programsData } from '../data/programs';
import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
import {
  ShieldCheck,
  Laptop,
  ArrowRight,
  CheckCircle,
  Layers,
  BookOpen
} from 'lucide-react';

interface ProgramsOverviewProps {
  setCurrentRoute: (route: PageRoute) => void;
  openProgramModal: (program: ProgramPillar) => void;
  openBookingModal: (prefill?: { program?: string }) => void;
}

export const ProgramsOverview: React.FC<ProgramsOverviewProps> = ({
  setCurrentRoute,
  openProgramModal,
  openBookingModal
}) => {
  const { theme, t } = useApp();
  const gridRef = useReveal<HTMLDivElement>();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Laptop className="w-6 h-6 text-[var(--accent-red)]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[var(--accent-red)]" />;
      default:
        return <Laptop className="w-6 h-6 text-[var(--accent-red)]" />;
    }
  };

  const handlePillarNavigation = (slug: string) => {
    const route = `programs/${slug}` as PageRoute;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      id="programs-section" 
      className="py-24 transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--accent-red-safe)]/30 bg-[var(--accent-red-subtle)] text-[var(--accent-red-strong)] text-[10px] font-bold uppercase tracking-[0.22em]">
            <span>{t('programsSection.badge', { defaultValue: 'OUR PROGRAMS' })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.06em] text-[var(--text-primary)]">
            {t('programsSection.title', { defaultValue: 'World-class skills for the East African context.' })}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            {t('programsSection.subtitle', { defaultValue: 'Select a specialized academy to build your future. We offer practical, high-impact training designed for students, professionals, and organizations.' })}
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
          {programsData.map((pillar) => {
            const pillarTitle = t(`programs.${pillar.slug}.title`, { defaultValue: pillar.title });
            const pillarBadge = t(`programs.${pillar.slug}.badge`, { defaultValue: pillar.badge });
            const pillarTagline = t(`programs.${pillar.slug}.tagline`, { defaultValue: pillar.tagline });
            const pillarDescription = t(`programs.${pillar.slug}.description`, { defaultValue: pillar.description });
            const pillarOutcome = t(`programs.${pillar.slug}.outcome1`, { defaultValue: pillar.outcomes[0] });
            const pillarCta = t(`programs.${pillar.slug}.cta`, { defaultValue: pillar.ctaText });

            return (
            <div
              key={pillar.id}
              id={`card-${pillar.id}`}
              className="group relative overflow-hidden rounded-[2rem] border p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl glass-card border-[var(--border-color)] shadow-[var(--shadow-lg)] hover:border-[var(--accent-red-safe)]/40"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--accent-red-subtle),transparent_40%)] opacity-70" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--accent-red-safe)]/30 bg-[var(--accent-red-subtle)] transition-transform group-hover:scale-105">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1.5 rounded-full border bg-[var(--bg-primary)] border-[var(--border-subtle)] text-[var(--text-secondary)]">
                    {pillarBadge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-[-0.05em] mb-2 group-hover:text-[var(--accent-red-safe)] transition-colors text-[var(--text-primary)]">
                    {pillarTitle}
                  </h3>
                  <p className="text-sm font-semibold text-[var(--text-secondary)]">
                    {pillarTagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    {pillarDescription}
                  </p>
                </div>

                <div>
                  <div className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    <Layers className="w-3.5 h-3.5 text-[var(--accent-red-strong)]" />
                    <span>{t('programsSection.curriculumFocus', { defaultValue: 'Curriculum Focus' })}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pillar.topics.slice(0, 6).map((topic, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-secondary)]"
                      >
                        {t(`programs.${pillar.slug}.topics.${i}`, { defaultValue: topic })}
                      </span>
                    ))}
                    {pillar.topics.length > 6 && (
                      <span className="text-[11px] font-medium px-2.5 py-1.5 rounded-full bg-[var(--bg-primary)] text-[var(--text-muted)]">
                        +{pillar.topics.length - 6} {t('common.more', { defaultValue: 'more' })}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-[var(--border-color)]">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    {t('programsSection.outcomeLabel', { defaultValue: 'Key Practical Outcome:' })}
                  </div>
                  <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--accent-red-strong)] shrink-0 mt-0.5" />
                    <span>{pillarOutcome}</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-8 pt-5 border-t flex flex-col gap-3 border-[var(--border-color)]">
                <button
                  id={`btn-explore-${pillar.slug}`}
                  onClick={() => handlePillarNavigation(pillar.slug)}
                  className="w-full py-3.5 px-4 text-[11px] font-black uppercase tracking-[0.18em] text-white bg-[var(--accent-red)] hover:-translate-y-0.5 hover:bg-[var(--accent-red-hover)] rounded-full flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_18px_40px_rgba(255,59,48,0.3)]"
                >
                  <span>{pillarCta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex gap-2">
                  <button
                    id={`btn-syllabus-${pillar.slug}`}
                    onClick={() => openProgramModal(pillar)}
                    className="flex-1 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.16em] border transition-all duration-200 hover:-translate-y-0.5 text-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] border-[var(--border-color)]"
                  >
                    {t('programsSection.viewSyllabus', { defaultValue: 'View Syllabus' })}
                  </button>
                  <button
                    id={`btn-book-pillar-${pillar.slug}`}
                    onClick={() => openBookingModal({ program: pillar.title })}
                    className="flex-1 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.16em] border transition-all duration-200 hover:-translate-y-0.5 text-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] border-[var(--border-color)]"
                  >
                    {t('common.enrollNow', { defaultValue: 'Enroll Now' })}
                  </button>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
