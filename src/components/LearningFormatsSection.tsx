import React from 'react';
import { learningFormatsData } from '../data/learningFormats';
import { useApp } from '../context/AppContext';
import { 
  Video, 
  MonitorPlay, 
  MessageSquare, 
  Mic, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Wifi, 
  Smartphone
} from 'lucide-react';

interface LearningFormatsSectionProps {
  openBookingModal: (prefill?: { format?: string; program?: string }) => void;
}

export const LearningFormatsSection: React.FC<LearningFormatsSectionProps> = ({
  openBookingModal
}) => {
  const { theme, currency, setCurrency, dictionary } = useApp();
  const t = dictionary ?? {} as typeof dictionary;

  const getFormatPrice = (format: typeof learningFormatsData[0]) => {
    if (currency === 'TSH') {
      return format.priceStartingTsh === 'Custom' 
        ? ('Custom Quote') 
        : `${format.priceStartingTsh} Tsh`;
    }
    if (currency === 'KES') {
      return format.priceStartingKes === 'Custom' 
        ? ('Custom Quote') 
        : `${format.priceStartingKes} KSh`;
    }
    return format.priceStartingUsd === 'Custom' 
      ? ('Custom Quote') 
      : `$${format.priceStartingUsd}`;
  };

  const getFormatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-5 h-5 text-[var(--accent-red-strong)]" />;
      case 'MonitorPlay':
        return <MonitorPlay className="w-5 h-5 text-[var(--accent-red-strong)]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-[var(--accent-red-strong)]" />;
      case 'Mic':
        return <Mic className="w-5 h-5 text-[var(--accent-red-strong)]" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-[var(--accent-red-strong)]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[var(--accent-red-strong)]" />;
      default:
        return <Video className="w-5 h-5 text-[var(--accent-red-strong)]" />;
    }
  };

  return (
    <section 
      id="learning-formats-section" 
      className="py-24 transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-xs font-mono font-bold uppercase tracking-wider">
            <span>{t.formats?.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            {t.formats?.title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            {t.formats?.subtitle}
          </p>

          {/* Currency Toggle */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="inline-flex items-center p-1 border border-[var(--border-color)] rounded-2xl bg-[var(--bg-tertiary)]">
              {(['TSH', 'KES', 'USD'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-mono font-bold tracking-wider transition-all ${
                    currency === curr 
                      ? 'bg-[var(--accent-red-strong)] text-white shadow-md'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {curr === 'TSH' ? 'TZS (Tsh)' : curr === 'KES' ? 'KES (KSh)' : 'USD ($)'}
                </button>
              ))}
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)]">
              <Smartphone className="w-3.5 h-3.5 text-[var(--success-strong)]" />
              <span>M-Pesa, Airtel Money, Cards accepted</span>
            </div>
          </div>
        </div>

        {/* 6 Formats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningFormatsData.map((format) => (
            <div
              key={format.id}
              id={`format-card-${format.id}`}
              className="glass-card rounded-[2rem] p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-lg group relative border-[var(--border-color)] hover:border-[var(--accent-red-strong)]/30"
            >
              <div className="space-y-4">
                
                {/* Header with Number, Icon and Bandwidth */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getFormatIcon(format.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-muted)]">
                    Channel {format.number}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-red-strong)] transition-colors">
                    {format.title}
                  </h3>
                  <div className="text-[11px] font-mono flex items-center gap-1.5 mt-1 text-[var(--text-muted)]">
                    <Wifi className="w-3 h-3 text-[var(--accent-red-strong)]" />
                    <span>{format.bandwidthLevel}</span>
                  </div>
                </div>

                {/* Price Box */}
                <div className="p-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] flex items-baseline justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase block text-[var(--text-muted)]">
                      Delivery Investment
                    </span>
                    <div className="text-xl font-black text-[var(--text-primary)]">
                      {getFormatPrice(format)}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-right max-w-[120px] leading-tight text-[var(--text-muted)]">
                    {format.pricingLabel}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                  {format.description}
                </p>

                {/* Best For Pill */}
                <div className="p-3 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60">
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-1 text-[var(--text-muted)]">
                    Ideal Audience:
                  </div>
                  <div className="text-xs leading-snug text-[var(--text-secondary)]">
                    {format.bestFor}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Key Channel Features:
                  </div>
                  {format.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-red-strong)] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card CTA */}
              <div className="mt-6 pt-4 border-t border-[var(--border-color)]">
                <button
                  id={`btn-request-format-${format.id}`}
                  onClick={() => openBookingModal({ 
                    format: format.title,
                    program: `Delivery Option: ${format.title} (${getFormatPrice(format)})`
                  })}
                  className="w-full py-3 px-4 text-xs font-bold rounded-xl flex items-center justify-center gap-2 uppercase tracking-wider transition-all shadow text-[var(--text-primary)] hover:text-white bg-[var(--bg-primary)] hover:bg-[var(--accent-red-strong)] border border-[var(--border-color)] hover:border-transparent"
                >
                  <span>{`Enroll in ${format.title}`}</span>
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
