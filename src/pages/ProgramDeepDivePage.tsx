import React from 'react';
import { PageRoute } from '../types';
import { programsData } from '../data/programs';
import { useApp } from '../context/AppContext';
import { SEO } from '../components/SEO';
import { ShareButtons } from '../components/ShareButtons';
import { useTranslation } from 'react-i18next';
import {
  ShieldCheck, 
  Laptop, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Users,
  ArrowLeft,
  Calendar,
  Sparkles
} from 'lucide-react';

interface ProgramDeepDivePageProps {
  slug: string;
  setCurrentRoute: (route: PageRoute) => void;
  openBookingModal: (prefill?: { program?: string; format?: string }) => void;
}

export const ProgramDeepDivePage: React.FC<ProgramDeepDivePageProps> = ({
  slug,
  setCurrentRoute,
  openBookingModal
}) => {
  const { theme } = useApp();
  const { t, i18n } = useTranslation();
  const program = programsData.find(p => p.slug === slug) || programsData[0];
  const isSwahili = i18n.language === 'sw';

  // Helper to get translated content from data file via Localized Property Pattern (LPP)
  const getProgramContent = () => {
    return {
      title: isSwahili && program.title_sw ? program.title_sw : program.title,
      badge: isSwahili && program.badge_sw ? program.badge_sw : program.badge,
      tagline: isSwahili && program.tagline_sw ? program.tagline_sw : program.tagline,
      description: isSwahili && program.description_sw ? program.description_sw : program.description,
      extendedDescription: isSwahili && program.extendedDescription_sw ? program.extendedDescription_sw : program.extendedDescription,
      audience: isSwahili && program.audience_sw ? program.audience_sw : program.audience,
      topics: isSwahili && program.topics_sw ? program.topics_sw : program.topics,
      outcomes: isSwahili && program.outcomes_sw ? program.outcomes_sw : program.outcomes,
      durationOptions: isSwahili && program.durationOptions_sw ? program.durationOptions_sw : program.durationOptions,
      modules: isSwahili && program.modules_sw ? program.modules_sw : program.modules
    };
  };

  const content = getProgramContent();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-[var(--accent-red-strong)]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[var(--accent-red-strong)]" />;
      case 'Laptop':
        return <Laptop className="w-8 h-8 text-[var(--accent-red-strong)]" />;
      default:
        return <Laptop className="w-8 h-8 text-[var(--accent-red-strong)]" />;
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SEO
        title={`${content.title} | ${content.tagline}`}
        description={content.extendedDescription}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Back Link & Share */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button
            onClick={() => {
              setCurrentRoute('programs');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('common.backToPrograms')}</span>
          </button>

          <ShareButtons
            title={`CS Academy: ${content.title} (${content.tagline})`}
            description={content.extendedDescription}
            variant="compact"
          />
        </div>

        {/* Hero Banner */}
        <div className="rounded-[2rem] p-8 sm:p-14 shadow-2xl relative overflow-hidden transition-colors glass-card border-[var(--border-color)]">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[var(--accent-red-subtle)] border border-[var(--accent-red-strong)]/20 text-[var(--accent-red-strong)]">
                <span>{content.badge}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
                {content.title}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-[var(--text-secondary)]">
                {content.tagline}
              </p>
              <p className="text-sm sm:text-base leading-relaxed max-w-2xl text-[var(--text-secondary)]">
                {content.extendedDescription}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  id={`btn-deepdive-book-${program.slug}`}
                  onClick={() => openBookingModal({ program: content.title })}
                  className="px-8 py-4 rounded-xl font-extrabold text-xs text-white bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] active:scale-[0.98] uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{`${t('booking.inquireBook')} ${content.title}`}</span>
                </button>
                <button
                  onClick={() => openBookingModal({ program: `${content.title} - Custom Corporate In-House` })}
                  className="px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-primary)] hover:bg-[var(--bg-tertiary)] shadow-sm"
                >
                  {t('deepDive.requestProposal')}
                </button>
              </div>

              {/* Social Share Bar inside Hero */}
              <div className="pt-4 border-t border-[var(--border-color)]">
                <ShareButtons
                  title={`Jifunze ${content.title} na CS Academy: ${content.tagline}`}
                  description={content.extendedDescription}
                  variant="inline"
                />
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-52 h-52 rounded-3xl border border-[var(--border-color)] flex flex-col items-center justify-center p-6 text-center shadow-xl bg-[var(--bg-primary)]">
                {getIcon(program.icon)}
                <span className="text-xs font-bold mt-4 text-[var(--text-primary)]">{content.title}</span>
                <span className="text-[10px] font-mono mt-1 text-[var(--text-muted)]">CS Academy Pillar</span>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Curriculum Syllabus Breakdown */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
              {t('deepDive.syllabusTitle')}
            </h2>
            <p className="text-sm text-[var(--text-muted)]">
              {t('deepDive.syllabusSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.modules.map((mod: any, idx: number) => (
              <div
                key={idx}
                className="p-6 rounded-[2rem] border space-y-3 shadow-lg flex flex-col justify-between transition-all glass-card border-[var(--border-color)] hover:border-[var(--accent-red-strong)]/30"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded border text-[var(--accent-red-strong)] bg-[var(--accent-red-subtle)] border-[var(--accent-red-strong)]/20">
                    {t('deepDive.moduleLabel')} {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-[var(--text-primary)]">{mod.title}</h3>
                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{mod.description}</p>
                </div>
                <div className="p-3 rounded-xl border text-xs flex items-start gap-2 bg-[var(--bg-primary)] border-[var(--border-color)] text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-red-strong)] shrink-0 mt-0.5" />
                  <span><strong>{t('deepDive.handsOnOutput')}:</strong> {mod.practicalSkill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audience & Delivery Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Who is it for */}
          <div className="p-8 rounded-[2rem] border space-y-4 glass-card border-[var(--border-color)]">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent-red-strong)] uppercase font-mono">
              <Users className="w-4 h-4" />
              <span>{t('deepDive.targetAudience')}</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              {t('deepDive.whoShouldTake')}
            </h3>
            <div className="space-y-2">
              {content.audience.map((aud: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm p-2.5 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] bg-[var(--bg-primary)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-red-strong)]" />
                  <span>{aud}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery & Formats */}
          <div className="p-8 rounded-[2rem] border space-y-4 glass-card border-[var(--border-color)]">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent-red-strong)] uppercase font-mono">
              <Clock className="w-4 h-4" />
              <span>{t('deepDive.formatOptions')}</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              {t('deepDive.flexibleScheduling')}
            </h3>
            <div className="space-y-2">
              {content.durationOptions.map((dur: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm p-2.5 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] bg-[var(--bg-primary)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-red-strong)]"></span>
                  <span>{dur}</span>
                </div>
              ))}
            </div>
            <p className="text-xs pt-2 text-[var(--text-muted)]">
              {t('deepDive.formatNote')}
            </p>
          </div>
        </div>

        {/* Bottom Booking CTA Banner */}
        <div className="p-8 sm:p-12 rounded-[2rem] border text-center space-y-5 glass-card border-[var(--border-color)] bg-gradient-to-r from-[var(--accent-red-subtle)] via-[var(--bg-tertiary)] to-[var(--accent-red-subtle)]">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
            {t('deepDive.readyToEnroll', { title: content.title })}
          </h3>
          <p className="text-sm max-w-xl mx-auto text-[var(--text-secondary)]">
            {t('deepDive.inquireNote')}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3">
            <button
              onClick={() => openBookingModal({ program: content.title })}
              className="px-8 py-4 rounded-xl font-extrabold text-xs text-white bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] active:scale-[0.98] uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all"
            >
              <span>{t('deepDive.inquireBook')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>


      </div>
    </div>
  );
};
