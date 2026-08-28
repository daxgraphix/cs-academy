import React, { useState } from 'react';
import { trainingPackagesData } from '../data/training';
import { useApp } from '../context/AppContext';
import { 
  Clock, 
  MapPin, 
  Users, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

interface TrainingPackagesProps {
  openBookingModal: (prefill?: { program?: string; duration?: string }) => void;
}

export const TrainingPackages: React.FC<TrainingPackagesProps> = ({
  openBookingModal
}) => {
  const { theme, t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'AI', 'Cybersecurity', 'Digital Skills', 'Executive', 'Institutional'];

  const filteredPackages = trainingPackagesData.filter((pkg) => {
    if (selectedCategory === 'ALL') return true;
    return pkg.category === selectedCategory;
  });

  return (
    <section 
      id="training-packages-section" 
      className="py-24 border-y transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)] border-[var(--border-color)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-red-subtle)] border border-[var(--accent-red-strong)]/20 text-[var(--accent-red-strong)] text-xs font-mono font-bold uppercase tracking-wider">
              <span>{t.packages.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              {t.packages.title}
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-secondary)]">
              {t.packages.subtitle}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 border rounded-2xl self-start md:self-auto overflow-x-auto max-w-full bg-[var(--bg-secondary)] border-[var(--border-color)] shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedCategory === cat 
                    ? 'bg-[var(--accent-red-strong)] text-white shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cat === 'ALL' ? ('ALL') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              id={`package-card-${pkg.id}`}
              className="border rounded-[2rem] p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-md group glass-card border-[var(--border-color)] hover:border-[var(--accent-red-strong)]/30"
            >
              <div className="space-y-4">
                
                {/* Badge & Title */}
                <div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border text-[var(--accent-red-strong)] bg-[var(--accent-red-subtle)] border-[var(--accent-red-strong)]/20">
                    {pkg.category} Track
                  </span>
                  <h3 className="text-xl font-extrabold tracking-tight mt-2 group-hover:text-[var(--accent-red-strong)] transition-colors text-[var(--text-primary)]">
                    {pkg.title}
                  </h3>
                  <p className="text-xs mt-1 leading-relaxed text-[var(--text-secondary)]">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Duration & Format Tags */}
                <div className="space-y-2 py-3 border-y text-xs border-[var(--border-subtle)] text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[var(--accent-red-strong)] shrink-0" />
                    <span className="text-[var(--text-muted)]">Duration:</span>
                    <span className="font-semibold">{pkg.durations.join('  |  ')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[var(--accent-red-strong)] shrink-0" />
                    <span className="text-[var(--text-muted)]">Format:</span>
                    <span className="font-semibold">{pkg.formats.join(' / ')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[var(--accent-red-strong)] shrink-0" />
                    <span className="text-[var(--text-muted)]">Target:</span>
                    <span className="font-semibold truncate">{pkg.targetAudience}</span>
                  </div>
                </div>

                {/* Key Deliverables / Outcomes */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Key Outcomes:
                  </span>
                  {pkg.keyOutcomes.slice(0, 3).map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-red-strong)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 mt-4 border-t border-[var(--border-color)]">
                <button
                  id={`btn-request-${pkg.id}`}
                  onClick={() => openBookingModal({ program: pkg.title, duration: pkg.durations[0] })}
                  className="w-full py-3 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all bg-[var(--bg-primary)] hover:bg-[var(--accent-red-strong)] text-[var(--text-secondary)] hover:text-white border border-[var(--border-color)] shadow-sm"
                >
                  <span>REQUEST PACKAGE DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
