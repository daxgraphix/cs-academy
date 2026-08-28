import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { platformFeaturesData } from '../data/platformFeatures';
import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
import {
  Video,
  CheckSquare,
  Award,
  ShoppingBag,
  Radio,
  Gift,
  ArrowRight,
  CheckCircle2,
  QrCode,
  Users,
  Building2,
  Layers,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { PlatformFeature } from '../types';

interface PlatformFeaturesSectionProps {
  openBookingModal: (prefill?: { program?: string }) => void;
}

export const PlatformFeaturesSection: React.FC<PlatformFeaturesSectionProps> = ({
  openBookingModal
}) => {
  const { theme } = useApp();
  const { t } = useTranslation();
  const [activeFeatureId, setActiveFeatureId] = useState<string>('quizzes-assessment');
  const contentRef = useReveal<HTMLDivElement>();

  const getFeatureIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Video':
        return <Video className={className} />;
      case 'CheckSquare':
        return <CheckSquare className={className} />;
      case 'Award':
        return <Award className={className} />;
      case 'ShoppingBag':
        return <ShoppingBag className={className} />;
      case 'Radio':
        return <Radio className={className} />;
      case 'Gift':
        return <Gift className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'Building2':
        return <Building2 className={className} />;
      case 'Layers':
        return <Layers className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      default:
        return <Award className={className} />;
    }
  };

  const renderFeatureVisual = (feature: PlatformFeature) => {
    if (feature.id === 'quizzes-assessment') {
      return (
        <div className="space-y-3">
          <div className="p-5 rounded-[1.5rem] sm:rounded-[2rem] border border-[var(--border-color)] space-y-3 bg-[var(--bg-tertiary)] glass-card">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[var(--accent-red-strong)]">Module 3: AI & Prompting</span>
              <span className="font-mono text-[var(--text-muted)]">10/10 Score</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)]">Question: Which core pillar best describes the S.M.A.R.T. framework used at CS Academy?</p>
            <div className="space-y-1 text-xs">
              <div className="p-2.5 rounded-xl bg-[var(--success-subtle)] border border-[var(--success-safe)]/20 text-[var(--success-strong)] flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>A. Structure - Solid context scaffolding (Correct)</span>
              </div>
            </div>
          </div>
          <div className="text-[11px] text-center text-[var(--text-muted)]">
            Instant auto-scoring with explanations
          </div>
        </div>
      );
    }

    if (feature.id === 'pdf-certificates') {
      return (
        <div className="p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-[var(--border-color)] space-y-4 text-center bg-[var(--bg-tertiary)] glass-card">
          <div className="w-14 h-14 mx-auto rounded-2xl border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-red-safe)] bg-[var(--bg-primary)]">
            <QrCode className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">Certificate of Completion</h4>
            <p className="text-[11px] text-[var(--text-muted)]">Awarded to Learner  |  CS Academy</p>
          </div>
          <div className="p-2.5 rounded-xl text-[10px] font-mono border border-[var(--success-safe)]/20 bg-[var(--success-subtle)] text-[var(--success-strong)]">
            VERIFIED ID: CSA-2026-8942
          </div>
        </div>
      );
    }

    if (feature.id === 'digital-shop') {
      return (
        <div className="space-y-3">
          <div className="p-4 rounded-[1.5rem] border border-[var(--border-color)] flex items-center justify-between bg-[var(--bg-tertiary)] glass-card">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-4 h-4 text-[var(--accent-red-safe)]" />
              <span className="text-xs font-bold text-[var(--text-primary)]">50+ Prompt Packs</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20">FREE in Premium</span>
          </div>
          <div className="p-4 rounded-[1.5rem] border border-[var(--border-color)] flex items-center justify-between bg-[var(--bg-tertiary)] glass-card">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-4 h-4 text-[var(--accent-red-safe)]" />
              <span className="text-xs font-bold text-[var(--text-primary)]">Web Starter UI Kit (React)</span>
            </div>
            <span className="text-[10px] font-bold text-[var(--success-strong)] bg-[var(--success-subtle)] px-2 py-0.5 rounded-lg border border-[var(--success-safe)]/20">FREE in Premium</span>
          </div>
        </div>
      );
    }

    return (
      <div className="p-7 rounded-[2rem] border border-[var(--border-color)] text-center space-y-4 bg-[var(--bg-tertiary)] glass-card">
        <div className="w-14 h-14 mx-auto rounded-2xl border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-red-safe)] bg-[var(--bg-primary)]">
          {getFeatureIcon(feature.icon, "w-7 h-7")}
        </div>
        <h4 className="text-sm font-bold text-[var(--text-primary)]">{feature.title}</h4>
        <p className="text-xs text-[var(--text-secondary)]">{feature.shortDescription}</p>
      </div>
    );
  };

  const toggleFeature = (id: string) => {
    setActiveFeatureId((prev) => (prev === id ? '' : id));
  };

  return (
    <section 
      id="platform-features" 
      className="py-24 border-b border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300"
    >
      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 reveal">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-red-subtle)] border border-[var(--accent-red-safe)]/20 text-[var(--accent-red-strong)] text-xs font-mono font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-red)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-red)]"></span>
            </span>
            <span>{t('features.badge', { defaultValue: 'Platform Features' })}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
            {(
              <>
                {t('features.titlePart1', { defaultValue: 'EVERYTHING YOU NEED TO ' })}
                <span className="text-[var(--accent-red-safe)]">{t('features.titleHighlight', { defaultValue: 'SUCCEED' })}</span>
              </>
            )}
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-[var(--text-secondary)]">
            {t('features.subtitle', { defaultValue: 'Tap any capability below to expand and see exactly how it helps you learn, build, and grow.' })}
          </p>
        </div>

        {/* Expandable Feature Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {platformFeaturesData.map((feature) => {
            const isOpen = activeFeatureId === feature.id;
            const featureTitle = t(`features.items.${feature.id}.title`, { defaultValue: feature.title });
            const featureBadge = t(`features.items.${feature.id}.badge`, { defaultValue: feature.badge });
            const featureShortDesc = t(`features.items.${feature.id}.shortDesc`, { defaultValue: feature.shortDescription });
            const featureFullDesc = t(`features.items.${feature.id}.fullDesc`, { defaultValue: feature.fullDescription });

            return (
              <div
                key={feature.id}
                id={`feature-${feature.id}`}
                className={`border rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden transition-all duration-500 group ${
                  isOpen
                    ? 'bg-[var(--bg-secondary)] border-[var(--accent-red-safe)]/50 shadow-2xl glass-card'
                    : 'bg-[var(--bg-secondary)]/50 border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFeature(feature.id)}
                  aria-expanded={isOpen}
                  aria-controls={`feature-panel-${feature.id}`}
                  className="w-full p-6 sm:p-8 flex items-center justify-between gap-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-red)]"
                >
                  <div className="flex items-center gap-6 min-w-0">
                    <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? 'bg-[var(--accent-red)] text-white shadow-lg shadow-[var(--accent-red)]/20'
                        : 'bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-[var(--accent-red-safe)]'
                    }`}>
                      {getFeatureIcon(feature.icon, "w-7 h-7")}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)]">
                          {featureTitle}
                        </h3>
                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border border-[var(--border-subtle)] text-[var(--text-muted)] bg-[var(--bg-primary)]">
                          {featureBadge}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base leading-relaxed mt-1.5 text-[var(--text-secondary)]">
                        {featureShortDesc}
                      </p>
                    </div>
                  </div>
                  <div className={`w-10 h-10 rounded-full border border-[var(--border-subtle)] flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-[var(--accent-red)] border-[var(--accent-red)] text-white' : 'text-[var(--text-muted)] group-hover:text-[var(--text-primary)]'
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`feature-panel-${feature.id}`}
                    role="region"
                    className="px-6 sm:px-8 pb-8 pt-2 border-t border-[var(--border-color)] animate-[fadeIn_0.3s_ease-out]"
                  >
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <p className="text-base leading-relaxed text-[var(--text-secondary)]">
                            {featureFullDesc}
                          </p>

                          {feature.swahiliNote && (
                            <div className="p-4 rounded-2xl bg-[var(--accent-red-subtle)] border-l-4 border-[var(--accent-red-safe)]">
                              <p className="text-sm italic text-[var(--text-primary)]">
                                {t(`features.items.${feature.id}.swahiliNote`, { defaultValue: feature.swahiliNote })}
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="grid sm:grid-cols-1 gap-3">
                          {feature.points.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-tertiary)]/50">
                              <CheckCircle2 className="w-5 h-5 text-[var(--accent-red-strong)] shrink-0 mt-0.5" />
                              <span className="text-sm leading-snug text-[var(--text-secondary)]">
                                {t(`features.items.${feature.id}.points.${idx}`, { defaultValue: point })}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4">
                          <button
                            onClick={() => openBookingModal({ program: `Enroll via ${feature.title}` })}
                            className="btn-primary w-full sm:w-auto"
                          >
                            <span>{t('features.getStartedWith', { defaultValue: 'Get Started with {{feature}}', feature: featureTitle })}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="relative group/visual">
                        <div className="absolute -inset-4 bg-[var(--accent-red)]/5 rounded-[3rem] blur-2xl transition-opacity duration-500 opacity-0 group-hover/visual:opacity-100"></div>
                        <div className="relative">
                          {renderFeatureVisual(feature)}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
