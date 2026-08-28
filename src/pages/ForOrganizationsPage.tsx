import React from 'react';
import {
  corporateOfferingsData,
  industrySolutionsData,
  trainingProcessSteps
} from '../data/organizationIndustries';
import { trainingPackagesData } from '../data/training';
import { useApp } from '../context/AppContext';
import { SEO } from '../components/SEO';
import {
  Building2,
  ShieldCheck,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Store,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface ForOrganizationsPageProps {
  openBookingModal: (prefill?: { program?: string; organizationType?: string; duration?: string }) => void;
}

export const ForOrganizationsPage: React.FC<ForOrganizationsPageProps> = ({
  openBookingModal
}) => {
  const { theme, dictionary } = useApp();
  const t = dictionary ?? {} as typeof dictionary;

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[var(--accent-red-strong)]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[var(--accent-red-strong)]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[var(--accent-red-strong)]" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-[var(--accent-red-strong)]" />;
      case 'Store':
        return <Store className="w-5 h-5 text-[var(--accent-red-strong)]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[var(--accent-red-strong)]" />;
      default:
        return <Building2 className="w-5 h-5 text-[var(--accent-red-strong)]" />;
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SEO
        title={t.organizations.seo.title}
        description={t.organizations.seo.description}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[var(--accent-red-subtle)] border border-[var(--accent-red-strong)]/20 text-[var(--accent-red-strong)]">
            <span>{t.organizations.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
            {t.organizations.titlePart1} <span className="text-[var(--accent-red-safe)]">{t.organizations.titleHighlight}</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            {t.organizations.subtitle}
          </p>
          <div className="pt-2">
            <button
              onClick={() => openBookingModal({ program: 'Institutional / Corporate Workforce Proposal' })}
              className="px-8 py-3.5 rounded-xl font-extrabold text-xs text-white bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] active:scale-[0.98] uppercase tracking-wider shadow-lg inline-flex items-center gap-2 transition-all"
            >
              <span>{t.organizations.requestProposal}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Corporate Core Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corporateOfferingsData.map((item, idx) => {
            const localized = t.organizations.offerings[item.id as keyof typeof t.organizations.offerings];
            return (
              <div
                key={idx}
                className="p-6 rounded-[2rem] border space-y-4 flex flex-col justify-between shadow-xl glass-card border-[var(--border-color)] hover:border-[var(--accent-red-strong)]/30"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-[var(--accent-red-strong)] uppercase">
                    {localized.badge}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{localized.title}</h3>
                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{localized.description}</p>

                  <div className="space-y-1.5 pt-2">
                    {localized.points.map((pt: string, pIdx: number) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-red-strong)] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)]">
                  <button
                    onClick={() => openBookingModal({ program: localized.title, organizationType: localized.badge })}
                    className="w-full py-2.5 px-3 text-xs font-bold rounded-xl transition-all uppercase tracking-wider bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]"
                  >
                    {t.pricing.plans.corporate.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry-Specific Tailoring */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
              {t.organizations.sectors.title}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              {t.organizations.sectors.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySolutionsData.map((sol) => {
              const localized = t.organizations.industries[sol.id as keyof typeof t.organizations.industries];
              return (
                <div
                  key={sol.id}
                  className="p-6 rounded-[2rem] border space-y-4 shadow-lg flex flex-col justify-between glass-card border-[var(--border-color)] hover:border-[var(--accent-red-strong)]/30"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl border border-[var(--border-color)] flex items-center justify-center bg-[var(--bg-primary)]">
                      {getIndustryIcon(sol.icon)}
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{localized.name}</h3>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{localized.description}</p>

                    <div className="p-3 rounded-xl border border-[var(--border-color)] text-xs space-y-1 bg-[var(--bg-primary)] text-[var(--text-secondary)]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">{t.organizations.sectors.criticalNeeds}</span>
                      <ul className="space-y-1 text-[11px] list-disc list-inside pl-1 marker:text-[var(--accent-red-strong)] text-[var(--text-muted)]">
                        {localized.criticalNeeds.slice(0, 3).map((need: string, nIdx: number) => (
                          <li key={nIdx}>{need}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => openBookingModal({ program: `${localized.name} Customized Program`, organizationType: localized.name })}
                    className="w-full py-2.5 px-3 text-xs font-bold rounded-xl transition-all uppercase tracking-wider text-center text-[var(--accent-red-strong)] hover:text-white bg-[var(--bg-primary)] hover:bg-[var(--accent-red-strong)] border border-[var(--border-color)]"
                  >
                    {t.organizations.sectors.requestSyllabus.replace('{{name}}', localized.name)}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Training Packages */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
              {t.organizations.packages.title}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              {t.organizations.packages.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPackagesData.slice(0, 6).map((pkg) => (
              <div
                key={pkg.id}
                className="p-6 rounded-[2rem] border space-y-4 flex flex-col justify-between shadow-xl glass-card border-[var(--border-color)] hover:border-[var(--accent-red-strong)]/30"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-[var(--accent-red-strong)] uppercase">
                    {pkg.category} Package
                  </span>
                  <h3 className="text-lg font-extrabold text-[var(--text-primary)]">{pkg.title}</h3>
                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{pkg.tagline}</p>

                  <div className="space-y-1 text-xs pt-1 text-[var(--text-muted)]">
                    <div><strong className="text-[var(--text-primary)]">{t.organizations.packages.duration}</strong> {pkg.durations.join(' or ')}</div>
                    <div><strong className="text-[var(--text-primary)]">{t.organizations.packages.formats}</strong> {pkg.formats.join(', ')}</div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    {pkg.keyOutcomes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-red-strong)] shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)]">
                  <button
                    onClick={() => openBookingModal({ program: pkg.title, duration: pkg.durations[0] })}
                    className="w-full py-2.5 px-3 text-xs font-bold text-white bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] active:scale-[0.98] rounded-xl transition-colors uppercase tracking-wider"
                  >
                    {t.organizations.packages.selectTier}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Step How We Work */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
              {t.organizations.lifecycle.title}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              {t.organizations.lifecycle.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {trainingProcessSteps.map((step, idx) => {
              const localized = t.organizations.lifecycle.process[step.id as keyof typeof t.organizations.lifecycle.process];
              return (
                <div key={idx} className="p-5 rounded-[2rem] border space-y-2 glass-card border-[var(--border-color)]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[var(--accent-red-strong)]">{t.organizations.lifecycle.step} {step.step}</span>
                    <span className="text-[10px] uppercase font-bold font-mono text-[var(--text-muted)]">{localized.name}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)]">{localized.title}</h3>
                  <p className="text-xs leading-relaxed text-[var(--text-muted)]">{localized.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 sm:p-12 rounded-[2rem] border text-center space-y-5 glass-card border-[var(--border-color)]">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
            {t.organizations.cta.title}
          </h2>
          <p className="text-xs sm:text-sm max-w-xl mx-auto text-[var(--text-secondary)]">
            {t.organizations.cta.subtitle}
          </p>
          <div className="pt-2">
            <button
              onClick={() => openBookingModal({ program: 'Institutional Consultation & Customized Training Proposal' })}
              className="px-8 py-3.5 rounded-xl font-extrabold text-xs text-white bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] active:scale-[0.98] uppercase tracking-wider shadow-lg"
            >
              {t.organizations.cta.button}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
