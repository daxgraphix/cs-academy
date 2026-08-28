import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  Building2, 
  Users
} from 'lucide-react';

export const AudienceStrip: React.FC = () => {
  const { theme, t } = useApp();

  const audiences = [
    { label: t('audienceStrip.audiences.students', { defaultValue: 'STUDENTS' }), icon: GraduationCap },
    { label: t('audienceStrip.audiences.educators', { defaultValue: 'EDUCATORS' }), icon: BookOpen },
    { label: t('audienceStrip.audiences.businesses', { defaultValue: 'BUSINESSES' }), icon: Briefcase },
    { label: t('audienceStrip.audiences.universities', { defaultValue: 'UNIVERSITIES' }), icon: Building2 },
    { label: t('audienceStrip.audiences.organizations', { defaultValue: 'ORGANIZATIONS' }), icon: Users }
  ];

  return (
    <section 
      id="trust-audience-strip" 
      className="border-y py-16 transition-colors duration-300 relative overflow-hidden bg-[var(--bg-secondary)] border-[var(--border-color)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,59,48,0.05),transparent_70%)] animate-pulse" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Label */}
          <div className="text-center lg:text-left space-y-2 max-w-md animate-reveal">
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[var(--text-muted)] opacity-70">
              {t('audienceStrip.title', { defaultValue: 'PRACTICAL LEARNING FOR THE DIGITAL GENERATION ACROSS AFRICA' })}
            </span>
            <div className="h-px w-12 bg-[var(--accent-red-safe)] mx-auto lg:mx-0 mt-2" />
          </div>

          {/* Audience Pill Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-reveal-delay-2">
            {audiences.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="group flex items-center gap-2.5 px-5 py-2.5 rounded-2xl text-[11px] font-extrabold tracking-widest border transition-all duration-300 bg-[var(--bg-primary)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-red-safe)]/40 hover:shadow-lg hover:shadow-[var(--accent-red-subtle)] hover:-translate-y-1 hover-icon-bounce"
                >
                  <Icon className="w-4 h-4 text-[var(--accent-red-safe)] icon-glow" />
                  <span className="uppercase">{item.label}</span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
